// Add indexing for Schema's

const mongoose = require("mongoose");

// Define your schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add indexes to the schema
userSchema.index({ username: "text" });

const UserModel = mongoose.model("User", userSchema);

// when we do aggregate query
const searchQuery = {
  $match: { $text: { $search: "it search on the indexing field" } },
};
