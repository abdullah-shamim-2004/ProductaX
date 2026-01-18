import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
// if there is no mongodb uri then throw an error
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
// cache the connection on global veriable
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
  }
  cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    console.log("New Mongodb connection.");
    return mongoose;
  });
  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }
  return cached.conn;
}
export default connectDB;
