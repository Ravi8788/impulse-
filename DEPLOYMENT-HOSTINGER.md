# ImpulseMacro Innovation - Hostinger Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the ImpulseMacro Innovation website to Hostinger. The website is fully optimized and minified for production.

---

## 📁 File Structure for Deployment

Upload the following files and folders to your Hostinger account's root directory (public_html/):

```
public_html/
├── index.html                    (Main landing page)
├── privacy-policy.html           (Legal page)
├── terms-of-service.html         (Legal page)
├── cookie-policy.html            (Legal page)
├── robots.txt                    (SEO - search engine crawling)
├── sitemap.xml                   (SEO - site structure)
├── .htaccess                     (Server configuration - see below)
│
├── css/
│   ├── style.min.css            (Main stylesheet - MINIFIED)
│   └── animations.min.css       (Animation stylesheet - MINIFIED)
│
├── js/
│   ├── main.min.js              (Main functionality - MINIFIED)
│   ├── utils.min.js             (Utility functions - MINIFIED)
│   └── animations.min.js        (Animation logic - MINIFIED)
│
├── assets/
│   ├── images/
│   │   ├── logo.svg             (Company logo)
│   │   └── project-mockups/     (Portfolio project images)
│   ├── fonts/                   (Custom fonts if any)
│   └── icons/                   (Icon assets if any)
│
└── case-studies/
    ├── swadeshi-mart.html
    ├── athavle-sweets-website.html
    ├── medical-b2b-system.html
    ├── secure-android-app.html
    ├── lead-generation-pipeline.html
    └── blockchain-voting-platform.html
```

---

## 🚀 Step-by-Step Deployment Instructions

### **Option 1: Using Hostinger File Manager (Recommended for Non-Technical Users)**

1. **Log into Hostinger Control Panel**
   - Go to https://hpanel.hostinger.com
   - Enter your credentials and log in

2. **Navigate to File Manager**
   - In the left sidebar, click **Files** → **File Manager**
   - You'll see the `public_html` folder (this is your website root)

3. **Upload Files & Folders**
   - Click the **Upload** button (or drag & drop)
   - Select all files and folders from your local project directory
   - Upload structure:
     - Upload `index.html`, `robots.txt`, `sitemap.xml`, `.htaccess`, and all legal pages directly to `public_html/`
     - Create folders: `css/`, `js/`, `assets/`, `case-studies/`
     - Upload respective files into each folder

4. **Verify Upload**
   - Check that all files appear in the File Manager
   - Ensure file sizes match (especially .min files should be much smaller than originals)

5. **Test Website**
   - Visit `https://yourdomain.com` in your browser
   - Check that styles load and functionality works
   - Test navigation, forms, and responsive design on mobile

---

### **Option 2: Using FTP (For Advanced Users)**

1. **Get FTP Credentials**
   - In Hostinger Control Panel, click **Files** → **FTP Accounts**
   - Create or use existing FTP account
   - Note down: FTP username, password, FTP host (usually ftp.yourdomain.com)

2. **Connect via FTP Client**
   - Download FTP client (e.g., FileZilla, WinSCP, Cyberduck)
   - Open FTP client and connect:
     - **Host:** ftp.yourdomain.com
     - **Username:** Your FTP username
     - **Password:** Your FTP password
     - **Port:** 21 (or 22 for SFTP)

3. **Upload Files**
   - Navigate to `public_html/` folder on remote server
   - Upload all files maintaining the folder structure
   - Ensure `.htaccess` file is uploaded (it starts with a dot and may be hidden)

4. **Set File Permissions** (if needed)
   - Right-click each file → Properties
   - Set permissions to `644` for files, `755` for directories
   - Hostinger usually handles this automatically

---

### **Option 3: Using Git/SSH (For Developers)**

1. **Enable SSH in Hostinger**
   - Hostinger Control Panel → **Files** → **SSH Keys**
   - Add your SSH public key

2. **Connect via SSH**
   ```bash
   ssh username@yourdomain.com
   cd public_html
   ```

3. **Clone or Upload Repository**
   ```bash
   # If using Git
   git clone https://your-repo-url.git .
   # Or upload via SCP
   scp -r /local/project/path/* username@yourdomain.com:public_html/
   ```

---

## ⚙️ Server Configuration (.htaccess)

**Create or update `.htaccess` file in `public_html/` with this content:**

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript application/json
</IfModule>

# Cache headers for static assets
<IfModule mod_expires.c>
    ExpiresActive On
    
    # Images
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    
    # CSS & JavaScript
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"
    
    # Fonts
    ExpiresByType font/ttf "access plus 1 year"
    ExpiresByType font/otf "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    
    # HTML
    ExpiresByType text/html "access plus 7 days"
    
    # Default
    ExpiresDefault "access plus 2 days"
</IfModule>

# Cache control headers
<IfModule mod_headers.c>
    Header set Cache-Control "max-age=31536000, public" .css
    Header set Cache-Control "max-age=31536000, public" .js
    Header set Cache-Control "max-age=31536000, public" .jpg
    Header set Cache-Control "max-age=31536000, public" .jpeg
    Header set Cache-Control "max-age=31536000, public" .png
    Header set Cache-Control "max-age=31536000, public" .svg
    Header set Cache-Control "max-age=31536000, public" .gif
    Header set Cache-Control "max-age=31536000, public" .woff
    Header set Cache-Control "max-age=31536000, public" .woff2
    Header set Cache-Control "max-age=604800, public" .html
