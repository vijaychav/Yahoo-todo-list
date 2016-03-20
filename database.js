var mongoose = require('mongoose');

var todo = mongoose.model('todo',{
	text : String,
	updatedtime: Date
});

//connecting to mongoDB

var dbcreds = {
      "db" : "test",
      "host" : "127.0.0.1",
      "hostname" : "127.0.0.1",
      "port" : "27017" 
}
connectURL = "mongodb://" + dbcreds.hostname + ":" + dbcreds.port +"/" + dbcreds.db;    
mongoose.connect(connectURL, function(err){
	if(err)
		console.log("Couldn't connect to mongoDB");
	else
		console.log("Connected to mongoBD");
});
