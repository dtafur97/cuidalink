$ErrorActionPreference = 'Stop'
$env:ASTRO_TELEMETRY_DISABLED = '1'
Set-Location -LiteralPath $PSScriptRoot

$runtimeRoot = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies'
$nodeDirectory = Join-Path $runtimeRoot 'node/bin'
$portablePnpm = Join-Path $runtimeRoot 'bin/fallback/pnpm.cmd'
if (Test-Path -LiteralPath $nodeDirectory) {
    $env:PATH = $nodeDirectory + ';' + $env:PATH
}
$pnpmCommand = Get-Command pnpm -ErrorAction SilentlyContinue
if ($pnpmCommand) {
    $taskPackageManager = $pnpmCommand.Source
} elseif (Test-Path -LiteralPath $portablePnpm) {
    $taskPackageManager = $portablePnpm
} else {
    throw 'Instala Node.js y pnpm para iniciar la landing. Consulta README.md.'
}
if (-not (Test-Path -LiteralPath (Join-Path $PSScriptRoot 'node_modules/astro'))) {
    & $taskPackageManager install
    if ($LASTEXITCODE -ne 0) { throw 'No se pudieron instalar las dependencias.' }
}
Write-Host 'CuidaLink - Vista local. Abre la direccion que aparece debajo.' -ForegroundColor Green
& node (Join-Path $PSScriptRoot 'node_modules/astro/bin/astro.mjs') dev --host 127.0.0.1
if ($LASTEXITCODE -ne 0) {
    throw 'CuidaLink no pudo iniciar. Revisa el mensaje anterior antes de volver a abrir iniciar.cmd.'
}
