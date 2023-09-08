import { useState } from 'react';
import Info from '../Info/Info';

import './AddLesson.css'

const AddLesson = () => {

    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');
    const [progress, setProgress] = useState('');
    const [checkSuccessfully, setCheckSuccessfully] = useState(false);

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

    return(
        <div className='addLesson'>
            <div className={classNames} >
                <div onClick={onCloseModal} className="lessonClose">×</div>
                <form className="lessonForm" action="#" >
                    <label >Предмет</label> <input className='lessonInput' name="name" required="" type="text" defaultValue={name}/>
                    <label>Дата проведения</label><input className='lessonInput' name="date" required=""  type="date" defaultValue={date}/>
                    <label>Начало урока </label><input className='lessonInput' name="timeStart" required=""  type="time" defaultValue={timeStart}/>
                    <label> Окончание урока </label><input className='lessonInput' name="timeEnd" required=""  type="time" defaultValue={timeEnd}/>
                    <label>Прогресс выполнения %</label><input className='lessonInput' name="progress" type="number" defaultValue={progress}/>
                    <label>Выполнено</label><label className='checkbox'><input className='checkboxInput' name="checkSuccessfully" type="checkbox" defaultValue={checkSuccessfully}/></label>
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