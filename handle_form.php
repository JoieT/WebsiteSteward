<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
 
<head>
    <meta http-equiv="Content-Type" content = "text.html" charset="utf-8"/>
    <title>Your Feedback</title>
</head>
<body>
<?php // Script <handle_form class="php"

print $_POST['name']; 
$name = $_POST['name'];
$response = $_POST['response'];

print "<p>Thank you $_POST['name'], for your comments.</p>
    <p> You stated that your primary concern was $response /p>";

    ?>
    </body>
    </html>