import NavBar from "../components/NavBar"
import {Link} from 'react-router-dom';
import './stylesheets/Homepage.css';

const Homepage = () => {

    return (
        <div className="mainPage">


            <div className = "section1">
            <center> <h1>Career Compass</h1> </center>
            <p>Connecting CS students, professionals, and mentors to opportunities and networks.</p>
            <img src = ""/>
            </div>

            <div className="section2">
                <div>
                    <h2>Join the community!</h2>
                </div>
                <Link to = ""><button>Create an account</button></Link>
                <Link to = "/new"><button>Make a post</button></Link>
            </div>


            <div className="section3">
                <div>
                    <h2>Discover</h2>
                </div>

                <p>Explore opportunities and networks in the CS field.</p>
                <Link to = "/allJobs"><button>View Jobs</button></Link>
                <Link to = '/allPosts'><button>View Posts</button></Link>
            </div>
        </div>
    )
}

export default Homepage