📝 Task Manager App (To-Do App 2.0)
A modern, responsive Task Manager built with React + Vite, featuring task creation, editing, drag-and-drop, and dark mode toggle. Tasks are stored in localStorage, so no backend is needed.

🚀 Features
✅ Add, edit, and delete tasks

🏷️ Due dates, priority, and tags

🧩 Drag-and-drop task reordering (react-beautiful-dnd)

🌑 Dark mode toggle (Tailwind CSS + useState)

🔐 Simulated login/logout

💾 Task persistence via localStorage

🛠 Tech Stack
React

Vite

Tailwind CSS

react-beautiful-dnd

localStorage

📁 Folder Structure
arduino

task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskBoard.jsx
│   │   ├── TaskForm.jsx
│   │   └── Task.jsx
│   ├── hooks/
│   │   └── DarkModeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md
🧑‍💻 Getting Started
Clone the repo:

bash

git clone https://github.com/your-username/task-manager.git
cd task-manager
Install dependencies:

bash

npm install
Run the app:

bash

npm run dev
Open in browser:

Navigate to: http://localhost:5173

⚙️ Tailwind Setup Notes
If you see an error about PostCSS/Tailwind plugins:

Install the correct PostCSS plugin:

bash

npm install @tailwindcss/postcss
Update postcss.config.js for ESM:

js

import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss, autoprefixer],
};
📦 Build for Production
bash

npm run build
