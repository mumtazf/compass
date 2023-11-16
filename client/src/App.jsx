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
import { useRoutes, Link } from 'react-router-dom'


const API_URL = `http://localhost:3001`


const App = () => {

  const [user, setUser] = useState(null);

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
      element: <AllJobs api_url={API_URL}/>
    }, 
    {
      path: '/adminView',
      element: <AdminView api_url={API_URL}/>
    }, 
    {
      path: '/login',
      element: <Login api_url = {API_URL}/>
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
