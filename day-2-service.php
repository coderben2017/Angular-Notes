<?php
	$name = $_POST["name"];
	$school = $_POST["school"];
	
	$data = [
		"name" => $name,
		"school" => $school
	];
	$json = json_encode($data);

	echo $json;
?>