function createPhoneNumber(digitsArray) {
  let formattedNumber = "(";
  for (let areaIndex = 0; areaIndex < 3; areaIndex++) {
    formattedNumber += digitsArray[areaIndex];
  }
  formattedNumber += ") ";
  for (let centralIndex = 3; centralIndex < 6; centralIndex++) {
    formattedNumber += digitsArray[centralIndex];
  }
  formattedNumber += "-";
  for (let lineIndex = 6; lineIndex < 10; lineIndex++) {
    formattedNumber += digitsArray[lineIndex];
  }
  return formattedNumber;
}
