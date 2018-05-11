<?php
	function cors() {
		// Allow from any origin
		if (isset($_SERVER['HTTP_ORIGIN'])) {
			// echo "<script>console.log('in the first condition');</script>";
			// Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
			// you want to allow, and if so:
			header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
			header('Access-Control-Allow-Credentials: true');
			header('Access-Control-Max-Age: 86400');    // cache for 1 day
		}
		// Access-Control headers are received during OPTIONS requests
		if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
			// echo "<script>console.log('in the second condition');</script>";
			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
			// may also be using PUT, PATCH, HEAD etc
			header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
				// echo "<script>console.log('in the third condition');</script>";
			header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
			exit(0);
		}
		// echo "You have CORS!";
	}
	function resivedDataFromClientForm() {
		$str_json = file_get_contents('php://input'); //($_POST doesn't work here)
		// $response = json_decode($str_json, true); // decoding received JSON to array
		echo json_encode($str_json, true);
	}
	cors();
	resivedDataFromClientForm();
?>
