export const tryWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res, next).catch(next);
  };
};

export const isNumeric = (n) => !isNaN(n);
