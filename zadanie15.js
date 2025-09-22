function howManyTimes(startTime, endTime) {
  let currentMoment = new Date(startTime);
  let finalMoment = new Date(endTime);
  let matchCounter = 0;

  while (currentMoment < finalMoment) {
    let hourOnClock = currentMoment.getHours() % 12;
    let minuteOnClock = currentMoment.getMinutes();
    let secondOnClock = currentMoment.getSeconds();

    if (
      minuteOnClock === 0 &&
      secondOnClock >= 0 &&
      secondOnClock < (hourOnClock === 0 ? 12 : hourOnClock)
    ) {
      matchCounter++;
    }

    if (minuteOnClock === 30 && secondOnClock === 0) {
      matchCounter++;
    }

    currentMoment.setSeconds(currentMoment.getSeconds() + 1);
  }

  return matchCounter;
}
