<?php
$servername = "127.0.0.1";
$username = "educat2";
$password = "3UpzTO3XGMgqKpZx";
$dbname = "educat2";

$entry = $_POST['entry'];
$type = $_POST['type'];
$location = $_POST['location'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
	return "Connection failed: " . $conn->connect_error;
	die("Connection failed: " . $conn->connect_error);
}

if (!strcmp($item, "*")) {
	if (!strcmp($type, "all")) {
		if (!strcmp($location, "all")) {
			$stmt = $conn->prepare("SELECT * FROM lager");
		} else {
			$stmt = $conn->prepare("SELECT * FROM lager WHERE Ort = (?)");
			$stmt->bind_param("s", $location);
		}
	} else {
		if (!strcmp($location, "all")) {
			$stmt = $conn->prepare("SELECT * FROM lager WHERE Typ = (?)");
			$stmt->bind_param("s", $type);
		} else {
			$stmt = $conn->prepare("SELECT * FROM lager WHERE Typ = (?) AND Ort = (?)");
			$stmt->bind_param("ss", $type, $location);
		}
	}
} else {
	if (!strcmp($type, "all")) {
			if (!strcmp($location, "all")) {
				$stmt = $conn->prepare("SELECT * FROM lager WHERE Posten = (?)");
				$stmt->bind_param("s", $entry);
			} else {
				$stmt = $conn->prepare("SELECT * FROM lager WHERE Posten = (?) AND Ort = (?)");
				$stmt->bind_param("ss", $entry, $location);
			}
		} else {
			if (!strcmp($location, "all")) {
				$stmt = $conn->prepare("SELECT * FROM lager WHERE Posten = (?) AND Typ = (?)");
				$stmt->bind_param("ss", $entry, $type);
			} else {
				$stmt = $conn->prepare("SELECT * FROM lager WHERE Posten = (?) AND Typ = (?) AND Ort = (?)");
				$stmt->bind_param("sss", $entry, $type, $location);
			}
		}
	}
}

$result = $stmt->execute();

$html = "<table><tr><th>Posten</th><th>Anzahl</th><th>Einheit</th><th>Beschreibung</th><th>Typ</th><th>Ort</th></tr>";
			
while($res = $result->fetch_assoc()) {
	$html += "<tr><td>{$res['posten']}</td><td>{$res['anzahl']}</td><td>{$res['einheit']}</td><td>{$res['beschreibung']}</td><td>{$res['typ']}</td><td>{$res['ort']}</td></tr>";
}

$html += "</table>";

$conn->close();

return $html;
?>