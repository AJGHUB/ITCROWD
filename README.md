# ITCROWD

AJowsey Notes:
See github.com/bradtraversy/devconnector_2.0 for update information
Mongo DB Atlas https://cloud.mongodb.com/v2/5ed32eea3721a97a5646d908#clusters
Postman

Installs:

1. Regular dependencies: npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
2. Dev dependencies: nmp i -D nodemon concurrently

terminal use this one in development 'npm run server'

Build Order
Back End

http://localhost:5000 to postman to check server is up and running.
Connect database to mongo atlas db string or URI > copied string from mongo atlas project
put mongo URI string in default.json
Connect in Mongoose connections to DB in db.js

3. Root Folder > Created folder and Files of API routes
   Create Files of API routes | Users | Authentication | Profile | Files

4. Root Folder create User model files
   User model | get users model set up for end points to reg user to interact with db
   bring in mongoose and create schemas | send email | password
   set up mongoose model with fields for user

5. Registation Route to register users/ Implement express validator for email clean response feedback using postman and mongo atlas to read if user is registered with JWT token json webtoken.

6. User ID payload: Implement JWT > jwt package is installed. User is created hash the password | save user in db | get payload with user id | sign token | pass in payload | pass in the secret & give expiration | inside call back we get error or token if we get token then token is sent to client.

7. Create custom middleware to verify jsn tokenthat comes in from client when its sent back to server.

8. Log in users already in database in routes api we are validating user.
   Authentication for back end is complete: Register, Log In, Get token, Protect routes.

9. PROFILE API model routes fields: with all the relevant fields
   Get/Create/Update/Get all/Delete
10. Post API Routes > Create/Add/Get/Delete/Post/Like-Unlike/Add remove comment.

FRONT END

In pkg json Add: "client": "npm start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\""  
to run front and back then terminal> npm run dev

In client Installed: npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment
Removed files logo | service worker |css
