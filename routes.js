var Post = require('./models/post');

module.exports = function(router){

	router.use(function(req, res, next){
		console.log("Something is happening.");
		next();
	});

	router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
	});

	router.get('/posts', function(req, res){

		res.json([
			{
				username: 'shashi',
				body: 'node rocks!'
			}
		]);
	});

	router.post('/posts', function (req, res, next) {

		var post = new Post();
		post.name = req.body.name;

		post.save(function(err, post){
			if (err) { 
				console.log("Error " + err);
				return next(err) 
			}
			res.json({ message: 'Post created'});
		})
	});
}