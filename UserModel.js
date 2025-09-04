import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "Nome de usuário já em uso!!"],
        trim: true,
    },
    email: {
        type: String,
        unique: [true, "E-mail já em uso!!"],
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;