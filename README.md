# React Native useRef Stale Data Issue

This repository demonstrates a common issue encountered when using the `useRef` hook in React Native functional components that experience frequent re-renders. The problem arises because the ref's value isn't instantly updated, resulting in stale data and potential race conditions. The example showcases this problem and provides a solution.

## Problem

The `useRefBug.js` file contains a functional component that updates frequently. The `useRef` hook is used to store a reference to a Text element. Because of the frequent re-renders, the ref's value doesn't always reflect the latest state, leading to unexpected output.

## Solution

The `useRefSolution.js` file presents a solution that addresses this issue by using the `useEffect` hook. This approach ensures the ref's value is updated after the DOM is fully updated, preventing the stale data problem.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` (or the appropriate command for your platform) to run the app.

Observe the console logs and UI changes to witness the behavior and solution in action.