const sumOfMultiples = (topNumber) => {
  const newArr = []
  for (let i = 0; i < topNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) newArr.push(i)
  }
  console.log(newArr[newArr.length - 1])
  return newArr.reduce((a, b) => a + b, 0)
}

console.log(sumOfMultiples(1000))