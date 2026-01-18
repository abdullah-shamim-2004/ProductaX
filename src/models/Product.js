import mongoose from "mongoose";

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
    collection: 'products' // আপনার ডাটাবেসের কালেকশন নাম নিশ্চিত করতে এটি যোগ করা হয়েছে
  }
);

// মডেলটি তৈরি করা বা এক্সিসটিং মডেল ব্যবহার করা
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;