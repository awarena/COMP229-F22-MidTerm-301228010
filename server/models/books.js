/*
File name: books
Author's name: Viet Nguyen Hoang
StudentID: 301228010
Wep App name: Favourite Book List
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
  Title: String,
  Description: String,
  Price: Number,
  Author: String,
  Genre: String
},
  {
    collection: "books_list"
  });

module.exports = mongoose.model('Book', Book);
