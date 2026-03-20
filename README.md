<div align="center">
  <h1>💌 A Message Someone Left For You</h1>
  <p><strong>(Project Delulu)</strong></p>
  <p>A beautiful, interactive web experience with a chaotic twist.</p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  </p>
</div>

---

## 🌟 Overview

**"A Message Someone Left For You"** is a short, viral, interactive web snippet that bait-and-switches the user. It starts as an intimate, wholesome, and romantic interactive letter—complete with floating stars, soft piano music, and delicate animations—building up emotional anticipation. Just as the user leans in for the big reveal, the illusion shatters with a loud, chaotic, meme-style reality check! 💥💀

Perfect for sending to friends who daydream just a little *too* much.

## ✨ Features

- **🎭 The Bait & Switch:** Seamlessly transitions from maximum cozy immersion to a brutalist, zero-transition visual shock.
- **✉️ Interactive Envelope & Letter:** Fluid, organic CSS and Framer Motion animations for letter unfolding.
- **✨ 3D Jar of Stars:** Integrated `React Three Fiber` / `Three.js` canvas for glowing, floating 3D stars.
- **🎵 Zero-Lag Audio Syncing:** Powered by `Howler.js` to ensure the meme sounds (vine boom, record scratch) hit at the exact millisecond required.
- **📱 Mobile-First Design:** Optimized for `100dvh` vertical viewports standard on modern mobile browsers.

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 + Vite for blistering fast rendering and HMR development.
- **UI Animation:** Framer Motion (fluid spring animations for the wholesome phase).
- **3D Rendering:** React Three Fiber (R3F) and Three.js for the immersive Star Jar.
- **Audio Engine:** Howler.js for preloaded, zero-latency audio sprites.
- **Styling:** Tailwind CSS v4 combined with Vanilla CSS keyframes (for the chaotic meme phase).
- **State Management:** Zustand state store for tracking the experience phases.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need `Node.js` installed on your local machine.

### Installation

1. **Clone the repo:**
   ```sh
   git clone https://github.com/Rayhan-099/delulu-prank.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd delulu-prank
   ```
3. **Install NPM packages:**
   ```sh
   npm install
   ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```
5. **Open your browser** to `http://localhost:5173`

## 📁 Project Structure

```text
/src
  ├── /assets        # Preloaded media (MP3/OGG audio files, SVGs, fonts)
  ├── /components    
  │   ├── /Shared    # Shared utilities (AudioController, FloatingHearts)
  │   ├── /Wholesome # Cozy UI (Envelope, Letter, StarJar)
  │   └── /Meme      # RageBait & ChaosUI twist components
  ├── /store         # Zustand global state management track phases
  ├── App.jsx        # Main routing/phase logic
  └── main.jsx       # React entry point
```

## 🎨 Design Philosophy

### The Two Atmospheres:

1. **🎀 Wholesome Phase:** 
   - Utilizes soft pastel pinks (`#FFD1DC`), lavenders, cursive typography (`Caveat`), and slow, bobbing `cubic-bezier` animations to relax the user.
2. **💀 Meme Phase:** 
   - Instantly overrides to a void black background, utilizing harsh `linear` or `steps()` keyframes, aggressive screen shakes, and oversized `Impact` / `Arial Black` fonts to physically jolt the user.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Rayhan-099/delulu-prank/issues) if you want to contribute.

## ⭐️ Show your support

Give a ⭐️ if this project helped you trick your friends!

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
