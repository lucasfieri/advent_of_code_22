(async () => {
  console.time('main')
  const file = Bun.file('input1.txt');
  const text = await file.text()
  const lines = text.trim().split(/\n/).map(line => line.split(' '))
  
  const result = lines.reduce((acc, line) => {
    const [theirOption, roundResult] = line

    const pointsByChoose = {
      A: 1, // rock
      B: 2, // paper
      C: 3 // scissors
    }

    switch (roundResult) {
      case 'X': // we lose
        if (theirOption === 'A') {
          acc = acc + 3
          break
        }
        if (theirOption === 'B') {
          acc = acc + 1
          break
        }
        if (theirOption === 'C') {
          acc = acc + 2
          break
        }
      case 'Y': // draw
        acc = acc + pointsByChoose[theirOption]
        acc = acc + 3
        break
      case 'Z': // we win
        if (theirOption === 'A') {
          acc = acc + 2
        }
        if (theirOption === 'B') {
          acc = acc + 3
        }
        if (theirOption === 'C') {
          acc = acc + 1
        }
        acc = acc + 6
        break
    }
    return acc  
  }, 0)
  console.timeEnd('main')
  console.log(result)
})()
