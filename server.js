const http = require('http'); 

const mongodb = require('mongodb');
let db;
//mongoDB connect
const connectionString = 'mongodb+srv://shavgoniaziz:Aminboy7007$@cluster0.a1vwj.mongodb.net/Reja';

mongodb.connect(connectionString,
               {useNewUrlParser: true, 
                useUnifiedTopology: true,

    }, (err,client) => {  
      if(err) console.log("Error: ON MongoDb connection" );
      else {
        console.log("Connected to MongoDB successfully!");
        
        module.exports = client;
        
        const app = require ('./app') 
        const server = http.createServer(app); 
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT},  http://localhost:${PORT}`);
        });    
      }
    });