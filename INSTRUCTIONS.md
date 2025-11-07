# Mariana Gómez - Reto de Fin de Año Landing Page

A modern, feminine, and conversion-optimized landing page for a 4-week fitness transformation program.

## 🎨 Design System

### Color Palette
- **Vibrant Pink (Primary)**: #E34A6F (Cerise) - Main CTAs and accents
- **Soft Pink**: #F7B2BD (Cherry Blossom Pink) - Soft backgrounds
- **Warm Beige**: #B2A198 (Khaki) - Alternating sections
- **Pearl Gray**: #F5F5F5 - Neutral backgrounds
- **Charcoal**: #053225 (Dark Green) - Text color
- **Asparagus**: #60A561 - Accent color

### Typography
- **Headlines**: Playfair Display (elegant, feminine serif)
- **Body**: Poppins (modern, clean sans-serif)

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Replace Image Placeholders

All image placeholders are clearly marked in the code. Replace them with actual images:

#### Hero Background Image (MOST IMPORTANT)
File: `/public/hero-background.jpg`
- **Add your hero background image to the `/public` folder**
- Filename: `hero-background.jpg` (or `.webp` for better performance)
- Minimum dimensions: 1920x1080px (2560x1440px recommended)
- Style: Editorial fitness photo with natural lighting
- Composition: Subject on the right side (text is on the left)
- File size: Optimize to under 500KB

After adding the image, uncomment lines 17-24 in `components/sections/Hero.tsx`:
```tsx
// Remove the comment markers around:
<Image
  src="/hero-background.jpg"
  alt="Fitness transformation background"
  fill
  className="object-cover"
  priority
  quality={90}
/>
```

#### About Mariana Section
File: `components/sections/AboutMariana.tsx`
- Replace with a professional portrait of Mariana
- Style: Editorial, warm lighting, approachable

#### Testimonials Section
File: `components/sections/Testimonials.tsx`
- Replace with 3 before/after transformation photos
- Ensure photos have proper consent and permissions

### 2. Update CTAs (Call-to-Action Buttons)

All CTAs currently link to `#`. Update them with your actual checkout/registration URL:

Search for: `<Button` in all section files and replace `href="#"` or add onClick handlers with your purchase link.

**Files to update:**
- `Hero.tsx` - Line ~62
- `AboutChallenge.tsx` - Line ~42
- `Pricing.tsx` - Line ~106
- `FinalCTA.tsx` - Line ~42

Example:
```tsx
<Button
  onClick={() => window.location.href = 'https://your-checkout-url.com'}
  // ... other props
>
  QUIERO GANARLE A ENERO
</Button>
```

### 3. Update Content

All content is editable directly in the component files:

- **Hero**: `components/sections/Hero.tsx`
- **About Challenge**: `components/sections/AboutChallenge.tsx`
- **Target Audience**: `components/sections/TargetAudience.tsx`
- **Features**: `components/sections/ProgramFeatures.tsx`
- **Bonuses**: `components/sections/Bonuses.tsx`
- **Prizes**: `components/sections/Prizes.tsx`
- **About Mariana**: `components/sections/AboutMariana.tsx`
- **Testimonials**: `components/sections/Testimonials.tsx`
- **Pricing**: `components/sections/Pricing.tsx`
- **FAQ**: `components/sections/FAQ.tsx`
- **Final CTA**: `components/sections/FinalCTA.tsx`

### 4. Customize Colors

To change the color scheme, edit:
```
app/globals.css (lines 54-60)
```

Current color palette (updated):
```css
--vibrant-pink: #E34A6F;
--soft-pink: #F7B2BD;
--warm-beige: #B2A198;
--pearl-gray: #F5F5F5;
--charcoal: #053225;
--asparagus: #60A561;
```

### 5. Change Section Order

Edit `app/page.tsx` to reorder sections:

```tsx
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutChallenge />
      // Reorder these as needed
      <TargetAudience />
      <ProgramFeatures />
      // ... etc
    </main>
  );
}
```

### 6. Add/Remove Sections

To remove a section, simply delete its import and component from `app/page.tsx`.

To add a new section, create a new file in `components/sections/` following the same pattern.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Test on different devices to ensure proper display.

## 🎯 SEO & Metadata

Update metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
};
```

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display + Poppins)

## 📊 Conversion Optimization

The sections are ordered strategically for maximum conversion:
1. Hero (Awareness)
2. About Challenge (Clarity)
3. Target Audience (Identification)
4. Features (Value)
5. Bonuses (Added Value)
6. Prizes (Motivation)
7. Testimonials (Social Proof)
8. About Mariana (Trust)
9. Pricing (Decision)
10. FAQ (Objection Handling)
11. Final CTA (Action)

## 🎨 Image Guidelines

When replacing placeholders, use images that are:
- High quality (min 1920px width for hero images)
- Optimized for web (use Next.js Image component)
- Editorial style with natural lighting
- Warm tones matching the color palette
- Professional and aspirational

## 📧 Contact Integration

Update contact information in:
- `components/sections/FAQ.tsx` (email and Instagram)
- `components/sections/Footer.tsx` (all contact details)

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
Build and deploy the `.next` folder:
```bash
npm run build
```

## 💡 Tips

1. **Test CTAs**: Ensure all buttons link to the correct checkout page
2. **Mobile First**: Most traffic will be mobile, test thoroughly
3. **Page Speed**: Optimize images before uploading
4. **A/B Testing**: Consider testing different headlines and CTAs
5. **Analytics**: Add Google Analytics or similar for tracking

## 🐛 Troubleshooting

**Fonts not loading?**
- Clear browser cache
- Check internet connection (fonts load from Google)

**Colors not applying?**
- Run `npm run dev` to restart the dev server
- Check CSS variable names match in globals.css

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

## 📄 License

© 2025 Mariana Gómez. All rights reserved.
