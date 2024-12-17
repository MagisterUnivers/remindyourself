# Welcome to My App - RemindYourself Task Manager

**Frontend:** `my-next-app` (Next.js)  
**Backend:** `my-nest-testing` (Firebase + Firestore)  

---

## 📋 Overview

This is a simple Task Manager application built using Next.js and Firebase. The app allows users to create, update, and delete boards and tasks, providing a streamlined task management experience.

---

## 🚀 Project Setup

### Step 1: Frontend Setup (Next.js)
Navigate to the frontend directory:

```bash
cd my-next-app
npm install
```

1. Set up environment variables by creating a .env.local file:

```bash
  NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBX1-ExN_q_9qWAMBCUkFLmnYfuh
  NEXT_PUBLICK_FIREBASE_AUTH_DOMAIN=remindyourself-14.firebaseapp.com
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=remindyourself-1
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=remindyourself-14841.firebasestorag
  NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID=2754273
  NEXT_PUBLIC_FIREBASE_APP_ID=1:275427312971:web:0b49234a53118b4c7
```

2. Build and start the frontend server:

```bash
npm run build && npm run start
```

3. The frontend server will now be available at http://127.0.0.1:80.

## Routes

- /login
- /register
- /to-do
- /to-do/:id

### Application Flow

- User List: View all created tasks.
- User List: Modify / Delete created tasks.

# Frontend (Next.js)

- npm run dev: Run the frontend in development mode.
- npm run build: Build the application for production.
- npm run start: Start the production server.

### Reporting Issues

If you encounter any issues or have suggestions for improvements, please open an issue on the repository's issue tracker. Provide as much detail as possible, including steps to reproduce the problem, screenshots (if applicable), and environment details (OS, browser, etc.).

### Development Tips

Ensure that both frontend and backend environments are properly configured before starting development.
Verify that PostgreSQL is running and accessible, and check your environment variables if you encounter connection issues.
If your bot token or username changes, update the corresponding environment variables in .env.local for the frontend.

### This project is licensed under the MIT License. See the LICENSE file for more details.
