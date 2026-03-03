Q1: What is JSX, and why is it used?
=> JSX - JavaScript syntax extension that allows writing HTML-like code in JavaScript.
   Used because it's more      readable and combines UI logic with rendering.

Q2: What is the difference between State and Props? 
=> i. State: Internal, mutable data managed within component
   ii. Props: External, immutable data passed from parent to child

Q3: What is the useState hook, and how does it work? 
=> useState Hook - Function that returns array with current state 
   value and setter function to update it, triggering re-render.

Q4: How can you share state between components in React?
=>  Sharing State Between Components:
    i. Lift state up to common parent
    ii. Use Context API
    iii. Use state management libraries (Redux, Zustand)
Q5: How is event handling done in React?
=> Event Handling in React:
    i. Using camelCase syntax (onClick, onChange)
    ii. Passing functions as event handlers
    iii. Synthetic events (cross-browser wrapper)
