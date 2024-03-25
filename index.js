const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse  json request bodie
app.use(express.json());


//import routes for TODO API
const todoRoutes = require("./routes/todos")
//mount the tool ASPI routes  
app.use("/api/v1", todoRoutes);


//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connection to database
const dbconnect = require("./config/database")
dbconnect();

// default Route 
app.get("/",(req,res) =>{
    res.send(`<h1> This id HOMEPAGE baby 12</h1>`);
})