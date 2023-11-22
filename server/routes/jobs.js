import jobsController from '../controllers/jobs.js'
import cors from 'cors'
import express from 'express'

const router = express.Router()

router.use(cors({
    origin: 'https://compass-production-46e3.up.railway.app/',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    credentials: true
}));

router.get('/', jobsController.getJobs)
router.get('/:id', jobsController.getJobById)

router.post('/', jobsController.createJob)
router.patch('/:id', jobsController.updateJob)

router.delete('/:id', jobsController.deleteJob)

export default router