---
title: "➕➖ Operators in Python | Lesson 03"
author: Aryan
weight: 3
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 3
cascade:
   hideFeatureImage: true

---


## ➕➖ Operators in Python

Get ready to supercharge your code with operators! Operators let you perform calculations, compare values, and work with logic in Python. They’re like the tools 🛠️ you’ll use for almost everything.

***

## What Are Operators? 🤔

**Operators** are special symbols or keywords that help you perform operations on variables and values.

***

## 1. Arithmetic Operators 🔢

Used for math calculations.


| Operator | Meaning | Example | Result |
| :-- | :-- | :-- | :-- |
| + | Addition | 7 + 3 | 10 |
| - | Subtraction | 7 - 3 | 4 |
| * | Multiplication | 7 * 3 | 21 |
| / | Division | 7 / 2 | 3.5 |
| % | Modulus | 7 % 2 | 1 |
| // | Floor Division | 7 // 2 | 3 |
| ** | Exponent | 2 ** 3 | 8 |

**Practice:**

```python
print(5 + 4)   # 9
print(10 % 3)  # 1
```


***

## 2. Comparison Operators 🧐

Compare values and return `True` or `False`.


| Operator | Meaning | Example | Result |
| :-- | :-- | :-- | :-- |
| == | Equal to | 5 == 5 | True |
| != | Not equal to | 5 != 3 | True |
| > | Greater than | 5 > 3 | True |
| < | Less than | 5 < 3 | False |
| >= | Greater or equal | 5 >= 5 | True |
| <= | Less or equal | 3 <= 5 | True |

**Practice:**

```python
print(7 > 2)    # True
print(5 == 4)   # False
```


***

## 3. Logical Operators 🧠

Combine multiple conditions.


| Operator | Meaning | Example | Result |
| :-- | :-- | :-- | :-- |
| and | Both True | (5 > 2) and (3 < 4) | True |
| or | Either | (5 < 2) or (3 < 4) | True |
| not | Opposite | not(5 == 5) | False |

**Practice:**

```python
print(True and False)   # False
print(not (2 > 1))      # False
```


***

## 4. Assignment Operators 🖊️

Assign and update values.


| Operator | Example | Equivalent To |
| :-- | :-- | :-- |
| = | x = 5 | x = 5 |
| += | x += 3 | x = x + 3 |
| -= | x -= 2 | x = x - 2 |
| *= | x *= 4 | x = x * 4 |
| /= | x /= 2 | x = x / 2 |

**Practice:**

```python
score = 10
score += 5   # score is now 15
```


***

## 5. Membership Operators 🔍

Check if a value is in a sequence.


| Operator | Example | Result |
| :-- | :-- | :-- |
| in | 'a' in 'apple' | True |
| not in | 3 not in | True |


***

## Practice Questions with Solutions 🏆

1. **Practice:** Write code to check if 6 is divisible by 3.
    - **Solution:**

```python
print(6 % 3 == 0)   # True
```

2. **Practice:** If `x = 3`, what is the result of `x ** 2 + 1`?
    - **Solution:**

```python
x = 3
print(x ** 2 + 1)   # 10
```

3. **Practice:** Check if the word "cat" is in "education".
    - **Solution:**

```python
print("cat" in "education")   # True
```


***

## Step-by-Step Challenge: Score Calculator 🎮

**Task:**
Start with `score = 0`. Add 10, subtract 2, multiply by 3.
Print the final score.

**Solution:**

```python
score = 0
score += 10    # 10
score -= 2     # 8
score *= 3     # 24
print("Final Score:", score)
```

_Output:_

```
Final Score: 24
```


***

Well done! You’re now a pro at using operators in Python! 🥳 Keep practicing and try creating mini calculators or conditional games!

