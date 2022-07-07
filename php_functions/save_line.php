<?php
	require('db-functions.php');
	header("Access-Control-Allow-Origin: *");
	session_start();
	if (!isset($_SESSION["loggedin"])) {
		header("Location: https://bulletjournal.stud.ubbcluj.ro");
	} else { 
		$conn = connect_to_db();
		$line="'".$_POST["line"]."'";
		$id=$_POST["id"];
		$insertCommand = "INSERT INTO Elements (svg_line, template_id) VALUES ($line, $id)";
		$insertResult = mysqli_query($conn, $insertCommand);	
	}
?>