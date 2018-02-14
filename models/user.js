var mongoose = require('mongoose');

//schema
var userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
  
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    VotedFor:{
        type: String   
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('User',userSchema);

//get all user
module.exports.getUser = function(callback,limit){
    User.find(callback).limit(limit);
};

//get user by ID
module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
};

//add user
module.exports.addUser = function(user,callback){
    User.create(user,callback);
};
//update user
module.exports.updateUser = function(id,user,options,callback){
    var query = {_id: id};
    var update = {
        name: user.name,
        email: user.email,
        VotedFor: user.VotedFor       
    }
    User.findOneAndUpdate(query,update,options,callback);
};
//delete user
module.exports.deleteUser = function(id,callback){
    var query = {_id: id};  
    User.remove(query,callback);
};
//to post data in two collection
