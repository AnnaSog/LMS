import { useEffect, useState } from 'react';
import useService from '../../services/Service';

import './ModalUser.css';
import JonSnow from '../Profile/JonSnow.jpg';

const ModalUser = () => {

    const [data, setData] = useState({});
    const [active, setActive] = useState(null);
  
    const {getAllUsers} = useService();
    useEffect( () => {
        updateData();
    }, [data])
 
    const onUserLoaded = (data) => {   
        setData(data); 
    }

    function updateData(){
        if(!data){
            return 
        }
        getAllUsers()
        .then(onUserLoaded)     
    }
    
   
    const {name, surname, login, email, date_birth} = data;

    return(  
        <div className='profileOverlay'>  
            <div className="profileModal">
                <div className='modalImg'><img src={JonSnow} alt="profileImg"  /></div>
                <div onClick={(e) => setActive(!active)}className="modalClose">×</div>
                <form className="profileForm" action="#" >
                    <div>Имя</div><input name="name" required="" type="text" defaultValue={name}/>
                    <div>Фамилия</div> <input name="surname" required="" type="text" defaultValue={surname}/>
                    <div>Логин</div><input name="login" required=""  type="text" defaultValue={login}/>
                    <div>Пароль</div><input name="password" required=""  type="password"/>
                    <div>Электронная почта</div><input name="email" required=""  type="email" defaultValue={email}/>
                    <div>Дата рождения</div><input name="date" type="date" defaultValue={date_birth}/>
                    <button type='submit'>Обновить данные</button>                    
                </form>
            </div>
        </div>   
    )
}

export default ModalUser;

