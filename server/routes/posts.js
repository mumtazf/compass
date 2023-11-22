import express from 'express'
import PostsController from '../controllers/posts.js'
import cors from 'cors'

const router = express.Router()


router.use(cors({
    origin: 'https://compass-production-46e3.up.railway.app/',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    credentials: true
}));

router.get('/', PostsController.getPosts)
router.get('/approval', PostsController.getPostsForApproval)
router.get('/:id', PostsController.getPostById)

router.post('/', PostsController.createPost)
router.delete('/:id', PostsController.deletePost)
router.patch('/:id', PostsController.updatePost)

export default router