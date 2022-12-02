(async () => {
  console.time('main')
  const file = Bun.file('input1.txt');
  const text = await file.text()
  const lines = text.trim().split(/\n/).map(line => line.split(' '))
  
  const result = lines.reduce((acc, line) => {
    const [theirOption, ourOption] = line
    switch (ourOption) {
      case 'X':
        acc = acc + 1
        break
      case 'Y':
        acc = acc + 2
        break
      case 'Z':
        acc = acc + 3
        break
    }
    const ourWinsPairs = [
      ['A', 'Y'],
      ['B', 'Z'],
      ['C', 'X'],
    ]

    const ourWins = ourWinsPairs.some(([their, our]) => theirOption === their && ourOption === our)
    if (ourWins) {
      acc = acc + 6
      return acc
    }

    const theirWinsPairs = [
      ['A', 'Z'],
      ['B', 'X'],
      ['C', 'Y'],
    ]

    const theirWins = theirWinsPairs.some(([their, our]) => theirOption === their && ourOption === our)
    if (theirWins) {
      return acc
    }

    return acc + 3
    
  }, 0)
  console.timeEnd('main')
  console.log(result)
})()
