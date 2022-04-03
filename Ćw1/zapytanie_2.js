printjson(db.people.find(
	{nationality:"China", sex: "Female"}
	).toArray());