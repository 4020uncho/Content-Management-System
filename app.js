const app = require("express")();
const {connectdatabase} = require("./database/database");
const Blog = require("./model/blogModel");

//Database connection
connectdatabase();

//DNS configuration to use specific DNS servers
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8", "1.0.0.1", "8.8.4.4"]);

//nodejs lai form bata aako data parse gar vaneko ho
app.use(require("express").json());
app.use(require("express").urlencoded({extended:true}));

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

//create blog api
app.post("/createBlog",async (req,res)=>{
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const Description = req.body.Description;
    //Alternative{obect destructuring}
    // const {title,subtitle,description}=req.body

    // res.status(200).json({
    //     status : "Blog created successfully"
    // })
//inserting data to database
     await Blog.create({
        title,
        subtitle,
        Description  
    })


    res.json({
        status : 201,
        message : "Blog created successfully"
    })
});


//server listening
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})