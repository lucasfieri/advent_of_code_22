(async () => {
  console.time('main')
  const file = Bun.file('input1.txt');
  const text = await file.text()
  const lines = text.trim().split(/\n/)

  const groups = lines.reduce((acc, line, i) => {
    const groupIndex = Math.floor(i / 3)
    if (!acc[groupIndex]) acc[groupIndex] = []
    acc[groupIndex].push(line)
    return acc
  }, [])

  function islowerCase(char: string) {
    return char === char.toLowerCase()
  }

  const result = groups.reduce((acc, [st, nd, rd]) => {
    const intersection = st.split('').find(x => nd.includes(x) && rd.includes(x))
    if (islowerCase(intersection)) {
      acc = acc + intersection.charCodeAt(0) - 96
    } else {
      acc = acc + intersection.charCodeAt(0) - 64 + 26
    }
    return acc
  }, 0)
  
  console.timeEnd('main')
  console.log(result)
})()
