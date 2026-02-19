
<div align="center">

<!-- Animated Header Wave -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:064e3b,50:10B981,100:fbbf24&height=220&section=header&text=🌙%20নোয়াখালীর%20নূর&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Noakhali%20Noor%20—%20The%20Ultimate%20Ramadan%20Companion&descSize=16&descAlignY=55&descAlign=50" />

<!-- Typing Animation -->
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=10B981&center=true&vCenter=true&multiline=true&repeat=true&width=600&height=100&lines=Built+with+Next.js+15+%2B+React+19;PWA+%E2%80%A2+Offline-First+%E2%80%A2+Installable;Precise+Prayer+Times+for+Noakhali+District;Qibla+Compass+%F0%9F%A7%AD+%7C+Zakat+Calculator+%F0%9F%92%B0" alt="Typing SVG" /></a>

<br />

<!-- Animated Badges -->
<img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white&labelColor=000000" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black&labelColor=20232A" />
<img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=1e3a5f" />
<img src="https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=0f172a" />
<img src="https://img.shields.io/badge/Framer_Motion-12-FF0050?style=for-the-badge&logo=framer&logoColor=white&labelColor=1a1a2e" />
<img src="https://img.shields.io/badge/PWA-Ready-8B5CF6?style=for-the-badge&logo=pwa&logoColor=white&labelColor=2d1b69" />

<br /><br />

<!-- Star / Fork / Issues Badges -->
<a href="https://github.com/sovon1/noor/stargazers"><img src="https://img.shields.io/github/stars/sovon1/noor?style=social" /></a>
&nbsp;
<a href="https://github.com/sovon1/noor/network/members"><img src="https://img.shields.io/github/forks/sovon1/noor?style=social" /></a>
&nbsp;
<a href="https://github.com/sovon1/noor/issues"><img src="https://img.shields.io/github/issues/sovon1/noor?style=social" /></a>

</div>

<br />

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" />

<br />

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30"> &nbsp;What is Noakhali Noor?

**নোয়াখালীর নূর (Noakhali Noor)** is a blazing-fast, offline-capable **Progressive Web App** engineered for the Muslim community of **Noakhali District, Bangladesh**. It delivers hyper-localized Ramadan utilities — from precise Sehri/Iftar countdowns to a real-time Qibla compass — wrapped in a cinematic, glassmorphism UI.

> _"Technology in service of faith."_

<br />

## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="30"> &nbsp;Feature Overview

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                    🌙 NOAKHALI NOOR                         │
├─────────────┬───────────────┬───────────────┬───────────────┤
│  ⏱️ Smart    │  📅 Ramadan   │  🕋 5-Waqt    │  📍 Auto      │
│  Countdown  │  Calendar     │  Prayer Times │  Location     │
├─────────────┼───────────────┼───────────────┼───────────────┤
│  🧭 Qibla    │  💰 Zakat     │  📖 Quran     │  📿 Digital   │
│  Compass    │  Calculator   │  Reader       │  Tasbeeh      │
├─────────────┼───────────────┼───────────────┼───────────────┤
│  🤲 Duas &   │  🕌 Mosque    │  ⚡ PWA       │  🌑 Dark      │
│  Tasbeeh    │  Finder       │  Offline      │  Mode UI      │
└─────────────┴───────────────┴───────────────┴───────────────┘
```

</div>

<br />

<details>
<summary><b>🎯 Core Modules — Click to expand</b></summary>

<br />

| Module | Description | Tech Used |
|:---|:---|:---|
| **⏱️ Sehri/Iftar Countdown** | Real-time countdown timer with Bangla numerals, auto-updates every second | `setInterval`, `date-fns` |
| **📅 Ramadan Calendar** | Full 30-day calendar with today-highlighting and Sehri/Iftar for each day | Static data + dynamic rendering |
| **🕋 Prayer Times** | 5-waqt Salah schedule for all 9 Upazilas of Noakhali | Pre-computed astronomical data |
| **📍 Geolocation** | Auto-detects nearest Upazila using `navigator.geolocation` | Haversine formula |
| **🧭 Qibla Compass** | Animated compass needle pointing to Kaaba (21.4225°N, 39.8262°E) | `DeviceOrientationEvent`, spherical trig |
| **💰 Zakat Calculator** | Asset-based calculator with Nisab threshold (Gold/Silver standard) | Custom financial logic |
| **📖 Quran Reader** | Surah list → detail view with Arabic, Bangla, English | `AnimatePresence` transitions |
| **📿 Digital Tasbeeh** | Counter with vibration feedback, save/load, progress visualization | `navigator.vibrate()` |
| **🤲 Duas Collection** | Categorized Duas with Arabic text, transliteration, and meaning | Tabbed UI with search |
| **🕌 Mosque Finder** | Interactive Leaflet map with mosque markers and directions | `react-leaflet` |

</details>

<br />

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" />

<br />

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"> &nbsp;Architecture

```mermaid
graph TD
    A[User Device] -->|GPS + Sensors| B[Next.js App Router]
    B --> C[Static Pages - SSG]
    B --> D[Client Components]
    D --> E[Prayer Engine]
    D --> F[Qibla Engine]
    D --> G[Zakat Engine]
    D --> H[Quran Renderer]
    E -->|Haversine| I[Geo Data]
    F -->|Great Circle| J[DeviceOrientation API]
    G -->|Nisab Logic| K[Asset Valuation]
    C -->|Deployed to| L[Vercel Edge Network]
    
    style A fill:#064e3b,stroke:#10B981,color:#fff
    style B fill:#0f172a,stroke:#3B82F6,color:#fff
    style L fill:#1a1a2e,stroke:#fbbf24,color:#fff
