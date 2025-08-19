---
title: "Quiz Application 📝"
author: Aryan
weight: 1              
draft: false
description: Create a quiz app with multiple-choice questions stored in a dictionary or JSON file. The app should track user scores, give feedback, limit retries, and show a final report.
tags: ["Python", "Progmramming", "course"]
cascade:
   hideFeatureImage: true

---

Let's build a **Quiz Application** in Python with these features:

- Multiple-choice questions stored in a dictionary
- Score tracking
- Feedback for each question (correct or wrong)
- Limit on retries per question (e.g., max 3 tries)
- Final report showing total score
- Exception handling for user input robustness

***

### Step 1: Define the questions data structure

We'll use a list of dictionaries. Each dictionary is a question with choices and the correct answer.

```python
questions = [
    {
        "question": "What is the capital of France?",
        "choices": ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
        "answer": "A"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "choices": ["A. Earth", "B. Mars", "C. Jupiter", "D. Saturn"],
        "answer": "B"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "choices": ["A. Atlantic", "B. Indian", "C. Pacific", "D. Arctic"],
        "answer": "C"
    }
]
```


***

### Step 2: Create the quiz function with score tracking and retries

```python
def run_quiz(questions, max_retries=3):
    score = 0
    
    for q in questions:
        print("\n" + q["question"])
        for choice in q["choices"]:
            print(choice)
        
        retries = 0
        while retries < max_retries:
            try:
                answer = input("Your answer (A/B/C/D): ").strip().upper()
                if answer not in ['A', 'B', 'C', 'D']:
                    raise ValueError("Please select A, B, C, or D")
                
                if answer == q["answer"]:
                    print("Correct! 🎉")
                    score += 1
                    break
                else:
                    retries += 1
                    if retries < max_retries:
                        print(f"Incorrect! Try again ({max_retries - retries} attempts left). ❌")
                    else:
                        print(f"Out of retries! The correct answer was {q['answer']}.")
            except ValueError as e:
                print(e)
        
    print("\n=== Quiz Complete ===")
    print(f"Your final score: {score}/{len(questions)} 🏆")
```


***

### Step 3: Main program to run the quiz

```python
def main():
    print("Welcome to the Quiz Application! 📝")
    run_quiz(questions)
```


***

### Optional: Save scores to a file and load previous scores

This is a simple extension if you want:

```python
import json
import os

def save_score(score, filename="scores.json"):
    scores = []
    if os.path.exists(filename):
        with open(filename, "r") as f:
            try:
                scores = json.load(f)
            except json.JSONDecodeError:
                scores = []
    scores.append(score)
    with open(filename, "w") as f:
        json.dump(scores, f)
    print("Score saved! 💾")

def show_past_scores(filename="scores.json"):
    if not os.path.exists(filename):
        print("No past scores found.")
        return
    with open(filename, "r") as f:
        try:
            scores = json.load(f)
            print("Past scores:", scores)
        except json.JSONDecodeError:
            print("No valid scores data.")
```

You could call `save_score(score)` after quiz completion to keep a record.

***

### Practice Exercise with solution

- Add a feature to randomize question order each time the quiz starts.
- Display percentage score along with raw score at the end.

***

Would you like me to combine the complete script for you with file save/load included? 😊

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# **\#\# 2. Quiz Application 📝**

**\*\*Description:\*\***
Create a quiz app with multiple-choice questions stored in a dictionary or JSON file. The app should track user scores, give feedback, limit retries, and show a final report.

**\*\*Concepts Covered:\*\***

- Dictionaries and lists for questions
- Loops and conditionals for interaction
- Functions for modularity
- File handling to load/save scores (optional)
- Exception handling for robust input processing

Let's build a **Quiz Application** in Python with these features:

- Multiple-choice questions stored in a dictionary
- Score tracking
- Feedback for each question (correct or wrong)
- Limit on retries per question (e.g., max 3 tries)
- Final report showing total score
- Exception handling for user input robustness

***

### Step 1: Define the questions data structure

We'll use a list of dictionaries. Each dictionary is a question with choices and the correct answer.

```python
questions = [
    {
        "question": "What is the capital of France?",
        "choices": ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
        "answer": "A"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "choices": ["A. Earth", "B. Mars", "C. Jupiter", "D. Saturn"],
        "answer": "B"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "choices": ["A. Atlantic", "B. Indian", "C. Pacific", "D. Arctic"],
        "answer": "C"
    }
]
```


***

### Step 2: Create the quiz function with score tracking and retries

```python
def run_quiz(questions, max_retries=3):
    score = 0
    
    for q in questions:
        print("\n" + q["question"])
        for choice in q["choices"]:
            print(choice)
        
        retries = 0
        while retries < max_retries:
            try:
                answer = input("Your answer (A/B/C/D): ").strip().upper()
                if answer not in ['A', 'B', 'C', 'D']:
                    raise ValueError("Please select A, B, C, or D")
                
                if answer == q["answer"]:
                    print("Correct! 🎉")
                    score += 1
                    break
                else:
                    retries += 1
                    if retries < max_retries:
                        print(f"Incorrect! Try again ({max_retries - retries} attempts left). ❌")
                    else:
                        print(f"Out of retries! The correct answer was {q['answer']}.")
            except ValueError as e:
                print(e)
        
    print("\n=== Quiz Complete ===")
    print(f"Your final score: {score}/{len(questions)} 🏆")
```


***

### Step 3: Main program to run the quiz

```python
def main():
    print("Welcome to the Quiz Application! 📝")
    run_quiz(questions)
```


***

### Optional: Save scores to a file and load previous scores

This is a simple extension if you want:

```python
import json
import os

def save_score(score, filename="scores.json"):
    scores = []
    if os.path.exists(filename):
        with open(filename, "r") as f:
            try:
                scores = json.load(f)
            except json.JSONDecodeError:
                scores = []
    scores.append(score)
    with open(filename, "w") as f:
        json.dump(scores, f)
    print("Score saved! 💾")

def show_past_scores(filename="scores.json"):
    if not os.path.exists(filename):
        print("No past scores found.")
        return
    with open(filename, "r") as f:
        try:
            scores = json.load(f)
            print("Past scores:", scores)
        except json.JSONDecodeError:
            print("No valid scores data.")
```

You could call `save_score(score)` after quiz completion to keep a record.

***

### Practice Exercise with solution

- Add a feature to randomize question order each time the quiz starts.
- Display percentage score along with raw score at the end.

***

Would you like me to combine the complete script for you with file save/load included? 😊

