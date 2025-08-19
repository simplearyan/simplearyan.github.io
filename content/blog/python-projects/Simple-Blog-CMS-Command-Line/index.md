---
title: "Simple Blog CMS (Command Line) 📰"
author: Aryan
weight: 1              
draft: false
description: Develop a command-line blog content management system where users can create, edit, delete, and list blog posts saved as text files. Add timestamps for posts and enable searching posts by keywords.
tags: ["Python", "Progmramming", "course"]
cascade:
   hideFeatureImage: true

---


Let's build a **Simple Command-Line Blog CMS** step-by-step covering the requested features:

- Create/Edit/Delete/List blog posts saved as separate text files
- Add timestamps to posts
- Search posts by keywords using string/regex
- Use Object-Oriented Programming (OOP) for the post structure
- Handle exceptions for file operations

***

### Step 1: Define the BlogPost class

This will represent a post with attributes for title, content, filename, and timestamp.

```python
import os
import datetime
import re

class BlogPost:
    def __init__(self, title, content, timestamp=None):
        self.title = title
        self.content = content
        self.timestamp = timestamp or datetime.datetime.now()
        self.filename = self._generate_filename(title)

    def _generate_filename(self, title):
        safe_title = re.sub(r'\W+', '_', title.lower())
        return f"{safe_title}.txt"

    def save(self):
        try:
            with open(self.filename, 'w', encoding='utf-8') as f:
                f.write(f"Title: {self.title}\n")
                f.write(f"Date: {self.timestamp.strftime('%Y-%m-%d %H:%M:%S')}\n")
                f.write("\n")
                f.write(self.content)
            print(f"Blog post '{self.title}' saved! 📝")
        except Exception as e:
            print(f"Error saving post '{self.title}': {e}")

    def load(self):
        try:
            with open(self.filename, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                self.title = lines[0].strip().replace("Title: ", "")
                self.timestamp = datetime.datetime.strptime(lines.strip().replace("Date: ", ""), "%Y-%m-%d %H:%M:%S")
                self.content = "".join(lines[3:])
        except Exception as e:
            print(f"Error loading post '{self.title}': {e}")
```


***

### Step 2: Define CMS operations

Create, edit, delete, list, and search posts.

```python
def list_posts():
    posts = [f for f in os.listdir() if f.endswith('.txt')]
    if not posts:
        print("No blog posts found. 🗃️")
        return []
    print("\nList of blog posts:")
    for i, post_file in enumerate(posts, 1):
        print(f"{i}. {post_file[:-4].replace('_', ' ').title()}")
    return posts

def create_post():
    title = input("Enter post title: ").strip()
    content = input("Write your content:\n")
    post = BlogPost(title, content)
    post.save()

def edit_post():
    posts = list_posts()
    if not posts:
        return
    try:
        choice = int(input("Select post number to edit: "))
        if choice < 1 or choice > len(posts):
            print("Invalid number chosen.")
            return
        filename = posts[choice - 1]
        post = BlogPost("", "")
        post.filename = filename
        post.load()
        print(f"Current content:\n{post.content}")
        new_content = input("Enter updated content:\n")
        post.content = new_content
        post.timestamp = datetime.datetime.now()  # update timestamp
        post.save()
    except ValueError:
        print("Please enter a valid number.")
    
def delete_post():
    posts = list_posts()
    if not posts:
        return
    try:
        choice = int(input("Select post number to delete: "))
        if choice < 1 or choice > len(posts):
            print("Invalid number chosen.")
            return
        os.remove(posts[choice - 1])
        print("Post deleted successfully! 🗑️")
    except ValueError:
        print("Please enter a valid number.")
    except FileNotFoundError:
        print("File not found.")

def search_posts():
    keyword = input("Enter keyword to search: ").strip().lower()
    posts = list_posts()
    if not posts:
        return
    found = False
    for filename in posts:
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read().lower()
                if keyword in content:
                    print(f"Keyword found in: {filename[:-4].replace('_', ' ').title()}")
                    found = True
        except Exception as e:
            print(f"Error reading {filename}: {e}")
    if not found:
        print("No posts matched your keyword. 🔍")
```


***

### Step 3: Main menu loop

```python
def main():
    while True:
        print("\n=== Simple Blog CMS ===")
        print("1. Create Post")
        print("2. Edit Post")
        print("3. Delete Post")
        print("4. List All Posts")
        print("5. Search Posts")
        print("6. Exit")

        choice = input("Choose an option (1-6): ")

        if choice == "1":
            create_post()
        elif choice == "2":
            edit_post()
        elif choice == "3":
            delete_post()
        elif choice == "4":
            list_posts()
        elif choice == "5":
            search_posts()
        elif choice == "6":
            print("Exiting Blog CMS. Goodbye! 👋")
            break
        else:
            print("Invalid choice, please try again.")
```


***

### How to run?

Save the full script and run it. It will create text files in your current folder for each blog post. You can add, edit, delete, list, and search your posts easily!

***

### Practice Exercise 📚

- Extend the search to support regular expression patterns.
- Add a feature to sort the list of posts by date created.

Would you like me to provide the complete combined script? 😊

