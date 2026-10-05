// We are going to write a function that converts the degrees
// Fahrenheit to Celsius in constant time O(1) and space O(1)

const toFahrenheit = (degreesCelsius: number): number => {
    return 1.8 * degreesCelsius + 32;
    
}

// We are going to write a function that takes an array in linear time
const logNums = (nums: number[]) => {
  for(let i=0; i < nums.length; i++) {
    console.log(nums[i])
  }
}

// Quadratic time O(n^2)
// We are going to write a function that returns all possible pairs,
// given an input array

// [1, 2, 3] = 1,1 1,2 1,3 2,1 2,2 2,3 3,1, 3,2, 3,3 e.g.
const numPairs = (nums: number[]) => {
   for(let i=0; i < nums.length; i++){
    for(let j=0; j < nums.length; j++){
        console.log(i, j);
    }
   }
}
