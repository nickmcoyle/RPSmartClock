<?php
$method = $_GET['method'];  
$key = 'fec103492f5bec16';

header('Content-Type: application/xml'); 
$output = file_get_contents('http://api.wunderground.com/api/'.$key.'/'.$method.'/q/47.664707899999996,-122.35136820000001.xml');
print ($output);
?>