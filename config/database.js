const mongoose = require("mongoose")

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("DB ka connection succesfull"))
    .catch((error) => {
        console.log("Issue in DB connection")
        console.error(error.message)
        //kya hai yeh
        process.exit(1);
    });
}

module.exports = dbConnect; 