# Product Showcase Section - Architecture Plan

## Overview
Replace the current [`HowItWorks`](src/components/HowItWorks.tsx:1-50) component with a new `ProductShowcase` section that displays the video and 7 screenshots in an immersive, visually striking layout.

## Design Philosophy
**Aesthetic Direction**: Cinematic product showcase with warm ember tones, subtle animations, and mobile-first storytelling.

**Visual Hierarchy**:
1. Video (primary) - Dynamic demonstration with "Sample demo" caption
2. Screenshots carousel (secondary) - Feature walkthrough in narrative flow
3. Section header (tertiary) - Context and engagement

## Component Architecture

### New Component: `ProductShowcase.tsx`
**Location**: `src/components/ProductShowcase.tsx`

**Responsibilities**:
- Section layout and responsive design
- Integration of VideoPlayer and AssetCarousel
- Section header with animations
- Glass-morphism styling and visual effects

**Dependencies**:
- `VideoPlayer` (modified to add caption)
- `AssetCarousel` (existing)
- `useI18n` hook for translations

### Modified Component: `VideoPlayer.tsx`
**Changes Required**:
- Add `caption` prop for "Sample demo · Processing time shortened for presentation"
- Display caption below video with subtle styling
- Ensure caption is visible and readable

### Integration in `App.tsx`
**Changes Required**:
- Replace `<HowItWorks />` with `<ProductShowcase />`
- Update navigation link from `#how-it-works` to `#product-showcase`
- Maintain existing animation sequence

## Layout Design

### Desktop (≥1024px)
```
┌─────────────────────────────────────────────────────────┐
│                    Section Header                         │
│  "See AIdiofy in Action" + description                   │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │                     │  │                         │  │
│  │    Video Player     │  │   Asset Carousel        │  │
│  │   (9:16 aspect)     │  │   (7 screenshots)       │  │
│  │                     │  │                         │  │
│  │   [Caption]         │  │   [Thumbnails]          │  │
│  │                     │  │                         │  │
│  └─────────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Mobile (<1024px)
```
┌──────────────────────────────┐
│      Section Header          │
├──────────────────────────────┤
│  ┌────────────────────────┐  │
│  │                        │  │
│  │    Video Player        │  │
│  │   (9:16 aspect)        │  │
│  │                        │  │
│  │   [Caption]            │  │
│  │                        │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │   Asset Carousel        │  │
│  │   (7 screenshots)       │  │
│  │   [Thumbnails]          │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

## Visual Design Specifications

### Color Palette
- Primary: `#ff6b35` (warm orange)
- Secondary: `#ffb347` (lighter orange)
- Background: Dark theme from existing design
- Accent: Subtle glows and gradients

### Typography
- Heading: `font-display` (Space Grotesk)
- Body: `font-sans` (Inter)
- Caption: Smaller, muted text

### Animations
- Section fade-in: `animate-fade-in-up`
- Video scale-in: `animate-scale-in`
- Staggered delays: 200ms intervals
- Hover effects: Scale, glow, border transitions

### Effects
- Glass-morphism: Backdrop blur, subtle borders
- Glow effects: Ambient background gradients
- Shadow: Soft, layered shadows for depth
- Phone mockup: Rounded corners, subtle bezel

## Accessibility Requirements

### WCAG AAA Compliance
- Keyboard navigation: Arrow keys, Tab, Enter/Space
- Screen reader: ARIA labels, live regions
- Focus indicators: Visible focus rings
- Reduced motion: Respect `prefers-reduced-motion`
- Color contrast: Minimum 7:1 ratio

### Interactive Elements
- Video controls: Play, pause, seek, volume, fullscreen
- Carousel navigation: Previous, next, thumbnails
- Keyboard shortcuts: Space, Arrow keys, M, F

## Responsive Breakpoints

### Mobile (<640px)
- Video: Full width, max-width 320px
- Carousel: Single column, centered
- Thumbnails: 4 visible, scrollable

### Tablet (640px - 1023px)
- Video: Full width, max-width 400px
- Carousel: Single column, centered
- Thumbnails: 5-6 visible

### Desktop (≥1024px)
- Video: Left side, max-width 400px
- Carousel: Right side, max-width 400px
- Thumbnails: All 7 visible

## Implementation Steps

1. **Modify VideoPlayer.tsx**
   - Add `caption` prop
   - Display caption below video
   - Style caption with subtle design

2. **Create ProductShowcase.tsx**
   - Import VideoPlayer and AssetCarousel
   - Implement responsive layout
   - Add section header with animations
   - Apply glass-morphism styling

3. **Update App.tsx**
   - Replace HowItWorks with ProductShowcase
   - Update navigation links
   - Adjust animation sequence

4. **Add i18n translations**
   - Add section heading to all locale files
   - Add section description to all locale files
   - Add video caption to all locale files

5. **Test and refine**
   - Verify responsive behavior
   - Test accessibility features
   - Check 9:16 aspect ratio maintenance
   - Optimize performance

## File Structure

```
src/
├── components/
│   ├── ProductShowcase.tsx (NEW)
│   ├── VideoPlayer.tsx (MODIFIED)
│   ├── AssetCarousel.tsx (EXISTING)
│   └── HowItWorks.tsx (DEPRECATED - can be removed)
├── i18n/
│   └── locales/
│       ├── en.ts (MODIFIED)
│       ├── pl.ts (MODIFIED)
│       ├── es.ts (MODIFIED)
│       ├── de.ts (MODIFIED)
│       ├── fr.ts (MODIFIED)
│       ├── it.ts (MODIFIED)
│       ├── ja.ts (MODIFIED)
│       ├── ko.ts (MODIFIED)
│       ├── pt.ts (MODIFIED)
│       └── zh-CN.ts (MODIFIED)
└── App.tsx (MODIFIED)
```

## Success Criteria

- [x] Video displays with "Sample demo" caption
- [x] All 7 screenshots display in carousel
- [x] 9:16 aspect ratio maintained for all assets
- [x] Responsive layout works on all breakpoints
- [x] Keyboard navigation fully functional
- [x] Screen reader announcements work correctly
- [x] Animations are smooth and performant
- [x] Design matches existing aesthetic
- [x] i18n support for all locales
- [x] No console errors or warnings

## Performance Considerations

- Lazy loading for images
- Video preload="metadata"
- Debounced resize handlers
- Optimized re-renders with React.memo
- CSS animations over JS animations
- Minimal bundle size impact

## Future Enhancements

- Add feature highlights overlay on screenshots
- Implement screenshot zoom on click
- Add video chapter markers
- Include user testimonials
- Add social sharing buttons
- Implement analytics tracking
