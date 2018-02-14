var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose/');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/voteapp";

app.use(express.static(__dirname +'/client'));
//initialize body parser
app.use(bodyParser.json());

//connect to mongoclient
MongoClient.connect(url,function(err,db){
    if(err){throw err;}
    console.log('voteapp is created')
    db.close();
})
//object created
Snack = require('./models/snack');
User = require('./models/user');

//connect to mongoose
mongoose.connect('mongodb://localhost/voteapp')
var db = mongoose.connection;
//function to main page
app.get('/',function(req,res){
    res.send('Please use /api/snacks or api/user');
});
//to get all snacks
app.get('/api/snacks',function(req,res){
   
    Snack.getSnack(function(err,snacks){
        if(err){
            console.log('I am in snacks collection'); 
            throw err;
        }
        
        res.json(snacks);
    });
});
//funtion to get all users
app.get('/api/users',function(req,res){
    User.getUser(function(err,users){
        if(err){
            console.log('I am user Collection'); 
            throw err;
        }
        
        res.json(users);
    });
});
// funtion to get user of given id
app.get('/api/users/:_id',function(req,res){  
    User.getUserById(req.params._id,function(err,user){
        if(err){
            console.log('I am  in user by id Collection'); 
            throw err;
        }      
        res.json(user);
    });
});
//function to get snack of given id
app.get('/api/snacks/:_id',function(req,res){  
    Snack.getSnackById(req.params._id,function(err,snack){
        if(err){
            console.log('I am here to read snack Collection'); 
            throw err;
        }
        res.json(snack);
    });
});
//funtion to add user
app.post('/api/users',function(req,res){
    var user = req.body;
    User.addUser(user,function(err,user){
        if(err){
            console.log('I am here to user Collection'); 
            throw err;
        }    
        res.json(user);
    });
});
//function to update user
app.put('/api/users/:_id',function(req,res){
    var id = req.params._id;
    var user = req.body;
    User.updateUser(id,user,{},function(err,user){
        if(err){
            console.log('I am here to update user Collection'); 
            throw err;
        }      
        res.json(user);
    });
});
//function to delete
app.delete('/api/users/:_id',function(req,res){
    var id = req.params._id;
    var user = req.body;
    User.deleteUser(id,function(err,user){
        if(err){
            console.log('I am here to delete user Collection'); 
            throw err;
        }      
        res.json(user);
    });
});

//to update snack
app.put('/api/snacks/:_id',function(req,res){
    var id = req.params._id;
    var snack = req.body;
    Snack.updateSnack(id,snack,{},function(err,snack){
        if(err){
            console.log('I am here to update user Collection'); 
            throw err;
        }      
        res.json(snack);
    });
});




app.listen(3000);
console.log('running on port 3000');