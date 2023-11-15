import {pool} from '../config/database.js'
const getPosts = async (req, res) => {  
    try{
        const posts = await pool.query(`SELECT * FROM posts where approved = 1`)
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

const getPostsForApproval = async (req, res) => {
    try{
        const posts = await pool.query(`SELECT * FROM posts where approved = 0`) 
        res.status(200).json(posts.rows)
    } catch (error){
        res.status(404).json({error: error.message})
    }

}

const createPost = async (req,res) => {
    console.log("hello from createpost")
    try {
        const { username, title, description, date, category } = req.body
        const insertQuery = await pool.query(`
        INSERT INTO posts (username, title, description, date, category, approved)
        VALUES($1, $2, $3, $4, $5, 0)
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
        const { approved } = req.body

        const updateQuery = await pool.query(`
            UPDATE posts SET approved = $1 WHERE id = $2`,
            [approved, id]
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
    getPostsForApproval,
    updatePost,
    deletePost
} ;