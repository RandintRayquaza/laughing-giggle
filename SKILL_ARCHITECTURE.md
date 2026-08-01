# @istmx/skills Architecture & Dependency Graph

This document outlines the modular dependency graph of the `@istmx/skills` ecosystem. Each skill acts as a standalone package that can compose and inherit from other skills.

## 1. `/istm` (The Master Command)
- **Role:** The "God Mode" skill.
- **Dependencies:** Imports and spins up everything.
- **Behavior:** Encompasses all architecture, design, high-end motion, system design, and workflow skills.

## 2. `/istm-architecture` (Standard Full-Stack Builder)
- **Role:** Builds standard, maintainable SaaS and web applications.
- **Dependencies:** `design`, `system-design`, and `craft`.
- **Animation:** Only pulls in **basic motion** (micro-interactions, simple transitions). Strictly avoids heavy GSAP to keep applications fast.
- **Workflow:** Pulls in standard workflow skills for day-to-day SDLC.
- **Excludes:** `awwwards-designer` complexity.

## 3. `/istm-awwward-designer` (Premium Frontend Engine)
- **Role:** Builds premium, award-winning marketing sites and visual experiences.
- **Dependencies:** `design` + the full `animation` stack.
- **Animation:** Heavy GSAP, complex scroll-jacking, and high-end interactive visual logic.

## 4. `/istm-animate` (The Motion Specialist)
- **Role:** Dedicated animation pipeline.
- **Dependencies:** `design` (requires a layout to animate).
- **Behavior:** Focuses entirely on GSAP integration and advanced motion choreographies.

## 5. `/istm-design` (The Visual Core)
- **Role:** The foundation for aesthetics and UI tokens.
- **Behavior:** Includes standard UI motion but strictly excludes heavy GSAP unless explicitly forced by the user.

## 6. `/istm-system-design` (The Backend/Architectural Core)
- **Role:** Focuses purely on schema, DB selection, API design, and system architecture.
- **Dependencies:** Pulls in `workflow` skills for implementation.
