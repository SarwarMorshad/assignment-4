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

function onlyCharacter(str) {
  let isString = typeof str === "string";
  if (!isString) {
    return "Invalid";
  }

  let split = str.split(" ");
  let join = split.join("");
  let upperText = join.toUpperCase();
  return upperText;
}
