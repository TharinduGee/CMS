import mongoose from "mongoose";

const cargoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    storedBy: {
      type: String,
      required: true,
    },
    storeID: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Cargo = mongoose.model("Cargo", cargoSchema);
