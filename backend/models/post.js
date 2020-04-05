const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String},
  content: { type: String },
  imagePath: { type: String}
},{timestamps: true});

module.exports = mongoose.model('Post', postSchema);
