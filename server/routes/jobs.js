import jobsController from '../controllers/jobs.js'
import express from 'express'

const router = express.Router()

router.get('/', jobsController.getJobs)
router.get('/:id', jobsController.getJobById)

router.post('/', jobsController.createJob)
router.patch('/:id', jobsController.updateJob)

router.delete('/:id', jobsController.deleteJob)

export default router