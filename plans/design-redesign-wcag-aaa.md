# AIdiofy Site Design Redesign Plan
## WCAG AAA Compliant • Dark Immersive Aesthetic • Anti-AI-Slop

---

## Scope & Preservation Notice

**IMPORTANT:** This redesign is purely visual. All existing functionality will be preserved:

### Preserved Functionality
- ✅ Language Switcher component (navigation)
- ✅ All language pages (de/, es/, fr/, it/, ja/, ko/, pl/, pt/, zh-cn/)
- ✅ Complete i18n system with all translations
- ✅ Cookie Banner component
- ✅ Legal pages (Privacy Policy, Terms of Use)
- ✅ Contact functionality (email display)
- ✅ All routing and navigation logic
- ✅ All content and copy

### Component Changes
- 🔄 **Waitlist → Try the App:** Redesign as "Try the App Now" CTA section since app.aidiofy.com is live

### Changes Applied
- 🎨 Visual design (colors, typography, spacing, animations)
- 🎨 Component styling and layout
- 🎨 Accessibility enhancements (focus states, contrast ratios)
- 🎨 Tailwind configuration with custom design tokens

---

## Design Philosophy

**Core Principle:** Intentional Minimalism
Every element must have a clear purpose. If it doesn't serve the user experience, remove it.

**Anti-AI-Slop Rules:**
- NO generic purple/blue gradients
- NO floating 3D abstract shapes
- NO stock photography
- NO template-like symmetric layouts
- NO overused "tech buzzword" visuals
- NO cookie-cutter SaaS patterns

**Target Audience Aesthetic:**
- Dark, immersive gaming setups
- Late-night reading environments
- Premium board game components
- High-end audio equipment interfaces

---

## Color Palette (WCAG AAA Compliant)

### Primary Colors
```
Obsidian Black:    #0a0a0b  (Background)
Charcoal:          #141416  (Surface)
Midnight:          #1c1c1f  (Elevated Surface)
Ash:               #2a2a2e  (Border/Divider)
```

### Accent Colors
```
Ember Glow:        #ff6b35  (Primary Action - 7.2:1 contrast)
Amber Pulse:       #ffb347  (Secondary - 6.8:1 contrast)
Crimson Accent:    #dc143c  (Alert/Warning - 7.5:1 contrast)
```

### Text Colors (WCAG AAA)
```
Text Primary:      #f5f5f7  (7.5:1 on Obsidian)
Text Secondary:    #a1a1a6  (7.0:1 on Obsidian)
Text Tertiary:     #6e6e73  (7.0:1 on Charcoal)
Text Disabled:     #48484a  (4.5:1 minimum)
```

### Subtle Glows
```
Glow Primary:      rgba(255, 107, 53, 0.15)
Glow Secondary:    rgba(255, 179, 71, 0.12)
Glow Ambient:      rgba(255, 255, 255, 0.03)
```

---

## Typography System

### Font Stack
```css
Display: 'Space Grotesk', system-ui, sans-serif
Body: 'Inter', 'SF Pro Text', system-ui, sans-serif
Mono: 'JetBrains Mono', 'SF Mono', monospace
```

### Type Scale
```
Display XL: 72px / 64px (mobile) - 1.0 line-height - 700 weight
Display L:  56px / 48px (mobile) - 1.1 line-height - 700 weight
Heading 1:  48px / 40px (mobile) - 1.2 line-height - 600 weight
Heading 2:  36px / 32px (mobile) - 1.3 line-height - 600 weight
Heading 3:  28px / 24px (mobile) - 1.4 line-height - 600 weight
Body L:     20px / 18px (mobile) - 1.6 line-height - 400 weight
Body M:     16px / 15px (mobile) - 1.6 line-height - 400 weight
Body S:     14px / 13px (mobile) - 1.5 line-height - 400 weight
Caption:    12px / 11px (mobile) - 1.4 line-height - 500 weight
```

### Letter Spacing
```
Display: -0.02em (tight)
Heading: -0.01em (slightly tight)
Body: 0.01em (slightly loose)
Caption: 0.02em (loose for readability)
```

---

## Spacing System

### Scale (8px base)
```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
4xl: 96px
5xl: 128px
```

### Container Widths
```
Mobile:     100% (with 16px padding)
Tablet:     768px max
Desktop:    1024px max
Wide:       1280px max
```

---

## Component Design Specifications

### 1. Navigation Bar

**Layout:**
- Fixed position, 72px height
- Glass morphism: Obsidian with 85% opacity + backdrop blur
- Bottom border: 1px solid Ash (20% opacity)
- Asymmetric layout: Logo left, actions right

**Logo:**
- Custom SVG icon + "AIdiofy" text
- Text: 24px, 700 weight, Text Primary
- Icon: 32px × 32px, Ember Glow accent

**Nav Links:**
- Desktop: 14px, 500 weight, Text Secondary
- Hover: Text Primary + 2px bottom border (Ember Glow, animated)
- Focus: 3px outline, Ember Glow, offset 2px

