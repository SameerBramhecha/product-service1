const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config('../.env');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/ecommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
