---
title: "Calculus 1 Lecture 5.1: Finding Area Between Two Curves"
author: Aryan
weight: 5.1
tags: ["Calculus", "Mathematics"]
series_order: 5.1
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube c7wur9Lixb0 >}}


The video "Calculus 1 Lecture 5.1: Finding Area Between Two Curves" by Professor Leonard explains how to calculate the **area between two curves** using definite integrals, a natural extension of the integral concept from finding area under a single curve.

***

## Explanation

### 1. **Concept of Area Between Two Curves**

- Given two functions \$ f(x) \$ and \$ g(x) \$ defined on an interval $[a, b]$, where \$ f(x) \$ is always **greater than or equal to** \$ g(x) \$, the goal is to find the area of the region bounded between these two curves.
- Graphically, this is the vertical "gap" between the curves over the interval.


### 2. **Basic Method**

- The area between the curves is the difference of the areas under each curve:

$$
\text{Area} = \int_a^b f(x) \, dx - \int_a^b g(x) \, dx
$$
- Since \$ f(x) \geq g(x) \$, this difference gives this area as a positive value.
- This is a generalization of previous work finding the area under a single curve $f(x)$ (where the other curve is the x-axis, $g(x)=0$).


### 3. **Important Conditions**

- The bounds of integration $a$ and $b$ must be the same for both integrals.
- \$ f(x) \$ must be the **upper curve** and \$ g(x) \$ the **lower curve** on the entire interval—otherwise, the formula can give incorrect (negative or partial) results.
- If the two curves intersect within the interval, the area must be broken into sections where one function is on top.


### 4. **Steps to Find Area Between Two Curves**

1. **Find the intersecting points** by setting \$ f(x) = g(x) \$ to determine bounds if not given.
2. **Determine which function is on top** by evaluating sample points between the intersection points.
3. **Set up the integral(s):**
    - If the top function changes, split the integral at intersections and compute separately.
    - Otherwise,

$$
\text{Area} = \int_a^b [f(x) - g(x)] \, dx
$$
4. **Evaluate the integral using your knowledge of antiderivatives** and definite integral evaluation.

### 5. **Worked Example**

- Professor Leonard works through examples where:
    - The bounds are found by solving \$ f(x) = g(x) \$.
    - The top vs. bottom function is determined by plugging in values.
    - The integral is set up correctly as a difference and then evaluated, giving the total area between the curves.


### 6. **Relation to Previous Concepts**

- The method applies the same integral techniques you've learned.
- Finding area bounded by two functions generalizes finding the area under a curve as a special case where the "lower curve" is the x-axis (\$ g(x)=0 \$).
- The area between two curves is always **positive**, avoiding cancellation of areas above and below the x-axis (different from net signed area).


### 7. **Applications**

- This method can be used in physics, engineering, and applied mathematics to find effective distances, volumes, or material usage where two boundaries are involved.

***

## Summary

Professor Leonard's lecture teaches that to find the area between two curves, subtract the integral of the lower curve from the integral of the upper curve over the same interval. This requires identifying the correct bounds and determining which function is on top for each subinterval if curves intersect more than once. This builds on the fundamental concept of integrals as accumulated area, now extended to areas between arbitrary curves, with careful attention to positivity and proper setup ensuring meaningful results.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=c7wur9Lixb0

