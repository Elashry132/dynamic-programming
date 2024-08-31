const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const myremainderCombination = bestSum(reminder, numbers, memo);
    if (myremainderCombination !== null) {
      const combination = [...myremainderCombination, num];
      // if the combination is horter than the currents "shortest " update it
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

// m -> target sum
// n -> numbers.length

//brute force
//time: o(n^m * m)
//space: o(m^2)

//Memoiazed
//time: o(m^2*n)

//space: o(m^2)

console.log(bestSum(7, [5, 3, 4, 7])); //[7]

console.log(bestSum(8, [2, 3, 5])); //[3,5]

console.log(bestSum(8, [1, 4, 5])); //[4,4]

console.log(bestSum(100, [1, 2, 5, 25])); //[25,25,25,25]
