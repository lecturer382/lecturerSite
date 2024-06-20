<?php

require '../connection.php';

/*$lecturer_password = mysqli_query($connect, "SELECT * FROM `lecturer_password`");
$lecturer_password_array = mysqli_fetch_assoc($lecturer_password);*/


$lecturerPassword = $_POST['lecturer-password'];
$signUpUserName = $_POST['sign-up-user-name'];
$signUpPassword = $_POST['sign-up-password'];
$userGroup = $_POST['user-group'];

if ($lecturerPassword) {
    $exist_lecturer_profile =  mysqli_query($connect, "SELECT * FROM `lecturer_password` where `id` = 1");
    $exist_lecturer_profile = mysqli_fetch_assoc($exist_lecturer_profile);
    if ($exist_lecturer_profile['lecturer_email'] == '' && $exist_lecturer_profile['lecturer_password_question'] == '' && $exist_lecturer_profile['lecturer_name'] == '') {
        if ($lecturerPassword == $exist_lecturer_profile['lecturer_enter_password']) {
            mysqli_query($connect, "UPDATE `lecturer_password` SET `lecturer_name` = '$signUpUserName' WHERE `lecturer_password`.`id` = 1");   
            echo 'lecturer_created';
        }
    } else {
        print_r('Преподаватель уже существует!!!');
    }
} 
if ($userGroup) {
    $existed_user = mysqli_query($connect, "SELECT * FROM `users` where `usergroup` = '$userGroup' AND `password` = '$signUpPassword' AND `name` = '$signUpUserName'");

    if (mysqli_num_rows($existed_user) > 0) {
        echo 'exist';
    } else {
        mysqli_query($connect, "INSERT INTO `users` (`id`, `name`, `password`, `usergroup`) VALUES (NULL, '$signUpUserName', '$signUpPassword', '$userGroup')");   
        echo 'user_created';
    }
}


