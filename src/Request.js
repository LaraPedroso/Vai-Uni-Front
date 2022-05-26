const local = "http://127.0.0.1:3001"
const local_api = `${local}/api/v1`

export default {
    // GETS
    getAll: async (request) => {
        const data = await fetch(`${local_api}/${request}`, {
            headers: {"Authenticate": localStorage.token}
            })
        return await data.json()
    },


    getById: async (request, id) => {
        const data = await fetch(`${local_api}/${request}/${id}`, {
            headers: {"Authenticate": localStorage.token}
            })
        return await data.json() 
    }, 

    // POST 
    postMethod: async (request, json) => {
    try { 
        const data = await fetch(`${local_api}/${request}`,{
            method: 'POST',
            body: JSON.stringify(json),
            headers: { "Content-Type" : "application/json", "Authenticate": localStorage.token}
        }) 
        return await data.json()
    } catch(err) { 
        console.error(`Error at fetch: ${err}`);
        throw err; } 
    },


    // PUT
    putMethod: async (request, id, json) => {
        try {
            const data = await fetch(`${local_api}/${request}/${id}`,{
                method: 'PUT',
                body: JSON.stringify(json),
                headers: { "Content-Type" : "application/json", "Authenticate": localStorage.token }
            })
            return await data.json()
        } catch(err) {
            console.error(`Error at fetch: ${err}`); 
            throw err; 
        } 
    }, 


    putJustById: async (request, id) => {
        try {
            const data = await fetch(`${local_api}/${request}/${id}`,{
                method: 'PUT',
                headers: { "Content-Type" : "application/json", "Authenticate": localStorage.token }
            })
            return await data.json()
        } catch(err) {
            console.error(`Error at fetch: ${err}`); 
            throw err; 
        } 
    },
    

    // DELETE 
    deleteMethod: async (request, id) => {
        const data = await fetch(`${local_api}/${request}/${id}`, {
            method: 'DELETE',
            headers: {"Authenticate": localStorage.token}
        })
        return await data.json() 
    },

    // LOGIN
    login: async (email, password) => {
        const login =  await fetch(`${local}/login`,{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({email: email, password: password})
            })
        
        const data = await login.json()
        console.log(data.token)
        if(!(data.token === undefined)) {
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", data.email)
            return true
        } else {
            return false 
        }
    },

    authToken: async () => {
        const data = await fetch(`${local}/login`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                "Authenticate" : localStorage.getItem("token")}
        })
        const login = await data.json()
        localStorage.setItem("user", login.email)
    },
    
    logout: async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    },

    isAdmin: async () => {
        const data = await fetch(`${local}/is_admin`, {
            headers: {
                'Authenticate' : localStorage.getItem("token")
            }
        })
        return await data.json()
    },

    activateUser: async (user_id) => {
        await fetch(`${local}/active_user/${user_id}`, {
            method: 'PUT',
            headers: {"Authenticate": localStorage.token}
        })
    },
}