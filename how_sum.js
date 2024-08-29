const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderResult = howSum(reminder, numbers, memo);
    if (reminderResult !== null) {
      memo[targetSum] = [...reminderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;

  return null;
};

//m -> targetsum

//n -> numbers.length

//brute force
// time: o(n^m * m)

// spave:o(m) max depth of the tree
//
//memoized
// time:o(n*m^2)
// space:o(m^2) max depth of the tree

console.log(howSum(7, [2, 3])); //[3,2,2]

console.log(howSum(7, [5, 3, 4, 7])); //[4,3]

console.log(howSum(7, [2, 4])); //null

console.log(howSum(8, [2, 3, 5])); //[2,2,2,2]

console.log(howSum(300, [7, 14])); //null
