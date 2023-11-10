import {pool} from '../config/database.js'
const getPosts = async (req, res) => {  
    try{
        const posts = await pool.query(`SELECT * FROM posts`)
        res.status(200).json(posts.rows)
    } catch (error){
        res.status(404).json({error: error.message})
    }
}

const getPostById = async (req, res) => {   
    try{
        const id = parseInt(req.params.id)
        const getPost = await pool.query(`SELECT * from posts WHERE id = $1`, [id])

        res.status(200).json(getPost.rows[0]);
    }catch(error){
        res.status(404).json({error: error.message})
    }
}

const createPost = async (req,res) => {
    console.log("hello from createpost")
    try {
        const { username, title, description, date, category } = req.body
        const insertQuery = await pool.query(`
        INSERT INTO posts (username, title, description, date, category)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,
        [username, title, description, date, category])

        res.status(201).json(insertQuery.rows[0])
    } catch(error){
        console.log(error.message)
        res.status(409).json({error: error.message})
    }
}

const updatePost = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        //taking all the parameters that we need
        const { username, title, description, date, category } = req.body

        const updateQuery = await pool.query(`
            UPDATE posts SET username = $1, title = $2, description = $3, date = $4, category = $5`,
            [username, title, description, date, category, id]
        )

        res.status(200).json(updateQuery.rows[0])

    } catch(error){
        res.status(409).json({error: error.message})
    }
}

const deletePost = async (req, res) => {
    try{
        const id = req.params.id;
        const deleteQuery = await pool.query(`
            DELETE FROM posts WHERE id = $1`,[id]
        )
        res.status(200).json(deleteQuery.rows[0])        
    } catch(error){
        res.status(409).json({error: error.message});
    }
}

export default  {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
} ;