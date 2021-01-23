<?php require_once '../include.php';

global $conn, $success, $failed;

	$json = file_get_contents('php://input');

	 $obj = json_decode($json,true);

	$name = $obj['name'];

	$email = $obj['email_id'];

    $mobile = $obj['mobile_no'];


	if($obj['email_id']!="")
	{

	$result= $conn->query("SELECT * FROM user_detail where email='$email'");


		if($result->num_rows>0){
			echo json_encode('email already exist');  // alert msg in react native
		}
		else
		{
		   $add = $conn->query("insert into user_detail (user_name,email,mobile_no ,timestamp) values('$name','$email','$mobile',CURRENT_TIMESTAMP)");

			if($add){
				echo  json_encode('User Registered Successfully'); // alert msg in react native
			}
			else{
			   echo json_encode('Failed to registerEvent details, try again.'); // our query fail
			}

		}
	}

	else{
	  echo json_encode('try again');
	}


?>
