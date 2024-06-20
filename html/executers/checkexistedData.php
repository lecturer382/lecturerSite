<?php

require '../connection.php';

$SubjectSelect = $_POST['Subject'];
$fileTypeSelect = $_POST['file-type'];
$importantLeveSelect = $_POST['important-level'];
$comment = $_POST['comment'];
$fileName = $_FILES['file-to-upload'];

//for links -----------\/

$linkName = $_POST['linkName'];
$link = $_POST['link'];

if ($fileTypeSelect == 'video') {
    $existed_Material = mysqli_query($connect, "SELECT * FROM `video` where `file_name` = '{$fileName["name"]}'");
    $existed_Material = mysqli_fetch_assoc($existed_Material);
    if ($existed_Material['file_name'] == $fileName["name"]) {
        print_r('exists');
    } else {
        print_r('does_nt exists');
    }

} elseif ($fileTypeSelect == 'books') {
    $existed_Material = mysqli_query($connect, "SELECT * FROM `books` where `file_name` = '{$fileName["name"]}'");
    $existed_Material = mysqli_fetch_assoc($existed_Material);
    if ($existed_Material['file_name'] == $fileName["name"]) {
        print_r('exists');
    } else {
        print_r('does_nt exists');
    }
} elseif ($fileTypeSelect == 'presentation') {
    $existed_Material = mysqli_query($connect, "SELECT * FROM `presentations` where `file_name` = '{$fileName["name"]}'");
    $existed_Material = mysqli_fetch_assoc($existed_Material);
    if ($existed_Material['file_name'] == $fileName["name"]) {
        print_r('exists');
    } else {
        print_r('does_nt exists');
    }
} elseif ($fileTypeSelect == 'link') {
    $existed_Material = mysqli_query($connect, "SELECT * FROM `links` where `link_name` = '$linkName'");
    $existed_Material = mysqli_fetch_assoc($existed_Material);
    if ($existed_Material['link_name'] == $linkName) {
        print_r('exists');
    } else {
        print_r('does_nt exists');
    }
}



