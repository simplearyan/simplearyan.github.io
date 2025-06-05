---
title: "Make a Google Chrome T-Rex Style Side Scroller in Godot"
weight: 2
draft: false
slug: "How to Make a Google Chrome T-Rex Style Side Scroller in Godot 2d tutorial"
tags: ["game dev", "Godot", "Side Scroller" , "2d", "tutorial"]
---

Creating a Chrome T-Rex style endless runner in Godot involves implementing several core game systems that work together to create the classic side-scrolling experience [^2]. This comprehensive guide will walk you through building all the essential components, from player physics to obstacle spawning and background scrolling.

![Chrome T-Rex style side-scrolling game with a dinosaur jumping over cacti obstacles](https://pplx-res.cloudinary.com/image/upload/v1749025907/gpt4o_images/bcxjhmvaug8jarum34i8.png)

Chrome T-Rex style side-scrolling game with a dinosaur jumping over cacti obstacles

## Game Overview and Core Mechanics

The Chrome Dinosaur Game is an endless runner where the player controls a pixelated T-Rex that continuously moves from left to right across a desert landscape [^32]. The gameplay revolves around avoiding oncoming obstacles such as cacti and pterosaurs by jumping or ducking [^32]. The game gradually increases in speed until the player hits an obstacle, triggering an instant game over [^32].

The core mechanics include gravity-based jumping physics, collision detection with obstacles, parallax background scrolling, and progressive difficulty scaling [^2]. In Godot, this translates to using CharacterBody2D for player movement, Area2D nodes for obstacle detection, and ParallaxBackground for the scrolling environment [^8][^17].

## Project Setup and Scene Structure

Begin by creating a new Godot project and setting up the main scene structure [^1]. The recommended node hierarchy follows a modular approach that separates different game systems for better organization and maintainability [^2].

![Godot node tree structure diagram for a side-scrolling T-Rex style game](https://pplx-res.cloudinary.com/image/upload/v1749025952/gpt4o_images/w0rq61dojksf8bh2f2ot.png)

Godot node tree structure diagram for a side-scrolling T-Rex style game

The main scene should contain a Node2D as the root, with child nodes including the Player (CharacterBody2D), Background (ParallaxBackground), Ground (StaticBody2D), ObstacleSpawner (Node2D), and UI (CanvasLayer) [^1][^8]. This structure allows each system to operate independently while communicating through Godot's signal system and node groups [^8].

Configure the project settings to handle pixel art properly by setting the texture import filter to "Off" for crisp pixel graphics [^1]. Set up input actions for "jump" (Space/Up Arrow) and "duck" (Down Arrow) in the Input Map section of Project Settings [^1][^2].

## Player Character Implementation

The player character uses CharacterBody2D for precise movement control and collision handling [^8]. CharacterBody2D is ideal for character controllers because it provides built-in methods like `move_and_slide()` and `is_on_floor()` while allowing complete control over physics behavior [^8][^10].

The player script implements gravity-based physics where velocity increases downward over time until the character hits the ground [^13]. Jump mechanics use a fixed velocity applied upward when the jump input is pressed, but only while on the ground to prevent infinite jumping [^8][^13]. The ducking mechanic adjusts the collision shape dynamically and can provide faster falling when pressed mid-air [^2].

Animation state management switches between idle, running, jumping, ducking, and death animations based on player state and input [^1][^9]. The collision system uses layer 1 for the player and layer 2 for obstacles, with appropriate masks set for detection [^24][^8].

## Obstacle System and Spawning

The obstacle system consists of two main components: individual obstacle scenes and a spawner that manages their creation and timing [^2][^14]. Each obstacle extends Area2D for collision detection without physical collision response, allowing the player to pass through while triggering game over events [^24].

Obstacles move from right to left at a speed that increases over time, creating progressive difficulty [^2][^21]. The spawner uses a Timer node to create obstacles at random intervals, with spawn timing becoming more frequent as the game progresses [^14]. Different obstacle types (ground-based cacti and flying pterodactyls) can be randomly selected from an array of preloaded scenes [^2].

The collision detection system uses the `body_entered` signal from Area2D to detect when the player character enters an obstacle's collision area [^24][^30]. When a collision occurs, the obstacle calls the player's `die()` method, which triggers the game over sequence [^2].

## Background and Parallax Scrolling

The parallax background system creates depth illusion by moving multiple layers at different speeds [^16][^17][^19]. ParallaxBackground serves as the container node, with ParallaxLayer children containing Sprite2D nodes for different visual elements [^17][^20].

Each layer has different motion_scale values: distant elements like sky and clouds move slowly (0.1-0.3), middle elements like hills move at medium speed (0.5), and foreground elements like ground move at full speed (1.0) [^19][^23]. The motion_mirroring property enables seamless infinite scrolling by automatically repeating textures when they move off-screen [^19].

The background can scroll automatically without camera movement by modifying the scroll_offset property in a script attached to the ParallaxBackground node [^18][^20]. Day and night cycles can be implemented by changing the modulate color of sprite layers at regular intervals [^2].

## Game State Management

A centralized GameManager handles all game states including start, running, game over, and restart phases [^28][^2]. This manager coordinates between all game systems using Godot's group system and signals for clean communication [^8].

The scoring system uses a Timer that increments the score at regular intervals while the game is running [^29]. High scores are saved to a file using Godot's FileAccess class for persistence between sessions [^2]. Game state transitions are triggered by input events and collision detection, with proper cleanup of obstacles and player state reset during restarts [^31].

Visual feedback includes score display, high score tracking, game over messages, and start instructions through a UI system built with CanvasLayer and Control nodes [^29]. Sound effects for jumping and game over events enhance the player experience [^2].

## Physics and Movement Refinement

Fine-tuning the physics requires balancing gravity strength, jump velocity, and game speed for satisfying gameplay [^13][^15]. The gravity value should feel substantial enough to create weight but not so strong that jumps feel floaty or uncontrollable [^13]. Jump height and time can be calculated mathematically using projectile motion formulas for precise control [^13].

Variable jump heights can be implemented by allowing the player to control jump duration through input timing [^13]. Coyote time (brief grace period for jumping after leaving a platform) and jump buffering (allowing jump input slightly before landing) improve the game feel significantly [^5].

The ground collision uses StaticBody2D with CollisionShape2D to create solid surfaces that interact properly with the CharacterBody2D player [^8][^11]. Collision layers and masks must be configured correctly to ensure proper interaction between player, obstacles, and environment [^25][^26].

## Advanced Features and Polish

Progressive difficulty scaling adjusts spawn rates, obstacle speeds, and variety over time to maintain engagement [^2][^21]. The original Chrome game switches between day and night modes every 700 points, which can be replicated through background color modulation [^32].

Object pooling can optimize performance by reusing obstacle instances instead of constantly creating and destroying them [^22]. This becomes important as game speed increases and obstacles spawn more frequently [^21].

Visual effects like screen shake on collision, particle effects for dust clouds, and smooth camera following enhance the polish level [^1]. Sound design with jumping sounds, collision effects, and ambient background audio creates a more immersive experience [^2].

## Testing and Optimization

Playtesting reveals balance issues with jump timing, obstacle spacing, and difficulty progression [^2]. The game should feel challenging but fair, with obstacles spaced appropriately for the current movement speed [^21]. Performance optimization focuses on efficient sprite rendering, minimal garbage collection from object creation, and smooth frame rate maintenance [^22].

Mobile adaptation requires touch input handling for jump and duck actions, with visual touch indicators for better usability [^32]. Screen scaling considerations ensure the game works across different device resolutions while maintaining pixel-perfect rendering [^1].

## Conclusion

Building a Chrome T-Rex style side scroller in Godot demonstrates many fundamental game development concepts including physics-based character controllers, procedural content generation, state management, and performance optimization [^8][^2]. The modular approach using separate scenes for different game components creates maintainable code that can be easily extended with new features [^1].

The key to success lies in iterative development, starting with basic movement and collision detection, then gradually adding features like scoring, background scrolling, and visual polish [^2][^21]. Godot's node-based architecture and built-in physics systems provide excellent tools for this type of game, making it an ideal project for learning game development fundamentals [^8][^1].

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=43c-Sm5GMbc

[^2]: https://www.youtube.com/watch?v=nKBhz6oJYsc

[^3]: https://gameidea.org/2024/10/01/making-3d-endless-runner-game-part-1/

[^4]: https://www.youtube.com/watch?v=G8wS5eP4hy4

[^5]: https://www.youtube.com/watch?v=c5msTt9Jeyg

[^6]: https://www.youtube.com/watch?v=1jNt91A2PW0

[^7]: https://forum.godotengine.org/t/how-to-make-player-move-automatically-to-the-right-like-in-chromes-dino-game/16275

[^8]: https://docs.godotengine.org/en/stable/tutorials/physics/using_character_body_2d.html

[^9]: https://www.youtube.com/watch?v=mnXfuoWPEiI

[^10]: https://docs.godotengine.org/en/stable/classes/class_characterbody2d.html

[^11]: https://www.youtube.com/watch?v=g7c6EZzlDMA

[^12]: https://www.youtube.com/watch?v=kw1iI69kW6o

[^13]: https://www.youtube.com/watch?v=IOe1aGY6hXA

[^14]: https://www.youtube.com/watch?v=YG6_xkAjeD4

[^15]: https://www.youtube.com/watch?v=KQveZYmkwWI

[^16]: https://www.youtube.com/watch?v=f8z4x6R7OSM

[^17]: https://docs.godotengine.org/en/stable/classes/class_parallaxbackground.html

[^18]: https://www.reddit.com/r/godot/comments/14gmqjf/is_there_a_way_to_make_an_automatically_moving/

[^19]: https://docs.godotengine.org/en/stable/tutorials/2d/2d_parallax.html

[^20]: https://gdscript.com/solutions/godot-parallax-background/

[^21]: https://www.youtube.com/watch?v=0amclwspR0w

[^22]: https://github.com/godot-addons/godot-object-pool

[^23]: https://www.youtube.com/watch?v=2jq2chm9NuU

[^24]: https://docs.godotengine.org/en/stable/tutorials/physics/using_area_2d.html

[^25]: https://www.reddit.com/r/godot/comments/12bjsnt/how_on_earth_do_i_properly_do_collisions_with/

[^26]: https://forum.godotengine.org/t/area2d-detecting-collisions-with-characterbody2d-but-not-staticbody2d/63493

[^27]: https://forum.godotengine.org/t/trouble-with-collision-using-area2d-and-rigidbody2d/37633

[^28]: https://godotengine.org/asset-library/asset/1582

[^29]: https://docs.godotengine.org/en/3.4/getting_started/first_2d_game/06.heads_up_display.html

[^30]: https://www.youtube.com/watch?v=I640OJ1gusE

[^31]: https://www.reddit.com/r/godot/comments/1eyplkj/best_practice_for_managing_game_scenes/

[^32]: https://en.wikipedia.org/wiki/Dinosaur_Game

[^33]: https://heartbeat.comet.ml/using-genetic-algorithms-to-automate-the-chrome-dinosaur-game-part-2-1c0007334297

[^34]: https://heartbeat.comet.ml/automating-chrome-dinosaur-game-part-1-290578f13907

[^35]: https://www.youtube.com/watch?v=vGRbs-HqBJE

[^36]: https://docs.godotengine.org/en/stable/getting_started/step_by_step/scripting_first_script.html

[^37]: https://www.youtube.com/watch?v=DgvnzUG_LDY

[^38]: https://learnxinyminutes.com/gdscript/

[^39]: https://dev.to/christinec_dev/learn-godot-4-by-making-a-2d-platformer-part-1-project-editor-overview-1ap4

[^40]: https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html

[^41]: https://www.reddit.com/r/godot/comments/15kibjf/a_good_2d_platformer_tutorial_for_godot_4/

[^42]: https://www.reddit.com/r/godot/comments/17rnzx5/whats_the_use_case_for_characterbody2d/

[^43]: https://www.youtube.com/watch?v=8sR6NAGQLY8

[^44]: https://www.youtube.com/watch?v=oFK3fElaxbU

[^45]: https://www.youtube.com/watch?v=2qBJQcSaRk0

[^46]: https://forum.godotengine.org/t/detecting-area2d-colliding-object/52879

[^47]: https://forum.godotengine.org/t/hud-is-fixed-to-left-edge-of-screen/98580

[^48]: https://www.reddit.com/r/Games/comments/88shoy/joseph_anderson_a_literary_analysis_of_google/

[^49]: https://www.youtube.com/watch?v=aNffHb2QqjI

[^50]: https://gameprogrammingpatterns.com/state.html

[^51]: https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/6c66a77af159d5beb82ff6f4772dc379/6ba14829-188b-477d-8928-936b6571f0b1/44627fb5.md

[^52]: https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/6c66a77af159d5beb82ff6f4772dc379/83fb9eb5-4081-4bf9-bd0f-4450eada8d39/dae50159.md

[^53]: https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/6c66a77af159d5beb82ff6f4772dc379/037d18f8-e67b-4797-aad2-e239c3d14c34/f1189689.md

[^54]: https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/6c66a77af159d5beb82ff6f4772dc379/b4b47c74-5a3a-493e-8bb9-8b66442fddf7/99d41af7.md

[^55]: https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/6c66a77af159d5beb82ff6f4772dc379/8e62172a-5b6d-4ba7-81f3-4474fe59c76d/e0da7fd3.md

