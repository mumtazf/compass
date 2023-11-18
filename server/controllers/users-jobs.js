import { pool } from '../config/database.js';

const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
        id serial PRIMARY KEY,
        githubid int NOT NULL,
        username varchar(200) NOT NULL,
        avatarurl varchar(500),
        accesstoken varchar(500) NOT NULL
    );
`

const createSavedJobsQuery = `
CREATE TABLE IF NOT EXISTS users_saved_jobs (
    id serial PRIMARY KEY,
    job_id int NOT NULL,
    username text NOT NULL,
    FOREIGN KEY (job_id) REFERENCES jobs(id)
);
`

pool.query(createUsersTableQuery, (error, res) => {
    if(error){
        console.log(error)
        return
    }

    console.log('✅ users table created successfully.');
})

pool.query(createSavedJobsQuery, (error, res) => {
    if(error){
        console.log(error)
        return
    }

    console.log('✅ users_saved_jobs created successfully!')
})

 const createSavedJobs = async(req, res) => {

    try{
        const { username, jobId } = req.body;


        const results = await pool.query(`
            INSERT INTO users_saved_jobs(job_id, username)
            VALUES ($1, $2)
            RETURNING *`,
            [jobId, username]
        )

        res.status(200).json(results.rows[0])
        console.log('🆕 job added to users saved jobs')
    } catch(error){
        res.status(409).json({error: error.message})
        console.log('error')
        console.log("Error:", error. message)
    }
}

//TODO PROPERLY CAUSE I DUNNO HOW TO RETRIEVE ALL JOBS BASED ON USERNAME

const getSavedJobs = async(req,res) => {
    const {username} = req.params
    console.log('hi from getsavedjobs')
    try{
        const getSavedJobsQuery = await pool.query(`
            SELECT jobs.* FROM jobs
            INNER JOIN users_saved_jobs ON jobs.id = users_saved_jobs.id
            WHERE users_saved_jobs.username = $1`,
            [username]
        )
        
        res.status(200).json(getSavedJobsQuery.rows)

    } catch (error){
        res.status(409).json({error: error.message})
        console.log("Error: ", error.message)
    }
}

export default {
    createSavedJobs,
    getSavedJobs
}