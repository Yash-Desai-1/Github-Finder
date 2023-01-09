import { createContext, useReducer } from 'react';
// import { createRenderer } from 'react-dom/test-utils';
import githubReducer from './githubReducer';
const GitHubContext = createContext();
export const GitHubProvider = ({children}) => {
  // const [users,setUsers] = useState([])
  // const [loading,setLoading] = useState(true)
  const initialState = {
      users : [],
      user: {},
      repos : [],
      loading : false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)
  

 



  return <GitHubContext.Provider value={{...state, dispatch}}>
      {children}
  </GitHubContext.Provider>

}

export default GitHubContext;

//  const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
//  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// export const GithubProvider = ({ children }) => {
//     const initialState = {
//         users: [],
//         user:{},
//         repos:[],
//         lading: false,
//     }
//     const [state, dispatch] = useReducer(githubReducer, initialState)

//     //get initial users (testing purposes)
//     //search user results
//     const searchUsers = async (text) => {
//         setLoading()
//         const params = new URLSearchParams({
//             q: text
//         })
//         const response = await fetch(`${GITHUB_URL}/search/users?${params}`
//             , {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                 }
//             })
//         console.log(response);
//         // get response into user data
//         const { items } = await response.json()
//         dispatch({
//             type: 'GET_USERS',
//             payload: items,
//         })
//     }
//     //get a single user 
//     const getUser = async (login) => {
//         setLoading()
      
//         const response = await fetch(`${GITHUB_URL}/users?${login}`
//             , {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                 }
//             })
//             if(response.status===404){
//                 window.location='/notfound'
//             }
//             else{
//                 // get response into user data
//                 const data = await response.json()
//                 dispatch({
//                     type: 'GET_USER',
//                     payload: data,
//                 })

//             }
//     }
//     //get a user repos
//     const getUserRepos = async(login)=>{
//        setLoading()
//        const params = new URLSearchParams({
//         sort:'created ',
//         per_page:10,
//     })
//        const response =await fetch(
//         `${GITHUB_URL}/users/${login}/repos?${params}`,{
//             headers:{
//                 Authorization: `token ${GITHUB_TOKEN}`,
    
//             }
//         }
//        ) 
//        const data=await response.json()
//        dispatch({
//         type:'GET_REPOS',
//         payload:data,
//        })
//     }
//     //clear users
//     const clearUsers=()=> 
//                         dispatch({
//                          type:'CLEAR_USERS'
//     })

//     //set loading function 
//     const setLoading = () => dispatch({ type: 'SET_LOADING' })

//     return <GithubContext.Provider value={{
//         users: state.users,
//         loading: state.loading,
//         user:state.user,
//         repos: state.repos,
//         searchUsers,
//         clearUsers,
//         getUser,
//         getUserRepos,
//     }}>
//         {children}
//     </GithubContext.Provider>
    
// }

//export default GithubContext;