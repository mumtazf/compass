import React, {useState, useEffect} from 'react';
import './stylesheets/AllJobs.css'

const SavedJobs = (props) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

    },[])

    if (!props.userJobs) {  
        return <div>Loading...</div>;  // Render a loading message while waiting for props.userJobs to be defined
    }

    return (
        
        <div className="jobs">
            <h1>Saved Jobs</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Link to posting</th>
                    </tr>
                </thead>
                <tbody>
                    {props.userJobs.map((job) => (
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>{job.description}</td>
                            <td>{job.category}</td>
                            <td>{job.url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SavedJobs;
