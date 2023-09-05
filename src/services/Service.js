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
        return _transformUser(res)
    }

    const getAllLessons = async() => {
        const res = await getResource(`${_urlBase}users/lessons`);
        return res.map(_transformLessons);  
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

    const _transformLessons = (res) => {
        return{
            idLesson: res.idLesson,
            nameLesson: res.subject.name,
            date: res.date,
            timeStart: res.timeStart.slice(0, 5),
            timeEnd: res.timeEnd.slice(0, 5),
            progress: res.progress,
            checkSuccessfully: res.checkSuccessfully
        }
    }

    //по на сервере id не настроено
    // const getUser = (id) => {
    //     return getResource(`${_urlBase}users/${id}`)
    // }

    return {getAllUsers, getAllLessons}
}

export default useService;


  
