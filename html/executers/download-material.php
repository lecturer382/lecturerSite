<?php

require '../connection.php';

$data_id = $_GET['id'];
$data_type = $_GET['ftype'];
$commentStatus = $_GET['commentStatus'];
$preview_status = $_GET['previewStatus'];


if ($data_id && ($data_type == 'presetntations')) {
    $material_path = mysqli_query($connect, "SELECT * FROM `presentations` where `id` = '$data_id'");
    $material_path = mysqli_fetch_assoc($material_path);
    $file_path = $material_path['file_path'];
    
    if ($commentStatus) {
        $file_comment = $material_path['comment'];
        print_r($file_comment);
    } elseif ($preview_status) {
        header('Content-Type: application/vnd.openxmlformats-officedocument.presentationml.presentation');
        header('Content-Disposition: inline; filename="' . basename($file_path) . '"');
        header('Content-Length: ' . filesize($file_path));
        readfile($file_path);

    } else {
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($file_path) . '"');
        header('Content-Length: ' . filesize($file_path));
        readfile($file_path);
    }
} elseif ($data_id && $data_type == 'books') {

    $material_path = mysqli_query($connect, "SELECT * FROM `books` where `id` = '$data_id'");
    $material_path = mysqli_fetch_assoc($material_path);
    $file_path = $material_path['file_path'];
    
    if ($commentStatus) {
        $file_comment = $material_path['comment'];
        print_r($file_comment);
    } elseif ($preview_status) {
        header('Content-Type: application/vnd.openxmlformats-officedocument.presentationml.presentation');
        header('Content-Disposition: inline; filename="' . basename($file_path) . '"');
        header('Content-Length: ' . filesize($file_path));
        readfile($file_path);

    } else {
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($file_path) . '"');
        header('Content-Length: ' . filesize($file_path));
        readfile($file_path);
    }
} elseif  ($data_id && ($data_type == 'link')) {
    $material_path = mysqli_query($connect, "SELECT * FROM `links` where `id` = '$data_id'");
    $material_path = mysqli_fetch_assoc($material_path);
    print_r($material_path['comment']);
} elseif ($data_id && ($data_type == 'video')) {

    $material_path = mysqli_query($connect, "SELECT * FROM `video` where `id` = '$data_id'");
    $material_path = mysqli_fetch_assoc($material_path);

    if ($commentStatus) {
        $file_comment = $material_path['comment'];
        print_r($file_comment);
    } 
}