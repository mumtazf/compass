import { useState, useEffect} from 'react'
import './App.css'
import AllPosts from './pages/AllPosts'
import FullPost from './pages/FullPost'
import Homepage from './pages/Homepage'
import NavBar from './components/NavBar'
import CreateJob from './pages/CreateJob'
import CreatePost from './pages/CreatePost'
import AllJobs from './pages/AllJobs'
import { useRoutes } from 'react-router-dom'


const App = () => {


  useEffect(() => {
    
}, []);

  let element = useRoutes([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/allPosts',
      element: <AllPosts />
    },
    {
      path: '/allPosts/:id',
      element: <FullPost />
    },
    {
      path: '/new',
      element: <CreatePost />
    }, 
    {
      path: '/newJob',
      element: <CreateJob />
    }, {
      path: '/allJobs',
      element: <AllJobs />
    }
  ])

  return (
    <div className="App">
       <header>
        <NavBar />
       </header>

       {element}
    </div>
  )
}

export default App
