function longest(stringList, position) {
  for (let outer = 0; outer < stringList.length; outer++) {
    for (let inner = 0; inner < stringList.length - 1 - outer; inner++) {
      if (stringList[inner].length < stringList[inner + 1].length) {
        let temp = stringList[inner];
        stringList[inner] = stringList[inner + 1];
        stringList[inner + 1] = temp;
      }
    }
  }
  return stringList[position - 1];
}
