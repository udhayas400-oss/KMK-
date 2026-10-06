# KMK Engineering Website

This is the updated existing React, Vite and TypeScript project. All imagery and branding come from the KMK project. Only the existing engineering, BizSAFE, WSH, risk assessment, safety documentation and ISO 9001/14001/45001 service scope is included.

## Run on Windows

Install Node.js 20.19+ or 22.12+ (a current Node LTS release is suitable), then double-click `RUN_KMK_WEBSITE.cmd`. It installs dependencies on first run and starts the development server. Open the local URL displayed in the terminal, normally http://localhost:5173/.

From a terminal in this folder:

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run typecheck
npm run build
npm run preview
```

The archive includes `dist/` from the verified production build. Serve that directory with a web server; do not open its HTML directly using a file URL. The archive excludes `node_modules`, Git history and operating-system metadata.

## Replace placeholders

All content is maintained in `src/content.ts`:

- `company`: approved phone, email, address and company identity.
- `proofPoints`: replace the em dashes with verified figures. Numeric values animate when they enter view. Update `metricsNote` after verification.
- `testimonial.slides`: replace placeholder text and attribution with approved KMK client feedback; update the section note and placeholder badges accordingly.
- `partnersMarquee`: approved names are configured here. To add approved logo images, replace the placeholder rendering in `PartnersSection` in `src/components/site/PremiumSections.tsx` and keep the clone hidden from assistive technology.
- No external social profiles are configured because the source contained no approved profile URLs. Add only approved KMK links.

The consultation form validates required fields. With the current email placeholder it reports that nothing was sent. After you configure a real KMK email, it opens an email draft for the visitor to review and send; it does not send through a backend. A server form endpoint can be integrated later if required.

The three blog cards open informational KMK articles. They do not claim historical publication dates. Independent auditors or certification bodies conduct certification assessment.

See `UPDATE_REPORT.md` and `validation/` for changes and verification results.
