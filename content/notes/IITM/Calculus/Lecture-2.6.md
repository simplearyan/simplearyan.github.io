---
title: "Calculus 1 Lecture 2.6 | Discussion of the Chain Rule for Derivatives of Functions"
author: Aryan
weight: 2.6
tags: ["Calculus", "Mathematics"]
series_order: 2.6
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube 8dr1dZjfhmc >}}


The video “Calculus 1 Lecture 2.6: Discussion of the Chain Rule for Derivatives of Functions” by Professor Leonard explains the chain rule—a fundamental calculus rule for finding derivatives of composite functions—and how it ties together the key derivative techniques.

***

## Explanation of the Video:

### 1. Overview of the Chain Rule

- The **chain rule** is the third and last major differentiation rule students learn (after product and quotient rules).
- It handles **derivatives of composite functions**—functions inside other functions.
- Essential for managing complicated functions, like powers of functions and compositions with trigonometric or other functions.


### 2. Why the Chain Rule?

- When functions have compositions like \$ (3x^2)^4 \$ or \$ \sin(4x^5) \$, expanding or applying other rules directly becomes very tedious or impossible.
- The chain rule simplifies these problems efficiently.


### 3. Identifying Compositions

- The chain rule applies when you can express a function as a composition \$ y = f(g(x)) \$.
- Example: \$ (3x^2)^4 \$ can be seen as \$ y = u^4 \$, where \$ u = 3x^2 \$.


### 4. Expressing the Chain Rule with Leibniz Notation

- Using differentials:

$$
\frac{dy}{dx} = \frac{dy}{du} \times \frac{du}{dx}
$$
- This expresses the derivative of \$ y \$ with respect to \$ x \$ as the product of the derivative of the outer function with respect to the inner function and the derivative of the inner function with respect to \$ x \$.


### 5. Applying the Chain Rule

- Step 1: Differentiate the **outer function** treating the inner function as a variable.
- Step 2: Multiply by the derivative of the **inner function**.
- Step 3: Substitute back the original inner function expression to complete.


### 6. Examples

- For \$ y = (3x^2)^4 \$:
    - Outer function derivative: \$ 4u^3 \$
    - Inner function derivative: \$ 6x \$
    - Multiply to get:

$$
\frac{dy}{dx} = 4(3x^2)^3 \times 6x = 24x(3x^2)^3
$$
- Emphasized **not to expand** the powers by repeated multiplication—it’s unnecessary and cumbersome.


### 7. Connecting Chain Rule and Power Rule

- The **general power rule** (power rule combined with chain rule) is derived from the chain rule.
- For any function \$ f(x) \$,

$$
\frac{d}{dx} [f(x)]^n = n [f(x)]^{n-1} \times f'(x)
$$
- This rule covers most derivatives involving powers of functions.


### 8. Diagnosing Differentiation Steps

- Use outermost rule first (e.g., product, quotient, chain), then work inward.
- For example, if the outer layer is a product of two functions, apply the product rule, then apply chain or other rules on components as needed.


### 9. Practical Tips

- Always remember to **multiply by the derivative of the inner function**—common mistake is forgetting this step.
- Leave expressions within parentheses intact until the final step.
- Be neat with notation and parentheses to avoid errors.


### 10. Preview of Advanced Use

- Chain rule is powerful when combined with product and quotient rules.
- Leads to more complex derivatives and applications.
- Mastery prepares students for tackling real-world, applied problems in calculus.

***

## Summary

Professor Leonard’s lecture thoroughly explains the chain rule’s theory and practice, linking it to composition of functions and general rules for derivatives. The chain rule simplifies finding derivatives of composite functions and is key to mastering advanced differentiation problems.

Understanding this rule allows efficient computation of derivatives that would otherwise require tedious algebraic work, reinforcing chain rule’s central role in calculus.

If desired, further examples or problem-solving steps can be provided to reinforce the chain rule concept and its applications.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=8dr1dZjfhmc

