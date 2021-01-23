<?php
require_once '../include.php';

$data['post']=$_POST;
$data['files']=$_FILES;

//for db insertion of file
global $failed;
try {
    $data = json_decode(file_get_contents('php://input'), true);
  upload_data($data);
} catch (Exception $ex) {
    echo $failed;
}

?>
