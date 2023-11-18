import React, {useState, useEffect} from 'react';
import './stylesheets/AllJobs.css'

const SavedJobs = (props) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        console.log("props are" , props)
        setJobs(props.userJobs);
    })

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
                            <td>{job.description}</td>
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

export default SavedJobs;
