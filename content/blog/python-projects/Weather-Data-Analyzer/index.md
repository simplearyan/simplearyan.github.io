---
title: "Weather Data Analyzer ☁️"
author: Aryan
weight: 1              
draft: false
description: Download or input weather data (temperature, humidity, pressure) in CSV or JSON format, then analyze trends like average temperature, hottest day, etc. Visualize data with text-based charts or summary tables.
tags: ["Python", "Progmramming", "course"]
cascade:
   hideFeatureImage: true

---

## Weather Data Analyzer ☁️ — A Complete Tutorial

Analyzing weather data is not only practical but also a fun way to learn data handling and analysis in Python. In this tutorial, you will learn how to create a **Weather Data Analyzer** that reads weather data from CSV or JSON files, processes it, and provides useful insights like average temperature, hottest day, and more. We will also look at simple text-based charts and summary tables.

***

## What You Will Learn

- Reading weather data from **CSV** and **JSON** files (file handling)
- Using **lists and dictionaries** to store data efficiently
- Writing **functions** to modularize your analysis tasks
- Displaying data visually with **text-based charts** (optional matplotlib plots)
- Handling file and data errors gracefully with **exception handling**

***

## Step 1: Prepare Sample Data

You can have weather data in CSV format like this:

```
date,temperature,humidity,pressure
2025-08-15,30,65,1012
2025-08-16,32,60,1010
2025-08-17,29,70,1013
```

Or JSON format like this:

```json
[
    {"date": "2025-08-15", "temperature": 30, "humidity": 65, "pressure": 1012},
    {"date": "2025-08-16", "temperature": 32, "humidity": 60, "pressure": 1010},
    {"date": "2025-08-17", "temperature": 29, "humidity": 70, "pressure": 1013}
]
```


***

## Step 2: Reading Data from CSV or JSON

We'll write a function that reads weather data given a filename and detects the format.

```python
import csv
import json

def load_weather_data(filename):
    try:
        if filename.endswith(".csv"):
            with open(filename, newline='') as f:
                reader = csv.DictReader(f)
                data = [{k: (float(v) if k != "date" else v) for k, v in row.items()} for row in reader]
        
        elif filename.endswith(".json"):
            with open(filename) as f:
                data = json.load(f)
                for entry in data:
                    entry['temperature'] = float(entry['temperature'])
                    entry['humidity'] = float(entry['humidity'])
                    entry['pressure'] = float(entry['pressure'])
        else:
            print("Unsupported file format. Use CSV or JSON.")
            return []
        print(f"Loaded {len(data)} records from {filename}")
        return data
    
    except FileNotFoundError:
        print(f"File {filename} not found.")
        return []
    except Exception as e:
        print(f"Error loading data: {e}")
        return []
```


***

## Step 3: Analyze Weather Data

Let's create reusable analysis functions:

### Calculate average temperature

```python
def average_temperature(data):
    temps = [entry['temperature'] for entry in data]
    return sum(temps) / len(temps) if temps else None
```


### Find hottest day

```python
def hottest_day(data):
    if not data:
        return None, None
    hottest = max(data, key=lambda x: x['temperature'])
    return hottest['date'], hottest['temperature']
```


### Display a summary table

```python
def display_summary(data):
    print("\nWeather Data Summary:")
    print(f"{'Date':<12} {'Temp (°C)':<10} {'Humidity (%)':<12} {'Pressure (hPa)':<15}")
    print("-" * 50)
    for entry in data:
        print(f"{entry['date']:<12} {entry['temperature']:<10.1f} {entry['humidity']:<12.1f} {entry['pressure']:<15.1f}")
```


***

## Step 4: Optional Text-Based Chart for Temperature Trend

We can visualize temperature changes over time in text:

```python
def text_temperature_chart(data):
    print("\nTemperature Trend Chart (each * = 1°C):")
    for entry in data:
        stars = '*' * int(entry['temperature'])
        print(f"{entry['date']}: {stars} ({entry['temperature']}°C)")
```


***

## Step 5: Putting It All Together

```python
def main():
    filename = input("Enter weather data filename (CSV or JSON): ").strip()
    data = load_weather_data(filename)
    if not data:
        return
    
    display_summary(data)
    
    avg_temp = average_temperature(data)
    if avg_temp is not None:
        print(f"\nAverage Temperature: {avg_temp:.2f}°C")
    
    date, temp = hottest_day(data)
    if date:
        print(f"Hottest Day: {date} with {temp}°C")

    text_temperature_chart(data)
```


***

## Bonus: Using Matplotlib for Visualization (Optional)

If you'd like graphical plots, install matplotlib and add:

```python
import matplotlib.pyplot as plt

def plot_temperature(data):
    dates = [entry['date'] for entry in data]
    temps = [entry['temperature'] for entry in data]
    plt.plot(dates, temps, marker='o')
    plt.title("Temperature Trend")
    plt.xlabel("Date")
    plt.ylabel("Temperature (°C)")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()
```

Call `plot_temperature(data)` at the end of `main()` to see a graph.

***

## Practice Exercise 📝

- Extend the analyzer to compute average humidity and pressure.
- Add functionality to identify the coldest day.
- Implement searching for data within a date range.

***

## Summary

You have now created a versatile **Weather Data Analyzer** that can:

- Load CSV or JSON weather data files
- Calculate key statistics like average temperature and hottest day
- Display data clearly with summary tables and text charts
- Optionally visualize temperature trends graphically with matplotlib

Try running your analyzer on your own weather datasets and explore more insights!

***

Would you like me to provide the full combined Python script for this Weather Data Analyzer? 😊

