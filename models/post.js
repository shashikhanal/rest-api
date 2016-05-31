var db = require('../db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	name: { type: String, require: true }
});

module.exports = mongoose.model('Post', PostSchema);