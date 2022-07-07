<?php
	require('db-functions.php');
	header("Access-Control-Allow-Origin: *");
	session_start();
	if (!isset($_SESSION["loggedin"])) {
		header("Location: https://bulletjournal.stud.ubbcluj.ro");
	} else { 
		$conn = connect_to_db();
		$id = $_SESSION["user_id"];
		$sqlCommand="SELECT hash_svg, timestamp FROM Templates where user_id=$id ORDER BY timestamp DESC";
		$result = mysqli_query($conn, $sqlCommand);
		$svgs = array();
		while ($row = $result->fetch_assoc()) {
    			$svg = $row["hash_svg"];
    			array_push($svgs, $svg);
		}
		echo json_encode($svgs);	
	}
?>