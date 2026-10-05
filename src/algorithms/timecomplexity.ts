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
