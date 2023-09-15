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

  //  console.log(lesson);

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

    // open/close Modal Lesson
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

    //get lesson
    //const lessonElement = lesson.map(les => <div key={les.idLesson}> {les.date} {les.nameLesson}<br/> {les.timeStart} : {les.timeEnd} <br/> {les.progress} % </div>)


    const eleventhDay = lesson.filter(les => {if(les.date === '2023-09-11') return les})
    const twelfthDay = lesson.filter(les => {if(les.date === '2023-09-12') return les})
    const thirteenthDay = lesson.filter(les => {if(les.date === '2023-09-13') return les})
    const fourteenthDay = lesson.filter(les => {if(les.date === '2023-09-14') return les})
    const fifteenthDay = lesson.filter(les => {if(les.date === '2023-09-15') return les})
    const sixteenthDay = lesson.filter(les => {if(les.date === '2023-09-16') return les})
    const seventeenthDay = lesson.filter(les => {if(les.date === '2023-09-17') return les})

    const dataLes = (les, i) => {
      return <div className='tdata' key={i} id={les.idLesson}> <span><b>{les.nameLesson} <br/>{les.timeStart} : {les.timeEnd} </b></span><br/>{les.topic} <br/>  {les.progress} % </div>
    }
    
    const eleventhDayData = eleventhDay.map((les, i) => { 
      return dataLes(les, i)
    })

    const twelfthDayData = twelfthDay.map((les, i) => { 
      return dataLes(les, i)
    })

    const thirteenthDayData = thirteenthDay.map((les, i) => { 
      return dataLes(les, i)
    })
   const fourteenthDayData = fourteenthDay.map((les, i) => { 
      return dataLes(les, i)
    })
    const fifteenthDayData = fifteenthDay.map((les, i) => { 
      return dataLes(les, i)
    })
    const sixteenthDayData = sixteenthDay.map((les, i) => { 
      return dataLes(les, i)
    })
    const seventeenthDayData = seventeenthDay.map((les, i) => { 
      return dataLes(les, i)
    })
     

    return(
      <div>
        {/* <div>
            {loading ? <div className='lessonPassed'> Loading...</div> : 
              <div className='lessonPassed'>{lessonElement}</div>
            } 
        </div>
        <br/> <br/>  */}

        <div className='schedule'>

          <div className='table' onClick={(e) => onOpenModal(e.target.id)}> 
            <div className='tableBody' >
              <div className='tableHead'>Пн <br/> <br/>11.09</div>
              {eleventhDayData}
            </div>
            <div className='tableBody'>
              <div className='tableHead'>Вт <br/> <br/>12.09</div>
              {twelfthDayData}
            </div>
            <div className='tableBody'>
              <div className='tableHead'>Ср <br/> <br/>13.09</div>
              {thirteenthDayData}
            </div>

            <div className='tableBody'>
              <div className='tableHead'>Чт <br/> <br/>14.09</div>
              {fourteenthDayData}
            </div>

            <div className='tableBody'>
              <div className='tableHead'>Пт <br/> <br/>15.09</div>
              {fifteenthDayData}
            </div>
            <div className='tableBody'>
              <div className='tableHead'>Сб <br/> <br/>16.09</div>
              {sixteenthDayData}
            </div>
            <div className='tableBody'>
              <div className='tableHead'>Вс <br/> <br/> 17.09</div>
              {seventeenthDayData}
            </div>

          </div>
          {/* <table className="clmonth"  >
          <thead className="time" >
            <tr>

                <th scope="col">Пн <br/> <br/> 11.09 </th>
                <th  scope="col">Вт <br/> <br/> 12.09 </th>
                <th  scope="col">Ср <br/> <br/> 13.09 </th>
                <th  scope="col">Чт <br/> <br/> 14.09 </th>
                <th  scope="col">Пт <br/> <br/> 15.09 </th>
                <th  scope="col">Сб <br/> <br/> 16.09 </th>
                <th  scope="col">Вс <br/> <br/> 17.09 </th>
              </tr>
          </thead>
            <tbody onClick={(e) => onOpenModal(e.target.id)}>


              <tr className='tdata'>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>

              <tr className='tdata'>
  
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>

              <tr className='tdata'>

                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>

              <tr className='tdata'>

                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>

              <tr className='tdata'>
            
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>

              <tr className='tdata'>
          
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>

              <tr className='tdata'>
               
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>

              <tr className='tdata'>
               
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>

              <tr className='tdata'>
               
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
                <td className='col'></td>
              </tr>


            </tbody>
          </table> */}

      
          
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


