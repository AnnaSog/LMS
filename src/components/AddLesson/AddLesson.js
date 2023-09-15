import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import Info from '../Info/Info';
import useService from '../../services/Service';

import './AddLesson.css'

const AddLesson = () => {

    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [subjects, setSubjects] = useState([]);
    const [name, setName] = useState('');
    const [idSubject, seIdSubject] = useState('');

    const { getSubjects, postLesson} = useService();

    //get subjects
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
            > {elem.name}</option>
    })


    //get id option 
    function onValueChange(e){
        setName(e.target.value)
        seIdSubject(e.target.selectedIndex)
    }
   

    // open/close Modal
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
   
   
   //POST lesson
    const handleSubmit = (obj) => {

        postLesson({subject: {idSubject, name}, ...obj })
        .then((result) => {
                console.log(result);
            });
    };


    return(
        <div className='addLesson'>
            <div className={classNames} >
                <div onClick={onCloseModal} className="lessonClose">×</div>
                <Formik 
                    initialValues={{
                        topic: '', 
                        date: '', 
                        timeStart: '00:00:00',
                        timeEnd: '00:00:00',
                        progress: '0',
                        checkSuccessfully: false
                    }}
                    onSubmit={values => handleSubmit(values)}
                >
                    <Form className='lessonForm'> 

                        <label htmlFor='name'>Предмет</label> 
                        <select 
                            as='select' 
                            id='name' 
                            className='lessonInput'
                            required 
                            onInput={onValueChange}
                            >
                            <option> Выберите предмет </option>
                                {subjectsElement}
                        </select>

                        <label htmlFor='topic'>Тема урока</label>
                        <Field 
                            className='lessonInput'
                            id='topic' 
                            name="topic" 
                            required  
                        />

                        <label htmlFor='date'>Дата проведения</label>
                        <Field 
                            className='lessonInput' 
                            id='date' 
                            name="date" 
                            required  
                            type="date" 
                            min="2023-09-11" 
                            max="2023-09-17"
                        />

                        <label htmlFor='timeStart'>Начало урока </label>
                        <Field 
                            className='lessonInput'
                            id='timeStart'   
                            name="timeStart" 
                            required  
                            type="time" 
                            step="1"
                            min="09:00"
                            max="18:00"
                        />

                        <label htmlFor='timeEnd'> Окончание урока </label>
                        <Field 
                            className='lessonInput'
                            id='timeEnd' 
                            name="timeEnd" 
                            required 
                            type="time" 
                            min="09:30"
                            max="18:59"
                            step="1"
                        />

                        <label htmlFor='progress'>Прогресс выполнения %</label>
                        <Field 
                            className='lessonInput'
                            id='progress' 
                            name="progress" 
                            type="number" 
                        />

                        <label htmlFor='checkSuccessfully'>Выполнено</label>
                        <label className='checkbox'>
                            <Field 
                                className='checkboxInput'
                                id='checkSuccessfully' 
                                name="checkSuccessfully" 
                                type="checkbox" 
                            />
                        </label>

                        <button className='addButtonModal' type="submit">Добавить урок</button>                      
                    </Form> 
                </Formik>
            </div>

            <Info/>
            <div className='addButton'>
                <button onClick={onOpenModal}  className='addLessonBut'>Добавить урок</button>
            </div>
        </div>
    )
}
export default AddLesson;