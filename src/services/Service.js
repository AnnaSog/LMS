const useService = () => {
    // const _urlBase = 'https://mock-service-for-lms-git-valentinakolesnikova-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/'
    const _urlBase = 'http://195.161.68.231:8080/'

    const getResource = async(url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    const getAllUsers = async(id = 1) => {
        const res = await getResource(`${_urlBase}users/${id}`); 
        // console.log(res);
        return _transformUser(res)
    }

    const getAllLessons = async(id = 1) => {
        const res = await getResource(`${_urlBase}users/${id}/lessons`); //http://195.161.68.231:8080/users/1/lessons
        // const res = await getResource('https://mock-service-for-lms-git-valentinakolesnikova-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/users/1/lessons')
        // console.log(res.map(_transformLessons))
         return res.map(_transformLessons);  
        
    }

    
    const _transformUser = (res) => {
        return{
            id_user: res.id_user,
            name: res.name,
            surname: res.surname,
            login: res.login,
            email: res.email,
            dateBirth: res.dateBirth,
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

    return { getAllUsers, getAllLessons}  
}

export default useService;


  
