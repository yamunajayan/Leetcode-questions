<h2><a href="https://leetcode.com/problems/container-with-most-water">Container With Most Water</a></h2> <img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' /><hr><p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>

<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>

<p>Return <em>the maximum amount of water a container can store</em>.</p>

<p><strong>Notice</strong> that you may not slant the container.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;" />
<pre>
<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> height = [1,1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == height.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## 🧠 Approach: Approach: Two Pointers

### 📌 Algorithm


1. Initialize two pointers: left = i + 1, right = nums.length - 1

2. While left < right:

	- Calculate the area using: area = Math.min(height[left], height[right]) × (right - left)

	- Update maxArea if the current area is greater.

	- Move the pointer that points to the shorter line:

			- If height[left] <= height[right], increment left.

			- Otherwise, decrement right.
3.Return the maxArea after the loop finishes.

### 🕒 Time Complexity

- **O(n)** – Each element is visited once.

### 📦 Space Complexity

- **O(1)** – At most, all elements are stored in the hash map.
