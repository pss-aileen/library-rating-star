
export function isDecimal(number: number) {
  return !Number.isInteger(number);
}

export function customRoundToFirstDecimalPrace(number: number) {
  // 小数点第二位を四捨五入
  const roundedNumber = Math.round(number * 10) / 10;
  return parseFloat(roundedNumber.toFixed(1));
}
