const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
        name: {
            type: String,
            required: true
        },
        nick: {
            type: String,
            required: true
        },
        pass: {
            type: String,
            required: true
        },
        admin: {
            type: Boolean,
            default: false,
            required: true
        }
    },

    { timestamps: true }

)

module.exports = mongoose.model('Users', User)