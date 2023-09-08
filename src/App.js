import Profile from './components/Profile/Profile';
import AddLesson from './components/AddLesson/AddLesson';
import Schedule from './components/Schedule/Schedule';


import './App.css';



const App = () => {
  return (
    <div className='wrapper'>
      
      <header>
        <Profile/>
      </header>

      <div className='main'> 
        {/* <ModalUser/> */}
        <AddLesson/>
        <Schedule/>
        
      </div>
    </div>

  )
}

export default App;
