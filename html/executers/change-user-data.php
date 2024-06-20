<?php

require '../connection.php';

$userName = $_GET['userName'];
$userPAss = $_GET['userPass'];
$userGroup = $_GET['userGroup'];
$usercurName = $_GET['userCurName'];
$userCurPass = $_GET['userCurPass'];
$userCurGroup = $_GET['userCurGroup'];


if ($userGroup == 'empty') {
    $userGroupData = mysqli_query($connect, "SELECT * FROM `users` where `name` = '$userName' and `password` = '$userPAss'");
    $userGroupData = mysqli_fetch_assoc($userGroupData);
    print_r($userGroupData['usergroup']);

} else {
    print_r($userName . "%" . $userPAss . "%" . $userGroup);
    print_r('%');
    print_r($usercurName . "%" . $userCurPass . "%" . $userCurGroup);

    mysqli_query($connect, "UPDATE `users` SET `name` = '$userName', `password` = '$userPAss', `usergroup` = '$userGroup' WHERE `users`.`name` = '$usercurName' AND `users`.`password` = '$userCurPass' AND `users`.`usergroup` = '$userCurGroup'");
    //print_r($userCurGroup);
}



