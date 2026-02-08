# Batch replace hardcoded colors with global tokens
$componentsPath = "c:\Users\kwasi\OneDrive\Desktop\business\school-template - Version-1\components"
$appPath = "c:\Users\kwasi\OneDrive\Desktop\business\school-template - Version-1\app"
$contentPath = "c:\Users\kwasi\OneDrive\Desktop\business\school-template - Version-1\content"

$replacements = @(
    @{ Find = 'bg-\[#800020\]'; Replace = 'bg-primary' },
    @{ Find = 'text-\[#800020\]'; Replace = 'text-primary' },
    @{ Find = 'border-\[#800020\]'; Replace = 'border-primary' },
    @{ Find = 'hover:bg-\[#800020\]'; Replace = 'hover:bg-primary' },
    @{ Find = 'hover:text-\[#800020\]'; Replace = 'hover:text-primary' },
    @{ Find = 'hover:border-\[#800020\]'; Replace = 'hover:border-primary' },
    @{ Find = 'bg-gray-50'; Replace = 'bg-secondary' },
    @{ Find = 'bg-gray-100'; Replace = 'bg-secondary' },
    @{ Find = 'hover:bg-gray-100'; Replace = 'hover:bg-secondary' },
    @{ Find = 'text-\[#737477\]'; Replace = 'text-text-secondary' },
    @{ Find = 'text-black'; Replace = 'text-text-primary' }
)

$files = Get-ChildItem -Path $componentsPath, $appPath, $contentPath -Recurse -Include *.tsx, *.ts -ErrorAction SilentlyContinue

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    foreach ($replacement in $replacements) {
        if ($content -match $replacement.Find) {
            $content = $content -replace $replacement.Find, $replacement.Replace
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "Done!"
