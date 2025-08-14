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
console.log(onlyCharacter("  h e llo wor   ld")); // "HELLOWORLD"
