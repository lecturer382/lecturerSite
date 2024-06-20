<?php

require_once '../connection.php';

$SubjectSelect = $_POST['Subject'];
$fileTypeSelect = $_POST['file-type'];
$importantLeveSelect = $_POST['important-level'];
$comment = $_POST['comment'];
$fileName = $_FILES['file-to-upload'];

//for links -----------\/

$linkName = $_POST['linkName'];
$link = $_POST['link'];

if ($fileTypeSelect == 'video') {
    if($_FILES['file-to-upload']) {
        $uploadPath = '../../files/videos/' . $fileName['name']; 
        mysqli_query($connect, "INSERT INTO `video` (`id`, `file_name`, `file_path`, `subject`, `important_level`, `comment`) VALUES (NULL, '{$fileName["name"]}', '$uploadPath', '$SubjectSelect', '$importantLeveSelect', '$comment') ");   
        move_uploaded_file($fileName['tmp_name'], $uploadPath);
        echo "File uploaded successfully.";
    } else {
        echo "No file uploaded.";
    }
} else if ($fileTypeSelect == 'books') {
    if($_FILES['file-to-upload']) {
        $uploadPath = '../../files/books/' . $fileName['name']; 
        mysqli_query($connect, "INSERT INTO `books` (`id`, `file_name`, `file_path`, `subject`, `importsnt_level`, `comment`) VALUES (NULL, '{$fileName["name"]}', '$uploadPath', '$SubjectSelect', '$importantLeveSelect', '$comment') ");   
        move_uploaded_file($fileName['tmp_name'], $uploadPath);
        echo "File uploaded successfully.";
    } else {
        echo "No file uploaded.";
    }
} else if ($fileTypeSelect == 'presentation') {
    if($_FILES['file-to-upload']) {
        $uploadPath = '../../files/presentations/' . $fileName['name']; 
        mysqli_query($connect, "INSERT INTO `presentations` (`id`, `file_name`, `file_path`, `subject`, `important_level`, `comment`) VALUES (NULL, '{$fileName["name"]}', '$uploadPath', '$SubjectSelect', '$importantLeveSelect', '$comment') ");   
        move_uploaded_file($fileName['tmp_name'], $uploadPath);
        echo "File uploaded successfully.";
    } else {
        echo "No file uploaded.";
    }
} else if ($fileTypeSelect == 'link') {
    if($link) {
        mysqli_query($connect, "INSERT INTO `links` (`id`, `link_name`, `link`, `subject`, `important-level`, `comment`) VALUES (NULL, '$linkName', '$link', '$SubjectSelect', '$importantLeveSelect', '$comment') ");   
        print_r($comment);
    } else {
        echo "No file uploaded.";
    }
}
