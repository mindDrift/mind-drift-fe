# Retros

## 12/5/19
- What went well
  - We shared ideas and did a good job saving "rabbit-hole" ideas for later, by marking them on sticky notes so we could proceed with development
  - We mobbed most of the day
  - Our biggest challenge early on was the Auth0 inegration. We had learned that Auth0 would replace any login that we would code ourselves (instead of layering on top of our own login)

## 12/6/19
- What went well
  - React Spring (Abbey and Maeve) works! There is a relationship between the React Spring syntax and the syntax for animation keyframes. Range and output (Spring) are equivalent to value and timing (keyframes).
  - Making Spring responsive to changes in state
    - The animation responds to new values for range and output when a piece of the state inside the useSpring call changes. We used a toggle to change the boolean piece of state in useSpring
  - Everything is deployed!
  - Testing is operational. The auth0 module had to be mocked before enzyme could do the shallow snapshot of App. We used a pattern that Ryan helped to discover. The pattern involves creating a jest mock for the source of the imported module and setting it to an empty object. Any exported functions can be mocked by inserting them into the empty object. It was perfect for our situation.
  - We have more routes - but will need even more since our re-prioritization conversations this afternoon.
- What didn't go well
  - We spent some time trying to track down an error we thought was related to CORS but it was a typo in the backend route
- Weekend goals:
  - hello world tutorials for React Native 
  - more animations if time allows
  - Acheivements component if time allows
- Directions for MindDrift
  - In progress items to be knocked out:
    - Styling 
    - Settings component
  - Primary functionalities to be added:
    1. Save Settings vertical slice
    2. Mobile (second highest priority if we feel confident we can finish it)
    3. Acheivements
  - Deprioritized stretch goals
    - Journaling
    - Using local storage during offline mode
    - Having offline access to the app for users who don't have a stored JWT