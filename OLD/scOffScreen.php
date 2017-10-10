<?php

if ($_POST["method"] == "off") {
exec("sudo bash -c 'echo 1 > /sys/class/backlight/rpi_backlight/bl_power'");
} else {
exec("sudo bash -c 'echo 0 > /sys/class/backlight/rpi_backlight/bl_power'");
}

?>