import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        if (conn) {
            console.log("connected to mongodb");
        }

    } catch (e) {
        console.log(`Error connecting to mongodb ${e.message}`);
    }
}

export default connectDB;