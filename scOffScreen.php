<?php
/* when posting JSON data, the POST array will be empty in php unless you decode the JSON */ 
 $rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
 
if ($_POST[cmd] == "off") {
exec("sudo bash -c 'echo 1 > /sys/class/backlight/rpi_backlight/bl_power'");
} else {
exec("sudo bash -c 'echo 0 > /sys/class/backlight/rpi_backlight/bl_power'");
}

?>