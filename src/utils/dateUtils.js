export const getLatestExpenseYear = (years) => {
  if (years.length > 0) {
    return Math.max(...years);
  }

  //default to current Year
  return new Date().getFullYear();
};
