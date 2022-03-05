export const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, a) => a + start);
};
