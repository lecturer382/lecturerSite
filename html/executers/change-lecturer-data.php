<?php

require '../connection.php';

$lectName = $_GET['name'];
$lectPAss = $_GET['lectPass'];
$lectEmail = $_GET['lectEmail'];
$helpQuestion = $_GET['help_question'];

$get_Data_Status = $_GET['getDatalStatus'];

$lecturerEmail = mysqli_query($connect, "SELECT * FROM `lecturer_password` WHERE `id` = 1");
$lecturerEmail = mysqli_fetch_assoc($lecturerEmail);

if ($get_Data_Status) {
    print_r($lecturerEmail['lecturer_email'] . "D-)9*9HHpdhhs%67@#$@**$#&" . $lecturerEmail['lecturer_enter_password'] . "D-)9*9HHpdhhs%67@#$@**$#&" . $lecturerEmail['lecturer_password_question'] . "D-)9*9HHpdhhs%67@#$@**$#&" . $lecturerEmail['lecturer_name']);
} else {
    mysqli_query($connect, "UPDATE `lecturer_password` SET `lecturer_enter_password` = '$lectPAss', `lecturer_email` = '$lectEmail', `lecturer_password_question` = '$helpQuestion', `lecturer_name` = '$lectName' WHERE `lecturer_password`.`id` = 1");
}






