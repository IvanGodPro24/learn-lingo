# 🧠 Learn-Lingo

**This project is an interactive web application for a company offering online language teaching services.**

On boarding the application, users can:

- Learn about company benefits on the **Home** page.
- Browse and filter a list of language teachers on the **Teachers** page.
- Save favorite teachers for quick access on the **Favorites** page.

---

## 🌐 Live Demo

[Live demo](https://learn-lingo-project.netlify.app)

---

## 🚀 Features

- **User Authentication**: Registration, login, logout, and retrieval of current user data via Firebase Authentication.
- **Form Validation**: Registration and login forms implemented with `react-hook-form` & `Yup`.
- **Teacher Directory**: List, filter (by name, language, student level, rating, and price), and view teacher details.
- **Favorites**: Add/remove teachers to personal favorites.
- **Adaptive Design**: Adaptive layout with a modern UI palette.

---

## 🛠️ Tech Stack

- **React** — Component-based UI
- **TypeScript** — Strict project typing
- **React Router** — Client-side routing
- **React Hook Form** & **Yup** — Form state and validation
- **Redux** — Global state management (auth, filters, favorites)
- **Firebase** — Authentication & Realtime Database
- **Vite** — Fast build and development environment

---

## 📁 Project Structure

```
learn-lingo/
├── public/                # Static assets
├── src/
│   ├── components/        # Components
│   ├── pages/             # Routing pages
│   ├── redux/             # store.ts and slices
│   ├── App.tsx            # Routing setup
│   └── main.tsx           # Entry point
├── .gitignore
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🔧 Technical Requirements

1. **Authentication**

   - Use Firebase Authentication for signup, login, and logout.
   - Store and retrieve current user information.

2. **Form Implementation**

   - Use `react-hook-form` & `Yup` for registration and login forms.
   - All fields are required.
   - Modal form must close on:
     - Clicking the “×” button
     - Clicking outside the modal (backdrop)
     - Pressing `Esc` key

3. **Firebase Realtime Database**
   - Create a **teachers** collection with the following fields:
     - `name`
     - `surname`
     - `languages` (array of strings)
     - `levels` (array of strings)
     - `rating` (number, e.g., 4.8)
     - `reviews` (number of reviews)
     - `price_per_hour` (number, e.g., 20)
     - `lessons_done` (number)
     - `avatar_url` (string URL)
     - `lesson_info` (string description)
     - `conditions` (string, conditions)
     - `experience` (string or number of years)

---

## 📦 Installation & Setup

Ensure **Node.js v16+** is installed, then run:

1. **Clone the repository**

   ```bash
   git clone https://github.com/IvanGodPro24/learn-lingo.git
   cd learn-lingo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file at the project root

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**  
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🎛️ Environment Variables

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 💡 Usage

- **Sign Up / Log In**: Click the “Sign Up” or “Login” button on the header.
- **Browse Teachers**: Use filters to narrow down by language, level, or price.
- **Add to Favorites**: Click the heart icon on a teacher card to save them.
- **View Favorites**: Go to the **Favorites** page; only visible when authenticated.

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request
