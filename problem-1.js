function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) return "Invalid";
  let totalFine = fare + fare * 0.2 + 30;
  return totalFine;
}

console.log(totalFine(552)); // 150
