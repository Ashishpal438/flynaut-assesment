// function average(a, b) {
//   return a + b / 2;
// }
// console.log(average(2, 1));


// js follow BODMAS rule
// As a result, the division operation is performed before the addition operation, which leads to an incorrect calculation.

//To fix the code and correctly calculate the average, we need to enclose a + b within parentheses. 
function average(a, b) {
  return (a + b) / 2;
}
