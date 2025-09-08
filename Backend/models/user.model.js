const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const userschema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlenght:[3, 'First name must be at least 3 characters long'],
        },
        lastname:{
            type: String,
            minlenght:[3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlenght: [ 5, 'Email must be at least 5 characters long' ],
    },
    password: {
        type: String,
        required: true, 
        select: false, // This will not return the password in the response
    },
    socketId: {
        type: String,
    },



})

userschema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET);
    return token;
}

userschema.methods.comparePassword = async function (passord) {
    return await bcrypt.compare(password, this.password);
}

useSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('User',userSchema);




module.exports = userModel;
// This code defines a Mongoose schema for a user model, including methods for generating authentication tokens and comparing passwords.
// It also exports the UserModel for use in other parts of the application.
