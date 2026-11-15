@echo off
title Spectrum - Launcher
color 0E
echo ======================================================================
echo  Starting Spectrum (Apple Design System Edition)
echo ======================================================================
echo 1. Launching AI Backend Server on Port 8000...
start "Spectrum-Backend" cmd /c "cd /d %~dp0backend && python server.py"

timeout /t 3 /nobreak >nul

echo 2. Launching Apple-Styled Frontend on Port 3000...
start "Spectrum-Frontend" cmd /c "cd /d %~dp0frontend && npm run dev"

timeout /t 3 /nobreak >nul

echo 3. Launching Google Chrome at http://localhost:3000...
start chrome http://localhost:3000 || start http://localhost:3000

echo ======================================================================
echo  Spectrum is live!
echo  API Backend:  http://127.0.0.1:8000
echo  Frontend UI:  http://localhost:3000
echo ======================================================================
pause
