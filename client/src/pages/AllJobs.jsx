import React, { useEffect, useState } from 'react';
import './stylesheets/AllJobs.css';

const AllJobs = (props) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch(`${props.api_url}/jobsRoute/`)
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error:', error));
    }, []);

   
    const saveJob = (job) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: props.user.username, jobId : job.id})
        }

        try{
            fetch(`http://localhost:3001/users-jobs/${props.user.username}/${job.id}`, options);

            console.log('Job saved successfully');        
        } catch (error){
            console.error('Error', error);
        }
    }

    return (
        <div className="jobs">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Link to posting</th>
                        <th>Save job</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>{job.description.substring(0,150)}</td>
                            <td>{job.category}</td>
                            <td>{job.url}</td>
                           <td><button onClick={() => saveJob(job)}>🔖</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;