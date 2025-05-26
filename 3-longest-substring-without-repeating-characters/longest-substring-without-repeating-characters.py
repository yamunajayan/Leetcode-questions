class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        n = len(s)
        char_map = {}
        max_length = 0
        left = 0

        for right in range(n):
            current_char = s[right]
            
            if current_char in char_map and char_map[current_char]>=left:
                left = char_map[current_char]+1

            char_map[current_char] = right
            max_length = max(max_length, right-left+1)
        
        return max_length




        