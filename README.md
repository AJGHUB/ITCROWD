# ITCROWD

AJowsey Notes:
See github.com/bradtraversy/devconnector_2.0 for update information
Mongo DB Atlas https://cloud.mongodb.com/v2/5ed32eea3721a97a5646d908#clusters
Postman


Installs:

1. Regular dependencies: npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
2. Dev dependencies: nmp i -D nodemon concurrently

Build Order
Back End
   
   http://localhost:5000 to postman to check server is up and running.
   Connect database to mongo atlas db string or URI > copied string from mongo atlas project
   put mongo URI string in default.json
   Connect in Mongoose connections to DB in db.js

3) Root Folder > Created folder and Files of API routes
   Create Files of API routes
   Users
   Authentication
   Profile
   Files

4) Root Folder create User model files 
   User model
   ~ get users model set up for end points to reg user to interact with db
    bring in mongoose and create schemas
   send email
   password
   set up mongoose model with fields for user

 5. Registation Route to register users/ Implement express validator for email clean response feedback
   using postman and mongo atlas to read if user is registered 

