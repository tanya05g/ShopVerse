// Tiny formatting helpers shared across the app.
export const money = (n) => `$${Number(n).toFixed(2)}`;
export const discounted = (price, discount) => price - (price * (discount || 0)) / 100;
