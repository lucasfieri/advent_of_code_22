(async () => {
  console.time('main')
  const file = Bun.file('input1.txt');
  const text = await file.text()
  const lines = text.trim().split(/\n/).map(line => {
    return [line.slice(0, line.length / 2).split(""), line.slice(line.length / 2).split("")]
  })

  function islowerCase(char: string) {
    return char === char.toLowerCase()
  }

  const result = lines.reduce((acc, [partA, partB]) => {
    const intersection = partA.filter(char => partB.includes(char))
    const set = new Set(...intersection)
    set.forEach(char => {
      if (islowerCase(char)) {
        acc = acc + char.charCodeAt(0) - 96
      } else {
        acc = acc + char.charCodeAt(0) - 64 + 26
      }
    })
    return acc
  }, 0)
  
  console.timeEnd('main')
  console.log(result)
})()
