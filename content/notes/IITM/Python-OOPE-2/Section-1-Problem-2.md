---
title: "Check If the given domain is .com or .in"
author: Aryan
weight: 2
draft: false
summary: "Write a function is_dot_com_or_dot_in(domain) that takes a string domain and checks whether it ends with .com or .in. ..."
tags: ["Python", "OOPE-2", "Section-1", "Problem-1"]
series_order: 2
cascade:
   hideFeatureImage: true

---



## Check If the given domain is .com or .in

Write a function is_dot_com_or_dot_in(domain) that takes a string domain and checks whether it ends with .com or .in.
The function should return True if the domain has the specified suffix; otherwise, it should return False.
NOTE: This is a function type question, you don't have to take input or print the output, just have to complete the required function definition.
Examples
is_dot_com_or_dot_in("example.com") -> True
Explanation: The domain ends with .com.
is_dot_com_or_dot_in("website.in") -> True
Explanation: The domain ends with .in.
is_dot_com_or_dot_in("mydomain.org") -> False
Explanation: The domain does not end with .com or .in.
is_dot_com_or_dot_in("invalidcom") -> False
Explanation: The domain does not end with .com or .in.

Perfect! You want a function **`is_dot_com_or_dot_in(domain)`** that checks if a domain ends with `.com` or `.in`.

Here’s the Python implementation:

```python
def is_dot_com_or_dot_in(domain: str) -> bool:
    # Check if domain ends with ".com" or ".in"
    return domain.endswith(".com") or domain.endswith(".in")
```


***

### ✅ Explanation:

- `.endswith(suffix)` is a built-in Python method that checks whether a string ends with the specified substring.
- We check for both `.com` and `.in` as valid domain endings.

***

### 🔍 Examples:

```python
print(is_dot_com_or_dot_in("example.com"))   # True
print(is_dot_com_or_dot_in("website.in"))    # True
print(is_dot_com_or_dot_in("mydomain.org"))  # False
print(is_dot_com_or_dot_in("invalidcom"))    # False
```

Would you like me to also include a **version that ignores case sensitivity** (so `"Example.COM"` still returns `True`)?

