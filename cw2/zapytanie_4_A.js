//Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości

var result = db.people.aggregate([	   
	{
		$addFields: {			 
			bmi: { $divide: [ { $multiply: [ { $toDouble: "$weight" }, 10000 ] },   
							{ $pow: [ { $toDouble: "$height" }, 2 ]  }
							] } 
			}
	},
	{
		$group: { 
			_id: "$nationality",
			avgBmi: { $avg: "$bmi" },
			minBMI: { $min: "$bmi" },
			maxBMI: { $max: "$bmi" }
			}
	}
]);

printjson(result.toArray());