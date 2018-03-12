<?php
session_start();

$_SESSION["loggedInAdmin"] = $username;

$connection = new MongoClient();

$db = $connection -> restaurant;


$collection = $db -> admin;

$username = $_POST['username'];
$password = $_POST['password'];

$admin = $db->$collection->findOne(array('username'=> $username, 'password' => $password));

      foreach ($admin as $object) {
            echo 'username' . $object['username'];
            echo 'password: ' . $object['password'];
            if($username == 'username' && $password == 'password'){
                echo 'found';
                header("Location: localhost:3000/admin");
                exit();				
            }
            else{
                echo 'not found';            
            }

        }
		
		$connection->close();


?>

<html>
<head>
</head>
<body>
<form action="admin_login.php" method="post">
Username: <input type="text" name="username"><br>
Password: <input type="text" name="password"><br>
<input type="submit" value="Sign In">    
</form>
</body>
</html>
