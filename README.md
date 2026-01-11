# Algorithm Problems Solutions


## If array + target → HashMap
## If substring / subarray → Sliding Window
## If brackets → Stack
## If tree → DFS first
## If “max/min contiguous” → Kadane
## If sorted → Binary Search

## 1. Two Sum - <span style="color: teal;">Hash Map Approach</span>
Uses a hash map to track values and their indices as you iterate. For each value, check if the complement (`target - current`) exists in the map.

## 2. Product of Array Except Self - Pre and Post Products with `Array(n).fill(1)`
Use a two-pass approach:
- Left to right: store prefix products
- Right to left: multiply by suffix products
Avoids division.

## 3. Top K Frequent Elements - <span style="color: orange;">Hash Map + Sort Approach</span>
Use a hash map to count frequency of each element, then sort by frequency and return the top `k` values.
let sortedByValue = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

## 4. Longest consequtive number without sorting :- Hashset approach 
Use hashset, loop through set and check if (num-1) not exists then start count and add while loop 

## 5. Group anagrams - hashMap with sort
create hashMap and sort and 
- const sortedStr = str.split('').sort().join('');
- return Array.from(hashMap.values())

## 6. Two sum sorted - (left and right pointer) just increment and decrement by 1


## 7. 3Sum - Sorting + 2 pointer (left, right)

## 8. Container With Most Water - 2 pointer

## 9. Remove the N-th node from the end:
- Create a dummy node that points to head
- Initialize first = dummy, second = dummy
- Move first ahead by n + 1 steps
- While first, move both first and second one step
- Do: second.next = second.next.next to remove the node
- Return: return dummy.next

## 10. Merge 2 sorted LinkedList
  - Create dummy node and tail
  - Loop through List1 && List2
    - if list1.val <= list2.val
        -- tail.next = list1
        -- list1 increment
    - else
      -- tail.next = list2
      -- list2 increment
   - Return: return dummy.next

## 11. Merge k sorted LinkedList 
 - Remove edge cases lists null and length 0
 - Loop through lists.length >1
   - initiate mergeLists = []
   - loop through lists, with i increment by 2
     - l1 = lists[i]
     - l2 = lists[i+1] (i+1 < lists.length) else null
     - call Merge 2 sorted LinkedList, and append it to mergeLists
    - make lists= mergeLists
- return lists[0]
