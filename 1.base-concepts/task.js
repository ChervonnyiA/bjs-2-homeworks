"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else if (d === 0) {
    arr.push(-b / (2 * a))
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    console.log('Введены не все данные!');
    return false;
  }

  let monthlyRate = percent / (100 * 12);
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  return Number((totalPayment).toFixed(2));
}