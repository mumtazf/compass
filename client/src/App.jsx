import { useState, useEffect} from 'react'
import './App.css'
import AllPosts from './pages/AllPosts'
import FullPost from './pages/FullPost'
import Avatar from './components/Avatar.jsx'
import Homepage from './pages/Homepage'
import NavBar from './components/NavBar'
import CreateJob from './pages/CreateJob'
import CreatePost from './pages/CreatePost'
import AllJobs from './pages/AllJobs'
import AdminView from './pages/AdminView'
import Login from './pages/Login.jsx'
import SavedJobs from './pages/SavedJobs.jsx'
import { useRoutes, Link } from 'react-router-dom'


const API_URL = process.env.NODE_ENV === 'production' ? 'https://compass-production-46e3.up.railway.app' : ''


const App = () => {

  const [user, setUser] = useState(null);
  const [userJobs, setUserJobs] = useState();

  const logout = async () => {
    const url = `${API_URL}/auth/logout`
    const response = await fetch(url, {credentials: 'include'})
    const json = await response.json()
    window.location.href = '/'
  }

  useEffect(() => {

    const getUser = async () => {
      const response = await fetch(`${API_URL}/auth/login/success`, {credentials: 'include'})
      const json = await response.json();
      setUser(json.user);

      console.log("user is", json.user.username)

      const getUserJobs = async() => {
        const response = await fetch(`http://localhost:3001/users-jobs/${json.user.username}`)
        const json2 = await response.json();
        console.log('get user jobs', json2)
        setUserJobs(json2)
      }

      await getUserJobs();

    }
    getUser();
}, []);

  let element = useRoutes([
    {
      path: '/',
      element: <Homepage  />
    },
    {
      path: '/allPosts',
      element: <AllPosts api_url={API_URL}/>
    },
    {
      path: '/allPosts/:id',
      element: <FullPost api_url={API_URL}/>
    },
    {
      path: '/new',
      element: <CreatePost api_url={API_URL} />
    }, 
    {
      path: '/newJob',
      element: <CreateJob api_url={API_URL}/>
    }, 
    {
      path: '/allJobs',
      element: <AllJobs api_url={API_URL} user = {user} />
    }, 
    {
      path: '/adminView',
      element: <AdminView api_url={API_URL}/>
    }, 
    {
      path: '/login',
      element: <Login api_url = {API_URL}/>
    }, 
    {
      path : 'savedJobs',
      element: <SavedJobs userJobs = {userJobs}/>  
    }
  ])

  return (
    <div className="App">
       <header>
        <NavBar />
      
        {user ? <div className='app-right'> 
                <button onClick={logout}>Logout</button>
                <Avatar className='avatar' user={user} /> </div>
                :  
                (
                  <div className='app-right'>
                  <Link to = "/login"><button>Login</button></Link>
                  </div>
                )
              }

       </header>

       {element}
    </div>
  )
}

export default App
