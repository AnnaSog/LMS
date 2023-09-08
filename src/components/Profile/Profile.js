import { useEffect, useState } from 'react';

import ModalUser from '../ModalUser/ModalUser'
import useService from '../../services/Service';


import './Profile.css';
import JonSnow from './JonSnow.jpg'




const Profile = () => {

    const [data, setData] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const {getAllUsers} = useService();

    useEffect( () => {
        updateData();
    }, [data])
 
    const onDataLoaded = (data) => {   
        setData(data); 
        setLoading(false);
    }

    function updateData(){
        if(!data){
            return 
        }
        getAllUsers()
        .then(onDataLoaded)     
    }

    let classNames = 'profileOverlay';

    if(openModal){          
        classNames = 'openModalUser'; 
    }

    function onOpenModal(){
        setOpenModal(!openModal)
    }

    function onCloseModal(){
        setCloseModal(!closeModal)
        setOpenModal(!openModal)   
    }

    const {name, surname, login, email, date_birth} = data;
    const nameSurname = loading ? <div className='profileName'> Loading... </div> : <div className='profileName'> {name} {surname} </div> 
    const password = 'qwerty12'

    return(
        <>
            <div className={classNames}>  
                <div className="profileModal">
                    <div className='modalImg'><img src={JonSnow} alt="profileImg"/></div>
                    <div onClick={onCloseModal}className="modalClose">×</div>
                    <form className="profileForm" action="#" >
                        <div>Имя</div><input name="name" required="" type="text" defaultValue={name}/>
                        <div>Фамилия</div> <input name="surname" required="" type="text" defaultValue={surname}/>
                        <div>Логин</div><input name="login" required=""  type="text" defaultValue={login}/>
                        <div>Пароль</div><input name="password" required="" type="password" defaultValue={password}/>
                        <div>Электронная почта</div><input name="email" required=""  type="email" defaultValue={email}/>
                        <div>Дата рождения</div><input name="date" type="date" defaultValue={date_birth}/>
                        <button type='submit'>Обновить данные</button>                    
                    </form>
                </div>
            </div>   

            <div className='profile'>
                <img className='profileImg' src={JonSnow} alt="profileImg"  />
                {nameSurname}
                <button onClick={onOpenModal} className='profileButton'>...</button>
                
            </div>
        </>   
        

       
    )

}

export default Profile;