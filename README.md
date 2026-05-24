# ImpulseMacro Innovation Website

🚀 **Production-ready static website for ImpulseMacro Innovation Private Limited**

**Status:** ✅ Ready for Production Deployment  
**Version:** 1.0.0  
**Date:** May 24, 2026  

---

## 📚 Quick Navigation

**First time deploying? Read these in order:**

1. **[DEPLOYMENT-QUICK-REFERENCE.txt](DEPLOYMENT-QUICK-REFERENCE.txt)** ← Start here (3-minute summary)
2. **[DEPLOYMENT-HOSTINGER.md](DEPLOYMENT-HOSTINGER.md)** ← Full Hostinger deployment guide
3. **[BUILD-AND-DEPLOY-GUIDE.md](BUILD-AND-DEPLOY-GUIDE.md)** ← Build commands & npm scripts
4. **[MASTER-DEPLOYMENT-CHECKLIST.md](MASTER-DEPLOYMENT-CHECKLIST.md)** ← Complete testing checklist

---

## 💻 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Build Tools:** npm, cleancss (CSS minification), terser (JS minification)
- **CDN:** Font Awesome 6.5.2, jsDelivr (tech logos)
- **Styling:** CSS Grid, Flexbox, CSS Variables, Gradients
- **Icons:** Font Awesome 6.5.2, custom SVG logo
- **Performance:** Minified CSS/JS, lazy loading, caching headers

---

## 🎯 Features

✅ Responsive design (desktop, tablet, mobile)  
✅ Fixed navigation bar with hamburger menu  
✅ Hero section with gradient animations  
✅ 8 service cards with icons  
✅ 27 technology stack badges with logos  
✅ 5 portfolio projects with case studies  
✅ Contact form with validation  
✅ Social media integration (Instagram, LinkedIn, WhatsApp)  
✅ Legal pages (Privacy, Terms, Cookies)  
✅ SEO optimized (sitemap, robots.txt, meta tags)  
✅ Performance optimized (minified assets, caching)  
✅ Accessibility compliant  

---

## 📂 Project Structure

```
impulsemc-website/
├── index.html                              (Main landing page)
├── privacy-policy.html                     (Legal page)
├── terms-of-service.html                   (Legal page)
├── cookie-policy.html                      (Legal page)
├── robots.txt                              (SEO)
├── sitemap.xml                             (SEO)
├── package.json                            (npm dependencies)
│
├── css/
│   ├── style.css                          (Main styles - SOURCE)
│   ├── style.min.css                      (Minified - PRODUCTION)
│   ├── animations.css                     (Animations - SOURCE)
│   └── animations.min.css                 (Minified - PRODUCTION)
│
├── js/
│   ├── main.js                            (Main logic - SOURCE)
│   ├── main.min.js                        (Minified - PRODUCTION)
│   ├── utils.js                           (Utilities - SOURCE)
│   ├── utils.min.js                       (Minified - PRODUCTION)
│   ├── animations.js                      (Animations - SOURCE)
│   └── animations.min.js                  (Minified - PRODUCTION)
│
├── assets/
│   ├── images/
│   │   ├── logo.svg                       (Company logo)
│   │   └── project-mockups/               (Portfolio images)
│   ├── fonts/
│   └── icons/
│
├── case-studies/
│   ├── swadeshi-mart.html
│   ├── athavle-sweets-website.html
│   ├── medical-b2b-system.html
│   ├── secure-android-app.html
│   ├── lead-generation-pipeline.html
│   └── blockchain-voting-platform.html
│
└── Deployment Guides (Read for deployment)
    ├── DEPLOYMENT-QUICK-REFERENCE.txt     ← Quick start
    ├── DEPLOYMENT-HOSTINGER.md             ← Full guide
    ├── BUILD-AND-DEPLOY-GUIDE.md           ← Build commands
    ├── MASTER-DEPLOYMENT-CHECKLIST.md      ← Testing checklist
    └── README.md                           ← This file
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js v16+ (download: https://nodejs.org/)
- npm (comes with Node.js)

### Setup

```bash
# 1. Navigate to project
cd impulsemc-website

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev
# Opens http://localhost:3000
```

### Build Minified Files (Before Deployment)

```bash
# Build all minified assets
npm run build

# Build only CSS
npm run build:css

