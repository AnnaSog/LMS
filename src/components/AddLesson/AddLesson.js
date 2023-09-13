import { useEffect, useState } from 'react';
import Info from '../Info/Info';
import useService from '../../services/Service';

import './AddLesson.css'

const AddLesson = () => {

    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);


    const [subjects, setSubjects] = useState([]);
    const [name, setName] = useState('');
    const [idSubject, seIdSubject] = useState('');
    const [topic, setTopic] = useState('Предлоги');
    const [date, setDate] = useState('2023-09-14');
    const [timeStart, setTimeStart] = useState('09:40:00');
    const [timeEnd, setTimeEnd] = useState('09:40:00');
    const [progress, setProgress] = useState('');
    const [checkSuccessfully, setCheckSuccessfully] = useState(false);

    const { getSubjects} = useService();

    useEffect(() => {
        showSubjects()
    }, [])
    

    const showSubjects = () => {
        if(!subjects){
            return 
        } 
       
        getSubjects()
            .then(res => setSubjects(res))      
    }
    
    const subjectsElement = subjects.map(elem => {
        return <option 
            key={elem.idSubject} 
            value={elem.name} 
            id={elem.idSubject}
            > {elem.name} </option>
    })


    function onValueChange(e){
        setName(e.target.value)
        const id = e.target.selectedIndex + 1
        seIdSubject(id)
    }
   

    let classNames = 'lessonModal';

    if(openModal){          
        classNames = 'open'; 
    }

    function onOpenModal(){
        setOpenModal(!openModal)
    }

    function onCloseModal(){
        setCloseModal(!closeModal)
        setOpenModal(!openModal)   
    }


    // function onPostLesson(e){
    //     e.preventDefault();
    //     postLesson()
    //      .then(res => console.log(res))

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('http://195.161.68.231:8080/users/1/lessons', { 
          method: 'POST',
          body: JSON.stringify({subject:{idSubject, name}, topic, date, timeStart, timeEnd }), 
          headers: {
            'Content-Type': 'application/json'
            }    
        })
        
          .then(response => response.json())
          .then((result) => {
            console.log(result);
          });
          
      };


    return(
        <div className='addLesson'>
            <div className={classNames} >
                <div onClick={onCloseModal} className="lessonClose">×</div>
                 <form onSubmit={handleSubmit} className="lessonForm" action="#" >

                    <label htmlFor='subject' >Предмет</label> 
                        <select id='subject' onChange={onValueChange} className='lessonInput' >
                            <option> Выберите предмет </option>
                                {subjectsElement}
                        </select>
                     <label htmlFor='topic'>Тема урока</label>
                        <input 
                            className='lessonInput'
                            id='topic' 
                            name="topic" 
                            required=""  
                            type="text" 
                            defaultValue={topic}
                        />
                    <label htmlFor='date'>Дата проведения</label>
                        <input 
                            className='lessonInput' 
                            id='date' 
                            name="date" 
                            required=""  
                            type="date" 
                            defaultValue={date}/>
                    <label htmlFor='timeStart'>Начало урока </label>
                        <input 
                            className='lessonInput'
                            id='timeStart'   
                            name="timeStart" 
                            required=""  
                            type="time" 
                            defaultValue={timeStart}/>
                    <label htmlFor='timeEnd'> Окончание урока </label>
                        <input 
                            className='lessonInput'
                            id='timeEnd' 
                            name="timeEnd" 
                            required=""  
                            type="time" 
                            defaultValue={timeEnd}/>
                    <label htmlFor='progress'>Прогресс выполнения %</label>
                        <input 
                            className='lessonInput'
                            id='progress' 
                            name="progress" 
                            type="number" 
                            defaultValue={progress}/>
                    <label htmlFor='checkSuccessfully'>Выполнено</label>
                    <label className='checkbox'>
                        <input 
                            className='checkboxInput'
                            id='checkSuccessfully' 
                            name="checkSuccessfully" 
                            type="checkbox" 
                            defaultValue={checkSuccessfully}
                        />
                    </label>
                    <button className='addButtonModal' type="submit">Добавить урок</button>                      
                </form> 
            </div>

            <Info/>
            <div className='addButton'>
                <button onClick={onOpenModal}  className='addLessonBut'>Добавить урок</button>
            </div>
        </div>
    )
}
export default AddLesson;