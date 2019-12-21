<!DOCTYPE html>
<html>
<body>
    <?php 
        $serverName ="";
        $username ="";
        $password= "";

        $conn = new mysqli($serverName, $username, $password);
        $user, $pass, $err ="";
        
        if($_SERVER["REQUEST_METHOD"] =="POST"){
            if($_POST["type"]=="user"){
                $user=$_POST["username"];
                $passCheck = $_POST["password"];
                $sql="SELECT password FROM customer WHERE username='".$user"'";
                $result= $conn->query($sql);
                if($result==$passCheck) redirr();
                else $err= "Wrong login infomation.";
            }
        }
        if($_SERVER["REQUEST_METHOD"] =="POST"){
            if($_POST["type"]=="employee"){
                $user=$_POST["username"];
                $passCheck = $_POST["password"];
                $sql="SELECT password FROM employee WHERE status="employee" AND username='".$user"'";
                $result= $conn->query($sql);
                if($result==$passCheck) redirr();
                else $err= "Wrong login infomation.";
            }
        }
        if($_SERVER["REQUEST_METHOD"] =="POST"){
            if($_POST["type"]=="employee"){
                $user=$_POST["username"];
                $passCheck = $_POST["password"];
                $sql="SELECT password FROM customer WHERE status="admin" AND username='".$user"'";
                $result= $conn->query($sql);
                if($result==$passCheck) redirr();
                else $err= "Wrong login infomation.";
            }
        }
        ?>
</body>
</html>