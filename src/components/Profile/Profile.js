import { useEffect, useState } from 'react';
import useService from '../../services/Service';

import './Profile.css';

const Profile = () => {
    const [name, setName] = useState('Мария Петрова');
  
    const {getAllUsers} = useService()

    useEffect( () => {
        updateName();
    }, [])
 
    const onUserLoaded = (name) => {   
        setName(name); 
        console.log(name);
    }

    function updateName(){
        if(!name){
        return
        }
        getAllUsers()
        .then(onUserLoaded)     
    }

    return(
        <div className='profile'>
            <img className='profileImg' src="https://annavart.ru/img/IMG_0241-min.JPG" alt="profileImg"  />
            <div className='profileName'> {name.name}  {name.surname} </div>
            <button  className='profileButton'>...</button>
        </div>
    )

}
export default Profile;