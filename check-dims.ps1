Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\Danniely\Desktop\turepuestoya\public\logo-try.png")
Write-Output "Width=$($img.Width) Height=$($img.Height)"
