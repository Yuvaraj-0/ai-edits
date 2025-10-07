import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URI;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend globalThis to include our cached property
declare global {
  // eslint-disable-next-line no-var
  var _mongoose: MongooseConnection | undefined;
}

// Use globalThis._mongoose instead of any
const cached: MongooseConnection = globalThis._mongoose || { conn: null, promise: null };

if (!globalThis._mongoose) {
  globalThis._mongoose = cached;
}

export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URI");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, { dbName: "Hospitaldata", bufferCommands: false });
  
  cached.conn = await cached.promise;
  return cached.conn;
};
