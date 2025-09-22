function wave(text) {
  let waveForms = [];
  for (let position = 0; position < text.length; position++) {
    if (text[position] === ' ') continue;
    let modifiedText =
      text.slice(0, position) +
      text[position].toUpperCase() +
      text.slice(position + 1);
    waveForms.push(modifiedText);
  }
  return waveForms;
}
