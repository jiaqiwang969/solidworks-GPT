SET inputFilePath=%1
SET outFilePath=%2

SET outFilePath=%1
SET width=%2
SET length=%3
SET height=%4

PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0model-generator.ps1" %outFilePath% %width% %length% %height%