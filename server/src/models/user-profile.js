import mongoose, { Schema } from 'mongoose';
import { JOB_TABLE } from './job.model.js';
import { USER_TABLE } from './user.js';
import { ADDRESS_TABLE } from './address.model.js';
import { SKILL_TABLE, Skill } from './skill.model.js';
import { DESIGNATION_TABLE } from './designation.model.js';

/**
 * Profile schema
 */

export const Skills = {
    language: { type: Schema.ObjectId, ref: SKILL_TABLE },
    rating: { type: Number }
};

export const Language = {
    read: { type: Boolean, default: false },
    write: { type: Boolean, default: false },
    speak: { type: Boolean, default: false }
}

export const Education = {
    collegeName: { type: String },
    degree: { type: String },
    grade: { type: String },
    location: { type: String },
    pincode: { type: String },
    current: { type: Boolean, default: false },
}

export const Experience = {
    designation: { type: Schema.ObjectId, ref: DESIGNATION_TABLE },
    info: { type: String },
    companyName: { type: String },
    current: { type: Boolean, default: false },
    fromDate: { type: Date, default: null },
    toDate: { type: Date, default: null },
    location: { type: String, default: '' }
}

const USER_PROFILE_TABLE = "USER-PROFILE";
const schema = new Schema({
    user: { type: Schema.ObjectId, ref: USER_TABLE, },
    dob: { type: Date, default: null },
    gender: { type: String, default: "male", enum: ["Male", "Female", "Unknown"] },
    avatar: { type: String, default: "" },
    resume: { type: String, default: "" },
    website: { type: String, default: "" },
    about: { type: String, default: "" },
    gitusername: { type: String, default: "", },
    noticePeriod: { type: Number, default: 0 },
    appliedJobs: { type: Schema.ObjectId, ref: JOB_TABLE },
    salary: { type: Number, default: 0.0 },
    totalExperience: { type: Number, default: 0 },
    skills: [Skills],
    educations: [Education],
    experiences: [Experience],
    address: { type: Schema.ObjectId, ref: ADDRESS_TABLE },
    languages: [Language]
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
        }
    }
});

export const UserProfile = mongoose.model(USER_PROFILE_TABLE, schema);