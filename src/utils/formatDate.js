export const formatDate = (date) => {
  if (date instanceof Date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return "";
};
