//Listę unikalnych zawodów

var result = db.people.aggregate([	  
	{
		$group: { 
			_id: "$job" 
			}
	}
]);

printjson(result.toArray());