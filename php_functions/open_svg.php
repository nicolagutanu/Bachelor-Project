<?php
	require('db-functions.php');
	header("Access-Control-Allow-Origin: *");
	session_start();
	if (!isset($_SESSION["loggedin"])) {
		header("Location: https://bulletjournal.stud.ubbcluj.ro");
	} else { 
		$conn = connect_to_db();
		$id = $_SESSION["user_id"];
		$svg="'".$_POST["svg"]."'";	
		$sqlCommand="SELECT id FROM Templates where user_id=$id AND hash_svg=$svg";
		$result = mysqli_query($conn, $sqlCommand);
		if (mysqli_num_rows($result)==1) {
			$row=$result->fetch_assoc();
			$template_id=$row["id"];
			$sql="SELECT svg_line FROM Elements where template_id=$template_id";
			$r = mysqli_query($conn, $sql);
			$str="";
			while ($row = $r->fetch_assoc()) {
    				$str .= $row["svg_line"];
			}
			echo $str;

		}
	
	}
?>