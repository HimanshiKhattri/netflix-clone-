const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Environment variables loaded:', Object.keys(process.env).filter(key => key.includes('MONGODB')));
    console.log('MONGODB_URI value:', process.env.MONGODB_URI);
    console.log('MONGODB_URI type:', typeof process.env.MONGODB_URI);
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }
    
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 