# MERN Stack Admin Panel – Agent Management & CSV Distribution System

## 🚀 Overview

This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows an **Admin user** to:

- Securely login using JWT authentication
- Add and manage **Agents**
- Upload a **CSV/XLSX/XLS** file
- Automatically distribute the list entries **equally among 5 agents**
- View assigned entries for each agent on the dashboard

---

## ✨ Features

### 🔐 Admin Login
- JWT-based authentication system.
- Validates email and password with data stored in MongoDB.
- Displays success or error messages on login attempts.
- Redirects to dashboard on successful login.

### 👤 Agent Management
- Add new agents with:
  - Name
  - Email
  - Mobile Number (with country code)
  - Password (securely hashed)
- Agents are stored in MongoDB.
- Basic validation and error handling included.

### 📤 CSV Upload & Task Distribution
- Accepts only `.csv`, `.xlsx`, and `.xls` file formats.
- Each entry must include:
  - `FirstName` (Text)
  - `Phone` (Number)
  - `Notes` (Text)
- Automatically distributes entries equally among 5 agents.
- If items can’t be evenly divided, remaining items are distributed sequentially.
- Assigned entries are saved in MongoDB and shown on the frontend per agent.

---

## 🛠 Tech Stack

| Layer         | Technology             |
| ------------- | ---------------------- |
| Frontend      | React.js, Tailwind     |
| Backend       | Node.js, Express.js    |
| Database      | MongoDB                |
| Authentication| JSON Web Tokens (JWT)  |
| File Upload   | multer, csv-parser, xlsx   |

---


✅ Usage
Login: Use pre-registered admin credentials to log in.

Add Agent: Navigate to “Agents” tab and add agent details.

Upload CSV: Use the upload tab to select a .csv, .xlsx, or .xls file.

View Distribution: Entries will be distributed and shown per agent in the dashboard.


⚠️ Validation & Error Handling
Email format checks.

Required field validations on forms.

File type and schema validation for upload.

Graceful API error handling using centralized error middleware.

🤝 Contributing
Contributions are welcome! If you’d like to fix bugs or improve functionality, feel free to fork the repo and open a pull request.


🧠 Author
Ravi Kumar Sahoo
🔗 LinkedIn