---
title: "🎬 Strings in Python | Lesson 04"
author: Aryan
weight: 4
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 4
cascade:
   hideFeatureImage: true

---


## 🎬 Strings in Python

Strings are the *heart* of working with text in Python. Whether you want to print a greeting, store a user’s name, or process sentences, strings make it possible! Let’s explore how strings work and the magic you can do with them. ✨

***

## What is a String? 🧩

A **string** is simply text—that can be letters, numbers, symbols—inside quotes.

```python
greeting = "Hello, World!"
```

- You can use **single (' ')** or **double (" ")** quotes.

***

## Creating Strings ✍️

```python
name = "Amit"
sentence = 'Python is fun!'
```


***

## String Operations 🎲

### 1. Concatenation (Joining Strings)

You can join (concatenate) strings using the **+** operator.

```python
first = "Good"
second = "Morning"
message = first + " " + second
print(message)   # Good Morning
```


### 2. Repetition

Use **\*** to repeat a string.

```python
echo = "Hi! " * 3
print(echo)   # Hi! Hi! Hi!
```


***

## String Indexing \& Slicing 🔪

You can access individual characters or parts (slices) of a string.

```python
text = "Python"
print(text[0])     # 'P' (first character)
print(text[-1])    # 'n' (last character)
print(text[1:4])   # 'yth' (characters 1 to 3)
```


***

## Useful String Methods 🛠️

- **.upper()** – Convert to uppercase
- **.lower()** – Convert to lowercase
- **.title()** – Capitalize each word
- **.strip()** – Remove spaces from start/end
- **.replace(old, new)** – Replace old with new text
- **.find(substring)** – Find position of substring

```python
greet = " hello there! "
print(greet.strip())           # "hello there!"
print(greet.upper())           # " HELLO THERE! "
print("apple".replace('a', 'A'))   # "Apple"
print("Python".find('th'))     # 2
```


***

## Formatted Strings (f-strings) 🪄

Make strings with variables easy to read using f-strings.

```python
name = "Sara"
age = 20
print(f"My name is {name} and I am {age} years old.")
# Output: My name is Sara and I am 20 years old.
```


***

## Practice Questions with Solutions 🏆

1. **Practice:** Join and print "Good" and "Evening".
    - **Solution:**

```python
print("Good" + " " + "Evening")
```

2. **Practice:** How do you print the first and last letter of "Python"?
    - **Solution:**

```python
text = "Python"
print(text, text[-1])  # P n
```

3. **Practice:** Change "python" to "PYTHON".
    - **Solution:**

```python
print("python".upper())
```


***

## Step-by-Step Mini Project: Greeting Builder 🎉

**Task:**
Ask the user for their name and create a personalized greeting such as `Hello, Priya! Welcome to Python.`

**Solution:**

```python
name = input("Enter your name: ")
greeting = f"Hello, {name}! Welcome to Python."
print(greeting)
```


***

## Checklist for This Chapter ✅

- [x] Created and joined strings
- [x] Indexing and slicing text
- [x] Used useful string methods
- [x] Built f-strings for formatted output

***

Awesome! You’re now skilled at handling text with Python strings. Try out message creators, name extractors, or emoji repeaters! 🥳

