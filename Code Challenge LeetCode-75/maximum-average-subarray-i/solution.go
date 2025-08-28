func findMaxAverage(nums []int, k int) float64 {
    n := len(nums)

    // Step 1: Initial window sum
    windowSum := 0
    for i := 0; i < k; i++ {
        windowSum += nums[i]
    }
    maxSum := windowSum

    // Step 2: Slide the window
    for i := k; i < n; i++ {
        windowSum += nums[i] - nums[i-k]
        if windowSum > maxSum {
            maxSum = windowSum
        }
    }

    // Step 3: Return maximum average
    return float64(maxSum) / float64(k)
}
