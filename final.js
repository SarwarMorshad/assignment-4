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

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  let player1Total = player1.foul + player1.cardY + player1.cardR;
  let player2Total = player2.foul + player2.cardY + player2.cardR;

  if (player1Total < player2Total) {
    return player1.name;
  } else if (player2Total < player1Total) {
    return player2.name;
  } else {
    return "Tie";
  }
}
