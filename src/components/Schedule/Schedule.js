import React,{ useEffect, useState } from 'react';
import useService from '../../services/Service';

import './Schedule.css';

const Schedule = () => {

  const [lessons, setLessons] = useState([]);
  const [lesson, setLesson] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [idLesson, setIdLesson] = useState('');
    
    
  const {getAllLessons, getLesson} = useService();
  
  
  useEffect( () => {
    getLessons();
  },[])


    const onLessonsLoaded = (lessons) => {   
      setLessons(lessons); 
    }


    function getLessons(){
      if(!lessons){
        return 
      } 
      getAllLessons()
        .then(onLessonsLoaded)    
    }

    // open/close Modal Lesson
    let classNames = 'lessonModal';
    if(openModal){          
      classNames = 'open'; 
    }

    function onOpenModal(id){ 
      console.log(id);
      if(!id){
        return 
      }
      setIdLesson(id)
      setOpenModal(!openModal)
      getLesson(id)
        .then(setLesson) 
  }
  

    function onCloseModal(){
        setCloseModal(!closeModal)
        setOpenModal(!openModal)   
    }



    //get lesson
    //const lessonElement = lesson.map(les => <div key={les.idLesson}> {les.date} {les.nameLesson}<br/> {les.timeStart} : {les.timeEnd} <br/> {les.progress} % </div>)
  

    const eleventhDay = lessons.filter(les => {if(les.date === '2023-09-11') return les})
    const twelfthDay = lessons.filter(les => {if(les.date === '2023-09-12') return les})
    const thirteenthDay = lessons.filter(les => {if(les.date === '2023-09-13') return les})
    const fourteenthDay = lessons.filter(les => {if(les.date === '2023-09-14') return les})
    const fifteenthDay = lessons.filter(les => {if(les.date === '2023-09-15') return les})
    const sixteenthDay = lessons.filter(les => {if(les.date === '2023-09-16') return les})
    const seventeenthDay = lessons.filter(les => {if(les.date === '2023-09-17') return les})

    const dataLes = (les, i) => {
      let classNames = 'tdata ';

      if(les.progress === 0){
        classNames += ' lessonFuture'
     }
      if(les.progress < 100 && les.progress > 0){
         classNames += ' lessonSkipped'
      }
      if(les.progress === 100 ){
        classNames += ' lessonPassed'
     }
     
      return <div className={classNames} key={i} id={les.idLesson}> 
                  <span id={les.idLesson}>{les.nameLesson} <br/>
                    {les.timeStart.slice(0, 5)} : {les.timeEnd.slice(0, 5)} </span>  
                  <br/>
                  {les.topic} <br/>  
                  {les.progress} % 
              </div>
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



    //DELETE lesson
    const deleteLesson = async() => {
    
      let url = `http://195.161.68.231:8080/users/1/lessons/${idLesson}`
      let res = await fetch(url, {method: 'DELETE'}).then(res => console.log(res));
      
      if (!res.ok) {
          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
      return await res.json();
    }



    // //PATCH lesson
    // const handleSubmit = async(e, obj) => {
    //   //e.preventDefault();
    //   //console.log(obj);

    //   let res = await fetch(`http://195.161.68.231:8080/users/1/lessons/${idLesson}`, {
    //     method: 'PATCH', 
    //     body: JSON.stringify({...obj }),  
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(res => console.log(res));

    //   if (!res.ok) {
    //     throw new Error(`Could not fetch http://195.161.68.231:8080/users/1/lessons/${idLesson}, status: ${res.status}`);
    //   }
  
    //       return await res.json();
                
        
    // }
      
        
      
  
      const {nameLesson, topic, date, timeStart, timeEnd, progress, checkSuccessfully} = lesson;

    return(
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
        
       

        <div className={classNames} >
          <div onClick={onCloseModal} className="lessonClose">×</div>
            
          <form className="lessonForm" >
            <label htmlFor='nameLesson'>Предмет</label> 
            <input
              id='nameLesson' 
              className='lessonInput'
              required 
              // onInput={onValueChange}
              value={nameLesson}
            />
          
          
            {/* <select 
                id='nameLesson' 
                className='lessonInput'
                required 
                onInput={onValueChange}
                value={nameLesson}
                >
                <option> {nameLesson}</option>
                    {subjectsElement}
            </select> */}
            

            <label htmlFor='topicLesson'>Тема урока</label>
            <input
              className='lessonInput'
              id='topicLesson' 
              name="topic" 
              type="text"
              minLength="3"
              maxLength="30"
              required  
              value={topic}
            />

            <label htmlFor='dateLesson'>Дата проведения</label>
            <input 
              className='lessonInput' 
              id='dateLesson' 
              name="date" 
              required  
              type="date" 
              min="2023-09-11" 
              max="2023-09-17"
              value={date} 
            />

            <label htmlFor='timeStartLesson'>Начало урока </label>
            <input 
              className='lessonInput'
              id='timeStartLesson'   
              name="timeStart" 
              required  
              type="time" 
              step="1"
              min="09:00"
              max="18:00"
              value={timeStart}  
            />
                
            <label htmlFor='timeEndLesson'> Окончание урока </label>
            <input 
              className='lessonInput'
              id='timeEndLesson' 
              name="timeEnd" 
              required 
              type="time" 
              min="09:30"
              max="18:59"
              step="1"
              value={timeEnd}  
            />

            <label htmlFor='progressLesson'>Прогресс выполнения %</label>
            <input 
                className='lessonInput'
                id='progressLesson' 
                name="progress" 
                type="number" 
                value={progress}
            />

              <label htmlFor='checkSuccessfullyLesson'>Выполнено</label>
              <label className='checkbox'>
                <input 
                  className='checkboxInput'
                  id='checkSuccessfullyLesson' 
                  name="checkSuccessfully" 
                  type="checkbox" 
                  checked={checkSuccessfully}
                />
              </label>

            <div className='buttons'>
              <button className='updateBut' type="button">Обновить урок</button>
              <button onClick={deleteLesson} className='deleteBut'>Удалить урок</button>  
            </div>                   
          </form>
                      
        </div>
          
      </div>
      
  )
}
export default Schedule;


