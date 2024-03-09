<?php
session_start();

if (isset($_GET['session_id'])) {
  session_id($_GET['session_id']);
}

if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Simulasi proses autentikasi
  if ($username === 'admin' && $password === 'admin') {
    $_SESSION['authenticated'] = true;
    header('Location: dashboard.php');
  } else {
    echo '<p>Login gagal!</p>';
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section>
        <div class="card">
            <form method="post" action="">
                <h1>Login</h1>
                <input type="text" name="username" placeholder="username" id="username">

                <input type="password" name="password" placeholder="password" id="password">

                <button value="Login" type="submit">Login</button>
            </form>
        </div>
    </section>
</body>
</html>



