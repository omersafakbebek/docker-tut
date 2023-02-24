const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    }
})

module.exports = mongoose.model('Users',UserSchema);