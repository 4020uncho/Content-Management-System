//Mongoose instructs the mongobdb how to store the data
const mongoose = require("mongoose");

const blogshcema =  mongoose.Schema({ //schema defines the structure of the document
    title : {
        type : String,
        required : true,
        
    },
    subtitle :{
        type : String,
        
    },
    Description :{
        type : String,
        
    },
},{
    timestamps : true,
})

//giving order to mongoose to create a model and store it in a constant blog

const Blog = mongoose.model("Blog",blogshcema) //model is a class with which we construct documents
module.exports = Blog;

// Alternative
// module.exports = mongoose.model("Blog",blogshcema) 
