function forLoop(a) {
  for (let i = 0; i < 25; i++) {
    a[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`
    /*
    if (i===1) {
      a[i] = "I am 1 strange loop."
    } else {
      a[i] = `I am ${i} strange loops.`
    }
    */

  }
  a['11'] = "I am 1 strange loop."
  return a
}
