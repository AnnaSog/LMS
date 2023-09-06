import { useEffect, useState } from 'react';
import useService from '../../services/Service';

import './ModalUser.css';
import JonSnow from '../Profile/JonSnow.jpg';

const ModalUser = () => {

    const [data, setData] = useState({});
    const [active, setActive] = useState(true);
  
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
        <div style={active ? {display: 'block'} : {display: 'none'}} className='profileOverlay'>
            <div className="profileModal">
                <div className='modalImg'><img src={JonSnow} alt="profileImg"  /></div>
                <div onClick={(e) => setActive(false)}className="modalClose">×</div>
                <form className="profileForm" action="#" >
                    <div>Имя</div><input name="name" required="" type="text" value={name}/>
                    <div>Фамилия</div> <input name="surname" required="" type="text" value={surname}/>
                    <div>Логин</div><input name="login" required=""  type="text" value={login}/>
                    <div>Пароль</div><input name="password" required=""  type="password"/>
                    <div>Электронная почта</div><input name="email" required=""  type="email" value={email}/>
                    <div>Дата рождения</div><input name="date" type="date" value={date_birth}/>
                    <button>Обновить данные</button>                    
                </form>
            </div>
        </div>
    )
}

export default ModalUser;

