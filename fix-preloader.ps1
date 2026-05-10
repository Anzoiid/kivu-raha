$basePath = "C:\Users\anzoi\Documents\Programming\Global IT Net Solutions\Kivu-Raha-Hotel\admin\xhtml"
$files = @("guest-details.html", "concierge-list.html", "room-list.html", "reviews.html")

$applyThemeScript = @'

	<script>
	function applyTheme() {
		var saved = localStorage.getItem('theme-version');
		if (saved) {
			document.documentElement.setAttribute('data-theme-version', saved);
			if (document.body) {
				document.body.setAttribute('data-theme-version', saved);
				document.body.style.backgroundColor = (saved === 'dark') ? '#171717' : '#F8F8F8';
			}
		}
	}
	</script>
'@

foreach ($file in $files) {
    $filePath = Join-Path $basePath $file
    if (Test-Path $filePath) {
        Write-Host "Processing $file..."

        # Read file content
        $content = Get-Content $filePath -Raw

        # 1. Add applyTheme script after format-detection meta tag
        $pattern1 = '(<meta name="format-detection" content="telephone=no">)'
        $replacement1 = '$1' + "`n" + $applyThemeScript
        $content = $content -replace $pattern1, $replacement1

        # 2. Replace <body> with <body onload="applyTheme()" data-sibebarbg="kivu-raha">
        $content = $content -replace '<body>', '<body onload="applyTheme()" data-sibebarbg="kivu-raha">'

        # 3. Add theme-toggle.js before closing body tag
        $content = $content -replace '(<script src="./js/styleSwitcher.js"></script>)', '$1' + "`n`t<script src=""./js/theme-toggle.js""></script>"

        # Write back
        Set-Content -Path $filePath -Value $content -NoNewline
        Write-Host "Fixed $file"
    }
}

Write-Host "All files processed!"