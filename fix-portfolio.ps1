# Himanshu Sharma Portfolio — One-Click Fix Script
# PowerShell script to verify deployment readiness and push to Vercel
# Run: powershell -ExecutionPolicy Bypass -File "fix-portfolio.ps1"

param(
    [switch]$AutoPush = $false,
    [switch]$CleanupOrphaned = $false,
    [switch]$DryRun = $false
)

$projectRoot = $PSScriptRoot
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "🎨 Himanshu Portfolio Fix Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Project: $projectRoot"
Write-Host "Time: $timestamp"
if ($DryRun) { Write-Host "⚠️  DRY RUN MODE (no changes)" -ForegroundColor Yellow }
Write-Host ""

# ==============================================================================
# STEP 1: Check git status
# ==============================================================================
Write-Host "[1/5] Checking git status..." -ForegroundColor Green

Push-Location $projectRoot
try {
    $gitStatus = git status --porcelain
    $uncommittedCount = @($gitStatus | Where-Object { $_ -match "^ M" }).Count

    if ($uncommittedCount -gt 0) {
        Write-Host "⚠️  Found $uncommittedCount uncommitted changes:" -ForegroundColor Yellow
        $gitStatus | ForEach-Object { Write-Host "   $_" }
    } else {
        Write-Host "✓ Working directory clean" -ForegroundColor Green
    }

    $branchName = git rev-parse --abbrev-ref HEAD
    Write-Host "✓ Current branch: $branchName" -ForegroundColor Green
} finally {
    Pop-Location
}

# ==============================================================================
# STEP 2: Run ESLint check for apostrophe errors
# ==============================================================================
Write-Host "[2/5] Running ESLint pre-flight check..." -ForegroundColor Green

Push-Location $projectRoot
try {
    # Check if node_modules exists
    if (-not (Test-Path "node_modules")) {
        Write-Host "⚠️  node_modules not found, running npm install..." -ForegroundColor Yellow
        if (-not $DryRun) {
            npm install
        } else {
            Write-Host "✓ [DRY RUN] Would run npm install" -ForegroundColor Yellow
        }
    }

    # Run ESLint
    $eslintOutput = npm run lint 2>&1
    $eslintErrors = $eslintOutput | Where-Object { $_ -match "error" }

    if ($eslintErrors) {
        Write-Host "❌ ESLint found issues:" -ForegroundColor Red
        $eslintErrors | ForEach-Object { Write-Host "   $_" }
        Write-Host ""
        Write-Host "🔧 To fix apostrophes, search for:" -ForegroundColor Yellow
        Write-Host "   Pattern: ' (apostrophe in JSX text)" -ForegroundColor Yellow
        Write-Host "   Replace: &apos; (HTML entity)" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Files to check:" -ForegroundColor Cyan
        Write-Host "   - components/Hero.tsx" -ForegroundColor Cyan
        Write-Host "   - components/Terminal.tsx" -ForegroundColor Cyan
        Write-Host "   - components/Timeline.tsx" -ForegroundColor Cyan
    } else {
        Write-Host "✓ ESLint passed (no build-blocking errors)" -ForegroundColor Green
    }
} finally {
    Pop-Location
}

# ==============================================================================
# STEP 3: Verify resume.pdf exists
# ==============================================================================
Write-Host "[3/5] Verifying resume.pdf..." -ForegroundColor Green

$resumePath = Join-Path $projectRoot "public\resume.pdf"
if (Test-Path $resumePath) {
    $fileSize = (Get-Item $resumePath).Length / 1KB
    Write-Host "✓ resume.pdf exists (size: $([Math]::Round($fileSize, 1)) KB)" -ForegroundColor Green
} else {
    Write-Host "❌ resume.pdf NOT FOUND" -ForegroundColor Red
    Write-Host "   Expected at: public/resume.pdf" -ForegroundColor Yellow
    Write-Host "   Action: Copy Himanshu_Sharma_Avid_TSE_FINAL.pdf to public/resume.pdf" -ForegroundColor Yellow
}

# ==============================================================================
# STEP 4: Build verification (next build check)
# ==============================================================================
Write-Host "[4/5] Running build verification..." -ForegroundColor Green

