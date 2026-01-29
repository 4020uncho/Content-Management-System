const mongoose = require("mongoose")
//importing dns module
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8", "1.0.0.1", "8.8.4.4"]);


exports.connectdatabase = async ()=>{
    //connecting database
    await mongoose.connect("mongodb+srv://uncholimbu5_db_user:4020@cluster0.9rc4eaz.mongodb.net/?appName=Cluster0")
    console.log("Database connected successfully");
}
//async is used to define an asynchronous function
//await is used to wait for the database connection to be established before proceeding further