function solution(sequence) {
  let removeDuplicates = [...new Set(sequence)];
  let sortArray = sequence.sort(function(a,b) {
    return a-b;
  })
  console.log(sequence);
  let operation = sequence.length - removeDuplicates.length;
  if (operation>2 || sortArray!==sequence) {
    return false;
  }
  console.log(sortArray);
  console.log(sequence);
  return true;
}

console.log(solution([1, 3, 2, 1]));