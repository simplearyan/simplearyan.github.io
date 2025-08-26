---
title: "Calculus 1 Lecture 1.5 | Slope of a Curve, Velocity, and Rates of Change"
author: Aryan
weight: 1.5
tags: ["Calculus", "Mathematics"]
series_order: 1.5
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube PqQ5v94_NGM >}}


The video "Calculus 1 Lecture 1.5: Slope of a Curve, Velocity, and Rates of Change" by Professor Leonard dives into the fundamental calculus concept of finding the slope of a curve at a point using limits, connecting it to velocity and rates of change.

***

## Key Concepts Explained:

### The Goal: Slope of a Curve at a Point 📈

- The core idea is to find the **slope of the tangent line** to a curve at a specific point.
- Unlike linear functions, curves change slope continuously, so the slope varies at each point.
- To describe the slope at one point, we start by considering the **secant line** between two nearby points and then make the points infinitely close.


### Introducing Points and Notation:

- Fix point $P$ at $x = x_0$, and let point $Q$ be at $x_0 + h$, where $h$ is a small increment.
- The function values at these points are $f(x_0)$ and $f(x_0 + h)$, respectively.


### Secant Line and Slope:

- The slope of the secant line between $P$ and $Q$ is:

$$
\frac{f(x_0 + h) - f(x_0)}{h}
$$

- This is called the **difference quotient**.


### Using Limits to Find the Tangent Line Slope:

- To find the **tangent slope**, let $h$ approach 0 (meaning $Q$ gets arbitrarily close to $P$).
- The slope of the tangent is the **limit** of the difference quotient as $h \to 0$:

$$
\lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}
$$

- This limit, if it exists, is the **instantaneous rate of change** at $x_0$.


### Example Calculation (Function: $y = x^2$ at $x=1$):

1. Compute $f(1 + h) = (1 + h)^2 = 1 + 2h + h^2$.
2. Substitute into the difference quotient:

$$
\frac{(1 + 2h + h^2) - 1}{h} = \frac{2h + h^2}{h} = 2 + h
$$

3. Take the limit as $h \to 0$:

$$
\lim_{h \to 0} (2 + h) = 2
$$

4. The tangent slope at $x=1$ is 2.

### Equation of the Tangent Line:

- Using point-slope form:

$$
y - y_0 = m(x - x_0)
$$

- With $x_0=1$, $y_0=1$, and slope $m=2$:

$$
y - 1 = 2(x - 1) \rightarrow y = 2x - 1
$$

### Instantaneous Velocity and Rates of Change:

- The same concept applies to velocity, where the position function is $s(t)$, and the instantaneous velocity is the derivative (limit of average velocity as time interval shrinks to zero).
- Rates of change in general can be seen as slopes of functions, connecting algebraic computations to real-world physical meanings.

***

### Summary:

- This lecture demonstrates how limits formalize the intuitive idea of a slope at a point.
- Introduces the difference quotient as a stepping stone towards the derivative.
- Shows practical computation of tangent slopes using limits.
- Highlights the foundational importance for understanding rates of change and motion in calculus.

This video marks a pivotal moment in transitioning from algebraic approximations to precise calculus definitions, essential for all further studies in the subject.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=PqQ5v94_NGM

