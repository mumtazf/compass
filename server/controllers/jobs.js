import {pool} from '../config/database.js'

const getJobs = async (req, res) => {
    try{
        const jobsQuery = await pool.query(`SELECT * FROM jobs`);
        res.status(200).json(jobsQuery.rows);
    } catch(error){
        res.status(404).json({error: error.message})
    }
}

const getJobById = async (req, res) => {   
    try{
        const id = parseInt(req.params.id)
        const getJob = await pool.query(`SELECT * from jobs WHERE id = $1`, [id])

        res.status(200).json(getJob.rows[0]);
    }catch(error){
        res.status(404).json({error: error.message})
    }
}

const createJob = async (req,res) => {
    console.log("hello from job")
    try {
        const { title, description, date, category, company, location, url, remote } = req.body
        const insertQuery = await pool.query(`
        INSERT INTO jobs (title, description, date, category, company, location, url, remote)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *`,
        [title, description, date, category, company, location, url, remote])

        res.status(201).json(insertQuery.rows[0])
    } catch(error){
        console.log(error.message)
        res.status(409).json({error: error.message})
    }
}

const updateJob = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        //taking all the parameters that we need
        const { title, description, date, category, company, location, url, remote } = req.body

        const updateQuery = await pool.query(`
            UPDATE jobs SET title = $1, description = $2, date = $3, category = $4, company = $5, location = $6, url = $7, remote = $8`,
            [title, description, date, category, company, location, url, remote]
        )


        res.status(200).json(updateQuery.rows[0])

    } catch(error){
        res.status(409).json({error: error.message})
    }
}

const deleteJob = async (req, res) => {
    try{
        const id = req.params.id;
        const deleteQuery = await pool.query(`
            DELETE FROM jobs WHERE id = $1`,[id]
        )
        res.status(200).json(deleteQuery.rows[0])        
    } catch(error){
        res.status(409).json({error: error.message});
    }
}

export default  {
    getJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
} ;