import express from 'express';
import uploadFile from '../../middlewares/fileUploads.middleware.js';
import fileValidator from '../../middlewares/fileValidator.middleware.js';
import { handleFileUpload } from './controller.js';

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', uploadFile.single('file'), fileValidator, handleFileUpload);

export default uploadRoutes;
