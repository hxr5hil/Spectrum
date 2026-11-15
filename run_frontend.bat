@echo off
title Spectrum - Executive Command Center Frontend (Port 3000)
color 0A
echo ======================================================================
echo  Spectrum - Next.js Executive Command Center Frontend
echo  Port: http://localhost:3000
echo ======================================================================
cd /d %~dp0frontend
npm run dev
pause
