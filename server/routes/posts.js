import express from 'express'
import PostsController from '../controllers/posts.js'

const router = express.Router()

router.get('/', PostsController.getPosts)
router.get('/approval', PostsController.getPostsForApproval)
router.get('/:id', PostsController.getPostById)

router.post('/', PostsController.createPost)
router.delete('/:id', PostsController.deletePost)
router.patch('/:id', PostsController.updatePost)

export default router