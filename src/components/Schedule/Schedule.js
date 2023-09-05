import { useEffect, useState } from 'react';

import useService from '../../services/Service';

import './Schedule.css';

const Schedule = () => {
    const [lesson, setLesson] = useState([]);
    const [loading, setLoading] = useState(true);
    const {getAllLessons} = useService();
  
    useEffect( () => {
        getLesson()  ;
    }, [])
 
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
    //     return <div key={i}  className='lessionFuture'> {nameLesson} <br/> </div> 
    // })
       

    return(
        <div className='schedule'>
          <table className="clmonth">
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
                {loading ? <div className='lessionPassed'> Loading...</div> : 
                    <div className='lessionPassed'> {lesson[0].nameLesson} <br/> {lesson[0].timeStart} : {lesson[0].timeEnd} </div>
                }
              </td>
              <td> 
                {loading ? <div className='lessionPassed'> Loading...</div> : 
                    <div className='lessionPassed'> {lesson[3].nameLesson} <br/> {lesson[3].timeStart} : {lesson[3].timeEnd} </div>
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
                {loading ? <div className='lessionPassed'> Loading...</div> : 
                    <div className='lessionPassed'> {lesson[1].nameLesson} <br/> {lesson[1].timeStart} : {lesson[1].timeEnd} </div>
                }
              </td>
              <td> 
                {loading ? <div className='lessionPassed'> Loading...</div> : 
                    <div className='lessionPassed'> {lesson[4].nameLesson} <br/> {lesson[4].timeStart} : {lesson[4].timeEnd} </div>
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
                {loading ? <div className='lessionPassed'> Loading...</div> : 
                    <div className='lessionPassed'> {lesson[2].nameLesson} <br/> {lesson[2].timeStart} : {lesson[2].timeEnd} </div>
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
        
        </div>
    )
}

export default Schedule;
