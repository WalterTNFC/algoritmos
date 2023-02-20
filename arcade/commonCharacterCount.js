function solution(s1, s2) {
  let i=0;
  let j=0;
  count = 0;

  while(i<s1.length) {
    console.log(s1[i]);
      while(j<s2.length) {
        if (s1[i] === s2[j]) {
          console.log(`Comparando ${s1[i]} com ${s2[j]}`)
          count++;
        }
        j++;
      }
    i++;
  }
  return count;
}

console.log(solution("zzzz", "zzzzzzz"))