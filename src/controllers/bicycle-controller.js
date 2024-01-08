import * as Bicycle from "../services/bicycle-services.js";
export const addBicycle = async (req, res) => {
  const newBicycle = await Bicycle.addBicycle(req.body);
  return res.status(201).json(newBicycle);
};

export const getBicycles= async (req, res) => {
  const bicycles = await Bicycle.getBicycles();
  return res.status(200).json(bicycles);
};

export const updateBicyclesStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedBicycle = await Bicycle.updateBicycles(id, { status });
  return res.status(200).json(updatedBicycle);
};

export const removeBicycles = async (req, res) => {
  const { id } = req.params;
  const removedBicycle = await Bicycle.removeBicycles(id);
  if (!removedBicycle) {
    return res.status(400).json({ error: "Bicycle not found" });
  }
  return res.status(200).json(removedBicycle);
};

export const getBicyclesStat = async (req, res) => {
  const bicycles = await Bicycle.getBicyclesStat();
  return res.status(200).json(bicycles);
};