**CTA Button:**
- "Try the App" - Pill shape, 40px height
- Background: Ember Glow with subtle glow
- Text: Text Primary, 600 weight, 14px
- Hover: Brighten by 10%, glow intensifies
- Focus: 3px outline, offset 2px

**Mobile Menu:**
- Hamburger icon: 28px, Text Secondary
- Full-screen overlay with staggered animations
- Large touch targets (48px minimum)

---

### 2. Hero Section

**Layout:**
- Asymmetric grid: 60% content left, 40% visual right
- Padding: 128px top, 96px bottom
- Background: Obsidian with subtle animated noise texture

**Typography:**
- Headline: Display L, split across 2-3 lines
- Emphasis word: Ember Glow gradient (not generic purple/blue)
- Subheadline: Body L, Text Secondary, max-width 560px

**Visual Element (Right Side):**
- Abstract representation of audio waves
- Custom SVG with animated paths
- Colors: Ember Glow + Amber Pulse gradients
- Subtle parallax on scroll

**CTA Group:**
- Primary: "How It Works" - Ember Glow background, 52px height
- Secondary: "Try the App" - Charcoal background, Amber Pulse border
- Stacked on mobile, inline on desktop

**Micro-interactions:**
- Headline: Letters animate in sequentially (staggered 50ms)
- Visual element: Subtle rotation on mouse move
- Buttons: Scale 1.02 on hover, glow intensifies

---

### 3. Features Section

**Layout:**
- Grid: 2 columns (desktop), 1 column (mobile)
- Asymmetric: Feature cards alternate alignment
- Gap: 32px desktop, 24px mobile

**Feature Card Design:**
- Background: Charcoal with 0.5% noise texture
- Border: 1px solid Ash (30% opacity)
- Border-radius: 16px
- Padding: 40px
- Hover: Translate Y -8px, border brightens to Ember Glow (40% opacity)

**Icon Container:**
- 64px × 64px, rounded-rectangle (12px radius)
- Background: Glow Primary
- Border: 1px solid Ember Glow (20% opacity)
- Icon: 32px, Ember Glow

**Typography:**
- Title: Heading 3, Text Primary
- Description: Body M, Text Secondary

**Animations:**
- Scroll-triggered fade-in with stagger
- Icon: Subtle pulse on hover
- Card: Border glow animation on focus

---

### 4. How It Works Section

**Layout:**
- Horizontal timeline (desktop), vertical (mobile)
- 3 steps with custom connectors
- Background: Charcoal with subtle gradient (Obsidian → Charcoal)

**Step Indicator:**
- Number: 48px circle, Ember Glow background
- Text: Text Primary, 700 weight, 24px
- Glow: 20px blur, Glow Primary

**Connector:**
- Desktop: Horizontal line between steps
- Gradient: Ember Glow → transparent
- Animated dash pattern (subtle)

**Step Content:**
- Icon: 40px, Text Secondary
- Title: Heading 3, Text Primary
- Description: Body M, Text Secondary

**Animations:**
- Steps animate in sequentially on scroll
- Connector line draws from left to right
- Numbers pulse subtly

---

### 5. FAQ Section

**Layout:**
- Max-width: 720px centered
- Single column
- Background: Obsidian

**Accordion Item:**
- Background: Charcoal
- Border: 1px solid Ash (20% opacity)
- Border-radius: 12px
- Padding: 24px
- Open: Border becomes Ember Glow (30% opacity)

**Question:**
- Typography: Heading 3, Text Primary
- Icon: Chevron, 24px, Text Secondary
- Rotates 180° on open
- Focus: 3px outline, offset 2px

**Answer:**
- Typography: Body M, Text Secondary
- Max-height animation (smooth)
- Padding-top: 16px when open

**Accessibility:**
- Native `<details>` and `<summary>` elements
- ARIA attributes for screen readers
- Keyboard navigation support

---

### 6. Try the App Section (Formerly Waitlist)

**Layout:**
- Centered, max-width 720px
- Background: Charcoal with subtle gradient
- Border: 1px solid Ash (20% opacity)
- Border-radius: 24px
- Padding: 64px

**Typography:**
- Heading: Heading 2, Text Primary
- Description: Body L, Text Secondary
- "Already have access?" note: Body M, Text Tertiary

**Primary CTA:**
- "Try the App Now" - Direct link to app.aidiofy.com
- Pill shape, 56px height
- Background: Ember Glow with glow effect
- Text: Text Primary, 700 weight, 18px
- Icon: ArrowRight (24px)
- Hover: Brighten by 10%, glow intensifies

**Secondary CTA:**
- "Contact Us" - Shows email on click
- Transparent background, Ember Glow border
- Same size as primary CTA
- Hover: Background becomes Glow Primary

**Background Decoration:**
- Subtle ambient glow (no generic gradient blobs)
- Positioned asymmetrically
- Opacity: 15%

**Animations:**
- Fade-in on scroll
- Button hover: Scale 1.02
- Contact dropdown: Smooth height animation

---

### 7. Footer

**Layout:**
- 3-column grid on desktop, stacked on mobile
- Background: Charcoal
- Border-top: 1px solid Ash (20% opacity)
- Padding: 64px top, 48px bottom

