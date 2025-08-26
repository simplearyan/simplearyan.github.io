---
title: "Calculus 1 Lecture 5.4: Finding the Length of a Curve on a Plane"
author: Aryan
weight: 5.4
tags: ["Calculus", "Mathematics"]
series_order: 5.4
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube 5Yuw1jCBq-0 >}}



The video "Calculus 1 Lecture 5.4: Finding the Length of a Curve on a Plane" by Professor Leonard explains how to compute the arc length of a curve defined by a function \$ y = f(x) \$ over an interval $[a, b]$.

***

## Explanation

### 1. **Concept of Arc Length**

- The goal is to find the exact length of a curve between two points on the x-axis.
- Unlike straight lines, curves require calculus to measure their length precisely.


### 2. **Method: Approximating Arc Length**

- Approximate the curve by a series of small straight line segments connecting points along the curve.
- Each segment length is computed using the distance formula:

$$
\Delta s = \sqrt{\Delta x^2 + \Delta y^2}
$$
- Summing these small segments approximates the total length $L$.


### 3. **From Approximation to Integral**

- Express $\Delta y$ in terms of $\Delta x$ using the derivative, since \$ \Delta y \approx f'(x) \Delta x \$ for small $\Delta x$.
- Hence,

$$
\Delta s \approx \sqrt{1 + \left( \frac{dy}{dx} \right)^2 } \Delta x
$$
- Taking limit as $\Delta x \to 0$, the sum becomes the definite integral for arc length:

$$
L = \int_{a}^{b} \sqrt{1 + \left( \frac{dy}{dx} \right)^2} \, dx
$$


### 4. **Using the Formula**

- To find the length:

1. Find the derivative \$ f'(x) \$.
2. Square it and add 1.
3. Take the square root.
4. Integrate from $a$ to $b$.
- The integral often requires substitution or other techniques for evaluation.


### 5. **Examples and Applications**

- The video likely demonstrates how to apply this formula to concrete examples, showing the step-by-step evaluation of the integral to find the exact length.

***

## Summary

Professor Leonard's lecture teaches how to determine the length of a plane curve by approximating it with line segments, expressing segment lengths in terms of the derivative of the function, and taking the limit to obtain the integral formula for arc length:

$$
L = \int_{a}^{b} \sqrt{1 + (f'(x))^2} \, dx
$$

This formula is fundamental in calculus for measuring curves accurately and has wide applications in physics, engineering, and geometry.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=5Yuw1jCBq-0

