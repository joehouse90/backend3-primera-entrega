import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specie: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    adopted: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PetModel = mongoose.model("pets", petSchema);