</IfModule>

# Remove ETag headers
<IfModule mod_headers.c>
    Header unset ETag
</IfModule>

# GZIP compression
<IfModule mod_gzip.c>
    mod_gzip_on Yes
    mod_gzip_dechunk Yes
    mod_gzip_item_include file .(html?|txt|css|js|json)$
    mod_gzip_item_include handler ^cgi-script$
    mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip
    mod_gzip_item_exclude mime ^image/
    mod_gzip_minimum_file_size 512
    mod_gzip_maximum_file_size 128000
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

**How to add `.htaccess` in Hostinger File Manager:**
1. Click **File Manager**
2. Go to `public_html` folder
3. Right-click → **Create New** → **File**
4. Name it `.htaccess` (with the dot)
5. Click inside to edit
6. Paste the configuration above
7. Save

---

## 🔧 Building & Minifying Assets Locally (Before Upload)

If you make changes to CSS or JavaScript files, rebuild the minified versions using npm:

**Prerequisites:** Node.js and npm installed locally

**Setup (First time only):**
```bash
cd /path/to/impulsemc-website
npm install
```

**Build minified assets:**
```bash
npm run build
```

This generates:
- `css/style.min.css` from `css/style.css`
- `css/animations.min.css` from `css/animations.css`
- `js/main.min.js` from `js/main.js`
- `js/utils.min.js` from `js/utils.js`
- `js/animations.min.js` from `js/animations.js`

Then upload the `.min.css` and `.min.js` files to Hostinger.

---

## ✅ Post-Deployment Testing Checklist

After uploading to Hostinger, verify everything works:

- [ ] **Homepage loads:** Visit `https://yourdomain.com` and check it displays correctly
- [ ] **Styles applied:** All colors, fonts, and layouts display properly
- [ ] **Navigation works:** Click navbar links - should scroll to sections smoothly
- [ ] **Hero section:** Images/gradients display, CTA buttons are clickable
- [ ] **Portfolio cards:** All 5 project cards visible with images
- [ ] **Tech badges:** 27 technology logos display correctly
- [ ] **Forms work:** Click contact form fields, type text, submit (check spam folder for emails)
- [ ] **Mobile responsive:** Test on mobile phone - layout adjusts, hamburger menu works
- [ ] **Case studies:** Click portfolio projects - open case study pages (case-studies/*.html)
- [ ] **Social links:** Click Instagram, LinkedIn, WhatsApp - links open correctly
- [ ] **Legal pages:** Check privacy-policy.html, terms-of-service.html, cookie-policy.html load
- [ ] **Speed:** Check page load time - CSS/JS should be minified and cached
  - Open DevTools (F12) → Network tab → Check file sizes (*.min.css ≈ 10-15KB, *.min.js ≈ 5-10KB)
- [ ] **SEO:** Check sitemap.xml and robots.txt accessible at `https://yourdomain.com/sitemap.xml` and `https://yourdomain.com/robots.txt`
- [ ] **Browser compatibility:** Test in Chrome, Firefox, Safari, Edge

---

## 📊 Performance Monitoring (Optional)

**Monitor your website performance using:**

1. **Google Lighthouse:** 
   - Open DevTools (F12) → Lighthouse tab
   - Click "Analyze page load"
   - Aim for >90 on Performance, Accessibility, Best Practices

2. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add your domain
   - Submit sitemap.xml for faster indexing

3. **Google Analytics:**
   - Set up tracking in Google Analytics dashboard
   - Add GA tag to website (optional, not included by default)

---

## 🐛 Troubleshooting

### **Problem: CSS/JS files not loading (404 errors)**
- **Solution:** Check file paths in `index.html` - ensure paths match exactly (case-sensitive on Linux servers)
- Check that all CSS/JS files were uploaded to correct folders
- Clear browser cache (Ctrl+Shift+Delete) and refresh page

### **Problem: Images not displaying**
- **Solution:** Verify image paths in HTML and CSS
- Check that `/assets/images/` folder and all images were uploaded
- Ensure image file extensions are correct (.jpg, .png, .svg, etc.)

### **Problem: Website slow to load**
- **Solution:** Ensure minified files (.min.css, .min.js) are being used, not originals
- Check .htaccess caching headers are applied
- Enable Gzip compression in Hostinger Control Panel (if available)
- Optimize images using online tools (Tinify.com)

### **Problem: Forms not working**
- **Solution:** Contact form uses JavaScript only (doesn't send emails by default)
- To enable email notifications, set up PHP mail or email service
- Test by checking browser console (F12) for JavaScript errors

### **Problem: 404 errors on case study pages**
- **Solution:** Ensure `case-studies/` folder and all 6 HTML files were uploaded
- Check file names match exactly: swadeshi-mart.html, athavle-sweets-website.html, etc.

---

## 📞 Support Contacts

- **Hostinger Support:** https://support.hostinger.com
- **Company Email:** impulsemacro.gmail.com
- **Company Phone:** +91 74984 35351
- **Instagram:** https://www.instagram.com/impulsemacro/
- **LinkedIn:** https://www.linkedin.com/company/impulsemacro/

---

## 🎯 Summary

1. **Upload all files** to `public_html/` using File Manager, FTP, or SSH
2. **Add `.htaccess`** configuration for caching and compression
3. **Test the website** in browser using post-deployment checklist
4. **Monitor performance** using Google Lighthouse and Google Search Console
5. **Keep backups** of your files locally

Your website is now live on Hostinger! 🎉

