# Development Stack

It is a web application about different kinds of technologies.

## Technologies Used

* React
* TypeScript
* Tailwind CSS

## Features

* You can add technologies you like.
* After adding, you can remove any technologies you want.
* You can remove all the technologies you added with one click.

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It is used in React because it makes UI code easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets us create and manage changing data in a component. I used it to manage the technology stack and track the selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs code after a component renders. It can be used to fetch or load data when the component starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to update the list efficiently when something changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition. I used it to show an empty stack message when `stack.length === 0`, and to change the button state when a technology is already added to the stack.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can send data back by calling a function that the parent passes to it as a prop.
