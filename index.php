<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="javas.js"></script>
    <script src="libraries/raphael.js"></script>
    <script src="libraries/raphael.free_transform.js"></script>
    <script src="libraries/raphael.inline_text_editing.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="css.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Ballet&family=Cinzel&family=Comfortaa:wght@300&family=Cormorant+Garamond:wght@300&family=Dancing+Script&family=Felipa&family=Geostar+Fill&family=Great+Vibes&family=Lobster&family=Miltonian&family=MonteCarlo&family=Orbitron&family=Parisienne&family=Pinyon+Script&family=Playfair+Display&family=Roboto:wght@100&family=Romanesco&family=Send+Flowers&family=Teko:wght@300&family=Tienne&display=swap">
    <title>My Spread</title>
</head>
<body>
    <div id="parent">
        <div id="menu">
            <div id="lines-menu"></div>
            <div id="text-menu"></div>
            <div id="shapes-menu"></div>
        </div>
        <div id="buttons">
            <button id="shapes" onclick="show_shapes_menu()"><span>Shapes</span></button>
            <button id="text" onclick="show_text_menu()"><span>Text</span></button>
            <button id="lines" onclick="show_lines_menu()"><span>Lines</span></button>
        </div>
        <div id="canvas"></div>
        <div id="account-menu">
            <img id="logo" src="logos/logo3.png" alt="logo" width="250" height="100">

            <?php
            
            session_start();
            
            if (isset($_SESSION["loggedin"]))
            {
		echo "
		<div id=\"logged-list\">
			<p id=\"welcome\">Welcome " . $_SESSION["username"]. "</p>
			<button id=\"logout-button\" onclick=\"logout()\">Logout</button>
			<input id=\"file-name\" type=\"text\" placeholder=\"file name\" required>
			<button id=\"save-button\" onclick=\"save_svg()\">Save</button>
			<ul id=\"list\" onload=\"load_svgs()\"></ul>
		</div>";
            }
            else
            {
               echo "
            <div id=\"login\">
                <input id=\"username\" type=\"text\" placeholder=\"Username\" required>
                <input id=\"password\" type=\"password\" placeholder=\"Password\">
                <button id=\"login-button\" onclick=\"login()\">Login</button>
                <button id=\"signUp-button\" onclick=\"signup()\">Sign Up</button>
            </div>";
            }
            ?>
	    <div id="settings">
		<button id="a5-button">A5 page</button>
	    	<button id="b5-button">B5 page</button>
	    	<button id="blank-button" onclick="blank_page()">Blank</button>
	    	<button id="dotted-button" onclick="dotted_page()">Dotted</button>
	    	<input id="download-file-name" type="text" placeholder="file name" required>
	    	<button id="download-button" onclick="download_svg()">Download</button>
            	<button id="clear-handles" onclick="clear_handles()">Clear Handles</button>
            	<button id="clear-paper" onclick="clear_page()">Clear Paper</button>
	    </div>
        </div>
	<a id="for-download" style="display:none">download link</a>
    </div>
</body>
</html>

