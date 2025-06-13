import mongoose, { Schema } from "mongoose";

const genreSchema = new Schema({
    name: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 50
    }
}, { timestamps: true });

const Genre = new mongoose.model("Genre", genreSchema);

export default Genre;