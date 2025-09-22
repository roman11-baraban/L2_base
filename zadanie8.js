function expandedForm(number) {
  let numberParts = String(number).split('');
  let expandedParts = [];

  for (let position = 0; position < numberParts.length; position++) {
    let currentDigit = numberParts[position];
    if (currentDigit !== '0') {
      let zerosCount = numberParts.length - position - 1;
      expandedParts.push(currentDigit + '0'.repeat(zerosCount));
    }
  }

  return expandedParts.join(' + ');
}
