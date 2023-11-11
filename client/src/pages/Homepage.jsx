import NavBar from "../components/NavBar"
import {Link} from 'react-router-dom';
import './stylesheets/Homepage.css';

const Homepage = () => {

    return (
        <div className="mainPage">


            <div className = "section1">
                <center>
                    <h1>Career Compass</h1>
                    <p>Connecting CS students, professionals, and mentors to opportunities and networks.</p>
                    <img src = "https://img.freepik.com/free-vector/job-promotion-concept-illustration_114360-19315.jpg?w=1060&t=st=1699668166~exp=1699668766~hmac=f13008fcead85d17b36a22e8cb182d15b6ce6ca1c1d8a2f900fa54ea862452f8"/>
"
                </center>
            </div>

            <div className="section2">
                    <h2>Join the community!</h2>

                <div className="section2-part2">
                    <div className="section2-part1">
                        <p>Connect with students and professionals all over the world. Share your top programming tips, ask for advice, discuss interview prep resources, and more! </p>
                        <div>
                            <Link to = ""><button>Create an account</button></Link>
                            <Link to = "/new"><button>Make a post</button></Link>
                        </div>
                    </div>
                    <img src = "https://img.freepik.com/free-vector/people-meeting-online-via-video-conference-flat-illustration-cartoon-group-colleagues-virtual-collective-chat-during-lockdown_74855-14136.jpg?w=1060&t=st=1699676983~exp=1699677583~hmac=302da3974f0ff5fed96fc4b73bd575e102064acaab87e78df9270ace27320097" />
                </div>
                
            <div>       
        </div>
    </div>


            <div className="section3">
                <h2>Discover</h2>

                <div className="section3-part1">
                    <img src = "https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?w=1060&t=st=1699677695~exp=1699678295~hmac=70b34b1bbc9c5e2c646d29d1142f31a85b9de5080cfb4fe6ae4d1363653947a3" alt = "image of office professionals searching using binoculars"/>

                    <div className="section3-part2">
                        <p>Explore opportunities and networks in the CS field.</p>
                        <div>
                            <Link to = "/allJobs"><button>View Jobs</button></Link>
                            <Link to = '/allPosts'><button>View Posts</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage