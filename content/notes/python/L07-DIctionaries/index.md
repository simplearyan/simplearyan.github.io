---
title: "📖 Dictionaries in Python | Lesson 07"
author: Aryan
weight: 7
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 7
cascade:
   hideFeatureImage: true

---

## 📖 Dictionaries in Python

Dictionaries are one of the most powerful and versatile data types in Python. They allow you to store data in **key-value pairs**, making it super easy to organize and look up information. Let’s dive into how dictionaries work! 🌟

***

## What is a Dictionary? 🔍

A **dictionary** is a collection of **key-value pairs** enclosed in curly braces `{ }`. Each key points to a value.

```python
student = {
    "name": "Ravi",
    "age": 21,
    "city": "Mumbai"
}
```

- **"name"**, **"age"**, **"city"** are keys.
- **"Ravi"**, 21, and "Mumbai" are their corresponding values.

***

## Creating Dictionaries ✍️

```python
empty_dict = {}
person = {"first_name": "Asha", "last_name": "Sharma", "age": 25}
```


***

## Accessing Values 🔑

Use the key inside square brackets or the `.get()` method.

```python
print(person["first_name"])   # Asha
print(person.get("age"))      # 25
```


***

## Adding \& Modifying Items ✏️

Add or change a key’s value by simple assignment:

```python
person["age"] = 26           # Modify existing key
person["city"] = "Delhi"     # Add new key-value pair
```


***

## Removing Items ❌

Several methods to remove:

- `del person["city"]` — deletes the key and value
- `person.pop("age")` — removes key and returns value
- `person.clear()` — empties the whole dictionary

***

## Useful Dictionary Methods 🛠️

| Method | Description | Example |
| :-- | :-- | :-- |
| `.keys()` | Returns all keys | `person.keys()` |
| `.values()` | Returns all values | `person.values()` |
| `.items()` | Returns pairs (key, value) | `person.items()` |
| `.update()` | Updates dictionary with another | `person.update(new_info)` |


***

## Looping Through Dictionaries 🔄

Iterate through keys, values, or both:

```python
for key in person:
    print(key, ":", person[key])

# Or

for key, value in person.items():
    print(key, "=>", value)
```


***

## Practice Questions with Solutions 🎯

1. **Practice:** Create a dictionary for a book with keys `title`, `author`, and `year`. Print the author.
    - **Solution:**

```python
book = {"title": "Python 101", "author": "John Smith", "year": 2020}
print(book["author"])   # John Smith
```

2. **Practice:** Update the year of the book to 2021.
    - **Solution:**

```python
book["year"] = 2021
```

3. **Practice:** Remove the `year` key from the dictionary.
    - **Solution:**

```python
del book["year"]
```


***

## Step-by-Step Mini Project: Contact Book 📒

Create a dictionary to store contact details like name, phone, and email, and print all details.

```python
contact = {
    "name": "Sita",
    "phone": "9998887777",
    "email": "sita@example.com"
}

for key, value in contact.items():
    print(f"{key.title()}: {value}")
```

_Output:_

```
Name: Sita
Phone: 9998887777
Email: sita@example.com
```


***

## Checklist for This Chapter ✅

- [x] Created and accessed dictionaries
- [x] Added, modified, and removed items
- [x] Used common dictionary methods
- [x] Looped through keys and values effectively

***

You are now ready to organize data smartly with dictionaries—think of them as your real-world data maps! Keep practicing by building address books, inventory systems, and more! 🎯

