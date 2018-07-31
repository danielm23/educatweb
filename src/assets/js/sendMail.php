<?php

	$from = "From: Educat e.V. - Anmeldung <anmeldung@educatweb.de>\r\n";
	$from .= "Reply-To: kontakt@educatweb.de\r\n";
  $from .= "Mime-Version: 1.0\r\n";
  $from .= "Content-Type: text/plain; charset=utf-8\r\n";
  $from .= "Bcc: anmeldung@educatweb.de";
 
	mail($_POST['mail'], $_POST['subject'], $_POST['text'], $from);

?>