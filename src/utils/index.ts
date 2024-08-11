export const convertCurrencyVN = (value: number): string => {
  // 6000000 => "6,000,000"
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
