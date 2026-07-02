# Himanshu Sharma Portfolio — Gaps & Coverage Report
**Date:** 2026-07-02  
**Project Type:** Next.js 15 / React 19 / Tailwind CSS  
**Local Path:** `C:\Users\Admin\OneDrive\10-projects\Hsharmagxi-debug (Personal)\Vikash-Portfolio\`  
**GitHub Repo:** `hsharmagxi-debug/Himanshu_Sharma-Portfolio`  
**Deployment:** Vercel (auto-deploys on push to main)

---

## 🔴 CRITICAL GAPS

### GAP #1: Uncommitted Changes — Portfolio Not Live
**Status:** BLOCKING DEPLOYMENT  
**Issue:** All transformation changes are local only; nothing pushed to GitHub/Vercel yet.  
**Current State:**
```
Working Directory: DIRTY (multiple modified files)
Staged Changes: NONE
Last Push: unknown (pre-transformation)
Vercel Deployment: STALE (old Vikash portfolio still live)
```

**Files Modified (not committed):**
- ✏️ `app/page.tsx` — Experience component removed, Timeline/Terminal added
- ✏️ `components/Hero.tsx` — SkillSnapshot + Capability Report button added
- ✏️ `components/Timeline.tsx` — Updated with Himanshu's CV data
- ✏️ `components/Terminal.tsx` — Himanshu theme, updated projects
- ✏️ `components/Projects.tsx` — PolyMind removed, KPI Hub + AetherAI + Numerology
- ✏️ `components/Skills.tsx` — 8 categories (Broadcasting, Avid, AI, Cloud, etc.)
- ✏️ `components/FloatingChat.tsx` — "ArchForge" → "Ask Himanshu"
- ✏️ `components/SkillSnapshot.tsx` — Capability Report PDF download
- ✏️ `components/Contact.tsx` — Email: hsharma.gxi@gmail.com
- ✏️ `lib/profile.ts` — Source of truth for all profile data
- ✏️ `app/engineering/page.tsx` — 4 domains (Broadcasting, AI, SaaS, VSAT)
- ✏️ `content/case-studies/*.md` — 4 new case study files

**Impact:**
- Portfolio site stuck on old Vikash content
- Himanshu's CV and expertise not visible
- All work completed but not deployed

**Resolution:** Commit and push to GitHub.

---

### GAP #2: ESLint Build Will Fail on Apostrophes
**Status:** HIGH RISK  
**Issue:** Vercel enforces `react/no-unescaped-entities` rule. Any apostrophe in JSX text = build failure.  
**Files at Risk:**
```
components/Hero.tsx — Check for apostrophes in JSX
components/Terminal.tsx — Check for apostrophes in JSX
components/Timeline.tsx — Check for apostrophes in JSX
```

**Example Problem:**
```jsx
// ❌ FAILS on Vercel
<p>Vikash's Portfolio</p>

// ✅ CORRECT for Vercel
<p>Vikash&apos;s Portfolio</p>

// ✓ OK in JS (template literals, strings)
const text = "Vikash's work"; // This is fine
```

**Impact:** Push to GitHub → Vercel attempts build → build fails on linter → no deployment.  
**Resolution:** Pre-flight ESLint check before committing.

---

### GAP #3: Resume PDF May Be Outdated
**Status:** MEDIUM RISK  
**Issue:** `/public/resume.pdf` link in Hero section — must be Himanshu's actual CV, not Vikash's.  
**Current State:**
```
File: public/resume.pdf
Referenced by: components/Hero.tsx → ResumeDownload button
Expected: Himanshu_Sharma_Avid_TSE_FINAL.pdf (from CV)
```

**Impact:** User clicks "Download Resume" → gets wrong PDF.  
**Resolution:** Verify and replace if needed.

---

## 🟡 MEDIUM PRIORITY

### GAP #4: Old Vikash Components Still Exist (Orphaned)
**Status:** CLEANUP  
**Issue:** `components/Experience.tsx` — old wrong data, no longer rendered, harmless but confusing.  
**Impact:** Codebase clutter; misleading for future developers.  
**Resolution:** Delete `components/Experience.tsx` (already removed from page.tsx render).

---

### GAP #5: Old Case Studies Not Deleted
**Status:** CLEANUP  
**Issue:** Legacy Vikash-era case studies still in `content/case-studies/`:
- `cicd.md` (CI/CD best practices — Vikash era)
- `terraform-state.md` (Terraform — Vikash era)
- `devsecops.md` (DevSecOps — Vikash era)
- `observability.md` (Observability — Vikash era)

**Impact:** Not linked from main page, so invisible; just clutter.  
**Resolution:** Delete or archive old case studies.

---

### GAP #6: No Navbar Profile Photo
**Status:** NICE-TO-HAVE  
**Issue:** Hero section currently renders no avatar/profile photo.  
**Impact:** Site looks less professional without face.  
**Resolution:** Add Himanshu's profile photo to `/public/profile.jpg` and render in Navbar/Hero.

---

## ✅ WHAT'S WORKING

- ✓ Page structure complete (Hero → Terminal → Skills → Timeline → Projects → Contact)
- ✓ All CV data migrated to `lib/profile.ts`
- ✓ Timeline with 5 primary roles + certs + education
- ✓ Terminal component with correct branding
- ✓ SkillSnapshot PDF export
- ✓ Engineering case studies (4 new, specific to Himanshu)
- ✓ TypeScript strict mode passing
- ✓ Responsive Tailwind CSS layout

---

## 📋 ONE-CLICK FIX CHECKLIST

Run `fix-portfolio.ps1` (PowerShell):

```powershell
# This will:
# 1. Run ESLint and identify apostrophe issues
# 2. List files ready to commit
# 3. Verify resume.pdf exists
# 4. Show commit message template
# 5. Optionally delete orphaned files
```

**Command:**
```powershell
powershell -ExecutionPolicy Bypass -File "C:\Users\Admin\OneDrive\10-projects\Hsharmagxi-debug (Personal)\Vikash-Portfolio\fix-portfolio.ps1"
```

---

## 🔧 MANUAL DEPLOYMENT (step-by-step)

### Step 1: Pre-flight ESLint Check
```bash
cd "C:\Users\Admin\OneDrive\10-projects\Hsharmagxi-debug (Personal)\Vikash-Portfolio"
npm run lint
# Fix any apostrophe errors
```

### Step 2: Verify Resume PDF
```bash
# Check if public/resume.pdf exists and is the right one
ls -la public/resume.pdf

# If missing or wrong, copy Himanshu's CV:
# cp "path/to/Himanshu_Sharma_Avid_TSE_FINAL.pdf" public/resume.pdf
```

### Step 3: Build Verification
```bash
# Windows-safe build check (DON'T use npm run build on Windows)
npx next build
```

### Step 4: Commit Changes
```bash
git status
git add -A
git commit -m "Transform portfolio to Himanshu Sharma — full CV, correct experience, engineering domains"
```

### Step 5: Push to GitHub
```bash
git push origin main
# Vercel auto-deploys on push
```

### Step 6: Verify Deployment
```
Watch Vercel dashboard at: https://vercel.com/hsharmagxi-debug/himanshu_sharma-portfolio
Deployment should complete in ~2-3 minutes
Live site: [your-vercel-domain]
```

---

## 🧹 OPTIONAL CLEANUP

**Delete orphaned files** (safe, not rendered):
```bash
# Remove old Vikash experience component
rm components/Experience.tsx

# Remove old case studies
rm content/case-studies/cicd.md
rm content/case-studies/terraform-state.md
rm content/case-studies/devsecops.md
rm content/case-studies/observability.md
```

Then commit:
```bash
git add -A
git commit -m "cleanup: remove orphaned Vikash-era components and case studies"
git push origin main
```

---

## 📞 BLOCKERS & NEXT STEPS

### 🚨 MUST-DO (Before Push)
1. [ ] Run `npm run lint` — fix apostrophe errors
2. [ ] Run `npx next build` — verify build passes locally
3. [ ] Verify `public/resume.pdf` is Himanshu's CV
4. [ ] Commit all changes
5. [ ] Push to GitHub

### ✅ AFTER PUSH
6. [ ] Monitor Vercel deployment (https://vercel.com)
7. [ ] Test site live at your Vercel domain
8. [ ] Verify all links work (Engineering, Projects, Contact)
9. [ ] Check mobile responsiveness

### 🧹 OPTIONAL POLISH
- [ ] Add Himanshu's profile photo
- [ ] Delete orphaned Vikash files
- [ ] Update open graph meta tags (og:image, og:description)

---

## 🚫 KNOWN WINDOWS ISSUE

**DO NOT USE:** `npm run build` on Windows  
**WHY:** Uses `NODE_OPTIONS=--max-old-space-size=4096` syntax, which fails in PowerShell/cmd  
**INSTEAD USE:** `npx next build`

---

**Generated:** 2026-07-02  
**All Changes:** Local only (not yet committed)  
**Last Reviewed:** Session with model Haiku 4.5
