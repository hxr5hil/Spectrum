@echo off
title Spectrum - AI News Analysis Backend (Port 8000)
color 0B
echo ======================================================================
echo  Spectrum - AI News Monitoring & Departmental Sentiment Backend
echo  Port: http://127.0.0.1:8000
echo ======================================================================
cd /d %~dp0backend
python server.py
pause
