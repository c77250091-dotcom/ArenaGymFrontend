# 🏋️ Arena Gym — Frontend

A full-featured gym management web app built with React. Users can register through a multi-step flow, getting a personalized dashboard with fitness stats, diet plans, workout splits, coach info, and membership details.

---

## 🚀 Live Demo

> 🚧 Backend integration in progress. Live demo coming soon!

---

## ⚙️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React** | UI framework |
| **Redux Toolkit** | Global state management |
| **Redux Persist** | Persist state across sessions |
| **React Router v6** | Client-side routing |
| **Zod** | Form validation |
| **Axios** | API requests |
| **Material UI (MUI)** | UI components |
| **Framer Motion** | Animations |
| **Swiper.js** | Coach carousel |
| **OGL** | WebGL particle system |

---

## ✨ Features

- **Multi-Step Registration:** A 3-stage signup collecting personal info, body stats, and gym preferences.
- **Protected Routes:** Step-based route guarding prevents users from skipping registration stages.
- **Personalized Fitness Dashboard:**
  - TDEE & BMR calculations
  - BMI tracking with a visual progress bar
  - Body fat percentage estimation (Navy Method)
  - Custom macronutrient breakdown (protein, carbs, fats)
  - Daily water intake recommendations
  - Custom Push/Pull/Legs (PPL) workout plan & meal breakdown
- **Dynamic UI/UX:** Animated sliding Login/Signup interface, Swiper.js coach carousel, and an interactive WebGL particle background with route-based visibility.
- **Secure State Persistence:** Sensitive data (like passwords) is stripped before saving to `localStorage`.

---

## 🗂️ Project Structure

```text
src/
├── api/
│   └── axiosInstance.js       # Axios setup + auth token helper
├── Center/
│   └── store.js               # Redux store + persist config
├── Components/
│   ├── Coaches/               # Coaches page + Coach card
│   ├── CSS/                   # Global styles
│   ├── Dashboard/             # Dashboard, diet, workout, greeting, slider
│   ├── MemberShip/            # Memberships page + card
│   ├── Particles/             # WebGL particle system
│   ├── Register/              # Login, signup stages 1-3
│   ├── Routes/                # Protected route component
│   ├── Step/                  # MUI stepper
│   ├── Valid/                 # Zod validation schemas
│   ├── Header.js
│   ├── Inputs.js
│   ├── Logo.js
│   └── Stats.js               # Custom utility hooks (TDEE, macros, BMI)
└── Slices/
    └── RegisterSlice.js       # Redux slice (auth, signup, validation)
```
# Clone the repo
git clone [https://github.com/c77250091-dotcom/ArenaGymFrontend.git](https://github.com/c77250091-dotcom/ArenaGymFrontend.git)

# Navigate to the project
cd ArenaGymFrontend

# Install dependencies
npm install

# Start the development server
npm start

🔐 Environment Setup
The API base URL is configured in src/api/axiosInstance.js. Update it to point to your backend production or local server:

👨‍💻 Author
Built by a passionate Frontend Developer as a first major full-scale project, completed 5 months into learning programming.


📄 License
This project is open-source and available for portfolio review purposes.
