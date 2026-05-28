# Drelix's ToDo List ⚡ (React Version)

A modern, dynamic, and responsive ToDo application rebuilt using **React**. This project transitions the core logic from manual DOM manipulation into a state-driven UI, making task management fast, efficient, and interactive.

## 🚀 Live Demo

Check out the live website here: 

---

## ✨ Features

*   **State-Driven UI:** Built using React's `useState` hook to dynamically track user inputs and live task lists seamlessly.
*   **Controlled Input Component:** The input field syncs directly with the component state (`onChange` updating `todo`) for predictable behavior.
*   **Empty Task Validation:** Includes smart defensive coding to block empty submissions, prompting a friendly reminder alert.
*   **Immutable Array Updates:** Uses the JavaScript spread operator (`...`) to create and update state safely.
*   **Dynamic List Filtering:** Implements an optimized `.filter()` array method to handle quick task deletions by tracking index positions.
*   **Conditional Empty State:** Automatically displays a helper text ("No tasks yet. Get to work!") if the task list length hits zero.
*   **Clean Component Layout:** Completely styled using inline React style objects, guaranteeing cross-device layout consistency.

---

## 🛠️ Tech Stack

*   **React:** Core library for component structure and reactive state management.
*   **JavaScript (ES6+):** Advanced array methods (`.map()`, `.filter()`), spread operators, and arrow functions.
*   **CSS-in-JS:** Handled completely via inline React JavaScript style attributes.

---

## 📂 Key File Spotlight

### `App` Component
The central hub of the application. It manages two separate states:
*   `todo`: A string tracking the active input text box.
*   `list`: An array keeping record of all pending daily task items.

---
