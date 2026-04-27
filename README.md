# 🔐 Auth-System — Node.js REST Authentication API
*Secure registration, login, and profile image upload out of the box.*

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens)
![Multer](https://img.shields.io/badge/Multer-FF6C37?style=flat&logo=files&logoColor=white)

[Report Bug](https://github.com/samarth8804/Auth-System/issues) • [Request Feature](https://github.com/samarth8804/Auth-System/issues)

---

## 📖 About

**Auth-System** is a lightweight, production-ready REST API that handles user authentication and profile image management. Built with Node.js and Express 5, it connects to a MySQL database, stores hashed passwords with bcrypt, and issues JSON Web Tokens for stateless session management. Profile images are accepted at registration time and served as static files.

---

## ✨ Key Features

- 👤 **User Registration** — Sign up with name, email, phone number, password, and a profile image
- 🔑 **User Login** — Authenticate with email & password and receive a signed JWT
- 🛡️ **Password Hashing** — Passwords are hashed with bcrypt before storage (never stored in plain text)
- 🪙 **JWT Authentication** — Stateless token-based auth with configurable expiry
- 🖼️ **Profile Image Upload** — JPEG/JPG/PNG images accepted via Multer and served from `/uploads`
- ✅ **Input Validation** — Email format, 10-digit phone number, and minimum password length enforced server-side
- 🗄️ **MySQL Backend** — Connection pooling via `mysql2` for efficient database access

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| MySQL + mysql2 | Relational database & connection pooling |
| JSON Web Tokens (JWT) | Stateless authentication |
| Bcrypt | Password hashing |
| Multer | Profile image upload & local storage |
| dotenv | Environment variable management |
| Nodemon | Auto-reload during development |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **MySQL** (local instance or hosted, e.g. PlanetScale / Railway)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samarth8804/Auth-System.git
   cd Auth-System/server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create the `uploads` directory** (Multer stores images here)
   ```bash
   mkdir uploads
   ```

4. **Set up your MySQL database** — create a `users` table:
   ```sql
   CREATE TABLE users (
     id           INT AUTO_INCREMENT PRIMARY KEY,
     name         VARCHAR(100)  NOT NULL,
     email        VARCHAR(150)  NOT NULL UNIQUE,
     phone_number CHAR(10)      NOT NULL,
     password     VARCHAR(255)  NOT NULL,
     profile_image VARCHAR(255) NOT NULL,
     created_at   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
   );
   ```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server/` directory:

```env
# Server
PORT=3000

# MySQL Database
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
DB_PORT=3306

# Auth
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## ▶️ Running the App

### Development (with auto-reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

The API will be available at `http://localhost:3000`.

---

## 📡 API Endpoints

Base path: `/api/auth`

| Method | Endpoint  | Description | Body / Form-Data |
|--------|-----------|-------------|-----------------|
| `POST` | `/signup` | Register a new user | `multipart/form-data`: `name`, `email`, `phone_number`, `password`, `profile_image` (file) |
| `POST` | `/login`  | Authenticate and get a JWT | `application/json`: `email`, `password` |

### Example — Register
```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "phone_number=9876543210" \
  -F "password=secret123" \
  -F "profile_image=@/path/to/photo.jpg"
```

### Example — Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"secret123"}'
```

Response:
```json
{
  "message": "Login successful",
  "token": "<JWT>"
}
```

---

## 📦 Project Structure

```
Auth-System/
└── server/
    ├── config/
    │   └── db.js            # MySQL connection pool
    ├── controllers/
    │   └── authController.js # Register & login logic
    ├── middlewares/
    │   └── upload.js         # Multer configuration
    ├── routes/
    │   └── authRoutes.js     # /signup & /login routes
    ├── uploads/              # Stored profile images (git-ignored)
    ├── app.js                # Express entry point
    └── package.json
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add: amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. Add a `LICENSE` file (e.g. MIT) if you'd like to specify terms.

---

## 👤 Author

**Samarth**  
GitHub: [@samarth8804](https://github.com/samarth8804)

---

*Made with ❤️ for clean and secure authentication*
