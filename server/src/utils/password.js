import bcyrpt from 'bcryptjs';

export class Password {
    static hash(password) {
        return bcyrpt.hashSync(password, 12);
    }
    static compare(password, hash) {
        return bcyrpt.compareSync(password, hash);
    }
}