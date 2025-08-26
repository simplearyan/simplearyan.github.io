---
title: "Calculus 1 Lecture 4.2: Integration by Substitution"
author: Aryan
weight: 4.2
tags: ["Calculus", "Mathematics"]
series_order: 4.2
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube aiBD9aI69C8 >}}


The video "Calculus 1 Lecture 4.2: Integration by Substitution" by Professor Leonard provides a thorough and practical guide to the technique of **integration by substitution** (u-substitution), a fundamental method for evaluating integrals that are not directly in the basic integration table.

***

## Explanation

### 1. **Why Integration by Substitution?**

- Many integrals encountered in calculus do not directly match the forms in basic integration tables.
- **Substitution** helps convert these “difficult” integrals into a familiar form by changing variables, usually making the integral simpler.
- The technique typically involves substituting the innermost expression in a composite function.


### 2. **Core Steps of U-Substitution**

1. **Pick u (Substitute):**
    - Choose u to be the inner function, often what's inside parentheses, or what would simplify the integral if replaced.
    - A crucial hint: The derivative of u (du/dx) should appear elsewhere in the integral (ignoring constants).
2. **Compute du:**
    - Take the derivative of your chosen u with respect to x to find du. Rearrange to solve for dx in terms of du and x.
3. **Rewrite the Integral:**
    - Substitute u (and dx in terms of du) into the integral so it’s completely in terms of u (and du).
    - All x’s must be eliminated before integrating.
4. **Integrate with Respect to u:**
    - Integrate the function of u (which should now match an entry in your integration table).
5. **Substitute Back for x:**
    - After integrating, replace u with the original function of x.
    - Add the constant of integration (+C).

### 3. **Key Hints and Troubleshooting**

- **Constants:** Coefficients (like 2, 3, π) can always be factored out; don’t let them stop the substitution.
- If your substitution removes all x’s from the integral, you chose u correctly. If not, try a different substitution.
- For trigonometric or composite expressions, the correct u is usually the inside function (e.g., if you have $\sin^2 x$, try $u = \sin x$).


### 4. **Demonstrations and Examples**

- Professor Leonard walks through a variety of examples, from simple polynomials to more complex cases involving trigonometric and rational functions. Each time, he shows:
    - How to pick u,
    - How to find du and dx,
    - How to substitute and simplify the original integral,
    - How to recognize when substitution "doesn't work" (i.e., if x's remain after substitution),
    - How to separate integrals across addition or subtraction before substituting.


### 5. **Practice and Pitfalls**

- The video emphasizes not to "force" substitution; if a chosen u doesn't make the problem easier or eliminate all x's, try another.
- Sometimes, break complex integrals (especially those with addition/subtraction) into simpler parts before substituting.
- Substitute only the part of the integrand that fits, not necessarily the whole expression (e.g., don’t take exponents with the base).


### 6. **Connection to Chain Rule**

- Integration by substitution is effectively the reverse of the chain rule from differentiation.
- After substitution, integrating and differentiating confirm the process (take the derivative of your result—should yield the original integrand).

***

## Summary

**Integration by substitution** (u-substitution) is a central technique in calculus used to transform difficult integrals into tractable ones. The process involves:

- Identifying the right “inner function” to substitute,
- Making variable replacements,
- Performing the integration in the new variable,
- Then translating back to the original variable.

Professor Leonard’s lecture provides clear rules, practical advice, and multiple examples, reinforcing the importance and methodology of u-substitution for both polynomial and trigonometric functions—a crucial skill for anyone progressing in calculus.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=aiBD9aI69C8

