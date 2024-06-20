<?php

require '../connection.php';

$student_id = $_GET['studentId'];

$delete_result = mysqli_query($connect, "DELETE FROM users WHERE `users`.`id` = '$student_id'");

if ($delete_result) {
    print_r('deleted successfuly!!!');
}
