import jwt from 'jsonwebtoken';

export class Jwt {
    static genToken(payload) {
        return jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '1h'
        });
    }
    static verifyToken(token) {
        return jwt.verify(token, process.env.SECRET_KEY);
    }
}