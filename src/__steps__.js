/**
 * -------------
 * INITIAL FIREBASE SETUP
 * -------------
 * 1. visit: console.firebase.google.com
 * 2. create a project(skip google analytics)
 * 3. register app(ceeate config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pushing to github
 * --------------
 * INTREGATION
 * --------------
 * 7. visit: goto docs -> build -> authentation -> web -> get started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth=getAuth(app);
 * ----------------
 * PROVIDER SERTUP
 * ----------------
 * 11. import google auth provider and a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate signi method (goole, facebook, github)
 * 14. vite: change 127.0.0.1 to localhost
 * -------------------
 * MORE AUTH PROVIDER
 * -------------------
 * 15. Activate the auth provider(create app, provide redirect url, client id, client secret,  )
 * */
