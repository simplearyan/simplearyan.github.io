---
title: "Calculus 1 Lecture 1.1 | An Introduction to Limits"
author: Aryan
weight: 1.1
tags: ["Calculus", "Mathematics"]
series_order: 1.1
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube 54_XRjHhZzI >}}

The video "Calculus 1 Lecture 1.1: An Introduction to Limits" by Professor Leonard is an engaging introduction to one of the foundational concepts of calculus—the limit. Here’s a detailed explanation of the key ideas from the video:

***

## Understanding Limits: The Foundation of Calculus 🚀

### What Is Calculus About? 🎯

- Calculus has two main goals:

1. **Find the slope of a curve at a point** (not just straight lines).
2. **Find the area under a curve between two points**.
- Unlike algebra where you can easily find slopes of straight lines, finding the slope for curves is tricky. Calculus gives us methods to solve this.


### The Tangent Problem: Finding the Slope at a Point ✏️📐

- To find the slope (or tangent line) at a point $P$ on a curve, we ideally want two points to determine a line.
- Since just one point isn’t enough, we introduce a second point $Q$ on the curve and connect $P$ and $Q$ with a **secant line**.
- By moving $Q$ closer to $P$, the secant line approximates the tangent line better and better.
- This idea is the basis of **limits**: How close can $Q$ get to $P$ without being the same point, so the secant line slope approximates the tangent slope?


### The Concept of a Limit 🔍

- A **limit** captures what happens as one quantity (like $Q$) approaches another (like $P$) *but not exactly reaches it*.
- We want to know what value the function or slope is approaching as the input gets infinitely close to some number.
- The key: You do **not** have to evaluate the function at the point itself (especially if it’s undefined).


### Example: Slope of a Curve for \$ y = x^2 \$ at \$ x = 1 \$ 📈

- Consider points $P = (1, 1)$ and $Q = (x, x^2)$ on the curve.
- The slope of the secant line is:

$$
\frac{x^2 - 1}{x - 1}
$$
- Directly substituting $x = 1$ gives $\frac{0}{0}$, which is undefined.
- But by factoring and simplifying, we get $\frac{(x-1)(x+1)}{x-1} = x + 1$ (for $x \neq 1$).
- Now, as $x$ approaches 1, the slope approaches $2$.
- So, the slope of the **tangent line** at $x=1$ is 2.


### Writing the Equation of the Tangent Line 🖊️

- Using the slope 2 and point $P=(1,1)$, the tangent line equation is:

$$
y - 1 = 2(x - 1) \quad \Rightarrow \quad y = 2x - 1
$$


### Area Under the Curve: A Preview 🏞️

- Calculus also helps find the exact area under curves, which is impossible with simple geometry for irregular shapes.
- This is done by approximating the area with many thin rectangles and summing their areas.
- By letting the width of these rectangles approach zero (infinitely many thin rectangles), you get the exact area.
- Limits formalize this process.


### Formal Definition and Calculation of Limits 🔢

- The limit of $f(x)$ as $x$ approaches a value $a$ is the value that $f(x)$ gets closer to from both sides (left and right).
- The limit exists only if the left-hand and right-hand approach the same value.
- Example: For $f(x) = x^2$, as $x$ approaches 2, $f(x)$ approaches 4.
- Sometimes, you cannot plug in the value directly (like division by zero), so limits help find what the function approaches instead.

***

## Summary

- Limits allow us to talk about what happens very close to a point without needing to evaluate the function exactly at that point.
- They are essential for defining the slope of a curve and the area under curves.
- Techniques like factoring and simplifying expressions help evaluate limits.
- The concept of limits bridges algebra and calculus smoothly and is the first step into understanding derivatives and integrals.

***

This video is a great starting point for anyone new to calculus, clearly explaining why limits matter and how they help solve challenging problems involving curves and area. Professor Leonard’s step-by-step approach makes the concepts accessible and intriguing for learners.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=54_XRjHhZzI

