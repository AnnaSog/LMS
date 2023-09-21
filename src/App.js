import { useState } from 'react';
import Profile from './components/Profile/Profile';
import AddLesson from './components/AddLesson/AddLesson';
import Schedule from './components/Schedule/Schedule';

import './App.css';


const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  function onOpenModal(){
    setOpenModal(!openModal)
  }

  function onCloseModal(){
    setCloseModal(!closeModal)
    setOpenModal(!openModal)   
  }

  return (
    <div className='wrapper'>
      
      <header>
        <Profile/>
      </header>

      <div className='main'> 
        <AddLesson 
          openModal={openModal} 
          onOpenModal={() => onOpenModal()}
          closeModal={closeModal}
          onCloseModal={() => onCloseModal()}
        />
          
        <Schedule
          openModalAddLesson={openModal}
        />
      </div>
    </div>

  )
}

export default App;
