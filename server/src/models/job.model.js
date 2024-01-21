import mongoose, { Schema } from 'mongoose';
import { COMPANY_TABLE } from './company.model.js';

export const JOB_TABLE = "job";

const schema = new Schema({
    company: { type: Schema.ObjectId, ref: COMPANY_TABLE },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    experience: { type: Number, default: 0 },
    skills: [String],
    location: { type: String, default: "" },
    jobType: { type: String, default: "fulltime", enum: ["partime", "fulltime", "contract"] },
    position: { type: Number, default: 0 },
    isClose: { type: Boolean, default: false },
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