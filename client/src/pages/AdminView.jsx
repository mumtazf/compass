import {useState, useEffect} from 'react'
import AdminCard from '../components/AdminCard'
import './stylesheets/adminView.css'

const AdminView = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:3001/postsRoute/approval');
            const data = await response.json();
            setPosts(data);
        }
          fetchPosts();
    }, [])

    return (
        <div className = "allPosts">
            <h1>Pending Posts For Approval</h1>
            <p>Please make sure that the posts adhere to community guidelines before approving them. For more information on community guidelines, please read more here.</p>
            <div className='postGrid'>
                {
                    posts && posts.length > 0 ? posts.map((post) => 
                        <AdminCard post = {post} />
                ) : <h3>{'No pending posts yet. Please check back later.... '}</h3>
                }
            </div>
        </div>

    )
}

export default AdminView;