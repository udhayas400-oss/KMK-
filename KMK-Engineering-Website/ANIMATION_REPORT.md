# KMK animation update

Updated the existing KMK Engineering React/Vite/TypeScript website. KMK content, logo, images and confirmed services are retained. Contact details, statistics, testimonials and partner logos remain clearly marked placeholders in `src/content.ts`.

## Reference review and comparison

Reference: https://bestbizsafesingapore.com/ (observed 6 October 2026).

Reviewed rendered page states, slow scroll entrances, hero changes, hover states and the mobile drawer. Compared reference and local pages in parallel browser tabs, section by section. Recorded visible computed styles and sampled motion; no proprietary reference source code was copied. Review covered header/navigation, hero, about, services, statistics, supporting images/cards, Why Choose Us, certification, blog, testimonials, partners, FAQ, contact and footer.

The reference's current testimonial section is a static grid, not an autoplay slider. KMK therefore shows its three approved testimonial placeholders in a responsive grid (three/two/one columns). The reference partner row did not move during observation; the continuous logo loop explicitly requested in the brief is retained as an addition. Exact counter duration could not be established from the live rendered state; KMK's two-second count-up is a tuned approximation. The reference uses native FAQ details without a measurable expansion transition; KMK retains the requested smooth 300 ms expansion. These differences are deliberate and are not claimed as exact matches.

## Files and utilities

Changed `src/components/site/HeroSlider.tsx`, `Header.tsx`, `SiteEffects.tsx`, `AnimatedValue.tsx`, `RevealHeading.tsx`, `PremiumSections.tsx`, `FaqSection.tsx`, `ContactSection.tsx`, `src/index.css` and `src/main.tsx`.

Added `src/lib/animation.ts` for shared motion timing/easing, `src/hooks/useCarousel.ts` for autoplay/pause/visibility/keyboard/touch behavior, `src/components/site/ButtonLabel.tsx` for the rolling label hover, and `src/motion.css` for individually tuned reveals, dropdowns, drawer and seamless logo loop.

## Motion behavior

| Interaction | Implemented behavior |
| --- | --- |
| Initial header | Immediately visible; no load fade. |
| Sticky navigation | Appears after 205 px of scroll; enters from above over 1 second with ease. Header space is reserved. |
| Hero | Six-second autoplay interval; one-second image crossfade without zoom. Previous/next and indicators loop through all slides. |
| Hero heading | Starts 50 px below, opacity zero; starts after 700 ms and enters over 1 second. |
| Hero label | Starts 50 px above, opacity zero; starts after 1 second and enters over 1 second. |
| Hero description | Starts 50 px below; 1-second delay and 1-second entrance. |
| Hero CTA | Starts 50 px below; 1.3-second delay and 1-second entrance. |
| Hero safety | Stable height sized to the longest slide; outgoing content becomes inert. Hover, focus, explicit pause and hidden browser tabs stop autoplay. Horizontal touch gestures and arrow keys navigate. Vertical gestures remain available for scrolling. |
| About image | Once-only mask reveal from the left, 1.3 seconds, 400 ms delay, cubic-bezier(.645,.045,.355,1). |
| Why cards | Once-only left / up / up / right entrances: 50 px horizontally or 80 px vertically, 1 second, ease, no arbitrary stagger. |
| Other scroll content | Headings, service rows and other body content stay static where no reference entrance was observed. |
| Scroll trigger | IntersectionObserver, 1% visible threshold, once per mount. Focus can reveal content immediately. |
| Counters | Numeric values begin on viewport entry, count for 2 seconds with ease-out and finish once. Prefixes, commas, decimals, percentages and plus signs are preserved. Placeholder text remains unchanged. |
| Testimonial section | Static responsive placeholder grid, matching the observable reference layout. No invented quotes or autoplay timing. |
| Partner loop | Moves left at 40 px/second. Runtime width measurement creates enough duplicate groups to fill the window and repeats by exactly one group width. Stops on hover/focus, off-screen and when the tab is hidden. Duplicate content is hidden from assistive technology. |
| Buttons and cards | Button labels roll vertically over 300 ms. Arrows move 4 px over 400 ms. Blog images zoom to 1.1 over 400 ms; cards do not lift or acquire an extra shadow. |
| Desktop dropdown | Top-origin scale/opacity entrance over 400 ms; controlled hover, click and Escape handling. |
| Mobile navigation | Navy drawer enters from the left over 400 ms, cubic-bezier(.785,.135,.15,.86). 310 px at tablet widths and 270 px on phones. Dark overlay, animated hamburger, 300 ms submenu expansion, scroll lock, focus trap, inert background, Escape/overlay close and focus restoration. |
| FAQ | Controlled height/opacity expansion and collapse over 300 ms; plus icon rotates. Hidden answers are inert. |
| Anchors | Native smooth scroll with a single sticky-header offset; focus restoration does not override the destination. |
| Reduced motion | Hero autoplay stops; text is immediately visible; scroll reveals and logo loop stop; partner placeholders wrap; menus/FAQ respond immediately and anchors use automatic scrolling. |

## Validation

`npm install`, `npm run typecheck`, `npm run build` and `npm run dev` were run successfully using Windows `.cmd` entrypoints. Local preview: http://127.0.0.1:5174/.

Browser regression checks cover 1920, 1440, 1366, 1024, 768, 430, 390, 375 and 320 px. Checks sample active hero transitions, drawer motion, section reveals, FAQ open/close, document overflow, stable hero height, loaded assets and browser errors. Additional checks cover reduced motion, hero autoplay/swipe/pause, logo movement and pause, mobile focus containment and smooth anchor destinations. Counter tests use temporary synthetic fixtures, not published KMK statistics.

Results and local screenshots are in `validation/animation-checks.json`, `interaction-checks.json`, `navigation-checks.json`, `live-motion-comparison.json`, `animation-*.png` and `drawer-*.png`. The earlier `UPDATE_REPORT.md` describes the previous layout work; this report supersedes its animation details.

## Editing later

Replace approved content in `src/content.ts`. Tune hero/counter/FAQ timings in `src/lib/animation.ts`; CSS reveal, hover and drawer timings live in `src/motion.css`. Partner velocity is the width/40 calculation in `PartnersSection`. The delivered ZIP excludes `node_modules` and Git metadata, and includes source, the final production build and validation records. Use the existing `RUN_KMK_WEBSITE.cmd` to launch the project on Windows.
