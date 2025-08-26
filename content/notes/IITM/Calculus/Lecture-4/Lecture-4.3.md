---
title: "Calculus 1 Lecture 4.3: Area Under a Curve, Limit Approach, Riemann Sums"
author: Aryan
weight: 4.3
tags: ["Calculus", "Mathematics"]
series_order: 4.3
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube F0uuW-I6icY >}}


The video "Calculus 1 Lecture 4.3: Area Under a Curve, Limit Approach, Riemann Sums" by Professor Leonard offers a comprehensive, step-by-step explanation of how the **area under a curve** can be rigorously defined and calculated using the concept of limits and **Riemann sums**—the foundational idea behind definite integrals.

***

## Explanation

### 1. **Sigma (Summation) Notation**

- The lecture begins with an introduction to **sigma notation** (∑), used to express the sum of a sequence of terms concisely.[^1]
- Examples and rules for manipulating sigma notation are discussed (pulling out constants, splitting sums, and using summation formulas for powers of integers).


### 2. **Closed Formulas for Sums**

- Basic formulas are presented for common sequences:
    - $\sum_{k=1}^n 1 = n$
    - $\sum_{k=1}^n k = \frac{n(n+1)}{2}$
    - $\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$
    - $\sum_{k=1}^n k^3 = \left[ \frac{n(n+1)}{2} \right]^2$.[^1]


### 3. **The Motivation: Finding Area**

- The goal is to find the **area under the curve** for a function $f(x)$ over an interval $[a, b]$.
- Instead of using approximate geometric shapes, calculus uses **rectangles** whose width becomes infinitesimally small as their number increases.


### 4. **The Rectangular (Riemann Sum) Method**

- Divide the interval $[a, b]$ into $n$ **equal subintervals**—each of width $\Delta x = \frac{b-a}{n}$.
- In each subinterval, select an "arbitrary point" (usually a left endpoint, right endpoint, or midpoint) to determine the rectangle's height ($f(\text{chosen } x)$).
- The approximate area is the **sum of all rectangles’ areas**:

$$
\text{Area} \approx \sum_{k=1}^n f(x_k^*) \Delta x
$$

where $x_k^*$ is the chosen point in each interval.[^1]


### 5. **From Approximation to Exactness: The Limit**

- The more rectangles (the larger $n$), the better the approximation.
- To get the **actual area**, let $n \to \infty$, making the width of each rectangle shrink to zero:

$$
\text{Area} = \lim_{n \to \infty} \sum_{k=1}^n f(x_k^*) \Delta x
$$
    - This is the **definite integral**.


### 6. **Connecting to Integral Notation**

- The integral symbol ($\int$) is, in essence, a stylized 'S' for "sum."
- The process of summing infinitely many infinitesimal rectangles is precisely what definite integrals represent:

$$
\int_a^b f(x) \, dx
$$

is the area under the curve $f(x)$ from $a$ to $b$.[^1]


### 7. **Practical Variations**

- The point $x_k^*$ can be chosen as:
    - **Left endpoint:** $x_k^* = a + (k-1)\Delta x$
    - **Right endpoint:** $x_k^* = a + k\Delta x$
    - **Midpoint:** $x_k^* = a + \left(k - \frac{1}{2}\right)\Delta x$
- All choices yield the same answer as $n \to \infty$, but may offer better approximations for small $n$.


### 8. **Worked Examples and Visualization**

- The video includes concrete examples and diagrams, showing how to break up intervals, choose rectangle heights, calculate sums, and take the limit.
- Important distinctions are made between approximate and exact area, and between various types of sums (left, right, midpoint).


### 9. **Key Insights**

- The process links the **geometric concept of area** to the **analytic concept of the integral**.
- This is the theoretical foundation of all integration: **summing small pieces to get a whole**.

***

## Summary

Professor Leonard’s lecture fully develops the logic and mechanics of using **Riemann sums** and **limits** to define and compute the area under a curve, establishing the groundwork for definite integration. By connecting summation, sigma notation, the partitioning of intervals, and the limiting process, the video shows how the integral symbol (∫) encodes the action of summing infinitely many infinitesimal quantities—the essence of finding area in calculus.

This lesson is central for understanding how integration works at its most fundamental, bridging geometry and analysis in calculus.[^1]

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=F0uuW-I6icY

