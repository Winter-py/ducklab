@echo off
echo Starting Go backend...
start /B go run backend\main.go
set BACKEND_PID=%ERRORLEVEL%

echo Starting Electron frontend...
cd frontend
start /B npm start
set FRONTEND_PID=%ERRORLEVEL%
cd ..

REM Keep the script open
pause
