---
title: "Calculus 1 Lecture 2.1 | Introduction to the Derivative of a Function"
author: Aryan
weight: 2.1
tags: ["Calculus", "Mathematics"]
series_order: 2.1
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube 962lLfW-8Jo >}}

The video "Calculus 1 Lecture 2.1: Introduction to the Derivative of a Function" by Professor Leonard introduces the derivative concept, which is a fundamental tool in calculus used to find the slope of a curve at any point and understand rates of change and instantaneous velocity.

***

## Key Points from the Video

### What is a Derivative? 🧮

- The **derivative** represents the **slope of a curve at a point**.
- It is defined as the **limit** of the difference quotient:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$
- This formula is the same difference quotient used to find slopes between two points, but now with $h$ approaching zero, the two points get infinitely close, giving the exact slope at a single point.


### Notation for Derivatives 📝

- The derivative of a function $f$ is written as $f'(x)$ (also called "f prime").
- Alternatively, derivatives may be written as $\frac{df}{dx}$, indicating the derivative of $f$ with respect to $x$.


### Importance of the Derivative

- Finding derivatives helps calculate the **instantaneous rate of change** of a quantity.
- It is used to find tangent lines to curves, velocities in physics, and many real-world rates of changes.
- Derivatives generalize slopes from straight lines to curves in a precise mathematical way.


### Step-by-Step Example: Derivative of $f(x) = 2x^2 - 3$

1. Find $f(x+h) = 2(x+h)^2 - 3 = 2(x^2 + 2xh + h^2) - 3 = 2x^2 + 4xh + 2h^2 - 3$.
2. Set up the difference quotient:

$$
\frac{f(x+h) - f(x)}{h} = \frac{(2x^2 + 4xh + 2h^2 - 3) - (2x^2 - 3)}{h} = \frac{4xh + 2h^2}{h}
$$
3. Simplify:

$$
\frac{4xh + 2h^2}{h} = 4x + 2h
$$
4. Take the limit as $h \to 0$:

$$
\lim_{h \to 0} (4x + 2h) = 4x
$$

- So the **derivative function** is $f'(x) = 4x$.


### Using Derivatives to Find Tangent Lines ✏️

- Tangent line equation at $x = a$ uses the **point-slope form**:

$$
y - f(a) = f'(a)(x - a)
$$
- For example, at $x=1$, with $f(1) = 2(1)^2 - 3 = -1$, the slope is $f'(1) = 4(1) = 4$, so tangent line:

$$
y + 1 = 4(x - 1) \Rightarrow y = 4x - 5
$$


### Instantaneous Velocity and Rates of Change

- The derivative also gives **instantaneous velocity** if $f(t)$ is position w.r.t. time.
- Velocity at time $t$ is $v(t) = f'(t)$.


### Important Notes

- The derivative varies by curve: different curves have different derivatives (different slopes at different points).
- The derivative function lets you plug in any $x$ and find the instantaneous slope there, simplifying calculations.
- Understanding the derivative conceptually as slope and rate of change helps grasp its applications in science and engineering.

***

### Summary

This video lays the foundation for derivatives by connecting the idea of slopes of curves with limits and difference quotients, then proceeding to compute derivatives step-by-step. It ties derivatives to rates of change and tangent lines, emphasizing both concept and computation.

Understanding this is essential for progressing deeper into calculus topics like optimization, motion, and curve analysis.

The video "Calculus 1 Lecture 2.1: Introduction to the Derivative of a Function" by Professor Leonard introduces the central concept of the derivative in calculus, explaining it as the slope of a curve at any point and showing how it is calculated using limits.

Key points include:

- The derivative is formally defined as the limit of the difference quotient:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

This represents the slope of the tangent line to the curve at a point $x$.
- Various notations for the derivative are introduced, such as $f'(x)$ and $\frac{df}{dx}$.
- The video demonstrates computing the derivative function for $f(x) = 2x^2 - 3$:
    - Compute $f(x+h) = 2(x+h)^2 - 3 = 2x^2 + 4xh + 2h^2 - 3$.
    - Substitute into the difference quotient and simplify to get $4x + 2h$.
    - Taking the limit as $h \to 0$ yields the derivative $f'(x) = 4x$.
- Using the derivative to find the equation of the tangent line at a point:

$$
y - f(a) = f'(a)(x - a)
$$

For example, at $x=1$, the slope is $4$, the function value $f(1) = -1$, so the tangent line is $y = 4x - 5$.
- The derivative represents the instantaneous rate of change and is directly related to concepts like instantaneous velocity when the function models position over time.
- The derivative varies with the point on the curve; the derivative function allows efficient slope computation at any point.

This lecture connects geometric intuition about slopes to the limit process and algebraic computation, providing a foundational understanding crucial for further calculus studies.

If more examples or clarifications are desired, those can also be provided.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=962lLfW-8Jo

