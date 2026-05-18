Write-Host "🚀 Starting Nothing Is Impossible..." -ForegroundColor Cyan
Set-Location $PSScriptRoot

Write-Host "`nInstalling dependencies (this may take a minute)..." -ForegroundColor Yellow
npm install

Write-Host "`nStarting development server..." -ForegroundColor Green
npm run dev
