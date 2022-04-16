//Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości

var mapFunction = function()
	{ 
		var key = this.nationality;
		var heightInMeters = parseFloat(this.height) / 100;
		var bmi = parseFloat(this.weight) / (heightInMeters * heightInMeters);
		var value = { 
			count: 1, 
			bmi: bmi,
			minBmi: bmi,
			maxBmi: bmi
			};
		emit(key, value);	
	};
	
var reduceFunction = function(key, values)
	{
		var reducedVal = { 
			count: values[0].count,
			bmi: values[0].bmi,
			minBmi: values[0].minBmi,
			maxBmi: values[0].maxBmi,
			};
		
		for(var i = 1; i< values.length; i++)
		{
			reducedVal.count += values[i].count;
			reducedVal.bmi += values[i].bmi;
			
			if (values[i].minBmi < reducedVal.minBmi)
				reducedVal.minBmi = values[i].minBmi;
			
			if (values[i].maxBmi > reducedVal.maxBmi)
				reducedVal.maxBmi = values[i].maxBmi;
		}
		
		return reducedVal;
	};
	
var finalizeFunction = function(key, reducedValue)
	{
		return {
			avgBmi: reducedValue.bmi / reducedValue.count,
			minBmi: reducedValue.minBmi, 
			maxBmi: reducedValue.maxBmi
			};
	};

db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{
		finalize: finalizeFunction,
		out: "mr4" 
	});
	


printjson(db.mr4.find({}).toArray());