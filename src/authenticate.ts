import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ message: 'Unauthorized' });

    jwt.verify(token, process.env.ENCRYPT_KEY, (err, value) => {
        if (err) return res.status(401).send({ message: 'Unauthorized' });
        req.userId = value.userId;
        next();

    });
};

export {
    authenticate
}