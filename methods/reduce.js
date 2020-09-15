const myReducer = () => {
  const numbers = [1, 2, 3];

  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

console.log(myReducer()); // 6
