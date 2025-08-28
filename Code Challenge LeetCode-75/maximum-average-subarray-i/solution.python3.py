from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        # Step 1: Initial window sum
        window_sum = sum(nums[:k])
        max_sum = window_sum
        
        # Step 2: Slide the window
        for i in range(k, len(nums)):
            window_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, window_sum)
        
        # Step 3: Return max average
        return max_sum / k
