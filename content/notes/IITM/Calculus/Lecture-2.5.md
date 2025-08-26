---
title: "Calculus 1 Lecture 2.5: Finding Derivatives of Trigonometric Functions"
author: Aryan
weight: 2.5
tags: ["Calculus", "Mathematics"]
series_order: 2.5
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube RJJSiNz5oto >}}


The video "Calculus 1 Lecture 2.5: Finding Derivatives of Trigonometric Functions" by Professor Leonard explains how to derive and use the formulas for the derivatives of the six basic trigonometric functions: sine, cosine, tangent, secant, cosecant, and cotangent.

***

## Explanation

### 1. **Why Learn Trig Derivatives?**

- Trigonometric derivatives are used throughout calculus—especially in more advanced topics like substitution, solving differential equations, and solving real-world physics problems.
- Memorizing the derivatives for all six trig functions (sine, cosine, tangent, cotangent, secant, cosecant) is crucial.


### 2. **Proof of the Derivative of Sine**

- The video shows how the derivative of $\sin x$ is found using the **limit definition of the derivative**:

$$
\frac{d}{dx}[\sin x] = \lim_{h\to 0} \frac{\sin(x+h) - \sin(x)}{h}
$$
- The sine addition formula is used: $\sin(x + h) = \sin x \cos h + \cos x \sin h$.
- After algebraic manipulation, limits, and trig limits ($\lim_{h \to 0} \sin h / h = 1$, $\lim_{h \to 0} (1 - \cos h)/h = 0$), the result is:

$$
\frac{d}{dx}[\sin x] = \cos x
$$
- Similarly, the derivative of $\cos x$ is $-\sin x$.


### 3. **Derivatives of All Six Trig Functions**

- The derivatives of the other trig functions are derived using quotient and product rules, since:
    - $\tan x = \frac{\sin x}{\cos x}$ and so on.
- The "memorization table" you need is:
    - $\frac{d}{dx}[\sin x] = \cos x$
    - $\frac{d}{dx}[\cos x] = -\sin x$
    - $\frac{d}{dx}[\tan x] = \sec^2 x$
    - $\frac{d}{dx}[\cot x] = -\csc^2 x$
    - $\frac{d}{dx}[\sec x] = \sec x \tan x$
    - $\frac{d}{dx}[\csc x] = -\csc x \cot x$


### 4. **Examples Using Product and Quotient Rules**

- The video applies these formulas with the product rule (e.g., $y = x \sin x$), emphasizing recognizing when to use it.
    - For $y = x \sin x$: $y' = x \cos x + \sin x$
- When using quotient rule (e.g., derivatives involving ratios like $\frac{\sin x}{1 + \cos x}$), careful use of parentheses and step-by-step differentiation is demonstrated.


### 5. **Higher-Order Derivatives and Oscillation**

- Repeatedly differentiating trigonometric functions (e.g., taking the second, third, fourth, etc., derivative of $\sin x$) results in a **cyclical pattern** due to the periodic nature of trig functions.
- This relates to physical phenomena like oscillations (springs, pendulums), where derivatives describe velocity and acceleration in terms of position.


### 6. **Physical Application Example**

- A spring/mass system oscillating is modeled as a cosine or sine function.
- The derivative gives the velocity, and zeros of the derivative indicate turning points (maximum extension or compression of the spring).


### 7. **Importance of Chain Rule**

- The video concludes by explaining the need for another differentiation technique, the **chain rule**, for handling compositions like $\sin(x^2)$ or more complex situations—this is presented as the next step in calculus after mastering trig, product, and quotient rules.

***

## Summary

This lecture teaches how to find and use the derivatives of trigonometric functions. It shows:

- The proofs using the limit definition and trig identities.
- Memorization and application of all six derivatives.
- How to use these derivatives in combination with product and quotient rules.
- How derivatives cycle back to the function, reflecting periodic behavior.
- The application to real-world oscillating systems and the transition into needing the chain rule.

Understanding and being able to use these derivatives is essential for success in calculus and in solving real-world and exam problems involving trigonometric functions.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=RJJSiNz5oto

