import mongoose, { Schema } from "mongoose";

export const ADDRESS_TABLE = "ADDRESS";

const schema = new Schema({
    isCurrent: { type: String, default: false },
    address: { type: String, default: "" },
    address1: { type: String, default: "" },
    landmark: { type: String, default: "" },
    state: { type: String, default: "" },
    city: { type: String, default: "" },
    pincode: { type: String, default: "" }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
        }
    }
})

export const Address = mongoose.model(ADDRESS_TABLE, schema);