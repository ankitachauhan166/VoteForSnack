var mongoose = require('mongoose');

//schema
var snackSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
  
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Snack = module.exports = mongoose.model('Snack',snackSchema);

//get snack
//get all user
module.exports.getSnack = function(callback,limit){
    Snack.find(callback).limit(limit);
};


//get snack by ID
module.exports.getSnackById = function(id,callback){
    Snack.findById(id,callback);
};

//update snack
module.exports.updateSnack = function(id,snack,options,callback){
    var query = {_id: id};
    var update = {        
        VoteRecevied: snack.VotedFor    
    }
    Snack.findOneAndUpdate(query,update,options,callback);
};

 