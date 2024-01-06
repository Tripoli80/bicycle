import { Schema, model } from "mongoose";

const BicycleSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    validate: stringLimit,
    required: true,
  },
  type: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "-",
  },
  wheel_size: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "-",
  },
  status: {
    type: String,
    enum: ["available", "busy", "unavailable"],
    default: "available",
  },
  price: {
    type: Number,
    required: true,
  },
});

function stringLimit(val) {
  return val.length >= 5;
}

export const Bicycle = model("Bicycle", BicycleSchema);
