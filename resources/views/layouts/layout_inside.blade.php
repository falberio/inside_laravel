<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/css/styles.css">
	<title>Document</title>
</head>
<body>

	@include("partials/header_inside")
	
	@yield("content")

	@include("partials/footer_scripts")
</body>
</html>
