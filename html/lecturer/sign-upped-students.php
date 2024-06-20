<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Зарегистрированные студенты</title>
    <link rel="stylesheet" href="../../styles/sign-upped-students.css" />
    <script src="../../JS/users/delete-students.js" defer></script>
    <script src="../../JS/users/to-filter-users.js" defer></script>

    <?php
      require_once "../connection.php";
      
      $all_users = mysqli_query($connect, "SELECT * FROM `users`");
      $all_users = mysqli_fetch_all($all_users);

      $filter = $_POST['filter'];
    ?>
  </head>
  <body class="body">
    <heaedr class="header">
      <div class="left-header-part">
        <a href="../lecturer-cabinet.html" class="exit-btn"
          ><img src="../../images/arroBack.svg" alt=""
        /></a>
        <h2>Зарегестрированные студенты</h2>
      </div>
      <div class="right-heaedr-part">
        <form action="#" class="search-form">
          <div class="search">
            <div class="input-search-btn-holder">
              <input type="button" name="search-btn" id="search-btn" />
            </div>
            <input type="search" name="search-query" id="search-query-input" />
          </div>
          <select name="subjcet-filter" id="subjcet-filter">
            <option value="Все" class="sybject-filter-option">
              Все студенты
            </option>
            <?php
              for ($id = 0; $id <= (count($all_users) - 1); $id++) 
              {
                if ($all_users[$id][3] != $all_users[$id-1][3]) {
                ?>

                <option value="<?php echo $all_users[$id][3] ?>" class="sybject-filter-option">
                  <?php echo $all_users[$id][3] ?>
                </option>

            <?php
            }
              }
            ?>
          </select>

          
        </form>
      </div>
    </heaedr>
    <main class="main">
      <div class="main-inner-content">
        <div class="students-data-holder">
          <span class="elem-id elem-fixed-widht">ФИО студента</span>
          <div class="vertical-separate-line"></div>
          <span class="elem-file-name elem-fixed-widht">Пароль</span>
          <div class="vertical-separate-line"></div>
          <span class="elem-subject elem-fixed-widht">Группа</span>
          <div class="vertical-separate-line"></div>
          <span class="elem-interractive elem-fixed-widht">Взаимодействие</span>
        </div>
        <!-- users list further -->
         <?php
            for ($id = 0; $id <= (count($all_users) - 1); $id++)
            {
         ?>
         <div class="students-data-holder data-form" data-subject='<?php echo $all_users[$id][3] ?>'>
          <span class="elem-id elem-fixed-widht"><?php echo $all_users[$id][1] ?></span>
          <div class="vertical-separate-line"></div>
          <span class="elem-file-name elem-fixed-widht"><?php echo $all_users[$id][2] ?></span>
          <div class="vertical-separate-line"></div>
          <span class="elem-subject elem-fixed-widht"><?php echo $all_users[$id][3] ?></span>
          <div class="vertical-separate-line"></div>
          <div class="elem-fixed-widht interract-buttons-holder" >
            <input type="button" class='interract-button delete-student-btn' id="<?php echo $all_users[$id][0] ?>" onclick="toDeleteStudent(event, <?php echo $all_users[$id][0] ?>)" value="Удалить" name='delete-student-btn'>
          </div>
        </div>
        <?php
            }
         ?>
      </div>
    </main>
    <div class="spravka">
      <a href="../spravka/spravka.html" class="spravka-link">?</a>
    </div>
  </body>
</html>
