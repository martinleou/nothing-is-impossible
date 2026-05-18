# Nothing Is Impossible

**Maximizing Human Potential with AI**

Premium single-page landing website for Nothing Is Impossible — the elite AI transformation partner for ambitious entrepreneurs and business leaders.

## Design

Dark futuristic premium aesthetic with electric cyan/blue (#00e5ff) + gold (#d4af37) accents on a near-black background. Built with performance, elegance, and conversion in mind.

## Tech Stack

- Next.js 15 (App Router + Turbopack)
- TypeScript (strict)
- Tailwind CSS 4
- Framer Motion (premium animations)
- React Hook Form + Zod (booking form)
- Sonner (beautiful toasts)
- Lucide icons

## Getting Started (Easiest way)

**Double-click** one of these files in Explorer:

- `dev.bat` (Command Prompt)
- `start-dev.ps1` (PowerShell - Recommended)

Or manually:

```powershell
cd "C:\Users\Proje\main"
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── layout.tsx          # Fonts, metadata, Toaster
├── page.tsx            # Main landing page
└── globals.css         # Complete design system + effects

components/
├── layout/             # Navbar + Footer
├── sections/           # All 7 major sections
└── ui/                 # Button, Card, Modal (premium custom components)
```

## Customization

- **Colors & fonts**: `tailwind.config.ts` + `app/globals.css`
- **Content**: All copy lives directly in the section components
- **Form**: Currently logs to console + shows success toast. Replace the `onSubmit` handler in `cta.tsx` with a real API route, Resend, Loops, or Cal.com embed.

## Deployment

Vercel is recommended (zero-config for Next.js).

## License

Proprietary — Nothing Is Impossible LLC

---

Built with precision for those who refuse to accept limits.
