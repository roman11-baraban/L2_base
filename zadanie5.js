function primeFactors(number) {
  let factorization = '';
  let divisor = 2;

  while (divisor <= number) {
    let exponent = 0;
    while (number % divisor === 0) {
      number /= divisor;
      exponent++;
    }
    if (exponent > 0) {
      let factorPart = '(' + divisor;
      if (exponent > 1) {
        factorPart += '**' + exponent;
      }
      factorPart += ')';
      factorization += factorPart;
    }
    divisor++;
  }

  return factorization;
}
