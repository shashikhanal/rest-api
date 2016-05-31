var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rest-api', function(){
	console.log('mongo-db connected')
});

module.exports = mongoose;