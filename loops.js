function forLoop(a) {
  for (let i = 0; i < 25; i++) {
    /*
    if (i===1) {
      a[i] = "I am 1 strange loop."
    } else {
      a[i] = `I am ${i} strange loops.`
    }
    */
    a[i] = `I am ${i} strange loops.`
  }
  a['1'] = "I am 1 strange loop."
  return a
}
