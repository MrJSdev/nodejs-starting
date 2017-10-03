const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db)	=>	{

if (err) {
	return console.log('Unable to connect database!');
}

console.log('Connected to MongoDB Server');

db.collection('StudentData').findOneAndDelete({
	_id: 208,
}).then((result)	=>	{
console.log(result);
});

console.log('Another changes are made!');





});