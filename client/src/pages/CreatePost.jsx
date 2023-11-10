import {useState} from 'react';
import './CreatePost.css';

const CreatePost = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;

    let year = date.getFullYear();
    let currentDate = year + '-' + month + '-' + day;

    const [post, setPost] = useState({
        username: '',
        title: '',
        description: '',
        date: currentDate,
        category: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const createPost = (e) => {
        e.preventDefault();

        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),
        }

        try{
            fetch('http://localhost:3001/postsRoute/', options);          

        } catch(error){
            console.error('Error: ', error);
        }
    }

    


    return (
        <div className = 'CreatePost'>
            <center><h2>Post Now!</h2></center>
            <form>
                <label>Username</label>
                <input type = 'text' id = 'username' name = 'username' value = {post.username} onChange = {handleChange} placeholder = 'Enter your username' required />

                <label>Title</label>
                <input type = 'text' id = 'title' name = 'title' value = {post.title} onChange = {handleChange} placeholder = 'Enter your title' required />

                <label>Description</label>
                <input type = 'text' id = 'description' name = 'description' value = {post.description} onChange = {handleChange} placeholder = 'Enter your description' required />


                <label for = "category">Choose a category:</label>
                <select id = "category" name = "category">
                    <option value = "career">Career Advice</option>
                    <option value = "education">Courses</option>
                    <option value = "company">Company Question</option>
                    <option value = "interview">Interview Questions</option>
                    </select>

                <input type = 'submit' value = 'Post' onClick = {createPost} />

            </form>
        </div>
    )
}

export default CreatePost