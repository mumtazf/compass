import React, { useEffect, useState } from 'react';
import './AllJobs.css';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('http://localhost:3001/jobsRoute/')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error:', error));
    }, []);

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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;