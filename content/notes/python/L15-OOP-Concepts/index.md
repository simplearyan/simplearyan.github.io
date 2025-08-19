---
title: "🏗️ Object-Oriented Programming (OOP) Concepts in Python | Lesson 15"
author: Aryan
weight: 15              
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 15       
cascade:
   hideFeatureImage: true

---

## 🏗️ Object-Oriented Programming (OOP) Concepts in Python

OOP is a powerful programming style that helps you organize your code by bundling data and functionality into objects. It’s used to build complex programs that are easier to manage, reuse, and expand. Let’s learn the key OOP concepts in Python step-by-step! 🚀

***

## What is OOP? 🤔

OOP uses **objects** that contain both data (attributes) and behaviors (methods). Think of objects as real-world entities like a car, student, or bank account.

***

## 1. Classes and Objects 🏛️

- **Class:** Blueprint or template to create objects.
- **Object:** A specific instance of a class.

```python
class Dog:
    def __init__(self, name, age):   # Constructor method
        self.name = name
        self.age = age

    def bark(self):
        print(f"{self.name} says Woof!")

# Creating objects
my_dog = Dog("Buddy", 3)
my_dog.bark()  # Buddy says Woof!
```

- `self` refers to the object itself.
- `__init__` initializes object attributes.

***

## 2. Attributes and Methods 🌟

- **Attributes:** Variables that belong to the object, like name and age.
- **Methods:** Functions that belong to the object, like `bark()`.

***

## 3. Inheritance 📦

Create a new class based on an existing class to reuse or extend functionality.

```python
class Animal:
    def eat(self):
        print("Eating...")

class Cat(Animal):   # Cat inherits Animal
    def meow(self):
        print("Meow!")

kitty = Cat()
kitty.eat()    # Eating...
kitty.meow()   # Meow!
```


***

## 4. Encapsulation 🔒

Control access to attributes/methods using **private** variables (prefix with `_` or `__`).

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.__age = age  # Private attribute

    def get_age(self):
        return self.__age

person = Person("Asha", 30)
print(person.get_age())  # 30
# print(person.__age)    # Error! Cannot access directly
```


***

## 5. Polymorphism 🔄

Using the same method name in different classes with different behaviors.

```python
class Dog:
    def sound(self):
        print("Woof!")

class Cat:
    def sound(self):
        print("Meow!")

def make_sound(animal):
    animal.sound()

dog = Dog()
cat = Cat()

make_sound(dog)  # Woof!
make_sound(cat)  # Meow!
```


***

## Practice Questions with Solutions 🏆

1. Create a class `Car` with attributes `make` and `year`. Add a method to display these details.
2. Create a class `Rectangle` with methods to calculate area and perimeter.
3. Demonstrate inheritance by creating a class `ElectricCar` that inherits from `Car` and adds a battery attribute.

***

## Step-by-Step Mini Project: Bank Account 💰

Build a simple Bank Account class with deposit, withdraw, and balance checking.

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew {amount}. New balance: {self.balance}")
        else:
            print("Insufficient funds!")

# Usage
account = BankAccount("Rohit", 1000)
account.deposit(500)
account.withdraw(2000)
```


***

## Checklist for This Chapter ✅

- [x] Defined and used classes and objects
- [x] Created attributes and methods
- [x] Applied inheritance to reuse code
- [x] Practiced encapsulation for data hiding
- [x] Understood polymorphism with method overriding

***

You now have the tools to design well-structured, real-world programs with Python using OOP! Practice by modeling everyday objects and systems! 🎯

