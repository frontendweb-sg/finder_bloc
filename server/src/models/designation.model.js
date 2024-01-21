import mongoose, { Schema } from 'mongoose'
// skills schema
export const DESIGNATION_TABLE = "designation";
const designationSchema = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true },
        active: { type: Boolean, default: true },
        insertAt: { type: Date, default: Date.now },
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.__v;
                delete ret._doc.__v;
            },
        },
    }
);

export const Designation = mongoose.model(DESIGNATION_TABLE, schema);