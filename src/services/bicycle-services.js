import { Bicycle } from "../schemas/bicycle-schema.js";
import { v4 as uuidv4 } from "uuid";

export const addBicycle = async (bicycle) => {
  bicycle.id = uuidv4();
  const newBicycle = new Bicycle({ ...bicycle });
  return await newBicycle.save();
};

export const updateBicycles = async (id, fields) => {
  return await Bicycle.findOneAndUpdate(
    { id: id },
    { $set: fields },
    { new: true }
  );
};
export const removeBicycles = async (id) => {
  return await Bicycle.findOneAndDelete({ id: id });
};

export const getBicyclesStat = async () => {
  const bicycles = await Bicycle.find();
  const stats = {
    totalBicycles: bicycles.length,
    availableBicycles: bicycles.filter((bike) => bike.status === "available")
      .length,
    bookedBicycles: bicycles.filter((bike) => bike.status === "busy").length,
    averagePrice:
      bicycles.reduce((sum, bike) => {
        const price = bike.price ? bike.price : 0;
        return sum + price;
      }, 0) / bicycles.length,
  };
  return stats 
};
