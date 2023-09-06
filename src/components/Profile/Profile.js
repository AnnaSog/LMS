import { useEffect, useState, useContext } from 'react';
import useService from '../../services/Service';

import './Profile.css';
import JonSnow from './JonSnow.jpg'

const Profile = () => {
    const [name, setName] = useState('Мария Петрова');
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
  
    const {getAllUsers} = useService();

    // const context = useContext(active);

    useEffect( () => {
        updateName();
    }, [])
 
    const onUserLoaded = (name) => {   
        setName(name); 
        setLoading(false);
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
            <img className='profileImg' src={JonSnow} alt="profileImg"  />
            {loading ? <div className='profileName'> Loading... </div> : <div className='profileName'> {name.name}  {name.surname} </div> }
            <button onClick={(e) => setActive(true)} className='profileButton'>...</button>
        </div>
    )

}

export default Profile;