//Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet); 
db.people.mapReduce(
	function()
	{ 
		var key = this.sex;
		var value = { count: 1, weight: parseFloat(this.weight), height: parseFloat(this.height)};
		emit(key, value);
	},
	function(key, values)
	{
		var reducedVal = { count: 0, weight: 0.0 , height: 0.0};
		for(var i=0; i< values.length; i++)
		{
			reducedVal.count += values[i].count;
			reducedVal.weight += values[i].weight;
			reducedVal.height += values[i].height;
		}
		
		return reducedVal;
	},
	{
		finalize: function(key, reducedValue)
		{
			return {avgWeight: reducedValue.weight/reducedValue.count, avgHeight: reducedValue.height/reducedValue.count };
		},
		out: "mr1" 
	});
	


printjson(db.mr1.find({}).toArray());