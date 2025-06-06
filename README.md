# 🌿 Wellness AI

**Wellness AI** is a personalized self-care assistant built with Node.js, Express, and OpenAI. It helps users generate daily wellness tips tailored to their mood and wellness goals. The app also tracks tip history, supports user authentication, and includes an admin panel for centralized tip review.

This project was designed with maintainability, readability, and user experience in mind—featuring a clean, responsive UI with Tailwind CSS and structured logging via Winston.

---

## ✨ Features

- 🧘 **AI-Generated Wellness Tips** — Based on mood and wellness goals using OpenAI.
- 🔐 **User Authentication** — Register, log in, and manage sessions securely.
- 📚 **Tip History** — View your previous wellness tips with timestamps.
- 🌗 **Dark Mode** — Toggle between light and dark themes.
- 🧑‍💼 **Admin Panel** — View all users' tips (admin access only).
- 📈 **Scalable Architecture** — Modular routing, MVC pattern, and reusable components.
- 📋 **Logging** — Winston and Morgan for full request and error logging.

---

## 🔧 Tech Used

| Layer         | Technology                  | Purpose                                |
| ------------- | --------------------------- | -------------------------------------- |
| **Backend**   | Node.js, Express.js         | Server logic and routing               |
| **Frontend**  | EJS, Tailwind CSS           | View rendering and modern UI styling   |
| **Database**  | MongoDB, Mongoose           | Document storage and schema validation |
| **AI**        | OpenAI API (`openai` npm)   | Tip generation via GPT                 |
| **Auth**      | Session-based auth (custom) | Secure login/logout                    |
| **Logging**   | Winston, Morgan             | HTTP + error logging                   |
| **Dev Tools** | dotenv, nodemon             | Env config and auto-reload             |
| **VCS**       | Git, GitHub                 | Version control and collaboration      |

---

## 📁 Project Structure
