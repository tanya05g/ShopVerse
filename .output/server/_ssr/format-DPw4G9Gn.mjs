const money = (n) => `$${Number(n).toFixed(2)}`;
const discounted = (price, discount) => price - price * (discount || 0) / 100;
export {
  discounted as d,
  money as m
};
