<h2><a href="https://leetcode.com/problems/merge-k-sorted-lists">Merge k Sorted Lists</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>

<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]
<strong>Output:</strong> [1,1,2,3,4,4,5,6]
<strong>Explanation:</strong> The linked-lists are:
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
merging them into one sorted list:
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> lists = []
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> lists = [[]]
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>k == lists.length</code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>
	<li><code>-10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup></code></li>
	<li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li>
	<li>The sum of <code>lists[i].length</code> will not exceed <code>10<sup>4</sup></code>.</li>
</ul>


## 🧠 Approach: Merge k sorted array

### 📌 Algorithm

1. Return null if list is null and list length is 0
2. Loop through lists.length
   - let mergedList = []
   - loop through list length (increment by 2)
     -- l1 = lists[i]
     -- l2 = i+1<lists.length ? lists[i+1] : null
     -- Call mergeList(l1,l2) and push to mergedList
   -- lists = merged lists
3. Return lists[0]
     


### Use Merge sort for 2 list
1. Create a dummy node that points to the head of the list.  
   - `const dummy = new ListNode(0);`  
   - tail = dummy
2. Loop through list1 and list2
    - if list1.val <= list2.val
       -- tail.next = list1
       -- list1= list1.next
   - else
     -- tail.next = list2
     -- list2 = list2.next
3. Add remaining list2 or list1 to tail (tail.next = list1/list2)
4. return dummy.next


### 🕒 Time Complexity

- **O(nlogk)** – Single pass through the list.

### 📦 Space Complexity

- **O(1)** – Only constant extra space for pointers.
