(async () => {
  console.time('main')
  const file = Bun.file('input1.txt');
  const text = await file.text()
  const lines = text.trim().split(/\n/).map(Number);
  let higherSums = [];
  lines.reduce((acc, curr) => {
    if (curr === 0) {
      higherSums.push(acc)
      return curr
    }
    acc = acc + curr 
    return acc
  }, 0);
  const result = higherSums
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr, 0)
  console.timeEnd('main')
  console.log(result)
})()
