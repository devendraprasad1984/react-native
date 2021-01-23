<?php
require_once '../include.php';

global $failed;
try{
    handleEventsPull($_GET);
}catch (Exception $ex){
    echo $failed;
}

