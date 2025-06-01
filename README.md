# Algorithm Problems Solutions

## 1. Two Sum - <span style="color: teal;">Hash Map Approach</span>
Uses a hash map to track values and their indices as you iterate. For each value, check if the complement (`target - current`) exists in the map.

## 2. Product of Array Except Self - Pre and Post Products with `Array(n).fill(1)`
Use a two-pass approach:
- Left to right: store prefix products
- Right to left: multiply by suffix products
Avoids division.

## 3. Top K Frequent Elements - <span style="color: orange;">Hash Map + Sort Approach</span>
Use a hash map to count frequency of each element, then sort by frequency and return the top `k` values.

