---
title: "📄 File Handling in Python | Lesson 14"
author: Aryan
weight: 14              
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 14       
cascade:
   hideFeatureImage: true

---

## 📄 File Handling in Python

Files help programs **store and read data** permanently, even after they close. Python makes it super easy to create, read, write, and manage files, so you can save user data, logs, or any important information. Let’s master file handling step-by-step! 📂

***

## Basics of File Handling 🗂️

Python works with files using built-in functions and methods, mainly through the `open()` function.

***

## 1. Opening a File 🔓

Syntax:

```python
file = open("filename.txt", "mode")
```

Common modes:


| Mode | Meaning |
| :-- | :-- |
| `"r"` | Read (file must exist) |
| `"w"` | Write (creates or overwrites file) |
| `"a"` | Append (add to the end) |
| `"r+"` | Read \& write |


***

## 2. Reading from a File 📖

- **Read whole content:**

```python
file = open("example.txt", "r")
content = file.read()
print(content)
file.close()
```

- **Read line by line:**

```python
file = open("example.txt", "r")
for line in file:
    print(line, end="")
file.close()
```


***

## 3. Writing to a File ✍️

- **Write to a file (overwrites if exists):**

```python
file = open("example.txt", "w")
file.write("Hello, world!\n")
file.write("This is a new file.")
file.close()
```

- **Append to a file (adds at end):**

```python
file = open("example.txt", "a")
file.write("\nAppending new line.")
file.close()
```


***

## 4. Using `with` Statement (Best Practice) 🏆

`with` automatically closes the file even if errors occur:

```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```


***

## Practice Questions with Solutions 🏆

1. Write code to create a file `notes.txt` and write your favorite quote in it.
2. Write code to read and print all lines from `notes.txt`.
3. Append your name to `notes.txt`.
4. Read a file line by line and count the number of lines.

***

## Step-by-Step Mini Project: Todo List Manager 🗒️

Create a simple program to add and display tasks saved in a `tasks.txt` file.

```python
def add_task(task):
    with open("tasks.txt", "a") as file:
        file.write(task + "\n")

def show_tasks():
    print("Your Tasks:")
    with open("tasks.txt", "r") as file:
        for line in file:
            print("-", line.strip())

# Usage
add_task("Complete Python course")
add_task("Go for a walk")
show_tasks()
```


***

## Checklist for This Chapter ✅

- [x] Opened files in different modes (`r`, `w`, `a`)
- [x] Read whole file or line by line
- [x] Wrote and appended data to files
- [x] Used `with` statement for safe file handling

***

You’re now ready to store and manage data on your computer through Python! Practice by creating notes, logs, and simple data storage apps! 🚀

