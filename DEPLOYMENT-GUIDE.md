# Deployment Guide - Squarespace Domain with Vercel Hosting

## 🎯 Overview

Your landing page will be hosted on **Vercel** (best for Next.js) and connected to your **Squarespace domain**.

**Why Vercel?**
- Built by the creators of Next.js
- Automatic optimization and builds
- Free SSL certificate
- Global CDN for fast loading
- Zero configuration needed

---

## 📋 Deployment Plan (Step-by-Step)

### Phase 1: Prepare Your Site (5 minutes)

#### 1. Replace Test Images
Before deploying, replace Unsplash test images with your actual photos:

**Images to replace:**
- [ ] Hero background (`Hero.tsx` line 14)
- [ ] Prizes background (`Prizes.tsx` line 18)
- [ ] Mariana's portrait (`AboutMariana.tsx` line 25)
- [ ] 3 Testimonial images (`Testimonials.tsx` lines 40-42)
- [ ] 6 Feature card backgrounds (`ProgramFeatures.tsx` lines 16, 23, 30, 37, 44, 51)

**After replacing images:**
- Remove `unoptimized` prop from all `<Image>` components
- This enables Next.js automatic image optimization

#### 2. Update CTA Links
Connect all buttons to your checkout URL:

**Files to update:**
- `components/sections/Hero.tsx` (line 95)
- `components/sections/AboutChallenge.tsx` (line 52)
- `components/sections/Pricing.tsx` (line 95)
- `components/sections/FinalCTA.tsx` (line 40)

**Example:**
```tsx
<Button
  onClick={() => window.location.href = 'https://your-checkout-url.com'}
  // ... other props
>
```

---

### Phase 2: Deploy to Vercel (10 minutes)

#### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Mariana landing page"

# Create a new repository on GitHub (https://github.com/new)
# Then connect and push:
git remote add origin https://github.com/YOUR-USERNAME/mariana-landing.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel

**Option A: Using Vercel CLI (Fastest)**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

**Option B: Using Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js - no configuration needed!
5. Click "Deploy"
6. Wait 2-3 minutes for deployment

**You'll get a URL like:** `https://mariana-landing.vercel.app`

---

### Phase 3: Connect Squarespace Domain (15 minutes)

#### Step 1: Get DNS Records from Vercel

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Enter your domain: `marianasgomez.com` (example)
4. Vercel will show you DNS records to add

**Typical DNS records you'll need:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Step 2: Update DNS in Squarespace

