printjson(db.people.deleteMany(
	{ height: {$gte: "190"} }
	));