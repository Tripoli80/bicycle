export const add = (req, res, next) => {
  const { name, type, color, wheel_size, price, description, status } =
    req.body;

  // Basic validation rules

  if (!name || name.length < 5) {
    return res.status(400).json({ error: "Invalid name" });
  }

  if (!type || type.length < 5) {
    return res.status(400).json({ error: "Invalid type" });
  }

  if (!color || color.length < 5) {
    return res.status(400).json({ error: "Invalid color" });
  }

  if (!wheel_size || isNaN(wheel_size)) {
    return res.status(400).json({ error: "Invalid wheel size" });
  }

  if (!price || isNaN(price)) {
    return res.status(400).json({ error: "Invalid price" });
  }

  if (!description || description.length < 5) {
    return res.status(400).json({ error: "Invalid description" });
  }

  if (!status || !["available", "busy", "unavailable"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  next();
};

export const status = (req, res, next) => {
  const { status } = req.body;

  // Basic validation rules
  if (!status || !["available", "busy", "unavailable"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  next();
};
