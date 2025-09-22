function findMissing(sequence) {
  let startValue = sequence[0];
  let endValue = sequence[sequence.length - 1];
  let totalElements = sequence.length + 1;
  let interval = (endValue - startValue) / (totalElements - 1);

  for (let position = 1; position < sequence.length; position++) {
    if (sequence[position] !== sequence[position - 1] + interval) {
      return sequence[position - 1] + interval;
    }
  }
}

