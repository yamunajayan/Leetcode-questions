class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        n = len(nums)
        if n==0 or n==1 and nums[0]<target:
            return 0

        if nums[0] >= target:
            return 1
        
        window_sum = 0
        min_length = float('inf')
        left = 0

        for right in range(n):
            window_sum += nums[right]
            while window_sum >= target:
                min_length = min(min_length, right - left + 1)
                window_sum  -= nums[left]
                left += 1
        
        return 0 if min_length == float('inf') else min_length




        