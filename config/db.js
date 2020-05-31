const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); //gets values form json file

//async await used here to connect mongoose to db- wrapped in try/catch block so an error shows if not connecting 
const connectDB = async () => {        
    try {
        await mongoose.connect(db, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex:true,
            //useFindAndModify:false
            
        });
       
        console.log('MongoDB Connected...');
    } catch(err) {
        console.log(err.message);   
        //Exit process with failure - this makes app fail to exit on purpose
        process.exit(1);     
    }
}


module.exports = connectDB

