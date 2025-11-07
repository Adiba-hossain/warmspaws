# WarmPaws – Pet Care in Winter

**Project purpose**  
A cozy winter companion platform for pet owners to find local winter pet services, clothing, grooming & expert advice.

**Live Demo**  
Live URL: https://project-e6142.web.app

## Key Features

- Responsive SPA (mobile/tablet/desktop)
- Authentication: Email/password + Google sign-in (Firebase)
- Protected service detail pages (redirect to login and back)
- Service listing loaded from `/services.json`
- Service booking form with success toast (no backend)
- Profile page with user info & update button
- Swiper hero slider and subtle animations (AOS/Framer Motion)
- Password validation and toggle (eye) feature
- Environment variables used for Firebase keys
- Deployed on Firebase Hosting

## NPM packages used

- react-router-dom
- firebase
- react-hot-toast
- swiper
- aos

## Setup

1. `git clone <repo>`
2. `npm install`
3. Create `.env.local` with your Firebase config (see firebaseConfig.js)
4. `npm start`

## Deployment

- Ensure authorized domain is added in Firebase Auth.
- If deploying to Netlify, add `_redirects` -> `/* /index.html 200`
- If using Firebase Hosting, add rewrites to `index.html` in `firebase.json`.

## Notes

- Replace placeholder images with your `imgbb.com` links.
- Don’t commit `.env.local`.
