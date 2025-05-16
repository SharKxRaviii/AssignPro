import jwt from 'jsonwebtoken';

export const jwtAuth = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token) {
        return res.status(401).json({message: "Unauthorized: No token provided"});
    }

    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        console.log("payload: ", payload);
        req.id = payload._id;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    
}