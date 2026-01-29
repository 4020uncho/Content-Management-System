const app = require("express")();
const {connectdatabase} = require("./database/database");

//Database connection
connectdatabase();

//DNS configuration to use specific DNS servers
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8", "1.0.0.1", "8.8.4.4"]);

//database connection
// mongoose.connect("mongodb+srv://uncholimbu5_db_user:4020@cluster0.9rc4eaz.mongodb.net/?appName=Cluster0")
// .then(()=>{
//     console.log("Database connected successfully");
// })

//get api
app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to the Content Management System"
    })
});


//server listening
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})