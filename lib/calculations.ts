export const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);

export const sipFV = (
  monthlyAmount: number,
  years: number,
  annualRate = 0.12
): number => {
  const monthlyRate = annualRate / 12;
  const months = years * 12;
  return monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
};

export const formatPercent = (n: number, decimals = 1) =>
  `${(n * 100).toFixed(decimals)}%`;

export const calculateGrowth = (initial: number, years: number, rate = 0.12) => {
  return initial * Math.pow(1 + rate, years);
};
