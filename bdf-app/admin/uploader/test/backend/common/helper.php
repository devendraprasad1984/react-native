<?php

function upload_data($data)
{   
    global $conn;
    $pname = rand(1000,10000)."-".$_FILES["file"]["name"];
    $tname = $_FILES["file"]["tmp_name"];
    $file_size = $_FILES['file']['size'];
    $file_type = $_FILES['file']['type'];
    $filename=$_FILES['file']['name'];
    $actual_link = "http://$_SERVER[HTTP_HOST]"; // to get the server url for storing in the table    
    if (($file_type == 'image/jpg') || ($file_type == 'image/jpeg') || ($file_type == 'image/png')){
          $location = $actual_link.'/test/uploads/images/'.$filename;
    }
    else if (($file_type == 'video/mp4') || ($file_type == 'video/avi') || ($file_type == 'video/gif')|| ($file_type == 'video/mov')){
          $location = $actual_link.'/test/uploads/video/'.$filename;
    }

 $sql= " INSERT into fileuploads (file,size,type,loc) 
           values ( '$pname','$file_size','$file_type','$location') ";

 if (mysqli_query($conn, $sql)){
              echo "File Successfully uploaded!". "\n";
        }
        else {
        echo "Error";
        }
        // for moving files into respective folders
       $ds = DIRECTORY_SEPARATOR;
       $tname = $_FILES["file"]["tmp_name"];
       $vidtargetfolder = 'C:\wamp64\bin\apache\apache2.4.46\htdocs\test\uploads\video'.$ds;
       $imgtargetfolder = 'C:\wamp64\bin\apache\apache2.4.46\htdocs\test\uploads\images'.$ds;
       
      // to validate the image extensions and to move images to image folder
      
       if (($_FILES["file"]["type"] == "image/png") 
                || ($_FILES["file"]["type"] == "image/jpg") 
                || ($_FILES["file"]["type"] == "image/jpeg")) 
             {
                    if (file_exists($imgtargetfolder . $_FILES["file"]["name"]))
                    {
                    echo $_FILES["file"]["name"] . " already exists. "; // checking if the file already exists
                    }
                  else{
                 move_uploaded_file($_FILES["file"]["tmp_name"],
                 $imgtargetfolder . $_FILES["file"]["name"]
             );
             echo "Successfully moved";    
             echo "Stored in: " . $imgtargetfolder . $_FILES["file"]["name"];
             }}
           //validating video files and moving them to video folder
    
            else if  (($_FILES["file"]["type"] == "video/mp4") || ($_FILES["file"]["type"] == "video/mov") || 
            ($_FILES["file"]["type"] == "video/avi") || ($_FILES["file"]["type"] == "video/gif")
            ) {                 
                    if (file_exists($vidtargetfolder . $_FILES["file"]["name"]))
                    {
                    echo $_FILES["file"]["name"] . " already exists. ";
                    }
                else {
                    move_uploaded_file($_FILES["file"]["tmp_name"],
                     $vidtargetfolder . $_FILES["file"]["name"]
                 );
                 echo "Successfully moved";
                 echo "Stored in: " . $vidtargetfolder . $_FILES["file"]["name"];
                }
            }
}

function fetchimagedata($data)
{
    global $conn, $nodatafound;
    $rows["error"] = $nodatafound;
    $qur = "select * from fileuploads where type LIKE 'image%' order by id desc";
    $sql = $conn->query($qur);
    if ($sql) {
        $rows = $sql->fetch_all(MYSQLI_ASSOC);
        mysqli_free_result($sql);
    }
    if ($conn) mysqli_close($conn);
    echo(json_encode($rows));
}

function fetchvideodata($data)
{
    global $conn, $nodatafound;
    $rows["error"] = $nodatafound;
    $qur = "select * from fileuploads where type LIKE 'video%' order by id desc";
    $sql = $conn->query($qur);
    if ($sql) {
        $rows = $sql->fetch_all(MYSQLI_ASSOC);
        mysqli_free_result($sql);
    }
    if ($conn) mysqli_close($conn);
    echo(json_encode($rows));
}

?>