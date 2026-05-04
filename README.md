# 🧱 Tiles Gallery - Aesthetic Tile Showcase

## 🌐 Live Website

👉https://tiles-gallery-project-esiy.vercel.app

---

## 📌 Project Overview

Tiles Gallery is a modern and responsive web application designed to showcase different types of tiles in a clean and aesthetic way. Users can explore tiles, view detailed information, and manage their profile with authentication support.

---

## 🎯 Purpose

The purpose of this project is to:

* Practice full-stack development using Next.js
* Implement authentication using BetterAuth
* Display dynamic data from a JSON server / database
* Build a fully responsive and modern UI

---

## 🚀 Key Features

### 🏠 Home Page

* Beautiful banner slider using SwiperJS
* Marquee showing latest updates
* Featured tiles section (Top 4 tiles)

### 🧱 Tiles Gallery

* View all tiles
* Search tiles by title
* Clean card-based UI

### 🔍 Tile Details Page

* High-resolution image preview
* Tile information (title, description, tags, etc.)
* Private route protection

### 🔐 Authentication System

* Email & Password login
* User registration
* Google social login
* Error handling with toast/messages

### 👤 My Profile

* View user profile information
* Update name and image
* Protected route

---

## 🔒 Route Permissions

### Public Routes:

* /
* /all-tiles
* /login
* /register

### Private Routes:

* /tile/[id]
* /my-profile

---

## 🛠️ Technologies Used

* Next.js (App Router)
* Tailwind CSS
* DaisyUI
* BetterAuth
* MongoDB
* SwiperJS

---

## 📦 NPM Packages

* swiper
* react-fast-marquee
* axios
* react-hot-toast

---

## 📁 JSON Data Structure

Example tile data:

```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish",
  "image": "/images/tiles/tile_001.jpg",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}
```

---

## 🔐 Environment Variables

Create a `.env.local` file and add:

```
MONGODB_URI=your_mongodb_connection
BETTER_AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 📱 Responsiveness

* Mobile ✅
* Tablet ✅
* Desktop ✅

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/mdshakib771575-maker/tiles-gallery.git
cd tiles-gallery
npm install
npm run dev
```

---

## 🌟 Future Improvements

* Add wishlist feature
* Add filtering by category
* Add reviews and ratings
* Add dark mode

---

## 👨‍💻 Author

Shakib Hazari

---

## 📜 License

This project is for educational purposes.
