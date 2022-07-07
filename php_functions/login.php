<?php
	require('db-functions.php');
	header("Access-Control-Allow-Origin: *");
	session_start();
	$conn = connect_to_db();
	$username=$_POST["username"];
	$username=htmlspecialchars($username);
	$username=mysqli_real_escape_string($conn, $username);
	$password=$_POST["password"];
	$password=htmlspecialchars($password);
	$password=mysqli_real_escape_string($conn, $password);
	if ($_POST["username"]!=$username || $_POST["password"]!=$password) {
		echo "failure";
	} else {
		$username="'".$username."'";
		$password=$password;
		$sqlCommand="SELECT * FROM Users WHERE username=$username";
		$result = mysqli_query($conn, $sqlCommand);
		if (mysqli_num_rows($result)==1) {
			$row=$result->fetch_assoc();
			if (password_verify($password, $row['password'])) {
				echo "success";
				$_SESSION["loggedin"] = TRUE;
				$_SESSION['user_id'] = $row['id'];
				$_SESSION['username'] = $row['username'];
			}
		}
	}
?>