Push-Location $projectRoot
try {
    Write-Host "Running: npx next build" -ForegroundColor Cyan
    if (-not $DryRun) {
        $buildOutput = npx next build 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✓ Build passed locally" -ForegroundColor Green
        } else {
            Write-Host "❌ Build failed" -ForegroundColor Red
            Write-Host "Error output:" -ForegroundColor Yellow
            $buildOutput | Tail -20 | ForEach-Object { Write-Host "   $_" }
        }
    } else {
        Write-Host "✓ [DRY RUN] Would run npx next build" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  Could not run build (npx/next not available?)" -ForegroundColor Yellow
    Write-Host "   Continue anyway? (requires npx installed)" -ForegroundColor Yellow
} finally {
    Pop-Location
}

# ==============================================================================
# STEP 5: List changes ready to commit
# ==============================================================================
Write-Host "[5/5] Changes ready to commit:" -ForegroundColor Green

Push-Location $projectRoot
try {
    $changes = git diff --name-only
    if ($changes) {
        Write-Host "Modified files:" -ForegroundColor Cyan
        $changes | ForEach-Object { Write-Host "   ✏️  $_" }
    } else {
        Write-Host "No uncommitted changes (already staged or clean working dir)" -ForegroundColor Yellow
    }
} finally {
    Pop-Location
}

# ==============================================================================
# STEP 6: Optional cleanup
# ==============================================================================
if ($CleanupOrphaned) {
    Write-Host "[CLEANUP] Removing orphaned Vikash-era files..." -ForegroundColor Green

    $filesToDelete = @(
        "components/Experience.tsx",
        "content/case-studies/cicd.md",
        "content/case-studies/terraform-state.md",
        "content/case-studies/devsecops.md",
        "content/case-studies/observability.md"
    )

    foreach ($file in $filesToDelete) {
        $fullPath = Join-Path $projectRoot $file
        if (Test-Path $fullPath) {
            if (-not $DryRun) {
                Remove-Item -Path $fullPath
                Write-Host "✓ Deleted: $file" -ForegroundColor Green
            } else {
                Write-Host "✓ [DRY RUN] Would delete: $file" -ForegroundColor Yellow
            }
        }
    }
}

# ==============================================================================
# SUMMARY & NEXT STEPS
# ==============================================================================
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "✅ Fix Script Complete" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 DEPLOYMENT CHECKLIST:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Before pushing to GitHub:" -ForegroundColor Cyan
Write-Host "  [ ] ESLint passed (no apostrophe errors)" -ForegroundColor Cyan
Write-Host "  [ ] npx next build passed locally" -ForegroundColor Cyan
Write-Host "  [ ] resume.pdf verified in public/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Then commit and push:" -ForegroundColor Cyan
Write-Host "  git add -A" -ForegroundColor Cyan
Write-Host "  git commit -m 'Transform portfolio to Himanshu Sharma — full CV, correct experience, engineering domains'" -ForegroundColor Cyan
Write-Host "  git push origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "After push:" -ForegroundColor Cyan
Write-Host "  → Vercel auto-deploys (~2-3 minutes)" -ForegroundColor Cyan
Write-Host "  → Watch: https://vercel.com/hsharmagxi-debug/himanshu_sharma-portfolio" -ForegroundColor Cyan
Write-Host "  → Site live at your Vercel domain" -ForegroundColor Cyan
Write-Host ""

if ($AutoPush) {
    Write-Host "🚀 AUTO-PUSH MODE:" -ForegroundColor Green
    Push-Location $projectRoot
    try {
        if (-not $DryRun) {
            Write-Host "Staging all changes..." -ForegroundColor Cyan
            git add -A

            Write-Host "Committing..." -ForegroundColor Cyan
            git commit -m "Transform portfolio to Himanshu Sharma — full CV, correct experience, engineering domains"

            Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
            git push origin main

            Write-Host "✓ Push complete! Vercel is now deploying..." -ForegroundColor Green
        } else {
            Write-Host "✓ [DRY RUN] Would push changes to GitHub" -ForegroundColor Yellow
        }
    } finally {
        Pop-Location
    }
} else {
    Write-Host "💡 To auto-push, run with -AutoPush flag:" -ForegroundColor Cyan
    Write-Host "   powershell -ExecutionPolicy Bypass -File 'fix-portfolio.ps1' -AutoPush" -ForegroundColor Cyan
}

if ($DryRun) {
    Write-Host ""
    Write-Host "⚠️  DRY RUN COMPLETE — No changes were made" -ForegroundColor Yellow
    Write-Host "Run again without -DryRun to apply changes" -ForegroundColor Yellow
}

Write-Host ""
