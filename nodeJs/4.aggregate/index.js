//Example for Aggregate Lookup property

// The Aggregate Lookup property in Mongoose allows you to perform a join operation between multiple collections in MongoDB and retrieve the matching documents from the referenced collections.


//Suppose we have two collections: "orders" and "products". Each order document has a "productId" field that references the "_id" field of a product document. 
// We want to retrieve all orders with the corresponding product information.

// First, let's define the schemas for the "orders" and "products" collections using Mongoose:

const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

// Define the order schema
const orderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the 'Product' model
  },
  quantity: Number,
});

// Define the models
const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);


// let's perform an aggregate lookup to retrieve all orders with the corresponding product information:

Order.aggregate([
  {
    $lookup: {
      from: "products", // Collection name to join with
      localField: "productId", // Field from the 'orders' collection
      foreignField: "_id", // Field from the 'products' collection
      as: "product", // Name of the new field to store the joined data
    },
  },
]).exec((err, orders) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(orders);
});
