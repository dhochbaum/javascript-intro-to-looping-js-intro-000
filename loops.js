function forLoop(a) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      a[i] = "I am 1 strange loop."
    } else {
      a[i] = "I am ${i} strange loops."
    }
  }
  return a
}