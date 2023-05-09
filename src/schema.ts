import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
});
