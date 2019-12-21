<!DOCTYPE html>
<html>
<body>
  <?php
        $descrF = fopen("file:///C:/Users/User/Desktop/description.txt", "a+");//lay file tu server
        $para= fread($descrF,filesize("description.txt"));//doc file vao $para
        if($_SERVER["REQUEST_METHOD"]=="POST") $para= $_POST["descr"]; //chen descr moi vao bien
        fwrite($descrF, $para);//ghi  vao file
        fclose($descrF);
        ?>
 
 /*   <?php include "edit_para"?>//them code php vao trang html
        <form method="post" action="edit_para.php">
        Thong tin:<br>
        <textarea name="descr" rows="10" cols="80" value=<?php $para?>></textarea><br>//phan value chua biet co chinh xac hay ko
        <input type="submit" value="Save">
        </form> 
    phan form tren trang web         */
</body>
</html>