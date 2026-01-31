function firstWord(str) {
  if (str === "") return "";

  const trimmed = str.trimStart();

  const idx = trimmed.indexOf(" ");
  if (idx === -1) return trimmed;

  return trimmed.slice(0, idx);
}

