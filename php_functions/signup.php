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
	$sqlCommand="SELECT * FROM Users WHERE username="."'"."$username"."'"."";
	$result = mysqli_query($conn, $sqlCommand);
	if (mysqli_num_rows($result)==0) {
		if ($_POST["password"]==$password) {
			$password=password_hash($password, PASSWORD_DEFAULT);
		}
		$insertCommand = "INSERT INTO Users (username, password) VALUES ("."'"."$username"."'".", "."'"."$password"."'".")";
		$inserResult = mysqli_query($conn, $insertCommand);
		$sqlCheck="SELECT * FROM Users WHERE username="."'"."$username"."'"."";
		$result = mysqli_query($conn, $sqlCheck);
		if (mysqli_num_rows($result)==1) {
			$_SESSION["loggedin"] = TRUE;
			$_SESSION['user_id'] = $conn->insert_id;
			$_SESSION['username'] = $username;
			echo "success";
		} else { echo "Error, something went wrong!";}
	} else {
		echo "User exists";
	}
?>