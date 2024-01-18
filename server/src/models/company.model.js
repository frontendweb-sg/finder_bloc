import mongoose, { Schema } from 'mongoose';
const COMPANY_TABLE = "COMPANY";

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, default: "" },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    location: {
        address: { type: String },
        city: { type: String },
        pincode: { type: String }
    }
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            ret.id = ret._id;
        }
    }
});

export const Company = mongoose.model(COMPANY_TABLE, schema);