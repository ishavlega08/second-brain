import { model, Schema } from "mongoose";

const TagSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
});

export const TagModel = model("Tags", TagSchema);