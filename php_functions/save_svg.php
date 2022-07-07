<?php
	require('db-functions.php');
	header("Access-Control-Allow-Origin: *");
	session_start();
	if (!isset($_SESSION["loggedin"])) {
		header("Location: https://bulletjournal.stud.ubbcluj.ro");
	} else { 
		$conn = connect_to_db();
		$file=$_POST["file"];
		$file=htmlspecialchars($file);
		$file=mysqli_real_escape_string($conn, $file);
		if ($_POST["file"]!=$file || $_POST["file"]==null || $_POST["file"]=="") {
			echo "failure";
		} else {
			$file="'".$file."'";
			$user_id = $_SESSION["user_id"];
			$insertCommand = "INSERT INTO Templates (user_id, hash_svg, timestamp) VALUES ($user_id, $file, now())";
			$insertResult = mysqli_query($conn, $insertCommand);
			if ($insertResult === false) {
				echo "failure";
			} else {
				echo $conn->insert_id;
			}
		}	
	}
?>