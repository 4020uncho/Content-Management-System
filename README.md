# CONTENT MANAGEMENT SYSTEM 
An online blog management system created with the MERN stack as it main technology

# issue & patchup
In the file app.js and database.js you can see the code
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8", "1.0.0.1", "8.8.4.4"]);
This was necessary as there is a known bug in the Nodejs while connecting to MongoDB as it rejects to connect with the hosts IP.
 For the context this is the forcing the nodejs for use cloudfare(1.1.1.1 family) and Google Public DNS as the only nameserver for all DNS lookup and it has no any effects on the external libraries.

# setup
To able to run this you must first install nodejs, git(For github) in your PC, or any devices.
 --For nodejs--
 Create a folder
 open terminal (Local or your code editor)
 run command --> npm init (After running this command package.json files will appear)
  After that run --> npm install express (Node modules will appear)

  --for nodemon--
  npm install nodemon(In the package.json , in the dependencies ,nodemon and its corresponding versiosn will appear)

# Documentation
Days 1-6 
-- basics of understanding the key concepts of  JS, nodeJS, its installation , Npm, Express, port numbers , JSON, Nodemon for live server , and postman for API testing , Mongodb for database. 