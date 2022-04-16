//Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty

var result = db.people.aggregate([	 
	{
      $match: { nationality: "Poland", sex: "Female" }
	},
	{
		$unwind: {
			path: "$credit"
		}
	},  
	{
		$group: { 
			_id: "$credit.currency",
			avgBalance: { $avg: { $toDouble: "$credit.balance" } },
			totalBalance: { $sum: { $toDouble: "$credit.balance" } }
			}
	}
]);

printjson(result.toArray());