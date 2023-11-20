import {useState, useEffect} from 'react'
import Card from '../components/Card'
import postData from '../data/post.js'
import '../App.css'

const AllPosts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log(props)
        const fetchPosts = async () => {
            const response = await fetch(`http://localhost:3001/postsRoute/`);
            const data = await response.json();
            setPosts(data);
        }
          fetchPosts();
    }, [])

    return (
        <div className = "allPosts">
            <h1>All Posts</h1>
            <div className='postGrid'>
                {
                    posts && posts.length > 0 ? posts.map((post) => 
                        <Card post = {post} />
                ) : <h3>{'No posts found.... '}</h3>
                }
            </div>
        </div>

    )
}

export default AllPosts