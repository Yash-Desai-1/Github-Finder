import axios from "axios"


const GITHUB_URL = process.env.REACT_APP_GITHUB_API
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


const github = axios.create({
    baseURL : GITHUB_URL,
    headers : {Authorization : `token ${GITHUB_TOKEN}`}
})

 //Get Search Result
 export const searchResult = async (text) =>{

    const params = new URLSearchParams({
        q:text
    })

    const response = await github.get(`/search/users?${params}`)
    return response.data.items

    // let response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
    //     headers: {
    //         Authorization : `token ${GITHUB_TOKEN}`,
    //     }
    // })

    // let {items} = await response.json();
    // setUsers(data);
    // setLoading(false);
    // dispatch({
    //     type : "GET_USERS",
    //     payload : items,
    // })
    // return items;
}




export const getUserAndRepos = async (login) =>{
    const [user,repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`),
    ])

    return { user : user.data, repos : repos.data}
}



