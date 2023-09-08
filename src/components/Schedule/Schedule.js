import { useEffect, useState } from 'react';

import useService from '../../services/Service';

import './Schedule.css';

const Schedule = () => {
    const [lesson, setLesson] = useState([]);
    const [loading, setLoading] = useState(true);
    const {getAllLessons} = useService();
    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
  
    useEffect( () => {
      getLesson();
    },[lesson])
 
    const onUserLoaded = (lesson) => {   
      setLesson(lesson); 
      setLoading(false);
    }

    function getLesson(){
        if(!lesson){
            return 
        }
        getAllLessons()
            .then(onUserLoaded)    
    }
 

    // const res = lesson.map((les, i) => {
    //     const {nameLesson, date, timeStart, timeEnd} = les
    //     return <div key={i}  className='lessonFuture'> {nameLesson} <br/> </div> 
    // })
       
    let classNames = 'lessonModal';

    if(openModal){          
        classNames = 'open'; 
    
    }


    function onOpenModal(id){ 
        setOpenModal(!openModal)
        console.log(id);
    }

    function onCloseModal(){
        setCloseModal(!closeModal)
        setOpenModal(!openModal)   
    }

    return(
        <div className='schedule'>
          <table className="clmonth" onClick={(e) => onOpenModal(e.target.id)} >
            <tr>
              <th className="time" scope="col"></th>
              <th scope="col"> Пн <br/> <br/> 04 </th>
              <th scope="col">Вт <br/> <br/> 05</th>
              <th scope="col">Ср <br/> <br/> 06</th>
              <th scope="col">Чт <br/> <br/> 07</th>
              <th scope="col">Пт <br/> <br/> 08</th>
              <th scope="col">Сб <br/> <br/> 09</th>
              <th scope="col">Вс <br/> <br/> 10</th>
            </tr>
            <tr>
              <td className="time">8:00</td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">9:00</td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">10:00</td>
              <td> 
                {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[0].idLesson} className='lessonPassed'> {lesson[0].nameLesson} <br/> {lesson[0].timeStart} : {lesson[0].timeEnd} <br/> {lesson[0].progress}% </div>
                }
              </td>
              <td> 
                {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[3].idLesson} className='lessonPassed'> {lesson[3].nameLesson} <br/> {lesson[3].timeStart} : {lesson[3].timeEnd} <br/> {lesson[3].progress}%</div>
                }
              </td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">11:00</td>
              <td> 
                {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[1].idLesson}className='lessonPassed'> {lesson[1].nameLesson} <br/> {lesson[1].timeStart} : {lesson[1].timeEnd} <br/> {lesson[1].progress}%</div>
                }
              </td>
              <td> 
                {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[4].idLesson} className='lessonPassed'> {lesson[4].nameLesson} <br/> {lesson[4].timeStart} : {lesson[4].timeEnd} <br/> {lesson[4].progress}%</div>
                }
              </td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">12:00</td>
              <td> 
                {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[2].idLesson} className='lessonPassed'> {lesson[2].nameLesson} <br/> {lesson[2].timeStart} : {lesson[2].timeEnd} <br/> {lesson[2].progress}% </div>
                }
              </td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">13:00</td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
          </table>


          
          <div className={classNames} >
                <div onClick={onCloseModal} className="lessonClose">×</div>
                {loading ? 'Loading...' :
                <form className="lessonForm" action="#" >
                      <label >Предмет</label> 
                        <input className='lessonInput' name="name" required="" type="text" defaultValue={lesson[0].nameLesson}/>
                      <label>Дата проведения</label>
                        <input className='lessonInput' name="date" required=""  type="date" defaultValue={lesson[0].date}/>
                      <label>Начало урока </label>
                        <input className='lessonInput' name="timeStart" required=""  type="time" defaultValue={lesson[0].timeStart}/>
                      <label> Окончание урока </label>
                        <input className='lessonInput' name="timeEnd" required=""  type="time" defaultValue={lesson[0].timeEnd}/>
                      <label>Прогресс выполнения %</label>
                        <input className='lessonInput' name="progress" type="number" defaultValue={lesson[0].progress}/>
                      <label>Выполнено</label>
                        <label className='checkbox'><input className='checkboxInput' name="checkSuccessfully" type="checkbox" defaultValue={false}/></label>
                      <div className='buttons'>
                        <button className='updateBut' type="submit">Обновить урок</button>
                        <button className='deleteBut'>Удалить урок</button>  
                      </div>                   
                </form>
              } 
            </div>
        
        </div>
    )
}
export default Schedule;
