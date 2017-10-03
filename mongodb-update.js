const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db)	=>	{

if (err) {
	return console.log('Unable to connect database!');
}
var ast = '*';
console.log(ast.repeat(60));
console.log('Connected to MongoDB Server');

db.collection('StudentData').findOneAndUpdate({
	course: 'Web Designing',
}, {
	$set: {
		course: 'Website Development',
	},
	$inc: {
		age: 1,
	}
}, {
	returnOriginal: false
}).then((result)	=>	{
	console.log(result);
});


console.log('Another changes are made!');
console.log(ast.repeat(60));




});