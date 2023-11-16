import express from 'express';
import userJobsController from '../controllers/users-jobs.js'

const router = express.Router()

router.put('/create/:job_id', userJobsController.createSavedJobs)
router.get('/users/:username', userJobsController.getSavedJobs)

export default router