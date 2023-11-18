import {useState} from 'react';
import './stylesheets/CreateJob.css';

const CreateJob = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;

    let year = date.getFullYear();
    let currentDate = year + '-' + month + '-' + day;

    const [job, setJob] = useState({
        title: '',
        description: '',
        date: currentDate,
        category: '',
        company: '',
        location: '',
        url: '',
        remote: false,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setJob((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const createJob = (e) => {
        e.preventDefault();

        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job),
        }

        try{
            fetch(`${props.api_url}/jobsRoute/`, options);
            window.location = `${props.api_url}/allJobs`;
        } catch(error){
            console.error('Error: ', error);
        }
    }

    


    return (
        <div className = 'CreateJob'>
            <center><h2>Post an opportunity!</h2></center>
            <form>
                <ul>
                    <li>             
                        <label>Job Title</label>
                        <input type = 'text' id = 'title' name = 'title' value = {job.title} onChange = {handleChange} placeholder = 'Enter the job title' required />
                    </li>

                    <li>
                        <label>Company</label>
                        <input type = 'text' id = 'company' name = 'company' value = {job.company} onChange = {handleChange} placeholder = 'Enter the company' required />
                    </li>

                    <li>
                        <label for = "category">Choose a category:</label>
                        <select id = "category" name = "category">
                            <option value = "internship">Internship</option>
                            <option value = "fellowship">Fellowship</option>
                            <option value = "conference">Conference</option>
                            <option value = "apprenticeship">Apprenticeship</option>
                            <option value = "research">Research</option>
                        </select>
                    </li>

                    <li>
                        <label>Brief Description</label>
                        <input type = 'text' id = 'description' name = 'description' value = {job.description} onChange = {handleChange} placeholder = 'Enter a brief summary of the job' required />
                    </li>

                    <li>
                        <label>Link to posting</label>
                        <input type = "text" id = "url" name = "url" value = {job.url} onChange={handleChange} placeholder = "Enter the link to the job posting" required />
                    </li>

                    <li>
                        <label>Location</label>
                       <input type = 'text' id = 'location' name = 'location' value = {job.location} onChange = {handleChange} placeholder = 'Enter the location of the job (City, State)' required />
                    </li>

                    <li>
                        <label>Remote</label>
                        <input type = 'checkbox' id = 'remote' name = 'remote' value = {job.remote} onChange = {handleChange} placeholder = 'Enter if the job is remote' required />
                    </li>

                    <input type = 'submit' value = 'Post' onClick = {createJob} className='submit-button' />
                </ul>
            </form>
        </div>
    )
}

export default CreateJob