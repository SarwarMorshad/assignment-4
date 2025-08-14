function totalFine(fare) {
  var isNumber = typeof fare === "number";
  var isPositive = fare > 0;

  if (!isNumber || !isPositive) {
    return "Invalid";
  }

  var surcharge = fare * (20 / 100);
  var serviceCharge = 30;
  var total = fare + surcharge + serviceCharge;

  return total;
}
console.log(totalFine(-35)); // 150
