const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db)	=>	{

if (err) {
	return console.log('Unable to connect database!');
}

console.log('Connected to MongoDB Server');

db.collection('StudentData').find({_id: 195}).toArray().then((docs)	=>	{
console.log('StudentData:');
console.log(JSON.stringify(docs, 'undefined', 2));
}, (err)	=>	{
console.log('Unable ot fetch the data', err);
});






});