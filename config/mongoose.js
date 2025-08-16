const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://abrarmojahidrafi1:WzpZkhzJZboAKADB@find-your-nearest-speci.0q8mf3d.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;


db.on("error", function(err){
    console.log(err);
})


db.on("open", function(){
    console.log("Connected to the database.");
})


module.exports = db;