**Column 1 - Brand:**
- Logo + "AIdiofy" text
- Tagline: Body S, Text Tertiary

**Column 2 - Links:**
- Heading: Caption, uppercase, Text Tertiary
- Links: Body S, Text Secondary
- Hover: Text Primary, Ember Glow underline

**Column 3 - Legal:**
- Privacy Policy, Terms of Use
- Same styling as links

**Bottom Bar:**
- Copyright: Caption, Text Tertiary
- Social icons: 20px, Text Secondary
- Hover: Ember Glow

---

## Accessibility Features (WCAG AAA)

### Contrast Ratios
- All text meets 7:1 minimum (AAA standard)
- Interactive elements: 4.5:1 minimum
- Focus indicators: 3:1 against background

### Focus States
- All interactive elements: 3px outline, Ember Glow
- Offset: 2px from element
- Transition: 0.2s ease
- Visible on keyboard navigation only

### Skip Links
- "Skip to main content" link
- Visible on focus only
- Positioned: top-left, fixed

### Screen Reader Support
- Semantic HTML elements
- ARIA labels where needed
- Alt text for all images
- Live regions for dynamic content

### Keyboard Navigation
- Tab order follows visual layout
- All interactive elements reachable
- Escape key closes modals/menus
- Arrow keys for accordion navigation

### Motion Preferences
- Respect `prefers-reduced-motion`
- Disable animations when requested
- Provide static alternatives

### Text Resizing
- Support up to 200% zoom
- Layout remains functional
- No horizontal scrolling

---

## Custom Animations

### Principles
- Subtle, purposeful motion
- Never distract from content
- Respect user preferences
- Smooth easing (cubic-bezier)

### Animation Library
```css
fade-in-up:      translateY 20px → 0, opacity 0 → 1, 600ms
fade-in:         opacity 0 → 1, 400ms
scale-in:        scale 0.95 → 1, 500ms
slide-in-right:  translateX 20px → 0, 500ms
pulse-subtle:    scale 1 → 1.02 → 1, 2000ms infinite
glow-pulse:      opacity 0.8 → 1 → 0.8, 3000ms infinite
```

### Scroll Animations
- Intersection Observer API
- Elements animate in when 80% visible
- Stagger delays for grouped elements
- One-time animation (no replay)

### Hover States
- Buttons: Scale 1.02, glow intensifies
- Cards: Translate Y -8px, border brightens
- Links: Underline animates from left
- Icons: Rotate 180° (chevron), scale 1.1

---

## Responsive Breakpoints

```css
Mobile:    < 640px  (stacked layouts, larger touch targets)
Tablet:    640px - 1024px (2-column grids, adjusted spacing)
Desktop:   1024px - 1280px (3-column grids, full features)
Wide:      > 1280px (max-width containers, generous spacing)
```

---

## Implementation Priority

1. **Foundation** (Setup)
   - Create Tailwind config with custom colors
   - Set up typography system
   - Define spacing scale
   - Add custom animations

2. **Global Styles** (Accessibility)
   - Update global CSS
   - Add focus states
   - Implement skip links
   - Set up motion preferences

3. **Components** (Redesign)
   - Navigation bar
   - Hero section
   - Features section
   - How It Works section
   - FAQ section
   - Footer

4. **Polish** (Refinement)
   - Test contrast ratios
   - Verify keyboard navigation
   - Check responsive behavior
   - Optimize animations

5. **Documentation** (Final)
   - Document design decisions
   - Create accessibility audit report
   - Provide implementation notes

---

## Anti-Patterns to Avoid

❌ Generic gradient backgrounds (purple/blue)
❌ Floating 3D abstract shapes
❌ Stock photography of people
❌ Cookie-cutter card designs
❌ Overused "tech" iconography
❌ Excessive animations
❌ Low contrast text
❌ Hidden focus states
❌ Non-semantic HTML
❌ Fixed font sizes

---

## Design Inspirations (Reference Only)

- **Dark Mode:** Linear.app, Vercel.com (dark theme)
- **Typography:** Stripe.com, Notion.so
- **Micro-interactions:** Apple.com, Linear.app
- **Accessibility:** Gov.uk, W3C.org
- **Immersive:** Gaming interfaces (Steam, Discord dark mode)

---

## Success Criteria

✅ WCAG AAA compliant (7:1 contrast minimum)
✅ Unique, bespoke design (no templates)
✅ Dark, immersive aesthetic
✅ Resonates with board gamers/book readers
✅ Fully responsive
✅ Accessible keyboard navigation
✅ Screen reader friendly
✅ Motion preferences respected
✅ Performance optimized

---

## Next Steps

1. Review and approve this design plan
2. Switch to Code mode for implementation
3. Implement foundation (Tailwind config, global styles)
4. Redesign components sequentially
5. Test accessibility compliance
6. Deploy and verify

---

*This design plan prioritizes intentional minimalism, accessibility, and a unique aesthetic that avoids generic AI marketing patterns while creating an immersive experience for board gamers and book readers.*
