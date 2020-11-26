const handleSumTotal = (cart) => {
  const reducer = (accumulator, currentValuee) =>
    accumulator + currentValuee.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
