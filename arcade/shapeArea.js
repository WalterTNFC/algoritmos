function shape(n) {
  let i = 1;
  let value = 1;
  let array = [];
  while (i < n) {
    // console.log(i);
    value = value + (4*i);
    array.push(array);
    i++
  }

  // console.log(array)
  return value;
}

console.log(shape(4));