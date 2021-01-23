
<?php
require_once '../include.php';
global $failed;
try{
    fetchimagedata($_GET);
}catch (Exception $ex){
    echo $failed;
}


// $query= "SELECT  * FROM fileuploads order by id desc";
// $query_run= mysqli_query($conn, $query);







// $output = '
// <table>
// <tr>
// <th width=10%>Id</th>
// <th width=40%>Image</th>
// <th width=40%>Location</th>
// </tr>
// </table>';

// if($query_run){
//   function ConsoleLog($msg)
//   { echo "<script>
//     console.log($msg)
//     </script>";
//   };

// while($row = mysqli_fetch_array($query_run)){
//   if (($row['type'] == "image/jpg") || ($row['type']== "image/jpeg")||($row['type']== "image/png")){   
//         $locate=$row['loc'];
//         $output .= '
        // <tr>
        // <td> '.$row["id"].' </td>
        // <td><img src="'.($row['loc']).'" height="60" width= "75"/></td>
        // <td><button selectLoc="'.($row['loc']).'" onclick="console.log(this.getAttribute(\'selectLoc\'))" > Select </button></td><br>
        // </tr>
        // ';
// }
// }
// $output .= '</table>';
// echo  $output;
// ConsoleLog("'$locate'");
// }
// else
// {
//     echo "Not valid file";
// }

?>
