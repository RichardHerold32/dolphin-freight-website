# 🐬 Dolphin Freight

A highly-optimized, production-ready marketing website for Dolphin Freight, built using React 19 and Tailwind CSS v4. Engineered for maximum speed, SEO visibility, premium visual aesthetics, and zero layout shift.

## 🚀 Performance & SEO Metrics
*   **Performance Score**: 90+ (Green zone) via Vite production preview.
*   **LCP (Largest Contentful Paint)**: Optimized for mobile (39.4 KB mobile hero WebP) and desktop.
*   **CLS (Cumulative Layout Shift)**: `0` (Navbar and footer logos have explicit width/height dimensions).
*   **Asset Footprint**: Dropped from 130MB+ of unused assets to only **0.87MB** of compressed WebP assets.
*   **No Font/Icon CDN Blocking**: Removed full external font/icon libraries. Fully powered by 24 custom inline SVG components ([Icons.jsx](src/components/Icons.jsx)).

---

## 🛠️ Technology Stack
*   **Core**: React 19 (SPA) + React Router v7 (Client-side routing)
*   **Styling**: Tailwind CSS v4 (Vanilla theme settings)
*   **Bundler**: Vite (using `rolldown-vite` engine)
*   **Icons**: Custom lightweight SVG Icon System
*   **Code Quality**: ESLint + Prettier rules

---

## 📁 Directory Structure
```
dolphin-freight/
├── .github/workflows/   # CI/CD Workflows (GitHub Actions)
├── public/              # Static public assets (Favicon, Sitemap, Robots, WebPs)
│   └── Dolhpin_Feight_IMG/   # Compressed site images (homepage, services, about)
├── src/
│   ├── components/      # Reusable UI widgets & elements (Navbar, Footer, FormField, Icons)
│   ├── pages/           # Client-side routed pages (Home, About, Services, Booking, Contact)
│   ├── App.jsx          # Route definitions & async widget layouts
│   └── main.jsx         # Startup environment validations & root render
```

---

## 💻 Local Development & Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Verify Code Quality & Format
```bash
npm run lint
```

### 4. Build and Preview Production Code (Highly Recommended for Lighthouse Testing)
```bash
npm run build
npm run preview
```
*Note: Always measure performance against the local preview (`localhost:4173`) rather than the development server, as Vite serves raw, unminified files during hot reload.*

---

## 🌐 Production & CI/CD Deployment
For detailed instructions on hosting platforms (Netlify, Vercel, Hostinger), configuring Github Actions, and setting up the email form submission engine, see [DEPLOYMENT_INSTRUCTIONS.md](DEPLOYMENT_INSTRUCTIONS.md).
