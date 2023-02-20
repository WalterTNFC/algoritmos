function solution(inputArray) {
  count = [];
  i=0;
  inputArray.forEach(value=> {
    console.log(value);
    // console.log(index);
    console.log(value.length);
    count.push(value.length);
  })
  console.log(count);

  count.sort(function(a,b) {
    return a-b;
  });
  console.log(count);
  console.log(count[count.length-1]);

  result = [];

  inputArray.forEach(value => {
    if(value.length === count[count.length-1]) {
      result.push(value);
    }
  })
  return result;
}

inputArray = ["aba", "aa", "ad", "vcd", "aba"];

console.log(solution(inputArray));