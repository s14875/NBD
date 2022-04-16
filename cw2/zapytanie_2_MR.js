//Łączną ilość środków pozostałych na kartach kredytowych osób w bazie, w podziale na waluty

var mapFunction = function()
	{ 
		for(var i = 0; i < this.credit.length; i++)
		{
			var credit = this.credit[i];
			var key = credit.currency;
			var value = parseFloat(credit.balance);
			emit(key, value);
		}		
	};
	
var reduceFunction = function(key, values)
	{
		var reducedVal = 0.0;
		
		for(var i=0; i< values.length; i++)
		{
			reducedVal += values[i];
		}
		
		return reducedVal;
	};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{
		out: "mr2" 
	});
	


printjson(db.mr2.find({}).toArray());