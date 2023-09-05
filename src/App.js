import Profile from './components/Profile/Profile';
import Info from './components/Info/Info';
import Schedule from './components/Schedule/Schedule';
import useService from './services/Service';

import './App.css';



const App = () => {

 

  return (
    <div className='wrapper'>
      <header>
        <Profile/>
      </header>

      <div className='main'> 
        <Info/>
        <Schedule/>
        
      </div>
    </div>

  )
}

export default App;