```

<br />

## 🛠️ Tech Stack Deep Dive

<div align="center">

<table>
<tr>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
<br /><b>Next.js 15</b>
<br /><sub>App Router</sub>
</td>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br /><b>React 19</b>
<br /><sub>Server Components</sub>
</td>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
<br /><b>TypeScript</b>
<br /><sub>Type Safety</sub>
</td>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
<br /><b>Tailwind 4</b>
<br /><sub>Utility-First CSS</sub>
</td>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
<br /><b>Vercel</b>
<br /><sub>Edge Deploy</sub>
</td>
</tr>
</table>

</div>

<br />

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" />

<br />

## ⚡ Quick Start

```bash
# Clone
git clone https://github.com/sovon1/noor.git && cd noor

# Install
npm install

# Dev Server
npm run dev

# Production Build
npm run build
```

> **Tip:** The app runs at `http://localhost:3000`. On mobile, visit your PC's local IP to test PWA install.

<br />

## 📂 Project Layout

```
noor/
├── 📁 public/                  # Static assets & PWA manifest
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📄 page.tsx         # Home — countdown, quick links
│   │   ├── 📄 layout.tsx       # Root layout — nav, footer
│   │   ├── 📁 prayer-times/    # 5-waqt salah schedule
│   │   ├── 📁 ramadan-calendar/# 30-day Ramadan overview
│   │   ├── 📁 quran/           # Surah reader
│   │   ├── 📁 duas-tasbeeh/    # Duas + digital tasbeeh
│   │   ├── 📁 mosques/         # Mosque map & finder
│   │   ├── 📁 zakat/           # Zakat calculator
│   │   └── 📁 qibla/           # Qibla compass
│   ├── 📁 data/                # Static datasets
│   │   ├── 📄 prayer-times.ts  # Upazila-wise prayer data
│   │   ├── 📄 duas.ts          # Duas & tips collection
│   │   ├── 📄 quran.ts         # Surah metadata & ayahs
│   │   └── 📄 mosques.ts       # Mosque locations
│   └── 📁 lib/
│       └── 📄 utils.ts         # Shared utilities
├── 📄 next.config.ts           # SSG + image config
├── 📄 tailwind.config.ts       # Theme customization
└── 📄 package.json
```

<br />

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

```bash
# Fork → Branch → Commit → Push → PR
git checkout -b feat/amazing-feature
git commit -m "feat: add amazing feature"
git push origin feat/amazing-feature
```

<br />

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" />

<br />

<div align="center">

### 💚 Built with passion by [Sovon](https://github.com/sovon1)

<br />

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:064e3b,50:10B981,100:fbbf24&height=120&section=footer" width="100%" />

</div>
