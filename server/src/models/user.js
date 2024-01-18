import mongoose, { Schema } from 'mongoose';
import { Password } from '../utils/password.js';

export const USER_TABLE = "USER";

const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    accessToken: { type: String, default: "" },
    active: { type: Boolean, default: true },
    role: { type: String, default: "user", enum: ["user", "company", "admin"] },
    mobile: { type: String, required: true, unique: true },
    jobs: { type: [Schema.ObjectId], default: [] }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
            delete ret.password
        }
    }
});

schema.pre("save", function cb(done) {
    const pwd = this.get("password");
    if (this.isModified("password")) {
        this.set("password", Password.hash(pwd));
    }
    if (this.get('role') === "admin") this.set("emailVerified", true);
    done()
});

export const User = mongoose.model(USER_TABLE, schema);