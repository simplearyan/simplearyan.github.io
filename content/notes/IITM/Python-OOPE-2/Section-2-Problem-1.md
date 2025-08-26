---
title: "Count Odd 3 Digit Numbers (Ignore None)"
author: Aryan
weight: 2
draft: false
summary: "Write a function count_odd_three_digit_nums(nums) that takes a list of integers nums and returns the count of numbers that are:
Odd."
tags: ["Python", "OOPE-2", "Section-1", "Problem-1"]
series_order: 2
cascade:
   hideFeatureImage: true

---

## Count Odd 3 Digit Numbers (Ignore None)

Write a function count_odd_three_digit_nums(nums) that takes a list of integers nums and returns the count of numbers that are:
Odd.
Three-digit numbers (ignoring the negative sign if present).
Not None.
NOTE: This is a function type question, you don't have to take input or print the output, just have to complete the required function definition.
Examples:
count_odd_three_digit_nums([101, -203, None, 99, 300]) → 2
Explanation: 101 and -203 are odd three-digit numbers, ignoring None.
count_odd_three_digit_nums([None, 120, 301, -401, 78]) → 2
Explanation: 301 and -401 qualify as odd three-digit numbers.
count_odd_three_digit_nums([10, 305, 507, 99]) → 2
Explanation: 305 and 507 qualify as odd three-digit numbers.

Perfect ✅ You want a function that counts how many numbers in a list are:

- **Odd**
- **Three-digit numbers** (ignoring negative sign)
- **Not None**

***

Here’s the Python implementation:

```python
def count_odd_three_digit_nums(nums: list) -> int:
    count = 0
    for n in nums:
        if n is not None:  # Ignore None values
            if 100 <= abs(n) <= 999 and n % 2 != 0:  # Check 3-digit and odd
                count += 1
    return count
```


***

### ✅ Explanation:

1. We loop through each element in the list.
2. If the element is `None`, skip it.
3. `abs(n)` ensures we handle negative numbers when checking the **three-digit condition**.
4. Check that the number is **odd** (`n % 2 != 0`).
5. Increment the counter accordingly.

***

### 🔍 Examples:

```python
print(count_odd_three_digit_nums([101, -203, None, 99, 300]))   # 2
print(count_odd_three_digit_nums([None, 120, 301, -401, 78]))  # 2
print(count_odd_three_digit_nums([10, 305, 507, 99]))          # 2
```

Would you like me to also extend this so it works for **both positive and negative multi-digit ranges** (e.g., checking for 4-digit odd numbers too, if needed)?



This error happens because the code tries to do `abs(n)` **before** checking if `n` is not `None`.
If `n` is `None`, `abs(n)` will raise a `TypeError` because you can't take the absolute value of a `NoneType`.
The fix is to **make sure to check `n is not None` before calling `abs(n)`**.

Here is the corrected version:

```python
def count_odd_three_digit_nums(nums: list) -> int:
    count = 0
    for n in nums:
        if n is not None:  # Check this first!
            if 100 <= abs(n) <= 999 and n % 2 != 0:
                count += 1
    return count
```

If you already have that check and still see this error, **double-check the indentation and order of your conditions**.
You must never call `abs(n)` if `n` could be `None`.

### Compact version using list comprehension:

```python
def count_odd_three_digit_nums(nums: list) -> int:
    return sum(
        1 for n in nums
        if n is not None and 100 <= abs(n) <= 999 and n % 2 != 0
    )
```


### Key Point

- Always check `n is not None` **before** using `abs(n)` or `n % 2`
- Do not reorder the conditions

This will prevent the `TypeError` and correctly count your odd three-digit numbers ignoring `None`.

