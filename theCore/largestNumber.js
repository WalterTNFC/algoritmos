function solution(n) {
  let number = [];
  let i = 0;

  while(i<n) {
    number.push(9);
    i++;
  };

  return Number(number.join(''));
}

console.log(solution(7));