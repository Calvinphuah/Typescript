function addAllNumbers(items: number[]) {
  const total = items.reduce((a, b) => a + b);
  console.log(total);
}

addAllNumbers([1, 2, 3]);
