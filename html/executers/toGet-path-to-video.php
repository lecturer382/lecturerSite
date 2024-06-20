<?php

require '../connection.php';

$data_id = $_GET['id'];

$material_path = mysqli_query($connect, "SELECT * FROM `video` where `id` = '$data_id'");
$material_path = mysqli_fetch_assoc($material_path);

print_r($material_path['file_path']);


