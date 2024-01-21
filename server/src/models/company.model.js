import mongoose, { Schema } from 'mongoose';
import { ADDRESS_TABLE } from './address.model.js';

export const COMPANY_TABLE = "company";

const schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    avatar: { type: String, default: "" },
    description: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    website: { type: String, default: "" },
    address: { type: Schema.ObjectId, ref: ADDRESS_TABLE },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            ret.id = ret._id;
        }
    }
});

export const Company = mongoose.model(COMPANY_TABLE, schema);

/**
 * Ignou (noida)
 * about: thisis cmm level company
 * rating: 4.5
 * 
 * jobs:[
 *  {
 *      title: "React developer",
 *      exp: 5 year
 *      salary: 9 to 10 lac
 *      skills: ['html','css','js','react','mongodb'],
 *      location: 'noida',
 *      period: {from: '10-3-2023',to:'10-3-2023'},
 *      isClosed: false
 *      jobType: 'part time',
 *      position: 1
 *  }
 * ]
 */