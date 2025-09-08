const mongoose = require('mongoose');



function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => console.log(err));

}



module.exports = connectToDb;
// This function connects to the MongoDB database using Mongoose.