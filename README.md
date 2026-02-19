
<div align="center">

# 🌙 Noakhali Noor (নোয়াখালীর নূর)
### Advanced Islamic Utility PWA for Ramadan 2026

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

<br />

**Noakhali Noor** is a high-performance **Progressive Web Application (PWA)** engineered to serve the Muslim community of Noakhali District. Built on modern web standards, it leverages **Next.js App Router**, **Server Components**, and **Edge Runtime** to deliver a seamless, offline-first experience.

[View Demo](https://noakhalir-noor.vercel.app/) · [Report Issue](https://github.com/sovon1/noor/issues) · [Pull Request](https://github.com/sovon1/noor/pulls)

</div>

---

## 🚀 Architecture & Tech Stack

This project is architected with scalability and performance in mind, utilizing the latest innovations in the React ecosystem.

| Category | Technology | Rationale |
|:---|:---|:---|
| **Core Framework** | **Next.js 15 (App Router)** | For server-side rendering (SSR), static site generation (SSG), and optimized routing. |
| **Language** | **TypeScript** | Ensures type safety, scalable codebase, and enhanced developer experience. |
| **Styling** | **Tailwind CSS 4.0** | Utility-first CSS framework for rapid UI development and design consistency. |
| **Animations** | **Framer Motion** | Declarative animations for fluid transitions and enhanced UX. |
| **State Management** | **React Hooks + Context** | Minimalist state management for optimal performance. |
| **Icons** | **Lucide React** | Lightweight, consistent SVG icons. |
| **Maps** | **Leaflet / React-Leaflet** | Interactive maps for mosque location services. |
| **PWA** | **Next-PWA** | Offline capabilities, installability, and native-like experience. |

## ✨ Key Capabilities

### 📍 Geo-Spatial Precision
- **Dynamic Updates:** Leveraging the Geolocation API to auto-detect user coordinates and serve localized prayer times for specific Upazilas (e.g., Sadar, Begumganj).
- **Qibla Compass:** Real-time direction finding using **DeviceOrientation API** and spherical trigonometry algorithms (Great Circle formulas).

### ⚡ Performance & Optimization
- **SSG (Static Site Generation):** Core pages are statically generated at build time for instant loading.
- **Lazy Loading:** Components and heavy assets are lazy-loaded to optimize First Contentful Paint (FCP).
- **Edge Caching:** Deployed on Vercel Edge Network for global low-latency access.

### 💎 Feature Suite
- **Ramadan Dashboard:** Comprehensive calendar with dynamic "Next Prayer" countdown logic.
- **Smart Asset Valuation:** Custom **Zakat Calculator** with real-time Nisab threshold logic.
- **Digital Tasbeeh:** Haptic feedback integration (Vibration API) for tactile counting experience.
- **Quran Reader:** Optimized text rendering for Arabic script with dual-translation support.

---

## 📦 Local Development

To set up the project locally, follow these steps:

### Prerequisites
- Node.js 18.17 or later
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sovon1/noor.git
   cd noor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Navigate to `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```bash
├── public/              # Static assets (images, icons, manifest)
├── src/
│   ├── app/             # App Router files (pages, layouts)
│   ├── components/      # Reusable React components
│   ├── data/            # Static data arrays (prayer times, duas)
│   ├── lib/             # Utility functions and helpers
│   └── styles/          # Global styles
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Project metadata and dependencies
```

---

## 🤝 Contributing

We welcome contributions from the open-source community. Please adhere to the following workflow:

1. **Fork** the repository.
2. Create feature branch: `git checkout -b feature/new-module`
3. Commit changes: `git commit -m 'feat: add new module'`
4. Push to branch: `git push origin feature/new-module`
5. Submit a **Pull Request**.

---

<div align="center">

**Crafted with precision by [Sovon](https://github.com/sovon1)**
<br />
*Licensed under MIT*

</div>
