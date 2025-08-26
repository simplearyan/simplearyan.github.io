---
title: "Calculus 1 Lecture 1.2 | Properties of Limits | Techniques of Limit Computation"
author: Aryan
weight: 1.2
tags: ["Calculus", "Mathematics"]
series_order: 1.2
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube VSqOZNULRjQ >}}

The video "Calculus 1 Lecture 1.2: Properties of Limits. Techniques of Limit Computation" by Professor Leonard focuses on foundational limit properties and practical ways to compute limits—key skills for mastering calculus.

***

## Key Concepts and Takeaways from the Video

### Basics of Limits 🔹

- The **limit of a constant** as \$ x \$ approaches any value is just the constant itself.
- For example, $\lim_{x \to a} C = C$, where $C$ is a constant.
- The function $y = C$ is a horizontal line, so approaching any $x = a$, the function stays the same.
- The **limit of $y = x$** as $x$ approaches $a$ is $a$.
- This means $\lim_{x \to a} x = a$, which can be easily visualized as approaching the point on the diagonal line $y=x$.


### Properties of Limits 📐

For functions $f(x)$ and $g(x)$, assuming the limits exist as $x \to a$:

1. **Sum/Difference:**

$$
\lim_{x \to a}[f(x) \pm g(x)] = \lim_{x \to a} f(x) \pm \lim_{x \to a} g(x)
$$
2. **Product:**

$$
\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)
$$
3. **Quotient:**

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)} \quad \text{provided} \quad \lim_{x \to a} g(x) \neq 0
$$
4. **Power:**

$$
\lim_{x \to a} [f(x)]^{n} = \left(\lim_{x \to a} f(x)\right)^n
$$

- These properties break complicated limits down into simpler, manageable parts.


### Evaluating Limits of Polynomials and Rational Functions 💡

- For **polynomials**, evaluate the limit by directly substituting $x = a$.
- For **rational functions** (fractions of polynomials), evaluate the numerator and denominator limits separately.
    - Make sure the denominator limit is not zero; otherwise, special techniques are needed.
- If plugging in $x = a$ results in zero in the denominator (indeterminate form like $\frac{0}{0}$), you often factor and simplify the expression to remove the problem.
- If after factoring, the problematic factor cancels out (common factor in numerator and denominator), the point is a **hole** (removable discontinuity).
- If it cannot be canceled, then it's an **asymptote** (non-removable discontinuity), and further analysis like sign tests are needed.


### Special Techniques: Rationalizing with Conjugates 🧙‍♂️

- When expressions involve square roots and cause difficulties with limits, multiply numerator and denominator by the **conjugate** to simplify.
- The conjugate of $a \pm \sqrt{b}$ is $a \mp \sqrt{b}$.
- Use this technique to eliminate radicals for limit computation more easily.


### Sign Analysis Test for Asymptotes ⚠️

- When limits involve vertical asymptotes, sign analysis is used.
- Place critical points (where the denominator is zero) on a number line.
- Test values from intervals around these points to see if the function approaches $+\infty$ or $-\infty$.
- This helps determine if the limit exists (finite) or goes to infinity (no finite limit).

***

### Summary

- Limits can be broken down, combined, and manipulated using properties for easy evaluation.
- Polynomials have easy limits via direct substitution.
- Rational functions may need factoring or special techniques if indeterminate forms appear.
- Rationalizing conjugates help tackle square roots.
- Sign analysis is useful for limits approaching vertical asymptotes.
- Writing limit notation properly until final substitution is important to avoid mistakes.

This lecture provides the fundamental tools to compute limits efficiently, a crucial step toward understanding derivatives and integrals in calculus.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=VSqOZNULRjQ

