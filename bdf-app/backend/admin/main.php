<?php
require_once 'include.php';

global $success, $failed;
try{
    //GET Section
    if(isset($_GET['ads'])) pullTable($_GET,'adrotator','','order by id');
    if(isset($_GET['admins'])) pullTable($_GET,'admins','','');
    if(isset($_GET['config'])) pullTable($_GET,'config','','');
    if(isset($_GET['category'])) pullCategory($_GET);
    if(isset($_GET['events'])) pullEvents($_GET);
    if(isset($_GET['errors'])) pullTable($_GET,'error_log','','order by error_log_date desc limit 30');
    if(isset($_GET['support'])) pullTable($_GET,'supportqueries','','order by id desc');
    if(isset($_GET['regeventinfo'])) pullRegisteredEventsInfo($_GET);
    if(isset($_GET['counter'])) pullCounter($_GET);

    //POST Section

    //SAVE+DELETE Section
    if(isset($_POST['crudAds'])) crudAds($_POST);
    if(isset($_POST['crudEvents'])) crudEvents($_POST);
    if(isset($_POST['crudCategory'])) crudCategory($_POST);
    if(isset($_POST['crudConfig'])) crudConfig($_POST);

}catch (Exception $ex){
    echo $failed;
}

?>
