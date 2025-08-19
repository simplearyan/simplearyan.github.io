---
title: "📦 Modules and Packages in Python | Lesson 12"
author: Aryan
weight: 12              
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 12       
cascade:
   hideFeatureImage: true

---

## 📦 Modules and Packages in Python

As you build bigger programs, you want to organize your code better and reuse useful pieces easily. Python makes this simple with **modules** and **packages**—building blocks that help you keep your code clean and manageable! Let’s learn how to use them. 🧩

***

## What are Modules? 🧱

A **module** is a file containing Python code (functions, classes, variables) that you can reuse by **importing** it into other programs.

### How to Import a Module

Python comes with many **built-in modules** you can use right away:

```python
import math

print(math.sqrt(16))  # 4.0
```

You can also import specific functions or variables:

```python
from math import pi, ceil

print(pi)      # 3.141592653589793
print(ceil(4.2))  # 5
```


***

## Creating Your Own Module 🛠️

Create a file called `my_module.py` with the following content:

```python
def greet(name):
    return f"Hello, {name}!"
```

Use this module in another script:

```python
import my_module

print(my_module.greet("Rahul"))  # Hello, Rahul!
```


***

## What are Packages? 📦

A **package** is a **folder/directory** containing multiple Python modules, organized using a special `__init__.py` file.

It helps group related modules together.

```
my_package/
|-- __init__.py
|-- module1.py
|-- module2.py
```

You import like this:

```python
from my_package import module1

module1.some_function()
```


***

## Installing and Using External Packages 🌐

Python has tons of packages you can install via **pip** (Python’s package manager):

```bash
pip install requests
```

Then import and use:

```python
import requests

response = requests.get("https://example.com")
print(response.status_code)
```


***

## Practice Questions with Solutions 🏆

1. Use the built-in `random` module to print a random number between 1 and 10.
    - **Solution:**

```python
import random
print(random.randint(1, 10))
```

2. Create a module named `math_utils.py` with a function that returns the factorial of a number. Import and test it.
3. Create a package with two modules: one with math functions and another with string functions. Experiment with importing them.

***

## Mini Project: Simple Math Module 🧮

Create a module `simple_math.py`:

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

Use in a separate file:

```python
import simple_math

print(simple_math.add(10, 5))       # 15
print(simple_math.subtract(10, 5))  # 5
```


***

## Checklist for This Chapter ✅

- [x] Used built-in modules via `import`
- [x] Created and imported your own modules
- [x] Understood what packages are and how to import
- [x] Installed and used external packages with pip

***

You’re now ready to organize and reuse Python code efficiently! Explore Python’s vast ecosystem and even build your own libraries! 🚀


