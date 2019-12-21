<!DOCTYPE html>
<html>
<body>
<?php 
    $dirr = $_POST["dir"];
    $target_file = $dirr.basename($_FILES["imgUp"]["name"]);
    $fileExtension = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    if(file_exists($target_file)) unlink($target_file);
    move_uploaded_file($_FILES["img"]["tmp_name"], $target_file); ?>

<form action="img_upload.php" method="post" enctype="multipart/form-data">
    Img is uploaded to:<input type="text" name="dir" value="resource/img/" readonly>
    <input type="file" name="imgUp"><br>
    <input type="submit" value="Change" name="submit">
</form>

</body>
</html>