<?php

require_once '../connection.php';

$getPassStatus = $_GET['getlectPassStatus'];


if ($getPassStatus) {
    $question_hint = mysqli_query($connect, "SELECT * FROM `lecturer_password` where `id` = 1");
    $question_hint = mysqli_fetch_assoc($question_hint);
    print_r($question_hint['lecturer_password_question']);
} else {
    $lect_email = mysqli_query($connect, "SELECT * FROM `lecturer_password` where `id` = 1");
    $lect_email = mysqli_fetch_assoc($lect_email);
    print_r($lect_email['lecturer_email']);
}



