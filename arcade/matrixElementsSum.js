function solution(matrix) {
  // console.log(matrix);
  let i=0;
  let j=0;
  let verify = [];
  let sum = 0;
  // console.log(matrix[0][1]);
  while(i<matrix.length) {
    // console.log(matrix[i]);
    j=0;
    while(j<matrix[i].length) {
      // console.log(`Indice ${i} ${j} ${matrix[i][j]}`);
      if (matrix[i][j] === 0) {
        // console.log(`A partir de agora ninguem embaixo de: ${j}`)
        verify.push(j)
      }

      verify.forEach(value => {
        matrix[i][value] = 0; 
      })
      sum = sum + matrix[i][j];
      console.log(`A soma é ${sum} ao adicionar ${matrix[i][j]}`)
      console.log(verify);
      j++;
    }
    i++;
  };
  console.log(verify);
  console.log(sum);
  return sum;
}

matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]

console.log(solution(matrix));
