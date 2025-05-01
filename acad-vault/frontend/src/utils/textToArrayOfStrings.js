export function textToArrayOfStrings(text) {
  let arrayOfStrings = text.split(",");
  arrayOfStrings.forEach((str, idx) => {
    arrayOfStrings[idx] = str.trim();
  });
  return arrayOfStrings;
}
