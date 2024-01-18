import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV}` });
import mongoose from 'mongoose';

/**
 * Database connection handler
 */

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('DATABASE CONNECTED');
    } catch (error) {
        console.log(
            `
            Database error ${error}
            `
        )
    }
}

export {
    connectDb
}