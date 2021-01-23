<?php

$success = json_encode(array('status' => 'success'));
$failed = json_encode(array('status' => 'failed, not allowed'));
$server = $_SERVER['REMOTE_ADDR'];
if ($server == '::1' or $server == 'localhost' or strpos($server,'.168')!=0 or $server == '127.0.0.1') {
    define('host', 'localhost');
    define('user', 'root');
    define('pwd', 'dpadmin');
    define('db', 'bdfapp');
} else {
    define('host', 'localhost');
    define('user', '');
    define('pwd', '');
    define('db', '');
}
$conn = new mysqli(host, user, pwd, db);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
