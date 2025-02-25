import express from 'express'
import {register,login, updateProfile, homeMessage, logout } from '../controllers/user.controller.js';
import authenticatedToken from '../middleware/isAuthenticated.js';
import { singleUpload } from '../middleware/multer.js'

const router =express.Router();

router.route("/register").post(singleUpload,register);
router.route('/home').get(homeMessage);
router.route("/login").post(login);
router.route('/logout').post(logout);
router.route("/profile/update").post(authenticatedToken,singleUpload ,updateProfile);

export default router;