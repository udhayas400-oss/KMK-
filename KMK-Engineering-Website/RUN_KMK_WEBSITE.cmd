@echo off
setlocal
cd /d "%~dp0"
title KMK Engineering Website
color 0A

echo ============================================
echo   KMK ENGINEERING WEBSITE - LOCAL STARTER
echo ============================================
echo.
echo Project folder:
echo %CD%
echo.

echo Checking Node.js...
node -v
if errorlevel 1 goto :nonode

echo.
echo Checking npm...
npm -v
if errorlevel 1 goto :nonpm

echo.
if not exist node_modules (
  echo First-time setup: installing packages...
  echo This may take a few minutes.
  echo.
  call npm install
  if errorlevel 1 goto :installfail
) else (
  echo Dependencies already installed.
)

echo.
echo Starting KMK website...
echo When Vite shows Local: http://localhost:5173/
echo open the exact Local address printed by Vite below.
echo.
call npm run dev -- --port 5173 --strictPort
if errorlevel 1 (
  echo ERROR: The server could not start. Read the message above.
  echo If the port is occupied, close the previous KMK server window and retry.
  pause
  exit /b 1
)

echo.
echo The development server stopped.
pause
exit /b 0

:nonode
echo.
echo ERROR: Node.js is not installed or Windows cannot find it.
echo Install Node.js LTS, then run this file again.
pause
exit /b 1

:nonpm
echo.
echo ERROR: npm is not available.
echo Reinstall Node.js LTS with npm enabled.
pause
exit /b 1

:installfail
echo.
echo ERROR: npm install failed.
echo Read the error shown above. This window will stay open.
pause
exit /b 1