1. Log in to [Squarespace](https://squarespace.com)
2. Go to **Settings** → **Domains** → Click your domain
3. Click **Advanced Settings** → **DNS Settings**
4. **Important:** Don't delete all records! Only update these:

**Add/Update these records:**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

**Keep these existing records:**
- MX records (for email)
- TXT records (for verification)
- Any other CNAME records you're using

5. Click **Save**

#### Step 3: Verify Domain in Vercel

1. Back in Vercel, click **Verify** next to your domain
2. DNS propagation takes 5 minutes to 48 hours (usually under 30 minutes)
3. Once verified, SSL certificate is automatically issued (can take up to 24 hours)

---

### Phase 4: Final Verification (5 minutes)

#### Test Your Site

1. **Test your domain:**
   - Visit `https://yourdomain.com`
   - Visit `https://www.yourdomain.com`
   - Both should work!

2. **Test on mobile:**
   - Open on your phone
   - Check all sections
   - Test CTA buttons

3. **Test functionality:**
   - Click all CTAs → Should go to checkout
   - Check all images load
   - Test FAQ accordion
   - Check all hover effects

4. **Performance test:**
   - Go to [PageSpeed Insights](https://pagespeed.web.dev/)
   - Enter your domain
   - Should score 90+ on Performance

---

## 🚨 Common Issues & Solutions

### Issue 1: "Domain not verified"
**Solution:** Wait longer (up to 48 hours for DNS propagation)
```bash
# Check DNS propagation
https://dnschecker.org/#A/yourdomain.com
```

### Issue 2: "Mixed Content Warning"
**Solution:** Ensure all URLs use `https://` not `http://`

### Issue 3: Images not loading
**Solution:**
- Check Next.js Image component has proper `src`
- Verify images exist in `/public` folder
- Check browser console for errors

### Issue 4: SSL Certificate Pending
**Solution:** Wait up to 24 hours. Vercel automatically provisions Let's Encrypt SSL.

---

## 📊 Alternative Deployment Options

### Option 1: Vercel (Recommended) ⭐
**Pros:**
- Free tier is generous
- Perfect for Next.js
- Automatic deployments from Git
- Global CDN
- Free SSL

**Pricing:** Free for personal projects

---

### Option 2: Netlify
**Pros:**
- Similar to Vercel
- Great free tier
- Easy setup

**Setup:**
1. Connect GitHub repo at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add domain in Netlify settings
5. Update DNS in Squarespace

---

### Option 3: AWS Amplify
**Pros:**
- AWS infrastructure
- Auto-scaling

**Cons:**
- More complex setup
- Can be more expensive

---

## 🔒 Security Checklist

Before going live:

- [ ] SSL certificate is active (https://)
- [ ] Environment variables are secure (not in code)
- [ ] Analytics tracking is set up (Google Analytics)
- [ ] Email collection works (if applicable)
- [ ] Payment processor is in test mode → switch to live
- [ ] Contact form works
- [ ] 404 page exists
- [ ] Favicon is added

---

## 📈 Post-Launch Setup

### 1. Analytics (Recommended)

**Google Analytics 4:**
```bash
# Install
npm install @next/third-parties

# Add to layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### 2. Meta Pixel (Facebook/Instagram Ads)

Add to `app/layout.tsx`:
```tsx
<Script id="facebook-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

### 3. Performance Monitoring

**Vercel Analytics (Built-in):**
- Automatically tracks Web Vitals
- View in Vercel Dashboard under "Analytics"

---

## 🎯 Quick Deploy Checklist

Use this checklist on launch day:

**Pre-Deploy:**
- [ ] All test images replaced
- [ ] All CTAs connected to checkout
- [ ] Contact email is correct
- [ ] Social media links work
- [ ] Mobile responsive tested
- [ ] Forms work correctly

**Deploy:**
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Wait for build to complete
- [ ] Test Vercel URL

**Domain Connection:**
- [ ] Add domain in Vercel
- [ ] Get DNS records from Vercel
- [ ] Update DNS in Squarespace
- [ ] Wait for propagation
- [ ] Verify SSL certificate

**Post-Deploy:**
- [ ] Test live site on desktop
- [ ] Test live site on mobile
- [ ] Test all CTAs
- [ ] Check PageSpeed score
- [ ] Set up analytics
- [ ] Monitor for errors

---

## 📞 Support Resources

**Vercel:**
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Discord: [vercel.com/discord](https://vercel.com/discord)

**Squarespace:**
- DNS Help: [squarespace.com/help/custom-domains](https://squarespace.com/help/custom-domains)
- Support: Chat available 24/7

**Next.js:**
- Documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

## 💰 Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Vercel Hosting | **$0/month** | Free tier includes unlimited sites |
| Domain (Squarespace) | **$20-30/year** | You already own this |
| SSL Certificate | **$0** | Free via Let's Encrypt |
| CDN | **$0** | Included with Vercel |
| **Total Monthly** | **$0** | 🎉 Completely free! |

---

## 🚀 Estimated Timeline

| Task | Time | When |
|------|------|------|
| Replace images | 30 min | Before deploy |
| Update CTA links | 10 min | Before deploy |
| Create GitHub repo | 5 min | Deploy day |
| Deploy to Vercel | 5 min | Deploy day |
| Connect domain | 15 min | Deploy day |
| DNS propagation | 30 min - 48 hrs | Automatic |
| SSL provisioning | 10 min - 24 hrs | Automatic |
| Testing | 30 min | After DNS |
| **Total Active Time** | **~2 hours** | Over 1-2 days |

---

## ✅ Ready to Deploy?

Follow these steps in order:

1. **Replace images** → Use your actual photos
2. **Update CTAs** → Connect to checkout URL
3. **Test locally** → `npm run build && npm start`
4. **Push to GitHub** → Create repo and push
5. **Deploy to Vercel** → Import from GitHub
6. **Connect domain** → Update DNS in Squarespace
7. **Wait & verify** → DNS + SSL (30 mins - 24 hrs)
8. **Launch!** 🎉

---

## 🆘 Need Help?

If you get stuck:

1. Check the error message in Vercel deployment logs
2. Search the issue in Vercel docs
3. Ask in Vercel Discord (very helpful community)
4. Check DNS propagation: [dnschecker.org](https://dnschecker.org)

Your landing page is production-ready and will be live soon! 🚀
