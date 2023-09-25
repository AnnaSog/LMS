import React,{ useEffect, useState } from 'react';
import useService from '../../services/Service';

import './Schedule.css';

const Schedule = (props) => {

  const [lessons, setLessons] = useState([]);
  const [lesson, setLesson] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [idLesson, setIdLesson] = useState('');
  const [loadingAllLessons, setLoadingAllLessons] = useState(true);
  const [loadingLesson, setLoadingLesson] = useState(true);
    
  const {getAllLessons, getLesson, deleteLesson} = useService();
  
  useEffect( () => {
    getLessons();
  },[])

  const onLessonsLoaded = (lessons) => {   
    setLessons(lessons); 
    setLoadingAllLessons(false);
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
  if(!props.openModalAddLesson && openModal ){          
    classNames = 'open'; 
  }

  function onOpenModal(id){ 
    if(!id){
      return 
    }
    if(!props.openModalAddLesson){
      setLoadingLesson(false);
      setIdLesson(id);
      setOpenModal(!openModal);
      getLesson(id)
        .then(setLesson) 
    }

  
  }

  function onCloseModal(){
    setCloseModal(!closeModal)
    setOpenModal(!openModal)   
  }


  //create div lesson
  const dataLesson = (les, i) => {
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
     
    return <div className={classNames} 
                key={i} 
                id={les.idLesson}> 
                  <span id={les.idLesson}>
                    {les.nameLesson}<br/>
                    {les.timeStart.slice(0, 5)} : {les.timeEnd.slice(0, 5)} 
                  </span> <br/>
                  {les.topic} <br/>  
                  {les.progress} % 
            </div>
  }
  
  //get data lessons by day
  const dataLessonByDay = (date) => lessons.filter(les => {
    if(les.date === date) {
      return les;
    }
  }).map((les, i) => dataLesson(les, i))

  //create dynamic  schedule
  const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((item, i) => <div key={i} className='tableHead'>{item} </div>)
  const day = ['11.09', '12.09', '13.09', '14.09', '15.09', '16.09', '17.09'].map((item, i) => <div key={i}  className='tableHead'>{item}</div>);
  const lessonDate = ['2023-09-11', '2023-09-12', '2023-09-13', '2023-09-14', '2023-09-15', '2023-09-16', '2023-09-17'].map( (item, i) =>  <div key={i} className='tableBody'> {dataLessonByDay(item)}</div>)


  //DELETE lesson
  const deleteLes = () => {
    const id = `${idLesson}`;

    deleteLesson(id)
      .then(res => console.log(res,'Успешно'))
      .catch(error =>console.log(error) )
  }
     
  
  const {nameLesson, topic, date, timeStart, timeEnd, progress, checkSuccessfully, theoryUrl, practiceUrl, homeworkUrl} = lesson;

  return(
    <div className='schedule'> 
      
      {loadingAllLessons ? <div className='table'> <h2> Loading... </h2></div> :  
        <div className='table' onClick={(e) => onOpenModal(e.target.id)}>
            {week}
            {day}
          {lessonDate}

          {/* <div className='tableBody'>
            <div className='tableHead'>Вс <br/> <br/> 11.09</div>
            {dataLessonByDay('2023-09-11')} 
          </div> */}
        </div>
      }

      <div className={classNames} >
         
          <div onClick={onCloseModal} className="lessonClose">×</div>
          {loadingLesson ? <form className="lessonForm" ><h2>Loading...</h2></form> :  
            <form className="lessonForm" >
              <label htmlFor='nameLesson'>Предмет</label> 
              <input
                id='nameLesson' 
                className='lessonInput'
                required 
                defaultValue={nameLesson}
              />

              <label htmlFor='topicLesson'>Тема урока</label>
              <input
                className='lessonInput'
                id='topicLesson' 
                name="topic" 
                type="text"
                minLength="3"
                maxLength="30"
                required  
                defaultValue={topic}
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
                defaultValue={date} 
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
                max="18:40"
                defaultValue={timeStart}  
              />
                  
              <label htmlFor='timeEndLesson'> Окончание урока </label>
              <input 
                className='lessonInput'
                id='timeEndLesson' 
                name="timeEnd" 
                required 
                type="time" 
                min="09:20"
                max="19:00"
                step="1"
                defaultValue={timeEnd}  
              />

              <label htmlFor='theoryLesson'> Теория </label>
              <input 
                className='lessonInput'
                id='theoryLesson' 
                name="theory"  
                type="text" 
                defaultValue={theoryUrl}  
              />

              <label htmlFor='practiceLesson'> Практика </label>
              <input 
                className='lessonInput'
                id='practiceLesson' 
                name="practice" 
                type="text"
                defaultValue={practiceUrl}  
              />
              <label htmlFor='homeworkLesson'> Домашнее задание </label>
              <input 
                className='lessonInput'
                id='homeworkLesson' 
                name="homework"
                type="text" 
                defaultValue={homeworkUrl}  
              />

              <label htmlFor='progressLesson'>Прогресс выполнения %</label>
              <input 
                  className='lessonInput'
                  id='progressLesson' 
                  name="progress" 
                  type="number" 
                  defaultValue={progress}
              />

              <label htmlFor='checkSuccessfullyLesson'>Выполнено</label>
              <label className='checkbox'>
                <input 
                  className='checkboxInput'
                  id='checkSuccessfullyLesson' 
                  name="checkSuccessfully" 
                  type="checkbox" 
                  defaultValue={checkSuccessfully}
                />
              </label>

              <div className='buttons'>
                {/* <button className='updateBut' type="button">Обновить урок</button> */}
                <button onClick={deleteLes} className='deleteBut'>Удалить урок</button>  
              </div>                   
            </form>
          } 
        </div>          
     
        
    </div>
      
  )
}
export default Schedule;


