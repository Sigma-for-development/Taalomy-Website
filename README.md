<div align="center">
  <img src="src/assets/images/no%20background%20text/textlogo-nobk.png" alt="Taalomy Logo" width="120" height="auto" />
  <h1>Taalomy | The #1 App for Universities</h1>
  
  <p>
    <strong>Education, Reimagined.</strong><br>
    The leading academic platform connecting students and lecturers in one seamless ecosystem.
  </p>

  <p>
    <a href="https://taalomy.com"><strong>Visit Website »</strong></a>
    <br />
    <br />
    <a href="#features">Features</a> ·
    <a href="#tech-stack">Tech Stack</a> ·
    <a href="#getting-started">Getting Started</a> ·
    <a href="#deployment">Deployment</a>
  </p>

  ![License](https://img.shields.io/badge/license-Private-red)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
</div>

<br />

## 🚀 Overview

**Taalomy** is a premier educational technology platform designed to transform the academic landscape in the MENA region. By bridging the gap between students and lecturers, Taalomy eliminates administrative friction and empowers true learning.

This repository contains the source code for the public-facing **Taalomy Website**, a high-performance Single Page Application (SPA) that serves as the primary gateway for users to discover, download, and engage with the platform.

## ✨ Key Features

- **Global Visualization**: Stunning, animated background with interactive particles using HTML5 Canvas.
- **Role-Based Experience**: Dedicated flows for Students and Lecturers.
- **Internationalization (i18n)**: Fully localized in English (LTR) and Arabic (RTL) with seamless switching.
- **Advanced SEO**:
  - **Dynamic Metadata**: Unique titles, descriptions, and canonicals for every page.
  - **Structured Data**: `Organization`, `JobPosting`, and `FAQPage` JSON-LD schemas embedded for Google Rich Results.
  - **Accessibility**: Optimized for screen readers and semantic HTML structure.
- **Job Listings**: Integrated Career page with detailed internship opportunities.
- **Responsive Design**: Mobile-first architecture ensuring flawless experience on all devices.

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM (v7)
- **Localization**: i18next, react-i18next
- **SEO**: React Helmet Async
- **Icons**: Lucide React

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-org/taalomy-website.git
    cd taalomy-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Development Server

Start the local development server with HMR:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Building for Production

Create a production-ready build (optimized, minified, and hashed):
```bash
npm run build
```
The output will be in the `dist` folder.

## ☁️ Deployment

This project is optimized for deployment on **AWS S3** and **CloudFront**.

### Quick Steps
1.  **Build**: Run `npm run build`.
2.  **Upload**: Sync the `dist` folder to your S3 bucket.
3.  **CDN**: Invalidate the CloudFront cache to see changes immediately.

> See the full [Deployment Guide](deployment_guide.md) for detailed instructions on S3 configuration, OAC, and SSL setup.

## 📂 Project Structure

```
src/
├── assets/         # Static images and icons
├── components/     # Reusable UI components (Navbar, Hero, SEO, etc.)
├── contexts/       # Global state (Theme, Language)
├── hooks/          # Custom React hooks
├── locales/        # Translation JSON files (en, ar)
├── pages/          # Page views (Home, Career, About, etc.)
├── types/          # TypeScript definitions
├── App.tsx         # Main application component & Routing
└── main.tsx        # Entry point
```

## 🤝 Contributing

1.  Clone the repo and create a new branch: `git checkout -b feature/amazing-feature`.
2.  Commit your changes: `git commit -m 'Add some amazing feature'`.
3.  Push to the branch: `git push origin feature/amazing-feature`.
4.  Open a Pull Request.

## 📄 License

Private - All rights reserved. © 2026 Taalomy Inc.
