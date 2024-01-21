import mongoose, { Schema } from "mongoose";

export const SKILL_TABLE = "skill";
const schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
},
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.__v;
                delete ret._doc.__v;
            },
        },
    });

export const Skill = mongoose.model(SKILL_TABLE, schema);