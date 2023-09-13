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
        const res = await getResource(`${_urlBase}users/${id}/lessons`); 
        //mock-service
        // const res = await getResource('https://mock-service-for-lms-git-valentinakolesnikova-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/users/1/lessons')
         return res.map(_transformLessons);  
        
    }
    const getSubjects = async() => {
        const res = await getResource(`${_urlBase}subjects`); 
        console.log(res);
        return res;  
    }

    // const postLesson = async(data) => {
    //     const url = 'http://195.161.68.231:8080/users/1/lessons'
    //     let res = await fetch(url, {
    //         method: 'POST', 
    //         body: data, //JSON.stringify({})
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }
    //     console.log(res);
    //     return await res.json();
           
    // }

    const patchUser = async() => {
        const url = 'http://195.161.68.231:8080/users/1'
        let res = await fetch(url, {
            method: 'PATCH', 
            body: JSON.stringify({name: 'Элла'}), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
           
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

    

    return { getAllUsers, getAllLessons, patchUser, getSubjects}  
}

export default useService;


  
