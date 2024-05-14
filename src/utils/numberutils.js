export const isValidNumber = (value) => {
  return !Number.isNaN(Number(value)) && Number.isFinite(Number(value));
};
