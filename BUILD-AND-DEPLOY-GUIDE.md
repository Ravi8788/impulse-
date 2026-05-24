# 🔨 BUILD & DEPLOYMENT GUIDE - ImpulseMacro Innovation

## Complete Development & Production Workflow

---

## **Part 1: Local Development Setup**

### Prerequisites
- **Node.js** v16+ (download from https://nodejs.org/)
- **npm** (comes with Node.js)

### Initial Setup (First Time Only)

```bash
# 1. Navigate to project directory
cd impulsemc-website

# 2. Install dependencies
npm install

# This installs:
# - cleancss-cli (CSS minification)
# - terser (JavaScript minification)
# - lighthouse (Performance testing)
# - serve (Local development server)
```

---

## **Part 2: Available NPM Commands**

### **Development Mode (Local Testing)**
```bash
npm run dev
```
- Starts local server at `http://localhost:3000`
- Serves unminified files for debugging
- Press `Ctrl+C` to stop

### **Production Preview (Final Testing Before Deploy)**
```bash
npm run preview
```
- Starts local server at `http://127.0.0.1:4173`
- Serves minified production files
- Use this to verify final build before uploading to Hostinger
- Press `Ctrl+C` to stop

### **Build Minified Assets**
```bash
npm run build
```
**This is the MAIN COMMAND - run this before uploading to Hostinger!**

Minifies all CSS and JavaScript:
```
✅ Generates: css/style.min.css (from css/style.css)
✅ Generates: css/animations.min.css (from css/animations.css)
✅ Generates: js/utils.min.js (from js/utils.js)
✅ Generates: js/animations.min.js (from js/animations.js)
✅ Generates: js/main.min.js (from js/main.js)
```

**Subcommands:**
```bash
# Build only CSS
npm run build:css

# Build only JavaScript
npm run build:js
```

### **Performance Testing (Lighthouse)**
```bash
npm run audit:mobile
```
- Runs Lighthouse audit on mobile
- Generates report in `reports/lighthouse-mobile.report.html`
- Check Performance, Accessibility, Best Practices, SEO scores
- Target: >90 on all metrics

---

## **Part 3: Complete Deployment Workflow**

### **Step 1: Make Changes (Optional)**
Edit any of these files:
- `index.html` - HTML content
- `css/style.css` - Main styles
- `css/animations.css` - Animation keyframes
- `js/main.js` - Main functionality
- `js/utils.js` - Utility functions
- `js/animations.js` - Animation logic

### **Step 2: Build Production Files**
```bash
npm run build
```
✅ **IMPORTANT:** Run this EVERY TIME before uploading!

### **Step 3: Preview Production Build**
```bash
npm run preview
```
- Test at `http://127.0.0.1:4173`
- Verify all styles and functionality work
- Check responsive design on mobile (F12 → Device Toolbar)
- Press `Ctrl+C` to stop

### **Step 4: Performance Check (Optional)**
```bash
npm run audit:mobile
```
- Keep test server running in another terminal first:
  ```bash
  npm run preview
  # Keep this running, open NEW terminal for audit
  ```
- Opens Lighthouse report when complete
- Check for performance issues

### **Step 5: Upload to Hostinger**

**Using File Manager:**
1. Log into Hostinger → Files → File Manager
2. Go to `public_html`
3. Upload structure:
   ```
   Root: index.html, robots.txt, sitemap.xml, .htaccess, legal pages
   css/: style.min.css, animations.min.css
   js/: main.min.js, utils.min.js, animations.min.js
   assets/: images/, fonts/, icons/
   case-studies/: all 6 HTML files
   ```

**Using FTP:**
1. Connect with FTP credentials from Hostinger
2. Upload to `public_html/` maintaining folder structure
3. Ensure `.htaccess` file is uploaded (hidden file - may need to show hidden files)

**Using SCP/SSH:**
```bash
scp -r css js assets case-studies *.html robots.txt sitemap.xml .htaccess username@yourdomain.com:public_html/
```

### **Step 6: Verify Live Website**
- Visit `https://yourdomain.com`
- Open DevTools (F12) → Network tab
- Check file sizes:
  - `style.min.css` should be ~12-15 KB
  - `main.min.js` should be ~4-6 KB
  - Other .min files should be very small (1-3 KB)
- If files are large, they may not be minified - re-run `npm run build`

---

## **Part 4: File Structure Explanation**

### Source Files (Edit These)
```
impulsemc-website/
├── css/
│   ├── style.css           ← EDIT THIS (main styles)
│   └── animations.css      ← EDIT THIS (keyframes)
├── js/
│   ├── main.js            ← EDIT THIS (main logic)
│   ├── utils.js           ← EDIT THIS (utilities)
│   └── animations.js      ← EDIT THIS (animation logic)
└── index.html             ← EDIT THIS (content)
```

### Generated Files (Don't Edit - Auto Generated)
```
impulsemc-website/
├── css/
│   ├── style.min.css      ← GENERATED (minified CSS)
│   └── animations.min.css ← GENERATED (minified animations)
└── js/
    ├── main.min.js        ← GENERATED (minified main.js)
    ├── utils.min.js       ← GENERATED (minified utils.js)
    └── animations.min.js  ← GENERATED (minified animations.js)
```

**Rule:** Always edit source files (style.css, main.js), never edit .min files!

---

## **Part 5: Maintenance & Updates**

### Updating Website Content

1. **Edit source files:**
   ```bash
   # Edit HTML, CSS, or JS source files
   # Example: Edit index.html in your code editor
   ```

2. **Rebuild minified versions:**
   ```bash
   npm run build
   ```

3. **Test locally:**
   ```bash
   npm run preview
   ```

4. **Re-upload to Hostinger:**
   - Upload updated .min files to Hostinger
   - Upload updated .html files
   - Clear browser cache (Ctrl+Shift+Delete)

---

## **Part 6: Troubleshooting Build Issues**

### "npm: command not found"
- **Problem:** Node.js not installed
- **Solution:** Download and install Node.js from https://nodejs.org/

### "npm run build fails"
- **Problem:** Dependencies not installed
- **Solution:** Run `npm install` first

### ".min files not generated"
- **Problem:** Build script encountered error
- **Solution:** Check terminal output for specific error, fix the source file

### "Styles/JavaScript not loading on Hostinger"
- **Problem:** Old .min files or wrong file paths
- **Solution:**
  1. Run `npm run build` again locally
  2. Re-upload ALL .min files to Hostinger
  3. Clear browser cache (Ctrl+Shift+Delete)
  4. Hard refresh (Ctrl+F5)

### "Large .min files uploaded"
- **Problem:** Uploaded unminified source files instead of .min files
- **Solution:**
  1. Delete wrong files from Hostinger
  2. Ensure uploading from `/impulsemc-website/css/style.min.css` (not style.css)
  3. Verify file sizes match reference below

---

## **Part 7: File Size Reference**

After running `npm run build`, check these approximate sizes:

| File | Expected Size | If Larger = Problem |
|------|---------------|-------------------|
| style.min.css | 12-15 KB | Check if uploading style.css instead |
| animations.min.css | 2-3 KB | Should be small |
| main.min.js | 4-6 KB | Check if uploading main.js instead |
| utils.min.js | 1-2 KB | Should be small |
| animations.min.js | 1-2 KB | Should be small |

**If sizes are 3x larger, re-run:** `npm run build`

---

## **Part 8: Minification Explanation**

### What Minification Does
```javascript
// BEFORE (source file - readable)
function initializeWebsite() {
    const navbar = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.theme-toggle');
    
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

// AFTER (minified - smaller file)
function initializeWebsite(){const navbar=document.querySelector(".navbar"),toggleButton=document.querySelector(".theme-toggle");toggleButton.addEventListener("click",function(){document.body.classList.toggle("dark-mode")})}
```

**Benefits:**
- ✅ **Smaller files** = Faster downloads (4-6x smaller)
- ✅ **Better performance** = Faster page load
- ✅ **Obfuscated code** = Small security benefit
- ✅ **Production ready** = Optimized for users

---

## **Part 9: Quick Reference Cheatsheet**

```bash
# First time setup
npm install

# Daily development
npm run dev              # Start dev server
npm run build           # Build minified files
npm run preview         # Test production build

# Before uploading to Hostinger
npm run build           # ← RUN THIS!
npm run preview         # ← TEST THIS!

# Performance audit
npm run audit:mobile    # Check scores
```

---

## **Part 10: Deployment Checklist**

- [ ] Code changes made to source files (style.css, main.js, etc.)
- [ ] Run `npm run build` to generate .min files
- [ ] Run `npm run preview` and test website
- [ ] All styles display correctly
- [ ] All JavaScript functions work
- [ ] Mobile responsive design works
- [ ] No 404 errors in DevTools
- [ ] Performance scores acceptable (>80)
- [ ] Upload .min files to Hostinger (not source files)
- [ ] Upload updated .html files
- [ ] Clear browser cache and hard refresh
- [ ] Test website on Hostinger domain
- [ ] Verify all features work on live site

---

## **Contact & Support**

- **Build Issues:** Check terminal output for error messages
- **Hostinger Deployment:** See `DEPLOYMENT-HOSTINGER.md`
- **Quick Reference:** See `DEPLOYMENT-QUICK-REFERENCE.txt`
- **Company Support:** impulsemacro.gmail.com | +91 74984 35351

---

**Status:** ✅ Production Ready  
**Last Updated:** May 24, 2026  
**Website Version:** 1.0.0  

