<h2><a href="https://leetcode.com/problems/3sum">3Sum</a></h2> <img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' /><hr><p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>

<p>Notice that the solution set must not contain duplicate triplets.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,1,2,-1,-4]
<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]
<strong>Explanation:</strong> 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,1]
<strong>Output:</strong> []
<strong>Explanation:</strong> The only possible triplet does not sum up to 0.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,0,0]
<strong>Output:</strong> [[0,0,0]]
<strong>Explanation:</strong> The only possible triplet sums up to 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;= 3000</code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

## 🧠 Approach: Approach: Two Pointers After Sorting

### 📌 Algorithm

1. Sort the array nums in ascending order.
2. Loop through the array using index i::
	- If nums[i] === nums[i - 1], skip to avoid duplicate triplets.
	- Initialize two pointers:
	- left = i + 1, right = nums.length - 1

	- While left < right:

		- Compute the sum: nums[i] + nums[left] + nums[right].

		- If the sum is 0, you've found a valid triplet:

			- Add [nums[i], nums[left], nums[right]] to the result.

			- Skip over any duplicate values for nums[left] and nums[right].

			- Move both pointers inward.

		- If the sum is less than 0, move left to the right.

		- If the sum is greater than 0, move right to the left.
3. Return result.

### 🕒 Time Complexity

- **O(n2)** – Each element is visited once.

### 📦 Space Complexity

- **O(1)** – At most, all elements are stored in the hash map.
