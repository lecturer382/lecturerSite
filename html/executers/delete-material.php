<?php

require '../connection.php';

$material_id = $_GET['id'];
$d_type = $_GET['deltype'];


if ($d_type == 'books') {
    $file_padth = mysqli_query($connect, "SELECT * FROM `books` where `id` = '$material_id'");
    $file_padth = mysqli_fetch_assoc($file_padth);

    if (unlink($file_padth['file_path'])) {
        mysqli_query($connect, "DELETE FROM books WHERE `books`.`id` = '$material_id'");
        print_r(' deleted successfuly!!!');
    } else {
        print_r('cannot delete');
    }    
} elseif ($d_type == 'presentations') {
    $file_padth = mysqli_query($connect, "SELECT * FROM `presentations` where `id` = '$material_id'");
    $file_padth = mysqli_fetch_assoc($file_padth);

    if (unlink($file_padth['file_path'])) {
        mysqli_query($connect, "DELETE FROM presentations WHERE `presentations`.`id` = '$material_id'");
        print_r(' deleted successfuly!!!');
    } else {
        print_r('cannot delete');
    }  
} elseif ($d_type == 'video') {
    print_r('statent passed!!!');

    $file_padth = mysqli_query($connect, "SELECT * FROM `video` where `id` = '$material_id'");
    $file_padth = mysqli_fetch_assoc($file_padth);

    if (unlink($file_padth['file_path'])) {
        mysqli_query($connect, "DELETE FROM video WHERE `video`.`id` = '$material_id'");
        print_r(' deleted successfuly!!!');
    } else {
        print_r('cannot delete');
    }  
} elseif ($d_type == 'link') {
    if ( mysqli_query($connect, "DELETE FROM links WHERE `links`.`id` = '$material_id'")) {
        print_r(' deleted successfuly!!!');
    } else {
        print_r('cannot delete');
    }
}



