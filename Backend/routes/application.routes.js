import express from 'express';
import authenticateToken from '../middleware/isAuthenticated.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';

const router =express.Router();

router.route("/apply/:id").get(authenticateToken,applyJob);
router.route('/status/:id/update').post(authenticateToken,updateStatus);
router.route("/:id/applicants").get(authenticateToken,getApplicants);
router.route('/get').get(authenticateToken,getAppliedJobs);

export default router;