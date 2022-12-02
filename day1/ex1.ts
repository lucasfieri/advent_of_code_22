(async () => {
  console.time('main')
  const file = Bun.file('input1.txt');
  const text = await file.text()
  const lines = text.trim().split(/\n/).map(Number);
  let higherSum = 0;
  lines.reduce((acc, curr) => {
    if (curr === 0) {
      if (acc >= higherSum) {
        higherSum = acc
      }
      return curr
    }
    acc = acc + curr 
    return acc
  }, 0);
  console.timeEnd('main')
  console.log(higherSum)
})()
