<?php

require_once '../connection.php';

// Введённые пользователем данные
$log_In_Name = $_POST['log-in-name'];
$log_In_Password = $_POST['log-in-password'];

//$cur_user_email;
//$cur_lecturer_email;

//________________________________ данные для первой проверки _____________________________________

// Ник юзера
$user_data = mysqli_query($connect, "SELECT * FROM `users` where `name` = '$log_In_Name' AND `password` = '$log_In_Password'");
$user_data = mysqli_fetch_assoc($user_data);

//________________________________ данные для первой проверки _____________________________________

//________________________________ данные для второй проверки _____________________________________

$lecturer_data = mysqli_query($connect, "SELECT * FROM `lecturer_password` where `id` = 1");
$lecturer_data = mysqli_fetch_assoc($lecturer_data);


//________________________________ данные для второй проверки _____________________________________

if (($user_data['password'] == $log_In_Password) && ($user_data['name'] == $log_In_Name)) {
    print_r('user let in!');
} else if (($lecturer_data['lecturer_enter_password'] == $log_In_Password) && ($lecturer_data['lecturer_name'] == $log_In_Name)) {
    print_r('lecturer let in!');
} else {
    print_r('do no let in!');
}