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

//get api =>/blogs(to fetch all blogs)
app.get("/blogs",async (req,res)=>{
    //fetch all blogs from database
    const blogs = await Blog.find(); //mongoose method to fetch all documents from a collection
    if(blogs.length==0){
        res.json({
            status : 404,
            message : "No blogs fouund",
        })
    } else {
    res.json({
        status :200,
        message : "All blogs fetched successfully",
        data: blogs
    })
 }
})


//GET API -> /blogs/:id (to fetch a single blog by ID)
app.get("/blogs/:id", async (req,res)=>{
    const id = req.params.id;
   const blog=await Blog.findById(id)
   if(!blog){
    res.status(404).json({
        message : "Blog not found"
    })
   }
   res.status(200).json({
    message : "Blog fetched successfully",
    data : blog
   })
})



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

//update blog api
app.patch("/blogs/:id",async (req,res)=>{ //patch method is used to update a specific field of a document
    const id = req.params.id;
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const Description = req.body.Description;

    // const title = req.body.title;
    // const foundblogwithtitle = await Blog.find({
    //     title :title
    // })
    // foundblogwithtitle[0].Description
    // foundblogwithtitle[0].subtitle
    // await foundblogwithtitle[0].save()

     await Blog.findByIdAndUpdate(id,{
        title : title,
        subtitle : subtitle,
        Description : Description
    })

    res.status(200).json({
        message: "Blog updated successfully",
    })
})

//delete API
app.delete("/blogs/:id",async (req,res)=>{
    const id =req.params.id
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
        message : "Blog deleted successfully"
    })
})

//server listening
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})