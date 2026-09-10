$dirs = @(
  'C:\Users\Danniely\Desktop\turepuestoya\public\products',
  'C:\Users\Danniely\Desktop\turepuestoya\public\heroes'
)
foreach ($dir in $dirs) {
  Get-ChildItem -Path $dir -File | ForEach-Object {
    $newName = $_.Name -replace ' ', '-'
    if ($_.Name -ne $newName) {
      Rename-Item -LiteralPath $_.FullName -NewName $newName -Force
      Write-Output "Renamed: $($_.Name) -> $newName"
    }
  }
}
