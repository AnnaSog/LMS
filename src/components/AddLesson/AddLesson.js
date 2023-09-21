import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import Info from '../Info/Info';
import useService from '../../services/Service';

import './AddLesson.css'

const AddLesson = (props) => {

    const [subjects, setSubjects] = useState([]);
    const [name, setName] = useState('');
    const [idSubject, seIdSubject] = useState('');
    const [message, setMessage] = useState('');
    const [buttonAdd, setButtonAdd] = useState(addBut);
 
  
    const { getSubjects, postLesson} = useService();

    function addBut(){
        return <button className='addButtonModal' type="submit">Добавить урок</button>
    } 

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

    if(props.openModal){          
        classNames = 'open'; 
    }


   //POST lesson
    const handleSubmit = (obj) => {
        if(obj.timeEnd < obj.timeStart){
            setMessage('Исправьте время окончания урока');
        }else {
            postLesson({subject: {idSubject, name}, ...obj })
            .then((result) => {
                    console.log(result);
                    setButtonAdd(<div className='setButtonAdd'></div>);
                    setMessage('Урок добавлен! Обновите страницу');
                })
            .catch ( ()=>{
                setMessage('Заполните "Предмет"');
            })
        }
     
    };


    return(
        <div className='addLesson'>
           
            <div className={classNames} >
             
                <div onClick={props.onCloseModal} className="lessonClose">×</div>
                <Formik 
                    initialValues={{
                        topic: '', 
                        date: '', 
                        timeStart: '00:00:00',
                        timeEnd: '00:00:00',
                        theoryUrl: '',
                        practiceUrl: '',
                        homeworkUrl: '',
                        progress: '0',
                        checkSuccessfully: false
                    }}
                   
                    onSubmit={values => handleSubmit(values)}
                >
                   
                    <Form className='lessonForm'> 
                        <label htmlFor='name'>Предмет</label> 
                        <select 
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
                            type="text"
                            minLength="3"
                            maxLength="30"
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
                            max="18:40"
                        />
                        
                        <label htmlFor='timeEnd'> Окончание урока </label>
                        <Field 
                            className='lessonInput'
                            id='timeEnd' 
                            name="timeEnd" 
                            required 
                            type="time" 
                            min="09:20"
                            max="19:00"
                            step="1"
                            
                        />
                        <label htmlFor='theory'> Теория </label>
                        <Field 
                            className='lessonInput'
                            id='theory' 
                            name="theory"  
                            type="url" 
                        />

                        <label htmlFor='practice'> Практика </label>
                        <Field 
                            className='lessonInput'
                            id='practice' 
                            name="practice" 
                            type="url"
                        />

                        <label htmlFor='homework'> Домашнее задание </label>
                        <Field 
                            className='lessonInput'
                            id='homework' 
                            name="homework"
                            type="url" 
                        />

                        <label htmlFor='progress'>Прогресс выполнения %</label>
                        <Field 
                            className='lessonInput'
                            id='progress' 
                            name="progress" 
                            type="number" 
                            min="0"
                            max="100"
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

                        <div>
                            {buttonAdd}
                            <div className='status'>{message}  </div>
                        </div>
                                      
                    </Form> 
                </Formik>
                
            </div>
            

            <Info/>
            <div className='addButton'>
                <button onClick={props.onOpenModal}  className='addLessonBut'>Добавить урок</button>
            </div>
            
        </div>
    )
}
export default AddLesson;