---
title: "Calculus 1 Lecture 0.4 | Combining and Composition of Functions"
author: Aryan
weight: 0.4
tags: ["Calculus", "Mathematics"]
series_order: 0.4
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube f-_UsIP5jyA >}}

This video, "Calculus 1 Lecture 0.4: Combining and Composition of Functions" by Professor Leonard, is a clear and concise review on how to work with functions by combining and composing them—a crucial skill in calculus.

***

## Key Concepts Explained

### Combining Functions: Add, Subtract, Multiply, Divide ➕

- When you have two functions \$ f(x) \$ and \$ g(x) \$, you can create new functions by:
    - Adding: \$ (f + g)(x) = f(x) + g(x) \$
    - Subtracting: \$ (f - g)(x) = f(x) - g(x) \$
    - Multiplying: \$ (f \cdot g)(x) = f(x) \times g(x) \$
    - Dividing: \$ \left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)} \$, ensuring \$ g(x) \neq 0 \$
- Example: If \$ f(x) = \sqrt{x} \$, \$ g(x) = x - 3 \$,
    - Then \$ (f + g)(x) = \sqrt{x} + (x - 3) \$.
    - Always be mindful of the **domain** restrictions arising from the original functions, especially avoiding values where division by zero or square roots of negatives occur.
    - The combined function's domain is the **intersection** of the original domains (common inputs valid for both functions).


### Domain Considerations and Restrictions ⚠️

- When combining functions, you **cannot improve domains**; you can only add new restrictions.
- For example, if \$ f(x) \$ is undefined for some \$ x \$, then \$ (f + g)(x) \$ is also undefined there.
- Always check domain intersections to avoid plugging in invalid inputs.


### Function Composition: Substituting One Function Into Another 🔄

- **Composition** of functions is written as \$ (f \circ g)(x) = f(g(x)) \$.
- This means plugging the output of \$ g(x) \$ directly into \$ f \$.
- Example:
    - If \$ f(x) = x^3 - 4 \$ and \$ g(x) = \sqrt{x} \$,
    - Then \$ (f \circ g)(x) = f(g(x)) = f(\sqrt{x}) = (\sqrt{x})^3 - 4 \$.
- Note the order matters: \$ f \circ g \neq g \circ f \$ in general.


### Multiple Compositions and Backward Compositions 🔄🔄

- You can compose more than two functions: e.g., \$ f \circ g \circ h \$.
- The order is inside-out: calculate \$ h(x) \$ first, then \$ g(h(x)) \$, then \$ f(g(h(x))) \$.
- You can also **decompose** a function into compositions \$ f(g(x)) \$, identifying the inner and outer functions.

***

### Professor Leonard's Tips

- Use parentheses carefully in compositions to substitute functions correctly.
- Be aware of domains at all steps.
- Practice with both simple combinations and compositions to build intuition.
- Composition is not commutative, so order matters a lot.

***

This video equips students with the foundational skills necessary to combine and compose functions confidently, preparing them for more advanced calculus concepts where these operations are frequently used.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=f-_UsIP5jyA

