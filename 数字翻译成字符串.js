var nums = '100';
console.log(nums.length);

// 121
// aba la au
// i=2 cur[i-1] cur[i-2] 
// cur[i-1] ab(a) l(a)
// cur[i-2] a(u)
function solve(nums) {
    let dp = new Array(nums.length + 2).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 0; i < nums.length; i++) {
        let n1 = nums[i] - '0';
        let n2 = -1;
        let cur = i + 2;
        if (i != 0) {
            n2 = (nums[i - 1] - '0') * 10 + n1;
        }
        if (n2 >= 10 && n2 <= 26 && n1 > 0 && n1 <= 9) {
            dp[cur] = dp[cur - 1] + dp[cur - 2];
        } else if (n2 >= 10 && n2 <= 26) {
            dp[cur] = dp[cur - 2];
        } else if (n1 > 0 && n1 <= 9) {
            dp[cur] = dp[cur - 1]
        }
    }
    // console.log(dp.slice(-1));
    return dp.slice(-1);
}

solve(nums);