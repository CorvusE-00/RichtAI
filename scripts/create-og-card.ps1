param(
  [string]$OutputPath = (Join-Path $PSScriptRoot '..\public\images\og-richtai.png')
)

Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function New-Brush([int]$alpha, [int]$red, [int]$green, [int]$blue) {
  return [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb($alpha, $red, $green, $blue))
}

function Draw-RoundedRectangle($target, $brush, $pen, [float]$x, [float]$y, [float]$w, [float]$h, [float]$radius) {
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $diameter = $radius * 2
  $path.AddArc($x, $y, $diameter, $diameter, 180, 90)
  $path.AddArc($x + $w - $diameter, $y, $diameter, $diameter, 270, 90)
  $path.AddArc($x + $w - $diameter, $y + $h - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($x, $y + $h - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  if ($brush) { $target.FillPath($brush, $path) }
  if ($pen) { $target.DrawPath($pen, $path) }
  $path.Dispose()
}

try {
  $background = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Point]::new(0, 0),
    [System.Drawing.Point]::new($width, $height),
    [System.Drawing.Color]::FromArgb(5, 13, 26),
    [System.Drawing.Color]::FromArgb(8, 32, 52)
  )
  $graphics.FillRectangle($background, 0, 0, $width, $height)

  $glowLeft = New-Brush 22 20 184 166
  $glowRight = New-Brush 16 34 211 238
  $graphics.FillEllipse($glowLeft, -170, 70, 560, 390)
  $graphics.FillEllipse($glowRight, 760, -190, 620, 520)

  $gridPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(13, 81, 117, 128), 1)
  for ($x = 0; $x -le $width; $x += 48) { $graphics.DrawLine($gridPen, $x, 0, $x, $height) }
  for ($y = 0; $y -le $height; $y += 48) { $graphics.DrawLine($gridPen, 0, $y, $width, $y) }

  $logo = [System.Drawing.Bitmap]::FromFile((Join-Path $PSScriptRoot '..\public\images\mermaid-mark.png'))
  $logoFrame = New-Brush 235 10 38 61
  $logoBorder = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(90, 45, 212, 191), 1)
  Draw-RoundedRectangle $graphics $logoFrame $logoBorder 72 58 76 76 16
  $graphics.DrawImage($logo, [System.Drawing.Rectangle]::new(80, 66, 60, 60))

  $white = New-Brush 245 242 247 250
  $muted = New-Brush 190 163 180 198
  $teal = New-Brush 255 45 212 191
  $softTeal = New-Brush 220 122 230 220
  $fontBrand = [System.Drawing.Font]::new('Segoe UI', 24, [System.Drawing.FontStyle]::Bold)
  $fontSmall = [System.Drawing.Font]::new('Segoe UI', 15, [System.Drawing.FontStyle]::Regular)
  $fontBadge = [System.Drawing.Font]::new('Segoe UI', 16, [System.Drawing.FontStyle]::Regular)
  $fontHeadline = [System.Drawing.Font]::new('Segoe UI', 43, [System.Drawing.FontStyle]::Bold)
  $fontAccent = [System.Drawing.Font]::new('Segoe UI', 45, [System.Drawing.FontStyle]::Bold)
  $fontCard = [System.Drawing.Font]::new('Segoe UI', 15, [System.Drawing.FontStyle]::Bold)
  $fontCardSmall = [System.Drawing.Font]::new('Segoe UI', 12, [System.Drawing.FontStyle]::Regular)

  $graphics.DrawString('Richt', $fontBrand, $white, 170, 78)
  $richtWidth = $graphics.MeasureString('Richt', $fontBrand).Width
  $graphics.DrawString(' Ai', $fontBrand, $teal, 170 + $richtWidth - 2, 78)

  $badgeBrush = New-Brush 130 15 39 63
  $badgePen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(75, 55, 92, 126), 1)
  Draw-RoundedRectangle $graphics $badgeBrush $badgePen 72 178 610 44 22
  $graphics.FillEllipse($teal, 94, 193, 12, 12)
  $graphics.DrawString('İşletmeler için modern web ve yapay zekâ çözümleri', $fontBadge, $muted, 118, 188)

  $graphics.DrawString('İşletmenizin dijital iletişimini', $fontHeadline, $white, 72, 246)
  $graphics.DrawString('daha akıllı hâle getirin.', $fontAccent, $teal, 72, 300)
  $graphics.DrawString('Modern web ve yapay zekâ çözümleri', $fontSmall, $muted, 76, 370)

  $workflowFrame = New-Brush 125 10 28 48
  $workflowBorder = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(80, 46, 77, 111), 1)
  Draw-RoundedRectangle $graphics $workflowFrame $workflowBorder 72 420 1056 132 20
  $cardBrush = New-Brush 210 15 38 63
  $cardBorder = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(75, 54, 85, 120), 1)
  $cardXs = @(98, 456, 814)
  $labels = @('Ziyaretçi', 'Akıllı yanıt', 'Randevu')
  $details = @('İlk mesaj', 'Anında yönlendirme', 'Net sonraki adım')
  for ($i = 0; $i -lt 3; $i++) {
    Draw-RoundedRectangle $graphics $cardBrush $cardBorder $cardXs[$i] 450 300 72 14
    $graphics.FillEllipse($softTeal, $cardXs[$i] + 18, 468, 12, 12)
    $graphics.DrawString($labels[$i], $fontCard, $white, $cardXs[$i] + 42, 460)
    $graphics.DrawString($details[$i], $fontCardSmall, $muted, $cardXs[$i] + 42, 488)
    if ($i -lt 2) {
      $arrowPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(190, 45, 212, 191), 2)
      $graphics.DrawLine($arrowPen, $cardXs[$i] + 312, 486, $cardXs[$i] + 340, 486)
      $graphics.DrawLine($arrowPen, $cardXs[$i] + 334, 480, $cardXs[$i] + 340, 486)
      $graphics.DrawLine($arrowPen, $cardXs[$i] + 334, 492, $cardXs[$i] + 340, 486)
      $arrowPen.Dispose()
    }
  }

  $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
} finally {
  if ($logo) { $logo.Dispose() }
  if ($graphics) { $graphics.Dispose() }
  if ($bitmap) { $bitmap.Dispose() }
}

Write-Output $OutputPath
