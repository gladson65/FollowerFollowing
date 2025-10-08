import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    // other users fields
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

}, {timestamps: true})

const userModel = mongoose.model('users', userSchema);
export default userModel;