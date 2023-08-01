// Task 2

// Calculate the sum of elements in an array
const calculateSum = numArray => {
  if (!Array.isArray(numArray)) {
    throw new Error('Input must be an array')
  }
  let sum = 0
  numArray.forEach(number => {
    if (typeof number !== 'number') {
      throw new Error('All elements in the array must be integers')
    }
    sum += number
  })
  return sum
}

try {
  const sum = calculateSum([12, 34, 4])
  console.log(sum)
} catch (error) {
  console.log(error.message)
}
