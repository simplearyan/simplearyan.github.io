---
title: "Calculus 1 Lecture 4.5: The Fundamental Theorem of Calculus"
author: Aryan
weight: 4.5  
tags: ["Calculus", "Mathematics"]
series_order: 4.5           
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube xjtEfS0vY2o >}}


The video "Calculus 1 Lecture 4.5: The Fundamental Theorem of Calculus" by Professor Leonard thoroughly explains the **Fundamental Theorem of Calculus (FTC)**, which is the central concept connecting differentiation and integration, and shows how it provides a practical way to compute definite integrals.

***

## Explanation

### 1. **What Does the Fundamental Theorem of Calculus (FTC) State?**

- **Part 2 (the “Evaluation” part):**
If \$ F(x) \$ is any antiderivative of \$ f(x) \$, then

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$
    - This means the exact area under the curve \$ f(x) \$ from \$ x = a \$ to \$ x = b \$ can be found by evaluating an antiderivative at the endpoints and subtracting.
    - The constant \$ +C \$ from indefinite integrals cancels out in the subtraction, so it doesn’t appear in the answer.


### 2. **Geometric Meaning**

- The definite integral $\int_a^b f(x)\,dx$ calculates **net signed area** under $f(x)$ from $a$ to $b$.
- Area above the x-axis is positive, area below is negative—**areas “cancel” if the curve dips below the axis**.
- Total area (always positive) can be found by integrating and taking the absolute value of negative regions.


### 3. **Examples and Steps for Evaluation**

- **Step 1:** Find an antiderivative for the function (indefinite integral).
- **Step 2:** Substitute the upper and lower bounds.
- **Step 3:** Subtract: \$ F(b) - F(a) \$.

**Example:**
For \$ \int_1^5 x\,dx \$:
Antiderivative is \$ \frac{1}{2}x^2 \$.
Evaluate at 5 and 1:

$$
\left. \frac{1}{2}x^2 \right|_1^5 = \frac{1}{2} \times 25 - \frac{1}{2} \times 1 = 12
$$

This gives the area under $x$ from 1 to 5.

- The video also works through functions like $\cos x$ and explains the meaning of the result in the context of the curve.


### 4. **Properties and Special Cases**

- **Reversing limits**: Switching $a$ and $b$ flips the sign of the area:

$$
\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx
$$
- **Zero width:** $\int_a^a f(x)\, dx = 0$.
- When bounds include a discontinuity or an infinite spike (like division by zero within the interval), the area is **undefined**.


### 5. **Piecewise Functions**

- When integrating a function given in pieces (different formulas over different intervals), split the integral at the points of change, apply the FTC on each segment, and add the results.


### 6. **Net Signed Area vs. Total Area**

- **Net signed area:** Uses the actual sign of the function—areas below the x-axis subtract from the total.
- **Total area:** Use the absolute value of the function over intervals where \$ f(x) < 0 \$ so all regions “count positively” toward area.

***

## Summary

This lecture demonstrates how the Fundamental Theorem of Calculus bridges the concepts of derivatives and integrals:

- It provides the practical method for evaluating exact areas under curves via antiderivatives.
- The process: find the antiderivative, plug in the bounds, subtract, and interpret the sign.
- Special attention is given to properties, how to handle discontinuities or piecewise functions, and the difference between net area and total area.

Understanding the FTC is crucial for all subsequent calculus work, as it makes the computation of definite integrals efficient and conceptually clear.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=xjtEfS0vY2o

