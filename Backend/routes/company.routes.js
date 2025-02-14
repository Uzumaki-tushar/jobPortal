import express from 'express';

import authenticatedToken from '../middleware/isAuthenticated.js';
import { registerCompany, getCompanyById, updateCompany, getAllCompanies } from '../controllers/company.controller.js';
import authenticateToken from '../middleware/isAuthenticated.js';

const router =express.Router();

router.route("/register").post(authenticateToken,registerCompany);
router.route('/get/:id').get(authenticateToken,getCompanyById);
router.route("/update/:id").put(authenticateToken,updateCompany);
router.route('/get').get(authenticateToken,getAllCompanies);

export default router;