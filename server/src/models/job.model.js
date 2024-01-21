import mongoose, { Schema } from 'mongoose';

export const JOB_TABLE = "JOB";

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
        }
    }
});

export const Job = mongoose.model(JOB_TABLE, schema);