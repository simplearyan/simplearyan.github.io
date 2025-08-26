---
title: "Calculus 1 Lecture 7: Related Rates"
author: Aryan
weight: 2.8
tags: ["Calculus", "Mathematics"]
series_order: 2.8
cascade:
   hideFeatureImage: true

---

{{< katex >}}

{{< youtube 43Qt6wc44To >}}

The video "Calculus 1 Lecture 7: Related Rates" by Professor Leonard explains the technique of related rates, a method to find how quantities related by an equation change over time.

***

## Explanation of the Video:

### 1. What Are Related Rates?

- Related rates problems involve several variables changing over time.
- The goal is to find the rate of change of one quantity based on the rates of change of others.
- For example, how fast the volume of water in a leaking conical tank changes as water flows out.


### 2. Core Steps in Related Rates Problems

- **Identify variables:** Assign notation for all variables and their rates of change (e.g., $V$ for volume, $r$ for radius, $h$ for height).
- **Write a formula:** Use geometry or physics (e.g., volume of a cone $V = \frac{1}{3}\pi r^2 h$) which relates these variables.
- **Implicit differentiation:** Differentiate both sides of the formula with respect to time $t$, remembering that variables depend on $t$.
- **Substitute known values:** Plug in given values at the particular instant (e.g., radius, height, change rate of radius).
- **Solve for the unknown rate:** Rearrange to find the desired rate of change, such as rate of volume change or rate of angle change.


### 3. Example: Water Filling/Leaking Cone

- The volume of the cone relates to radius and height.
- Both radius and height change over time, so their rates of change affect volume.
- Differentiation uses implicit differentiation and product rule since $r$ and $h$ are functions of $t$.
- Students are guided to carefully include $\frac{dr}{dt}$ and $\frac{dh}{dt}$ terms while differentiating.


### 4. Additional Example: Expanding Circular Oil Spill

- Surface area grows as the radius increases.
- With $\frac{dr}{dt}$ known, differentiate area $A = \pi r^2$ w.r.t time to find $\frac{dA}{dt}$.
- Plugging in radius gives rate of change of area at that instant.


### 5. Application: Tracking a Rocket

- A camera tracks a rocket by adjusting its angle of elevation to keep the rocket centered.
- Relate variables: rocket height, fixed distance from camera, angle of elevation.
- Using trigonometry ($\tan \theta = \frac{h}{x}$) relates height and angle.
- Implicit differentiation finds $\frac{d\theta}{dt}$, the rate at which camera's angle must change.
- Evaluate at a specific height to find instantaneous angular speed.


### 6. Practical Notes:

- Key is to relate variables via formulas that include the changing quantities.
- Use implicit differentiation, keeping in mind all variables are functions of time.
- Utilize trigonometric relationships for problems involving angles.
- Plug known rates and measurements at a point to compute unknown rates.
- Results often require interpretation in real-world units.

***

## Summary

Professor Leonard’s lecture introduces and explores related rates — calculus technique for determining how related quantities change over time using implicit differentiation of related formulas. Examples include fluid volume change, expanding areas, and moving objects with changing angles.

Students learn how to:

- Express relationships between variables,
- Assign variables and rates,
- Apply chain, product rules,
- Use trigonometric relationships,
- Solve for the desired rates at given times.

This method is fundamental for solving dynamic real-world problems in engineering, physics, and other sciences where rates of change are interconnected.
<span style="display:none">[^1]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=43Qt6wc44To

