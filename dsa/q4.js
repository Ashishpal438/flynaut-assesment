// console.log("7" > 7)
// console.log("2">"21")
// console.log("KL">"S")

// The above operations are possible because of implicit type coercion in js


// console.log("7" > 7); //false
// Here, string "7" is internally converted to number 7 and then compared to the right hand side number 7 and the final result is false.


// console.log("2">"21") // false
// Here, the operands are both strings: "2" and "21". 
// When comparing strings lexicographically, JavaScript compares the individual characters from left to right based on their Unicode values.
// In this case, the first character of each string is compared. The character "2" has a Unicode value of 50, and the character "2" also has a Unicode value of 50. Since they are equal, JavaScript moves on to compare the next characters.
// The second character of the first string is the end of the string, while the second character of the second string is "1". Since "2" comes after "1" in lexicographical order,
// Hence the final result is false.


// console.log("KL">"S") // false
// The Unicode value of "K" is 75, and the Unicode value of "S" is 83. Since 75 is less than 83, the expression "KL" > "S" will evaluate to false