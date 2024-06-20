    <?php

    require_once '../connection.php';

    $user_name = $_GET['userName'];
    $user_password = $_GET['userPass'];
    $lect_password = $_GET['lectPass'];


    if ($user_password != '') {
        print_r($user_name);
        print_r($user_password);
    } else {
        print_r($user_name);
        print_r($lect_password);
    }





