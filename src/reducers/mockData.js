export const date = Array.from({ length: 100 }, (_, i) => {
  return {
    name: `test${i}`,
    email: `${i}@gmail.com`,
    mobileNumber: `1234567${i}`,
  };
});
