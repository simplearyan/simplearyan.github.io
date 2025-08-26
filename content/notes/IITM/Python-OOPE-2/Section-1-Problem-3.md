---
title: "Write a function is_present_in_opposite_halves(elem, l1: list, l2: list) that checks whether the given elem is present in opposite halves of the two lists l1 and l2."
author: Aryan
weight: 2
draft: false
summary: "Write a function is_dot_com_or_dot_in(domain) that takes a string domain and checks whether it ends with .com or .in. ..."
tags: ["Python", "OOPE-2", "Section-1", "Problem-1"]
series_order: 2
cascade:
   hideFeatureImage: true

---

## Write a function is_present_in_opposite_halves(elem, l1: list, l2: list) that checks whether the given elem is present in opposite halves of the two lists l1 and l2.

Got it ✅ You want a function that checks whether a given element `elem` is present in **opposite halves** of two even-length lists `l1` and `l2`.

Here’s the correct Python implementation:

```python
def is_present_in_opposite_halves(elem, l1: list, l2: list) -> bool:
    # Find middle indices
    mid1, mid2 = len(l1) // 2, len(l2) // 2

    # Split the lists into halves
    first_half_l1, second_half_l1 = l1[:mid1], l1[mid1:]
    first_half_l2, second_half_l2 = l2[:mid2], l2[mid2:]

    # Case 1: elem in first half of l1 and second half of l2
    if elem in first_half_l1 and elem in second_half_l2:
        return True
    
    # Case 2: elem in second half of l1 and first half of l2
    if elem in second_half_l1 and elem in first_half_l2:
        return True

    # If neither condition is satisfied
    return False
```


***

### ✅ Explanation:

1. We split each list into **two halves** using slicing.
2. Check two valid cases:
    - `elem` is in the **first half of l1** *and* in the **second half of l2**
    - `elem` is in the **second half of l1** *and* in the **first half of l2**
3. Return `True` if either case is satisfied, else `False`.

***

### 🔍 Examples:

```python
print(is_present_in_opposite_halves(3, [1, 2, 3, 4], [5, 6, 3, 8]))  # False
print(is_present_in_opposite_halves(7, [1, 2, 3, 4], [5, 6, 3, 8]))  # False
print(is_present_in_opposite_halves(6, [5, 6, 7, 8], [1, 2, 6, 4]))  # True
print(is_present_in_opposite_halves(6, [5, 7, 6, 8], [1, 6, 2, 4]))  # True
```

Would you like me to also handle the case where the **same element appears in both halves of the same list** (so we only check exact opposite halves once)?

