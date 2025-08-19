---
title: "📚 Tuples & Sets in Python | Lesson 06"
author: Aryan
weight: 6
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 6
cascade:
   hideFeatureImage: true

---

## 📚 Tuples \& Sets in Python

Welcome to the world of Tuples and Sets! These are special types of collections in Python that have unique features and uses. Let’s explore what makes them different and how you can use them effectively. 🚀

***

## 1. Tuples (Immutable Lists) 🔗

### What is a Tuple?

A **tuple** is an ordered collection of items, just like a list, but **cannot be changed** (immutable) after creation.

### How to Create a Tuple

Use parentheses `( )` or just commas:

```python
my_tuple = (1, 2, 3)
another_tuple = "a", "b", "c"
```


### Accessing Tuple Items

Access by index just like lists:

```python
print(my_tuple[^0])    # 1
print(my_tuple[-1])   # 3
```


### Why Use Tuples?

- They are **immutable** → safer for data that shouldn’t change.
- Tuples can be used as **keys in dictionaries**.
- Slightly faster than lists.


### Tuple Operations

- You **cannot** add, remove, or change items once a tuple is created.
- You can concatenate and repeat tuples like lists:

```python
t1 = (1, 2)
t2 = (3, 4)
print(t1 + t2)    # (1, 2, 3, 4)
print(t1 * 2)     # (1, 2, 1, 2)
```


***

## 2. Sets (Unordered Unique Collections) 🧩

### What is a Set?

A **set** is an unordered collection of **unique** items.

### Creating a Set

Use curly braces `{ }` or the `set()` function:

```python
my_set = {1, 2, 3}
another_set = set([1, 2, 2, 3])   # duplicate 2 will be removed
```


### Key Features

- Sets **do not allow duplicates**.
- Elements are **unordered** (no indexing or slicing).
- Sets are **mutable** — you can add or remove elements.

***

### Basic Set Operations

| Operation | Description | Example | Result |
| :-- | :-- | :-- | :-- |
| `add(item)` | Add an item | `my_set.add(4)` | Adds 4 |
| `remove(item)` | Remove an item | `my_set.remove(2)` | Removes 2 |
| `union()` | Combines two sets | `{1, 2} | {3, 4}` | `{1, 2, 3, 4}` |
| `intersection()` | Common elements | `{1, 2} & {2, 3}` | `{2}` |
| `difference()` | Items in first not second | `{1, 2, 3} - {2, 3}` | `{1}` |


***

## Practice Questions with Solutions 🏅

1. **Practice:** Create a tuple of three animals and print the second animal.
    - **Solution:**

```python
animals = ("cat", "dog", "fish")
print(animals[^1])   # dog
```

2. **Practice:** Try adding "cat" to a tuple. What happens?
    - **Solution:**
Tuples are immutable; you cannot add elements.
3. **Practice:** Create a set from `` and print it.[^1]
    - **Solution:**

```python
numbers = set([1, 2, 2, 3])
print(numbers)   # {1, 2, 3}
```

4. **Practice:** Find the union of `{1, 2}` and `{2, 3}`.
    - **Solution:**

```python
set1 = {1, 2}
set2 = {2, 3}
print(set1.union(set2))   # {1, 2, 3}
```


***

## Step-by-Step Mini Project: Unique Guest List 🎉

**Task:**
Create a guest list where duplicates are removed automatically.

```python
guest_list = ["Alice", "Bob", "Alice", "Eve"]
unique_guests = set(guest_list)
print("Unique guests:", unique_guests)
```

_Output:_

```
Unique guests: {'Alice', 'Bob', 'Eve'}
```


***

## Checklist for This Chapter ✅

- [x] Created and accessed tuples
- [x] Understood immutability of tuples
- [x] Created and modified sets
- [x] Used basic set operations like union and intersection

***

You’ve unlocked two powerful data-collection types in Python! Use tuples when data shouldn’t change, and sets when you need unique items without order. Keep experimenting! 🎯

<div style="text-align: center">⁂</div>

[^1]: https://www.geeksforgeeks.org/python/python-syllabus/

