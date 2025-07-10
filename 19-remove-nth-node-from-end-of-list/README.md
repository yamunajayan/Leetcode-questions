<h2><a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list">Remove Nth Node From End of List</a></h2> <img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' /><hr><p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], n = 2
<strong>Output:</strong> [1,2,3,5]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [1], n = 1
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> head = [1,2], n = 1
<strong>Output:</strong> [1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>sz</code>.</li>
	<li><code>1 &lt;= sz &lt;= 30</code></li>
	<li><code>0 &lt;= Node.val &lt;= 100</code></li>
	<li><code>1 &lt;= n &lt;= sz</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you do this in one pass?</p>


## 🧠 Approach: Two Pointers with Dummy Node

### 📌 Algorithm

1. Create a dummy node that points to the head of the list.  
   - `const dummy = new ListNode(0);`  
   - `dummy.next = head;`
2. Initialize two pointers:  
   - `first = dummy`  
   - `second = dummy`
3. Move `first` ahead by `n + 1` steps.
4. While `first` is not null:  
   - Move both `first` and `second` one step forward.
5. After loop ends, `second.next` is the node to remove:  
   - `second.next = second.next.next`
6. Return the new head:  
   - `return dummy.next`

### 🕒 Time Complexity

- **O(n)** – Single pass through the list.

### 📦 Space Complexity

- **O(1)** – Only constant extra space for pointers.

