import mongoose from "mongoose";
// Create a product schema 
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String },
    stock: { type: Number },
    rating: { type: Number },
    reviews: { type: Number },
    image: { type: String },
    sku: { type: String },
    weight: { type: Number },
    color: { type: String },
    dimensions: { type: String },
  },
  { 
    timestamps: true,
    collection: 'products' // to conferm collection name 
  }
);

// create a new model or use existing model
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;