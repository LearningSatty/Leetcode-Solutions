/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let product = nums[0];

    for(let i=1; i<nums.length; i++) {
        const temp = Math.max(max*nums[i], min*nums[i], nums[i]);
        min = Math.min(max*nums[i], min*nums[i], nums[i]);
        max = temp;
        product = Math.max(product, max);
    }

    return product;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna