import mongoose from "mongoose";

export const connectDB = async (mongoUrl) => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar MongoDB:", error.message);
    process.exit(1);
  }
};