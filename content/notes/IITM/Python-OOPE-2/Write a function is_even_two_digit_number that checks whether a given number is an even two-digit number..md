---
title: "Write a function is_even_two_digit_number that checks whether a given number is an even two-digit number. | Section 1 | Problem 1"
author: Aryan
weight: 2
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "OOPE-2", "Section-1", "Problem-1"]
series_order: 2
cascade:
   hideFeatureImage: true

---




## Write a function is_even_two_digit_number that checks whether a given number is an even two-digit number.

A number is considered a two-digit number if it has exactly two digits excluding any negative sign.
NOTE: This is a function type question, you don't have to take input or print the output, just have to complete the required function definition.
For example:
24 is an even two-digit number.
-36 is an even two-digit number.
5 is not a two-digit number.
101 is not a two-digit number.
-19 is not an even number.

Got it! You want a function **`is_even_two_digit_number`** that checks if a number is **even** and has exactly **two digits** (ignoring the negative sign).

Here’s the Python implementation:

```python
def is_even_two_digit_number(n: int) -> bool:
    # Check if number has exactly two digits (ignoring sign)
    if 10 <= abs(n) <= 99:
        # Check if it is even
        return n % 2 == 0
    return False
```


### ✅ Explanation:

- `abs(n)` makes sure negative numbers are handled (e.g., `-36` → `36`).
- The condition `10 <= abs(n) <= 99` ensures it’s a **two-digit number**.
- Finally, `n % 2 == 0` checks if the number is **even**.


### 🔍 Examples:

```python
print(is_even_two_digit_number(24))   # True
print(is_even_two_digit_number(-36))  # True
print(is_even_two_digit_number(5))    # False
print(is_even_two_digit_number(101))  # False
print(is_even_two_digit_number(-19))  # False
```

Would you also like me to write **unit tests** for this function (so you can easily validate with multiple inputs)?

