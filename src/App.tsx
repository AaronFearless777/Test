/**
 * ═══════════════════════════════════════════════════════════════
 *              🚀 LOVABLE.DEV EXPORT READY!
 * ═══════════════════════════════════════════════════════════════
 * 
 * Your landing page is ready to export! See these files:
 * 
 * 📚 DOCUMENTATION (Read First):
 * - LOVABLE-EXPORT-GUIDE.tsx - Complete step-by-step guide
 * - QUICK-EXPORT-CHECKLIST.tsx - Quick reference checklist  
 * - EXPORT-SUMMARY.md - Overview and file mapping
 * - LovableExportReadme.tsx - Getting started
 * 
 * 📦 FILES TO COPY:
 * - App-Lovable.tsx → Use this for your Lovable App.tsx
 * - main-Lovable.tsx → Use this for your Lovable main.tsx
 * - index.css → Copy as-is
 * - All component files in src/components/generated/
 * 
 * ⚡ QUICK START:
 * 1. Read LOVABLE-EXPORT-GUIDE.tsx
 * 2. Install: framer-motion lucide-react tailwindcss-animate
 * 3. Copy 12 files to Lovable
 * 4. Rename Footer_dupe_2.tsx to Footer.tsx
 * 5. Run and enjoy!
 * 
 * ═══════════════════════════════════════════════════════════════
 */

import { useMemo } from 'react';
import { Container, Theme } from './settings/types';
import { CombinedLandingPage } from './components/generated/CombinedLandingPage';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    return <CombinedLandingPage />; // %EXPORT_STATEMENT%
  }, []);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;