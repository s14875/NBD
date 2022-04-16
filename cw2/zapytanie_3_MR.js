//Listę unikalnych zawodów

var mapFunction = function()
	{ 
		emit(this.job, null);	
	};
	
var reduceFunction = function(key, values)
	{		
		return null;
	};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{
		out: "mr3" 
	});
	


printjson(db.mr3.find({}, { _id: 1}).toArray());