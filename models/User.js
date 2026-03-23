const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    profile: {
        firstName: { type: String },
        lastName: { type: String },
        // Add any additional profile fields as needed
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

module.exports = User;