# Build only JavaScript
npm run build:js
```

### Available Commands

```bash
npm run dev              # Development server (unminified files)
npm run preview         # Preview production build (minified files)
npm run build           # Build minified CSS & JavaScript
npm run build:css       # Build minified CSS only
npm run build:js        # Build minified JavaScript only
npm run audit:mobile    # Run Lighthouse performance audit
```

---

## 🌐 Deploy to Hostinger

### **Option 1: File Manager (Easiest)**
See **[DEPLOYMENT-HOSTINGER.md](DEPLOYMENT-HOSTINGER.md)** for step-by-step instructions.

**Quick summary:**
1. Log into Hostinger → Files → File Manager
2. Upload files maintaining folder structure
3. Create `.htaccess` file with cache configuration
4. Test website on your domain

### **Option 2: FTP**
See **[DEPLOYMENT-HOSTINGER.md](DEPLOYMENT-HOSTINGER.md)** for FTP instructions.

### **Option 3: SSH/Git**
See **[BUILD-AND-DEPLOY-GUIDE.md](BUILD-AND-DEPLOY-GUIDE.md)** for SSH deployment.

---

## 📋 Before Deploying

**Essential Steps:**
1. Run `npm run build` to generate minified files
2. Run `npm run preview` to test production build locally
3. Verify all styles and JavaScript work correctly
4. Test on mobile devices for responsive design
5. Check DevTools (F12) for file sizes and errors

**File Size Check:**
- `style.min.css` should be ~12-15 KB
- `main.min.js` should be ~4-6 KB
- Other .min files should be 1-3 KB

If larger, re-run `npm run build`.

---

## 🧪 Testing Checklist

After deployment, verify:

- [ ] Homepage loads without errors
- [ ] All styles display (colors, fonts, layouts)
- [ ] Navigation menu works
- [ ] Portfolio cards display with images
- [ ] Contact form is interactive
- [ ] Social media links work
- [ ] Mobile responsive (test on phone)
- [ ] No JavaScript errors (F12 → Console)
- [ ] Page loads in <3 seconds
- [ ] Lighthouse score >80

See **[MASTER-DEPLOYMENT-CHECKLIST.md](MASTER-DEPLOYMENT-CHECKLIST.md)** for complete testing guide.

---

## 📊 Color Scheme

- **Primary:** `#1A56DB` (Blue)
- **Background:** `#ffffff` (White)
- **Text:** `#111111` (Black), `#4b5563` (Gray)
- **Accent:** Gradients and glass-morphism effects

---

## 👥 Team & Support

**ImpulseMacro Innovation**
- 📧 Email: impulsemacro.gmail.com
- 📱 Phone: +91 74984 35351
- 📍 Address: S. No. 70 Sonali Photo Studio Line, Ganes Sangavi, Pune
- 🌐 LinkedIn: https://www.linkedin.com/company/impulsemacro/
- 📸 Instagram: https://www.instagram.com/impulsemacro/

**Support Documentation:**
- **Quick Reference:** See [DEPLOYMENT-QUICK-REFERENCE.txt](DEPLOYMENT-QUICK-REFERENCE.txt)
- **Full Guide:** See [DEPLOYMENT-HOSTINGER.md](DEPLOYMENT-HOSTINGER.md)
- **Build Help:** See [BUILD-AND-DEPLOY-GUIDE.md](BUILD-AND-DEPLOY-GUIDE.md)
- **Testing:** See [MASTER-DEPLOYMENT-CHECKLIST.md](MASTER-DEPLOYMENT-CHECKLIST.md)

---

## 📝 License

UNLICENSED - All rights reserved to ImpulseMacro Innovation Private Limited

---

## ✅ Status

| Component | Status |
|-----------|--------|
| HTML Structure | ✅ Complete |
| CSS Styling | ✅ Complete & Minified |
| JavaScript | ✅ Complete & Minified |
| Responsive Design | ✅ Tested |
| Portfolio Projects | ✅ 5 Projects |
| Tech Stack | ✅ 27 Technologies |
| SEO | ✅ Optimized |
| Performance | ✅ Optimized |
| Hostinger Ready | ✅ Yes |

---

**Last Updated:** May 24, 2026  
**Version:** 1.0.0  
**Ready for Production:** ✅ YES  

🎉 **Website is production-ready and waiting for deployment!**
