<?php
require_once '../include.php';

global $failed;
try {
    $data = json_decode(file_get_contents('php://input'), true);
//    echo json_encode($data);
    handleEventRegistrationSave($data);
} catch (Exception $ex) {
    echo $failed;
}
