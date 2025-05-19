const allowedMimeTypes = [
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
];

export default function fileValidator(req, res, next) {
    const file = req.file;

    if(!file) {
        return res.status(400).json({message: "no file uploaded"});
    }

    if(!allowedMimeTypes.includes(file.mimetype)) {
        return res.status(400).json({ message: 'Invalid file type. Only CSV, XLS, and XLSX are allowed.' });
    }

    next();
} 