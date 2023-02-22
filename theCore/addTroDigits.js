function solution(n) {
  let nString = n.toString();
  let i = 0;
  let sum = 0;

  while (i<nString.length) {
    sum = sum + Number(nString[i]);
    i++
  };
  return sum;
}


console.log(solution(24))