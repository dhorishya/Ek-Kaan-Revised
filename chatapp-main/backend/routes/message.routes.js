import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadFilePath = path.resolve(
  __dirname,
  '../../frontend',
  'public/uploads'
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFilePath); // Set the absolute path for uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix); // Store only the filename
  },
});

const upload = multer({ storage }).single('file');

router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', upload, protectRoute, sendMessage);

export default router;
