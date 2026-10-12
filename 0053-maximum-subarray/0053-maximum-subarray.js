/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];

    let currentSum = nums[0];

    for(let index=1; index < nums.length; index++) {
        currentSum = Math.max(nums[index], nums[index]+currentSum);
        maxSum = Math.max(currentSum, maxSum);
        console.log(index, nums[index], currentSum, maxSum);
    }

    return maxSum;

};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna