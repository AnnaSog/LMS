import { useEffect, useState } from 'react';
import useService from '../../services/Service';

import './Profile.css';
import avatar from './avatarka.jpg'

const Profile = () => {

    const [data, setData] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const {getAllUsers, patchUser} = useService();

    useEffect( () => {
        updateData();
    }, [])
    // console.log(data);
 
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

    const onPatchUser = (e)  => {
        // e.preventDefault(); 
        patchUser()
            .then(res => console.log(res))
    
    } 

 

    const {name, surname, login, email, dateBirth} = data;
    const nameSurname = loading ? <div className='profileName'> Loading... </div> : <div className='profileName'> {name} {surname} </div> 
    const password = 'qwerty12'

    return(
        <>
            <div className={classNames}>  
                <div className="profileModal">
                    <div className='modalImg'><img src={avatar} alt="profileImg"/></div>

                    <div onClick={onCloseModal}className="modalClose">×</div>
                    <form onSubmit={onPatchUser} className="profileForm" action="#" >
                        <label>Имя</label><input name="name" required="" type="text" defaultValue={name}/>
                        <label>Фамилия</label> <input name="surname" required="" type="text" defaultValue={surname}/>
                        <label>Логин</label><input name="login" required=""  type="text" defaultValue={login}/>
                        <label>Пароль</label><input name="password" required="" type="password" defaultValue={password}/>
                        <label>Электронная почта</label><input name="email" required=""  type="email" defaultValue={email}/>
                        <label>Дата рождения</label><input name="date" type="date" defaultValue={dateBirth}/>
                        <button type='button'> Обновить данные</button>                    
                    </form>
                </div>
            </div>   

            <div className='profile'>
                <img className='profileImg' src={avatar} alt="profileImg"  />
                {nameSurname}
                <button onClick={onOpenModal} className='profileButton'>...</button>
                
            </div>
        </>   
        

       
    )

}

export default Profile;