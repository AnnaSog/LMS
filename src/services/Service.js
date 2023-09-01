const useService = () => {
    const _urlBase = 'https://mock-service-for-lms-git-valentinakolesnikova-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/'
    
    const getResource = async(url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    const getAllUsers = async() => {
        const res = await getResource(`${_urlBase}users`);
        //console.log(res.name);
        //console.log(_transformUser(res.name));
         //return res.name
       
         return _transformUser(res)
    }

    const _transformUser = (res) => {
        return{
            id_user: res.id_user,
            name: res.name,
            surname: res.surname,
            login: res.login,
            email: res.email,
            date_birth: res.date_birth,
            dateRegistration: res.dateRegistration, 
            avatarUrl: res.avatarUrl
        }
    }

    //по на сервере id не настроено
    // const getUser = (id) => {
    //     return getResource(`${_urlBase}users/${id}`)
    // }

    return {getAllUsers}
}

export default useService;


  
