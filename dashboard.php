<?php
session_start();

if (!isset($_SESSION['authenticated']) || !$_SESSION['authenticated']) {
  header('Location: index.php');
}

#echo '<p>Selamat datang di dashboard!</p>';

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: rgb(22, 22, 52);
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    div {
		color: #00FFCA;
		width: 20em;
		height: 20em;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.1);
		box-shadow: 0 0px 45px rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(112, 112, 112, 0.5);
		backdrop-filter: blur(10px);
		position: relative;
		display:flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: column;
    }
  </style>
</head>
<body>
  <div>
    <h1>Dashboard</h1>
    <p>Selamat datang di dashboard!</p>
  </div>
</body>
</html>

