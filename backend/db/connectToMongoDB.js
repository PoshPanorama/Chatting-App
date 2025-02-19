import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        // Ensure process.env.MONGO_URI is being correctly accessed
        if (!process.env.MONGO_URI) {
            console.log("MONGO_URI is not defined in the environment variables.");
        } else {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("Connected to MongoDB");
        }
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;
