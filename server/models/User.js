const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

// How to export in Node.js
module.exports = User;