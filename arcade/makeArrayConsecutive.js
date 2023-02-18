function solution(statues) {
  statues.sort(function(a,b){return a-b;});
  i = 0;
  j = 1;
  result = 0;
  let operation = 0;

  while (j <= statues.length-1) {
    operation = statues[j]-statues[i];
    if (operation !== 1) {
      result = result + operation-1;
    }
    i++;
    j++;
  }
  return result;
}

statues = [5, 4, 6];
console.log(solution(statues));