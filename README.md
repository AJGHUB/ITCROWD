# ITCROWD

This application's purpose is to connect and promote Developers, they can build a profile and post and share ideas.
A MERN stack front to back Full Stack React, Redux & Node.js
I have created an extensive backend API with Express
Using Stateless JWT authentication practices
I have integrated React with an Express backend in an elegant way
With React Hooks, Async/Await & modern practices
Using Redux for state management
Deployed finally to Heroku with a postbuild script.



AJOWSEY BUILD NOTES 
Installs:

1. Regular dependencies: npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request uuid
2. Dev dependencies: nmp i -D nodemon concurrently

use 'nmp run dev' to run concurrently  back and front

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

Build Order
FRONT END

In pkg json Add: "client": "npm start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\""  
to run front and back then terminal> npm run dev

In client Installed: npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment
Removed files logo | service worker |css

1. Front End Start: React & concurrently set up with. Clean up of components. React router set up. Register Form and use state hook. Request example and login Form.
2. Redux Setup & Alerts Create Store |Alert Reducer with Actions & Types |Alert component & Action Call.
3. React User Authentication: Auth Reducer & Register Action
4. Dashboard & Profile Management: Routes | call Profile Action & component | Edit Profile | List & Delete Eduction and Experience Accounts
5. Profile Display: Profile actions Reducers and Display | Profile-Top Profile-About components | Education & Experience display | Github Repos Display | Profile state |
6. Posts & comments: Post Reducer Action component | Adding Deleting Posts | Like & unlike Functionality | Post display | Comment display/delete |  npm install normalize

Test site functionality and bugs
Heroku Deploy

See github.com/bradtraversy/devconnector_2.0 for update information
Mongo DB Atlas https://cloud.mongodb.com/v2/5ed32eea3721a97a5646d908#clusters > 12345alcattraz@gmail.com 
Postman















