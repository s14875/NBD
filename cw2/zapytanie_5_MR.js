//Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty

var mapFunction = function()
	{ 
		for(var i = 0; i < this.credit.length; i++)
		{
			var credit = this.credit[i];
			var key = credit.currency;
			var value = { count: 1, balance: parseFloat(credit.balance) };
			emit(key, value);
		}	
	};
	
var reduceFunction = function(key, values)
	{
		var reducedVal = { count: 0, balance: 0.0 };
		
		for(var i = 0; i< values.length; i++)
		{
			reducedVal.count += values[i].count;
			reducedVal.balance += values[i].balance;
		}
		
		return reducedVal;
	};
	
var finalizeFunction = function(key, reducedValue)
	{
		return {
			avgBalance: reducedValue.balance / reducedValue.count,
			totalBalance: reducedValue.balance
			};
	};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{
		query: { nationality: "Poland", sex: "Female" },
		finalize: finalizeFunction,
		out: "mr5" 
	});
	


printjson(db.mr5.find({}).toArray());