---
title: "⏰ Working with Date and Time in Python | Lesson 16"
author: Aryan
weight: 16              
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 16       
cascade:
   hideFeatureImage: true

---

## ⏰ Working with Date and Time in Python

Dates and times are everywhere—from birthday reminders to scheduling apps. Python provides powerful tools to work with dates, times, and durations easily. Let’s learn how to handle date and time like a pro! 📅⏳

***

## 1. The `datetime` Module 🛠️

Python’s built-in `datetime` module helps you create, manipulate, and format date and time.

***

## 2. Current Date and Time 🕒

```python
from datetime import datetime

now = datetime.now()
print("Current date and time:", now)
```

Output looks like:

```
Current date and time: 2025-08-19 08:30:00.123456
```


***

## 3. Getting Date or Time Separately 📆⏰

```python
print("Date:", now.date())
print("Time:", now.time())
```


***

## 4. Creating Specific Date or Time 🎯

```python
from datetime import date, time

d = date(2025, 12, 25)
t = time(14, 30, 0)  # 2:30 PM

print("Date:", d)
print("Time:", t)
```


***

## 5. Formatting Date and Time (`strftime`) 🖋️

Convert date/time to readable strings using format codes:


| Code | Meaning | Example |
| :-- | :-- | :-- |
| `%Y` | Year (4 digits) | 2025 |
| `%m` | Month (01-12) | 08 |
| `%d` | Day (01-31) | 19 |
| `%H` | Hour (00-23) | 08 |
| `%M` | Minute (00-59) | 30 |
| `%S` | Second (00-59) | 00 |

Example:

```python
formatted = now.strftime("%d-%m-%Y %H:%M:%S")
print("Formatted:", formatted)
```

Output:

```
Formatted: 19-08-2025 08:30:00
```


***

## 6. Parsing Strings to Date (`strptime`) 🔄

Convert a date string back to a `datetime` object.

```python
date_str = "25-12-2025"
date_obj = datetime.strptime(date_str, "%d-%m-%Y")
print("Parsed date:", date_obj)
```


***

## 7. Date Arithmetic with `timedelta` ➕

Add or subtract days, seconds, or weeks using `timedelta`:

```python
from datetime import timedelta

tomorrow = now + timedelta(days=1)
print("Tomorrow:", tomorrow)

one_week_ago = now - timedelta(weeks=1)
print("One week ago:", one_week_ago)
```


***

## Practice Questions with Solutions 🏆

1. Print the current date in `YYYY/MM/DD` format.
2. Calculate the date 10 days from today.
3. Convert `"2025-01-01 12:00:00"` string into a datetime object and print it.

***

## Mini Project: Countdown Timer ⏳

Calculate the number of days remaining until a user’s next birthday.

```python
from datetime import datetime

birthday_str = input("Enter your birthday (DD-MM): ")
birthday = datetime.strptime(birthday_str, "%d-%m")

now = datetime.now()
this_year_birthday = birthday.replace(year=now.year)

if this_year_birthday < now:
    this_year_birthday = this_year_birthday.replace(year=now.year + 1)

days_left = (this_year_birthday - now).days
print(f"Days until your birthday: {days_left}")
```


***

## Checklist for This Chapter ✅

- [x] Imported and used `datetime` module
- [x] Got current date and time
- [x] Formatted dates using `strftime`
- [x] Parsed strings to dates with `strptime`
- [x] Done date arithmetic using `timedelta`

***

You’re now ready to build apps that work with dates and times—like calendars, reminders, and timers! Keep experimenting! 🎉

