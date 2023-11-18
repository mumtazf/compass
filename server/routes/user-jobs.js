import express from 'express';
import userJobsController from '../controllers/users-jobs.js'

const router = express.Router()

router.get('/:username', userJobsController.getSavedJobs)
router.post('/:username/:id', userJobsController.createSavedJobs);

export default router