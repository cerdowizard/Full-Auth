const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        unique: true,
        index: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        trim: true,
    },
    role: {
        type: Number,
        default: 0
    },
    avater: {
        type: String,
    }
},
{
        timestamps: true
    }
);

//Export the model
module.exports = mongoose.model('User', userSchema);