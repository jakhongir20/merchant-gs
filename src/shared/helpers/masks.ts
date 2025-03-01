export const maskCardNumber = (cardNumber: string): string => {
  return `**** ${cardNumber.slice(-4)}`;
};
