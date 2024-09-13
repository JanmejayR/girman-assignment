import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(uri);
};

export default connectToDatabase;