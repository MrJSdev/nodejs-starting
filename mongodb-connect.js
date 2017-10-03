const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db)	=>	{



if (err) {
	return console.log('Unable to connect database!');
}



console.log('Connected to MongoDB Server');

/*
db.collection('Todos').insertOne({
	text: 'Something to do',
	name: 'Riyaz Khan',
	age: 29,
	completed: false

}, (err, result)	=>	{

if (err) {
	return console.log('unable to insert todo', err);
}

console.log(JSON.stringify(result.ops, 'undefined', 2));

});
 */
db.collection('StudentData').insertOne({
	_id: 208,
	id: 51,
	name: 'Shabnam Shaikh',
	age: 29,
	course: 'Web Developer',
	fees: 25000,

}, (err, result)	=>	{

if (err) {
	return console.log('unable to insert todo', err);
}

console.log(result.ops[0]);

});

db.close();


});