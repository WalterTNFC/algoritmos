function solution(sequence) {
  let count = 0;
  let i=0;
  while(i<sequence.length) {
    if(sequence[i]<=sequence[i-1]) {
      count = count + 1;
      if(count>1) {
        return false;
      };
      
      if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
        return false;
      }
    };
    i++
  };
  return true;
};

console.log(solution([1,2,3]));
