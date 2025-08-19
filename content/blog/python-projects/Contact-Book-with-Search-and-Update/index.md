---
title: "Contact Book with Search and Update 📞"
author: Aryan
weight: 1              
draft: false
description: Create an interactive contact book app to add, update, delete, and search contacts. Save contacts in a file, allow search by name or phone, and update details easily..
tags: ["Python", "Progmramming", "course"]
cascade:
   hideFeatureImage: true

---

## Contact Book with Search and Update 📞 — A Step-by-Step Tutorial

Creating a simple **Contact Book** app is a great exercise to understand core Python concepts like dictionaries, file handling, functions, and exception handling. In this tutorial, you'll build an interactive command-line Contact Book that lets you add, update, delete, and search contacts, with all data saved persistently in a file.

***

## What You'll Learn

- How to use **dictionaries** to store contact information (name and phone number)
- Persist data with **file handling** (load/save contacts)
- Build a **menu-driven program** with loops and conditionals
- Implement **functions with exception handling** for robust input
- Format strings nicely for a user-friendly display

***

## Step 1: Setup and Data Structure

We'll use a dictionary to store contacts:

```python
contacts = {
    "Alice": "123-456-7890",
    "Bob": "987-654-3210"
}
```

Keys are names, values are phone numbers.

***

## Step 2: Load and Save Contacts from File

We'll save contacts as JSON in `contacts.json` for easy persistence.

```python
import json

def load_contacts(filename="contacts.json"):
    try:
        with open(filename, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}
    except json.JSONDecodeError:
        print("File corrupted! Starting with empty contact book.")
        return {}

def save_contacts(contacts, filename="contacts.json"):
    with open(filename, "w") as f:
        json.dump(contacts, f)
```


***

## Step 3: Add a Contact

Get user input for name and phone, validate, and save.

```python
def add_contact(contacts):
    name = input("Enter contact name: ").strip().title()
    if not name:
        print("Name cannot be empty.")
        return
    if name in contacts:
        print("Contact already exists. Use update to change details.")
        return
    phone = input("Enter phone number: ").strip()
    if not phone:
        print("Phone number cannot be empty.")
        return
    contacts[name] = phone
    print(f"Contact {name} added.")
```


***

## Step 4: Update a Contact

Let user change existing contact's phone.

```python
def update_contact(contacts):
    name = input("Enter contact name to update: ").strip().title()
    if name not in contacts:
        print("Contact not found.")
        return
    phone = input(f"Enter new phone for {name}: ").strip()
    if not phone:
        print("Phone number cannot be empty.")
        return
    contacts[name] = phone
    print(f"Contact {name} updated.")
```


***

## Step 5: Delete a Contact

Remove a contact from the dictionary.

```python
def delete_contact(contacts):
    name = input("Enter contact name to delete: ").strip().title()
    if name in contacts:
        del contacts[name]
        print(f"Contact {name} deleted.")
    else:
        print("Contact not found.")
```


***

## Step 6: Search Contacts by Name or Phone

Allow users to find contacts by part of the name or phone number.

```python
def search_contacts(contacts):
    query = input("Enter name or phone to search: ").strip().lower()
    found = False
    for name, phone in contacts.items():
        if query in name.lower() or query in phone:
            print(f"{name}: {phone}")
            found = True
    if not found:
        print("No contacts matched your search.")
```


***

## Step 7: Display All Contacts Nicely

```python
def list_contacts(contacts):
    if not contacts:
        print("No contacts saved.")
        return
    print("\nSaved Contacts:")
    print("-" * 20)
    for name, phone in sorted(contacts.items()):
        print(f"{name:<15} {phone}")
    print("-" * 20)
```


***

## Step 8: Main Menu Loop

Put everything together into a menu-driven app.

```python
def main():
    contacts = load_contacts()

    while True:
        print("\n--- Contact Book Menu ---")
        print("1. Add Contact")
        print("2. Update Contact")
        print("3. Delete Contact")
        print("4. Search Contacts")
        print("5. List All Contacts")
        print("6. Save and Exit")

        choice = input("Choose an option (1-6): ")

        if choice == "1":
            add_contact(contacts)
        elif choice == "2":
            update_contact(contacts)
        elif choice == "3":
            delete_contact(contacts)
        elif choice == "4":
            search_contacts(contacts)
        elif choice == "5":
            list_contacts(contacts)
        elif choice == "6":
            save_contacts(contacts)
            print("Contacts saved. Goodbye! 👋")
            break
        else:
            print("Invalid choice. Please choose 1-6.")
```


***

## Summary

You've built a fully functional Contact Book app with:

- Adding, updating, deleting contacts
- Searching contacts by name or phone
- Saving and loading from a file
- Clean formatted display for easy reading

Try extending this app by:

- Adding email or address fields
- Implementing phone number validation with regex
- Adding import/export features (CSV)

***

### Ready to practice your new Contact Book app? Here's an exercise:

- Implement a feature to **import contacts from a CSV file**.
- Add a confirmation prompt before deleting a contact.

***

If you want, I can provide the full complete Python script file for this Contact Book. Would you like that? 😊

