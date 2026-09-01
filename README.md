# Unique Hair Treatment 🌿👑

> **Royal Care for Your Crown** — A modern, full-featured e-commerce and trichology consultation web application for handcrafted, 100% plant-powered organic hair care formulations tailored for 3C–4C curls, locs, and delicate scalp restoration.

---

## 📖 Overview

**Unique Hair Treatment** is a luxury direct-to-consumer (D2C) web application providing high-performance botanical hair formulations, certified trichology consultation bookings, interactive hair diagnostic assessments, verified customer ratings, and a seamless shopping experience.

---

## ✨ Key Features

- **🛍️ Botanical E-Commerce Catalog & Detail Pages**
  - High-resolution product showcase featuring Chadian Chebe, Raw Nilotica Shea, Baobab, Neem, and African Black Soap.
  - Multi-image gallery with zoom previews, key ingredient breakdown, usage rituals, and clinical benefits.
  - Dynamic stock status, category filters, and search functionality.

- **⭐ Verified Customer Reviews & Social Proof**
  - Aggregate rating analytics, recommendation percentages, and 5-to-1 star distribution breakdown.
  - Star rating, curl pattern (e.g. *4C Coily*, *Locs*), and porosity filters.
  - Interactive "Write a Review" modal with local state persistence and "Helpful" vote tracking.

- **🩺 Interactive Scalp & Hair Diagnostic Quiz**
  - Guided step-by-step diagnostic questionnaire assessing hair porosity, curl density, chemical history, and scalp sensitivity.
  - Generates personalized botanical regimen recommendations instantly.

- **📅 Trichology Consultation Booking Suite**
  - Schedule in-salon digital scalp micro-mist detox sessions or 1-on-1 worldwide virtual HD video trichology consultations.
  - Flexible date/time selection with automated confirmation notices.

- **🛒 Seamless Cart & Secure Checkout**
  - Persistent shopping cart drawer and dedicated checkout overview.
  - Integrated Paystack payment gateway supporting debit cards, bank transfers, and USSD.
  - Real-time subtotal, shipping calculations, and promo code discounts.

- **💎 Royal Crown Loyalty & Rewards**
  - Point tracking, tier progression (Silver, Gold, Royal VIP), and unlockable benefits including free consultations and product gifts.

- **📚 Regimen & Trichology Resource Center**
  - Step-by-step hair care regimens (L.O.C. Method, Scalp Detox, Edge Restoration, Protective Style Maintenance).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + CSS Variables |
| **Component System** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Animations** | [Motion (Framer Motion)](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Payments** | [React-Paystack](https://paystack.com/) |
| **State & Data** | React Context (`CartContext`) + LocalStorage + [TanStack Query](https://tanstack.com/query) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |

---

## 📁 Project Structure

```
├── public/                 # Public static assets & favicon
├── src/
│   ├── assets/             # Photography and brand media assets
│   ├── components/         # Reusable application components
│   │   ├── ui/             # shadcn/ui base primitives & animations
│   │   ├── About.tsx       # Brand heritage and philosophy section
│   │   ├── Benefits.tsx    # Botanical clinical benefits showcase
│   │   ├── BookingPreview  # In-salon & virtual consultation preview
│   │   ├── CartDrawer.tsx  # Slide-out interactive cart drawer
│   │   ├── Contact.tsx     # Direct consultation inquiry & care suite
│   │   ├── FeaturedProducts# Homepage bestsellers spotlight
│   │   ├── Footer.tsx      # Global footer with brand & policy links
│   │   ├── HairQuizModal   # Personalized regimen diagnostic modal
│   │   ├── Header.tsx      # Sticky responsive navigation with cart badge
│   │   ├── Hero.tsx        # Hero banner with primary CTAs
│   │   ├── ProductReviews  # Product review, rating breakdown & filters
│   │   └── Testimonials.tsx# Real customer transformations & reviews
│   ├── context/            # Cart and global application state
│   ├── hooks/              # Custom React hooks (useCart, useMobile, useToast)
│   ├── lib/                # Static data catalogs, reviews store & utilities
│   ├── pages/              # Application route pages
│   │   ├── Booking.tsx     # Consultation booking scheduler
│   │   ├── Cart.tsx        # Cart & Paystack checkout page
│   │   ├── Index.tsx       # Flagship homepage
│   │   ├── Loyalty.tsx     # Royal Crown rewards program
│   │   ├── NotFound.tsx    # 404 handler
│   │   ├── ProductDetails  # Detailed product page with reviews
│   │   ├── Products.tsx    # Full catalog browsing & filters
│   │   └── Resources.tsx   # Regimen & education hub
│   ├── App.tsx             # Root router & layout providers
│   ├── index.css           # Global typography & Tailwind layers
│   └── main.tsx            # Application DOM mount entry point
├── index.html              # HTML entry point with OpenGraph meta tags
├── metadata.json           # Application metadata & permissions
├── package.json            # Project dependencies and npm scripts
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/unique-hair-treatment.git
   cd unique-hair-treatment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000` (or `http://localhost:5173`).

---

## 🏗️ Production Build

To generate an optimized, minified production build:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## 📄 License

This project is licensed under the MIT License — see the repository files for details.
