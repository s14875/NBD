//Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet); 

var result = db.people.aggregate([	   
	{
		$group: { 
			_id: "$sex",
			avgWeight: { $avg: { $toDouble: "$weight" } }, 
			avgHeight: { $avg: { $toDouble: "$height" } } 
			}
	}
]);

printjson(result.toArray());