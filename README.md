# NOTEStodo — Backend

REST API for NOTEStodo application.

## 🚀 Live

https://notestodo-db.onrender.com

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Celebrate + Joi Validation
- bcrypt
- Helmet
- CORS

## ✨ Features

- 🔐 Register / Login with JWT
- 📝 CRUD for notes
- 🔍 Search by title and content
- 🏷️ Filter by tag
- ⭐ Filter and sort by rate
- 📄 Pagination
- ✅ Request validation

## 🔧 Getting Started

```bash
npm install
npm run dev
```
## 📡 API Endpoints


|
 Method
|
 Endpoint
|
 Description
|
 Auth
|
------

 POST
`/auth/register`
|
 Register user


 POST
`/auth/login`
|
 Login user


 GET
`/notes`
|
 Get all notes


 GET
`/notes/:id`
|
 Get note by id

 POST
`/notes`
|
 Create note

 PATCH
`/notes/:id`
|
 Update note

 DELETE
`/notes/:id`
|
 Delete note


## 👩‍💻 Author

Developed by Liska-iriska
