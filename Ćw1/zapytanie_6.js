printjson(db.people.insertOne(
	
	{		
		"sex" : "Male",
		"first_name" : "Maciej",
		"last_name" : "Kozłowski",
		"job" : "student",
		"email" : "s14875@pjwstk.edu.pl",
		"location" : {
			"city" : "Warszawa",
			"address" : {
				"streetname" : "Nowogrodzka",
				"streetnumber" : "86"
			}
		},
		"description" : "To jest insert mojej osoby do bazy",
		"height" : "199.9",
		"weight" : "99.9",
		"birth_date" : "1920-02-21T02:55:03Z",
		"nationality" : "Poland",
		"credit" : [
			{
				"type" : "switch",
				"number" : "6711988111910009869",
				"currency" : "PLN",
				"balance" : "990.09"
			}
		]
	}
	
	));