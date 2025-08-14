function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let finalStringUpperCase = str.split(" ").join("").toUpperCase();
  return finalStringUpperCase;
}

console.log(onlyCharacter("  h e llo wor   ld")); // "HELLOWORLD"
