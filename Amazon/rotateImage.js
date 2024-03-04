//use the helper functions created to rotate the matrix 90 degrees clockwise
//space complexity of O(1) as we're not creating a new array, rather just modifying the original matrix
const solution = (a) => reverse(transpose(a));

//use transpose to swap x and y axis of matrix elements
//e.g. matrix[0][1] becomes matrix[1][0];
const transpose = (matrix) => {
  for (row = 0; row < matrix.length; row++) {
    for (column = 0; column < row; column++) {
      let temp = matrix[row][column];
      matrix[row][column] = matrix[column][row];
      matrix[column][row] = temp;
    }
  }
  return matrix;
};

//reverse each row of the matrix so it rotates horizontally, rather than reversing whole matrix which will rotate it vertically
const reverse = (matrix) => matrix.map((row) => row.reverse());
