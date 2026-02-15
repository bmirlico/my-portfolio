# 🌐 Bastien Mirlicourtois — Portfolio

A modern, responsive developer portfolio built with React 19, TypeScript, and Tailwind CSS. Features an AI conversational widget, 3D animations, and a contact form.

🔗 **Live:** [bmirlico.com](https://bmirlico.com)

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Environment Variables](#️-environment-variables)
- [📦 Scripts](#-scripts)
- [🧩 Key Components](#-key-components)
- [📄 License](#-license)

---

## ✨ Features

- 🎤 **AI Conversational Widget** — Talk to an ElevenLabs AI agent directly from the hero section (WebRTC on desktop, phone call on mobile)
- 🌀 **3D Animated Orb** — Three.js-powered visual feedback during AI conversations
- 📬 **Contact Form** — EmailJS integration for direct messaging
- 🎨 **Glass-morphism UI** — Modern design with backdrop blur, gradients, and smooth animations
- 🌗 **Dark/Light Mode** — Theme switching with system preference detection
- 📱 **Fully Responsive** — Mobile-first design with adaptive layouts
- ⚡ **Particle Animations** — Interactive background particles
- 🔍 **SEO Optimized** — Open Graph tags, structured data, sitemap

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Core** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **3D/Animation** | Three.js, React Three Fiber, Motion |
| **AI** | ElevenLabs React SDK (WebRTC) |
| **Forms** | React Hook Form, Zod, EmailJS |
| **Icons** | Lucide React |
| **Routing** | React Router v6 |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── home/                    # 📄 Page sections
│   │   ├── Hero.tsx             # Hero with AI widget
│   │   ├── TechStack.tsx        # Technical skills
│   │   ├── FeaturedProjects.tsx # Project showcase
│   │   ├── About.tsx            # About section
│   │   ├── BlogLink.tsx         # Blog CTA
│   │   ├── Contact.tsx          # Contact form (EmailJS)
│   │   └── ElevenLabsWidget.tsx # 🎤 AI conversational widget
│   ├── layout/                  # 🏗️ Layout components
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                      # 🧱 shadcn/ui components + Orb
├── hooks/                       # 🪝 Custom hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts                 # 🔧 Utility functions
├── pages/
│   └── Index.tsx                # 🏠 Homepage
├── App.tsx                      # App root with providers
└── main.tsx                     # Entry point
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm (or bun)

```bash
# Clone the repo
git clone https://github.com/bmirlico/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your actual keys

# Start dev server
npm run dev
```

The app runs on `http://localhost:8080`.

---

## ⚙️ Environment Variables

Create a `.env` file at the root based on `.env.example`:

```env
# 📬 EmailJS — https://www.emailjs.com/
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# 🎤 ElevenLabs Conversational AI — https://elevenlabs.io/
VITE_ELEVENLABS_AGENT_ID=your_agent_id
VITE_ELEVENLABS_PHONE_NUMBER=+33XXXXXXXXX
```

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | 🔥 Start dev server with hot reload |
| `npm run build` | 📦 Production build to `dist/` |
| `npm run preview` | 👀 Preview production build locally |
| `npm run lint` | 🔍 Run ESLint |

---

## 🧩 Key Components

### 🎤 ElevenLabs AI Widget (`ElevenLabsWidget.tsx`)

Interactive conversational AI integrated in the Hero section:
- **Desktop:** WebRTC voice conversation via `useConversation` hook with a Three.js animated Orb for visual feedback
- **Mobile:** Direct phone call via `tel:` link to the ElevenLabs Twilio agent

### 🌀 Orb (`orb.tsx`)

Three.js shader-based animated orb that reacts to conversation state (`listening`, `talking`, `thinking`). Uses a custom GLSL fragment shader with perlin noise for organic motion.

### 📬 Contact Form (`Contact.tsx`)

EmailJS-powered contact form with validation, loading states, and toast notifications.

---

## 📄 License

MIT
