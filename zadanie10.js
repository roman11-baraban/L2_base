function bingo(gameTicket, requiredMatches) {
  let matchCount = 0;

  for (let pairIndex = 0; pairIndex < gameTicket.length; pairIndex++) {
    let textSegment = gameTicket[pairIndex][0];
    let targetCharCode = gameTicket[pairIndex][1];

    for (let charIndex = 0; charIndex < textSegment.length; charIndex++) {
      if (textSegment.charCodeAt(charIndex) === targetCharCode) {
        matchCount++;
        break;
      }
    }
  }

  return matchCount >= requiredMatches ? 'Winner!' : 'Loser!';
}