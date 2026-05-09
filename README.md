<div align="center">

# 🪪 SoftexCard

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**A high-fidelity, modular, and responsive frontend clone of CamCard, designed for creating and managing modern digital business cards.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## ✨ Features

- **Modern Homepage & Authentication:** Seamless and visually stunning landing page with polished sign-in and sign-up flows.
- **Interactive Multi-Step Registration:** A complex, 3-step sign-up flow providing an engaging onboarding experience.
- **Real-time Preview Generation:** Dynamic digital business card previews generated in real-time as users fill out their information during sign-up.
- **Advanced Integrations Modal:** A highly interactive "Add More Fields" modal allowing users to easily connect various social media profiles and video conferencing links.
- **Pixel-Perfect & Responsive:** Crafted with meticulous attention to detail to ensure a flawless experience across all device sizes.
- **Optimized Performance:** Leveraging Next.js 16 and React 19 for lightning-fast load times and smooth interactions.

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & custom Shadcn-inspired components
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** `tw-animate-css`, `embla-carousel-react`, and Radix primitives.
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have Node.js installed. We recommend using `pnpm` as the package manager.

```bash
npm install -g pnpm
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd camcard
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

## 📁 Project Structure

The project utilizes the Next.js App Router paradigm.

```text
camcard/
├── src/
│   ├── app/              # Next.js App Router (pages, layouts, API routes)
│   │   ├── sign-in/      # Authentication views
│   │   ├── sign-up/      # Multi-step onboarding views
│   │   └── page.tsx      # Landing page
│   └── ...               # Components, utils, hooks, styles
├── public/               # Static assets
├── package.json          # Project dependencies and scripts
└── tailwind.config.js    # Tailwind styling configuration
```

## 📜 License

This project is licensed under the MIT License.
