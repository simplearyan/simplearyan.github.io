---
title: "🔎 Regular Expressions (Regex) in Python | Lesson 17"
author: Aryan
weight: 17              
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 17       
cascade:
   hideFeatureImage: true

---

## 🔎 Regular Expressions (Regex) in Python

Regular expressions are powerful tools to **search, match, and manipulate text** using patterns. They help you find patterns in strings like emails, phone numbers, or specific words. Python’s `re` module makes working with regex easy! Let’s learn the basics step-by-step! ✨

***

## What is a Regular Expression? 🤔

It’s a special sequence of characters that describe a search pattern. For example, you could use regex to find all email addresses in a document or validate user input.

***

## 1. Importing the `re` Module 🧩

```python
import re
```


***

## 2. Basic Regex Functions ⚙️

| Function | Description | Example |
| :-- | :-- | :-- |
| `re.search()` | Search for a pattern in a string | Finds first match |
| `re.findall()` | Find all matches in a string | Returns all matched substrings |
| `re.match()` | Matches pattern at start of string | Checks only the beginning |
| `re.sub()` | Replace matched parts with new text | Substitute text |


***

## 3. Simple Patterns 📝

| Pattern | Meaning | Example |
| :-- | :-- | :-- |
| `.` | Any character except newline | `a.c` matches 'abc' |
| `\d` | Digit (0-9) | `\d\d` matches '42' |
| `\w` | Word character (letters, digits, _) | `\w+` matches 'Hello' |
| `+` | One or more repetitions | `a+` matches 'aaa' |
| `*` | Zero or more repetitions | `a*` matches '', 'a', 'aaaa' |
| `?` | Optional (0 or 1) | `ca?t` matches 'cat' or 'ct' |


***

## 4. Example: Find All Numbers in a Text

```python
text = "I have 2 apples and 15 bananas."
numbers = re.findall(r'\d+', text)
print(numbers)  # ['2', '15']
```


***

## 5. Example: Validate an Email Address

```python
email = "student@example.com"
pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'

if re.match(pattern, email):
    print("Valid email!")
else:
    print("Invalid email!")
```


***

## 6. Replacing Text

Replace all vowels in a text with `*`:

```python
text = "Hello World"
new_text = re.sub(r'[aeiouAEIOU]', '*', text)
print(new_text)  # H*ll* W*rld
```


***

## Practice Questions with Solutions 🏆

1. Extract all words that start with "py" from a sentence.
2. Validate if a phone number is in the format `xxx-xxx-xxxx`.
3. Replace all whitespace in a string with underscores (`_`).

***

## Mini Project: Extract Dates from Text 📅

Find all dates in the format `dd-mm-yyyy` from a paragraph.

```python
text = "John was born on 12-05-1990, and his sister on 25-12-1995."
dates = re.findall(r'\b\d{2}-\d{2}-\d{4}\b', text)
print("Dates found:", dates)
```


***

## Checklist for This Chapter ✅

- [x] Imported and used Python’s `re` module
- [x] Used basic regex functions (`search`, `findall`, `match`, `sub`)
- [x] Understood common regex symbols and patterns
- [x] Performed text searching, matching, and replacing with regex

***

Regular expressions are a fantastic skill for text processing, data validation, and scraping. Keep practicing and soon you’ll write complex pattern searches with ease! 🎉

