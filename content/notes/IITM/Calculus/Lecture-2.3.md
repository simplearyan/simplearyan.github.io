---
title: "Calculus 1 Lecture 2.3 | The Product and Quotient Rules for Derivatives of Functions"
author: Aryan
weight: 2.3
tags: ["Calculus", "Mathematics"]
series_order: 2.3
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube AvCQQ3X4Nuc >}}


The video "Calculus 1 Lecture 2.3: The Product and Quotient Rules for Derivatives of Functions" by Professor Leonard introduces and explains the product and quotient rules, essential techniques in calculus for differentiating products and quotients of functions.

***

## Explanation of the Video:

### 1. Product Rule

- **Why it's needed:** You **cannot** simply differentiate a product of two functions by differentiating each separately and multiplying, i.e.,

$$
\frac{d}{dx}[f(x) \cdot g(x)] \neq f'(x) \cdot g'(x)
$$
- **Product Rule formula:**

$$
\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)
$$

This means the derivative of a product equals:
    - derivative of the first times the second function plus
    - the first function times derivative of the second.
- **Application Example:**
For $f(x) = x^2$ and $g(x) = x^3$,

$$
(x^2 \cdot x^3)' = 2x \cdot x^3 + x^2 \cdot 3x^2 = 2x^4 + 3x^4 = 5x^4
$$

which matches the derivative of $x^5$.
- **Why it works:** The product rule handles the way two changing functions affect the slope of their product, accounting for both changes together.


### 2. Quotient Rule (Preview)

- Although not fully discussed in this clip, the quotient rule differentiates a quotient of two functions.
- Formula (to learn later):

$$
\left(\frac{f(x)}{g(x)}\right)' = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$


### 3. Importance and Usage

- While sometimes you can multiply out (distribute) before differentiating, this is not always practical or possible.
- The product and quotient rules provide **efficient** and **correct** ways to find derivatives of products and quotients without lengthy algebra.
- These rules become essential when dealing with complicated functions, including raised powers and nested expressions.


### 4. Practical Example of the Product Rule

- Consider $G(x) = (x^2 + 1)(x^3 - 3x)$:

$$
G'(x) = \frac{d}{dx}(x^2 + 1) \cdot (x^3 - 3x) + (x^2 + 1) \cdot \frac{d}{dx}(x^3 - 3x)
$$
- Calculating derivatives:
    - \$ \frac{d}{dx}(x^2 + 1) = 2x \$
    - \$ \frac{d}{dx}(x^3 - 3x) = 3x^2 - 3 \$
- Substituting back:

$$
G'(x) = 2x(x^3 - 3x) + (x^2 + 1)(3x^2 - 3)
$$
- Plugging in values for a specific $x$ (e.g., $x=2$) with given $G(2)$, $G'(2)$, $f(2)$, $f'(2)$ shows how to numerically evaluate the derivative.


### 5. Notation and Conceptual Understanding

- $f'(x)$ is derivative of $f(x)$, $g'(x)$ derivative of $g(x)$.
- When given values like $f(2)$, $f'(2)$, $g(2)$, $g'(2)$, you can plug into product rule to find $G'(2)$.
- The derivative represents the instantaneous rate of change or slope of the function at the point $x=2$.

***

## Summary

- The **product rule** is essential when differentiating products of two functions.
- You **cannot** simply multiply the derivatives; you must use the product rule formula.
- This rule eases differentiation in complex scenarios and avoids cumbersome algebraic expansions.
- Understanding and applying the product rule is fundamental before moving to more advanced rules like the quotient and chain rules.

The lecture prepares students well to tackle derivatives involving products, setting the stage for more complex problems ahead.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=AvCQQ3X4Nuc

