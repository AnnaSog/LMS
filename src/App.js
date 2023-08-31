import './App.css';


const App = () => {
  return (
    <div className='wrapper'>
      <header>
        <div className='profile'>
        
          <img className='profileImg' src="https://annavart.ru/img/IMG_0241-min.JPG" alt="profileImg"  />
          <div className='profileName'> Мария Петрова </div>
          <button className='profileButton'>...</button>
        </div>
      </header>

      <div className='main'> 
        <div className='info'>
          <h1>Расписание</h1>
          <div className='date'>
            <div className='week'>17.10 - 23.10</div>
            <button className='addLesson'>Добавить урок</button>
          </div>
        </div>

        <div className='schedule'>
          <table className="clmonth">
            <tr>
              <th className="time" scope="col"></th>
              <th scope="col"> Пн <br/> <br/> 17 </th>
              <th scope="col">Вт <br/> <br/> 18</th>
              <th scope="col">Ср <br/> <br/> 19</th>
              <th scope="col">Чт <br/> <br/> 20</th>
              <th scope="col">Пт <br/> <br/> 21</th>
              <th scope="col">Сб <br/> <br/> 22</th>
              <th scope="col">Вс <br/> <br/> 23</th>
            </tr>
            <tr>
              <td className="time">8:00</td>
              <td> 
                <div className='lessionPassed'> Математика <br/> 08:00 - 08:40 </div> 
              </td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'><div className='lessionFuture'> Литературное чтение <br/> 08:00 - 08:30 </div></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">9:00</td>
              <td> 
                <div className='lessionPassed'> Русский язык <br/> 09:00 - 09:40 </div>
              </td>
              <td className='col'> <div className='lessionFuture'> Литературное чтение <br/> 09:00 - 10:00 </div></td>
              <td className='col'><div className='lessionFuture '> Математика <br/> 09:00 - 09:40 </div></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">10:00</td>
              <td>
                <div className='lessionSkipped'> Литературное чтение <br/> 10:00 - 10:30 </div>
              </td>
              <td className='col'><div className='lessionFuture'> Математика <br/> 10:00 - 10:40 </div> </td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">11:00</td>
              <td className='col'></td>
              <td className='col'><div className='lessionFuture'> Математика <br/> 10:00 - 10:40 </div></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
              <td className='col'></td>
            </tr>
            <tr>
              <td className="time">12:00</td>
              <td className='col'></td>
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
      </div>

      
   
    </div>

  )
}


export default App;
