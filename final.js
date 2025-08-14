function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) return "Invalid";
  let total = fare + fare * 0.2 + 30;
  return total;
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let finalStringUpperCase = str.split(" ").join("").toUpperCase();
  return finalStringUpperCase;
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

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    i++;
  }

  return true;
}

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let total = 0;
  let passCount = 0;
  let failCount = 0;

  for (let score of marks) {
    total += score;
    if (score >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  let average = Math.round(total / marks.length);

  return { finalScore: average, pass: passCount, fail: failCount };
}
