<?php
$stopId = $_GET['stopId'];  
$key = '5667883a-7955-4a8e-af2b-741dc6912f49';
$n = 35;
header('Content-Type: application/xml'); 
$output = file_get_contents('http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/'. $stopId  . '.xml?key=' . $key . '&minutesAfter=' . $n);
print ($output);
?>