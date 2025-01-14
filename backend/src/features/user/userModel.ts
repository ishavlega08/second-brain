import { model, Schema } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        }
    }, 
    { timestamps: true }
);

export const UserModel = model("Users", UserSchema);