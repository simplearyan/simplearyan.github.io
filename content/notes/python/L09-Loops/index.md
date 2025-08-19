---
title: "🔁 Loops in Python | Lesson 09"
author: Aryan
weight: 9
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 9
cascade:
   hideFeatureImage: true

---


## 🔁 Loops in Python

Loops help your program **repeat** tasks automatically without writing the same code again and again. They are perfect for when you want to process lots of data, run a task multiple times, or iterate over collections! Let’s dive into the magic of loops. ✨

***

## What Are Loops? 🤔

Loops execute a block of code **multiple times** until a condition is met or for every item in a collection.

***

## 1. The `while` Loop ⏳

Repeats a block of code **while** a condition is true.

```python
count = 1
while count <= 5:
    print("Count is", count)
    count += 1  # Increment count to avoid infinite loop
```

*Important:* Without changing the condition inside, a `while` loop can run forever (infinite loop).

***

## 2. The `for` Loop 🔄

Used for iterating **over a sequence** (like list, string, or range).

```python
colors = ["red", "green", "blue"]
for color in colors:
    print(color)
```

Often used with `range()` to repeat a fixed number of times:

```python
for i in range(5):
    print("Iteration", i)
```


***

## 3. Loop Control Statements 🛑

- `break` — Immediately stops the loop.
- `continue` — Skips the current iteration and moves to the next.
- `else` with loops — Runs when loop finishes without `break`.

```python
for i in range(1, 6):
    if i == 3:
        continue  # Skip printing 3
    print(i)
else:
    print("Loop finished!")
```


***

## Practice Questions with Solutions 🏆

1. **Practice:** Print numbers from 1 to 10 using a `while` loop.
    - **Solution:**

```python
num = 1
while num <= 10:
    print(num)
    num += 1
```

2. **Practice:** Print each character in the string "Python".
    - **Solution:**

```python
for ch in "Python":
    print(ch)
```

3. **Practice:** Use a loop to sum all numbers from 1 to 5.
    - **Solution:**

```python
total = 0
for i in range(1, 6):
    total += i
print("Sum:", total)  # Output: 15
```


***

## Step-by-Step Challenge: Guessing Game 🎯

Ask the user to guess a secret number between 1 and 5 until they guess correctly.

```python
secret = 3
guess = 0

while guess != secret:
    guess = int(input("Guess the number (1-5): "))
    if guess == secret:
        print("You guessed it right! 🎉")
    else:
        print("Try again!")
```


***

## Checklist for This Chapter ✅

- [x] Used `while` loops to repeat with conditions
- [x] Used `for` loops to iterate over sequences
- [x] Controlled loops using `break` and `continue`
- [x] Used `else` block in loops

***

You now have a powerful tool to automate repetitive tasks in Python. Keep practicing loops by creating games, calculators, and more! 🚀

