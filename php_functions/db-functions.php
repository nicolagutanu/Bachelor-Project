<?php

function connect_to_db()
  {

    $dbuname = "bulletjournal";
  
    $dbpass = "OYagatyBjkTOJt1p";
  
    $dbserver = "localhost";
  
    $dbname = "bulletjournal";

    $conn = new mysqli($dbserver, $dbuname, $dbpass, $dbname);
    
    if ($conn->connect_error)
    {
      die("Connection failed: " . $conn->connect_error);
    }
    
    return $conn; 
  
  }

?>