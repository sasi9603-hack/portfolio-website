# Sasidharreddy Vennapusa - Premium 3D Interactive Portfolio

A world-class, premium 3D interactive portfolio website inspired by Apple's Vision Pro product experience and Antigravity Studio's immersive web animations.

🚀 **Live Vercel Deployment**: [https://portfolio-website-plum-pi-39.vercel.app](https://portfolio-website-plum-pi-39.vercel.app)

---

## 🌟 Interactive Experience & Features

* **3D Volumetric Atmosphere**: Built with Three.js (React Three Fiber) rendering ambient particles, deep space stars, and cinematic lighting configurations.
* **Futuristic Product Core**: A custom 3D headset / AI Core composed of an outer glass shell, vertical/horizontal orbit rings, and an emissive central core that explodes apart dynamically on scroll using GSAP.
* **Mouse Parallax**: Gentle 3D perspective shifts on lights and camera target tracking the mouse cursor.
* **Smooth Inertia Scrolling**: Unified scroll wrapper combining Lenis scroll behavior with GSAP ScrollTrigger timelines.
* **LinkedIn Glass Panel**: A floating glassmorphic overlay containing an interactive LinkedIn profile screenshot, complete with glowing hotspots that reveal core information.
* **Micro-interactions**: Elastic magnetic button controls, loader overlay transitions, and custom cursor followers.
* **Cinematic Video Background**: `aikawakenichi-2.mp4` loops softly in the background to set an elegant digital context.

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router + React 19)
* **3D Rendering**: [Three.js](https://threejs.org/) & [React Three Fiber (R3F)](https://r3f.docs.pmnd.rs/)
* **Animations**: [GSAP (ScrollTrigger)](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
* **Smooth Scroll**: [Lenis Scroll](https://lenis.darkroom.engineering/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)

---

## ⚡ Getting Started

First, install dependencies:
```bash
npm install
```

Second, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📦 Deployment & Verification

To verify build output correctness locally:
```bash
npm run build
```

This project compiles static pages and deploys to **Vercel** with optimized production bundles.
