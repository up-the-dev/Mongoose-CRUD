import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        unique: true
    }
})
export const RefreshTokenModel = new mongoose.model("RefreshTokenModel", refreshTokenSchema, "refreshTokens")

