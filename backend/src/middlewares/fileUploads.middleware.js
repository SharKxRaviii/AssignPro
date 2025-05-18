import multer from 'multer';
import path from 'path';

const uploadPath = path.join(path.resolve(), 'public', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, "_") + file.originalname);
    }
});

const uploadFile = multer({
    storage,
    limits: 5*1024*1024
});

export default uploadFile;