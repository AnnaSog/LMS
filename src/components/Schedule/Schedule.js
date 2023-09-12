import React,{ useEffect, useState } from 'react';

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
    },[])

   console.log(lesson);

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

    let lessonElement = lesson.map(les => <div key={les.idLesson}> {les.date} {les.nameLesson}<br/> {les.timeStart} : {les.timeEnd} <br/> {les.progress}%</div>)

    return(
      <div>
      
        <div>
            {loading ? <div className='lessonPassed'> Loading...</div> : 
              <div className='lessonPassed'>{lessonElement}</div>
            } 
        </div>
        <div className='schedule'>
          <table className="clmonth" onClick={(e) => onOpenModal(e.target.id)} >
            <tr>
              <th className="time" scope="col"></th>
              <th id='2023-09-11' scope="col"> Пн <br/> <br/> 11.09 </th>
              <th id='2023-09-12' scope="col">Вт <br/> <br/> 12.09 </th>
              <th id='2023-09-13' scope="col">Ср <br/> <br/> 13.09 </th>
              <th id='2023-09-14' scope="col">Чт <br/> <br/> 14.09 </th>
              <th id='2023-09-15' scope="col">Пт <br/> <br/> 15.09 </th>
              <th id='2023-09-16' scope="col">Сб <br/> <br/> 16.09 </th>
              <th id='2023-09-17' scope="col">Вс <br/> <br/> 17.09 </th>
            </tr>
            <tr>
              <td className="time">8:00</td>
              <td className='col'> </td>
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
                {/* {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[3].idLesson} className='lessonPassed'> {lesson[3].nameLesson} <br/> {lesson[3].timeStart} : {lesson[3].timeEnd} <br/> {lesson[3].progress}%</div>
                } */}
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
                {/* {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[1].idLesson}className='lessonPassed'> {lesson[1].nameLesson} <br/> {lesson[1].timeStart} : {lesson[1].timeEnd} <br/> {lesson[1].progress}%</div>
                } */}
              </td>
              <td> 
                {/* {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[4].idLesson} className='lessonPassed'> {lesson[4].nameLesson} <br/> {lesson[4].timeStart} : {lesson[4].timeEnd} <br/> {lesson[4].progress}%</div>
                } */}
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
                {/* {loading ? <div className='lessonPassed'> Loading...</div> : 
                    <div id={lesson[2].idLesson} className='lessonPassed'> {lesson[2].nameLesson} <br/> {lesson[2].timeStart} : {lesson[2].timeEnd} <br/> {lesson[2].progress}% </div>
                } */}
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
                        <input className='lessonInput' name="name" required="" type="text" defaultValue={'lesson[0].nameLesson'}/>
                      <label>Дата проведения</label>
                        <input className='lessonInput' name="date" required=""  type="date" defaultValue={"lesson[0].date"}/>
                      <label>Начало урока </label>
                        <input className='lessonInput' name="timeStart" required=""  type="time" defaultValue={"lesson[0].timeStart"}/>
                      <label> Окончание урока </label>
                        <input className='lessonInput' name="timeEnd" required=""  type="time" defaultValue={"lesson[0].timeEnd"}/>
                      <label>Прогресс выполнения %</label>
                        <input className='lessonInput' name="progress" type="number" defaultValue={"lesson[0].progress"}/>
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
         </div>
    )
}
export default Schedule;


