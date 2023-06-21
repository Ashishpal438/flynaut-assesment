// Example for populate on a array field (where show ref id in a array)



// Let's say you have two Mongoose schemas: Author and Book. 
// The Author schema has a field called books that is an array of Book references. 
// You want to populate the books field with the actual book documents when querying for an author.


// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author' // Referencing the 'Author' model
  }
});

// Define the Author schema
const authorSchema = new mongoose.Schema({
  name: String,
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book' // Referencing the 'Book' model
  }]
});

// Create the models
const Book = mongoose.model('Book', bookSchema);
const Author = mongoose.model('Author', authorSchema);


// Find an author by their name and populate all the books 
const author = await Author.findOne({ name: "John Doe" }).populate("books");