<!DOCTYPE html> 
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Выгруженные ссылки</title>
    <link
      rel="stylesheet"
      href="../../styles/uploadet_data_styles/uploaded_materials.css"
    />
    <script src='../../JS/links/uploaded-links.js' defer>
    </script>
    <script src='../../JS/lecturer-delete-material/lecturer-delete-material.js' defer>
    </script>
    <?php
      require_once "../connection.php";
      
      $all_links = mysqli_query($connect, "SELECT * FROM `links`");
      $all_links = mysqli_fetch_all($all_links);

      $filter = $_POST['filter'];

    ?>
  </head>
  <body class="body">
    <header class="header">
      <div class="left-header-part">
      <a href="../material-navigation.html" class="exit-btn"><img src="../../images/arroBack.svg" alt="exit" /></a>
        <!-- Добавить ссылку на картинку -->
        <h2>Выгруженные ссылки</h2>
      </div>
      <div class="right-header-part">
        <!-- ___________________________ Начало первой формы для поиска ___________________________ -->
        <form action="#" class="search-form">
          <div class="search">
            <div class="input-search-btn-holder">
              <input type="button" name="search-btn" id="search-btn" />
            </div>
            <input type="search" name="search-query" id="search-query-input" />
          </div>
          <select name="subjcet-filter" id="subjcet-filter">
          <option value="Все" class="sybject-filter-option">
              Все предметы
            </option>
            <option value="Графическое черчение">
                  Графическое черчение
                </option>
                <option value="Машиностроительное черчение">
                  Машиностроительное черчение
                </option>
                <option value="Статика">Статика</option>
                <option value="Сопротивление материалов">
                  Сопротивление материалов
                </option>
                <option value="Детали машин">Детали машин</option>
                <option value="Стандартизация">Стандартизация</option>
                <option value="Мерология">Мерология</option>
                <option value="Сертификация и качество продукции">
                  Сертификация и качество продукции
                </option>
          </select>

          <select name="impr-level-filter" id="impr-level-filter">
          <option value="Все" class="sybject-filter-option">
              Все У/В
            </option>
            <option value="1" class="sybject-filter-option">
              Уровень-1
            </option>
            <option value="2" class="sybject-filter-option">
              Уровень-2
            </option>
            <option value="3" class="sybject-filter-option">
              Уровень-3
            </option>
            <option value="4" class="sybject-filter-option">
              Уровень-4
            </option>
            <option value="5" class="sybject-filter-option">
              Уровень-5
            </option>
            
          </select>
        </form>
        <!-- ___________________________ Конец первой формы для поиска ___________________________ -->
      </div>
    </header>
    <main class="main">
      <div class="main-inner-content">
        <!-- Код php для создания цикла, для вывода видео -->

        <div class="video-elem">
          <span class="elem-id elem-fixed-widht">Номер</span>
          <div class="vertical-separate-line"></div>
          <span class="elem-file-name elem-fixed-widht">Имя</span>
          <div class="vertical-separate-line"></div>
          <span class="elem-subject elem-fixed-widht">Предмет</span>
          <div class="vertical-separate-line"></div>
          <span class="elem-inportant-level elem-fixed-widht">Уровень важности</span>
          <div class="vertical-separate-line"></div>
          <span class="elem-interractive elem-fixed-widht">Взаимодействие</span>
        </div>

        <?php 
          for ($id = 0; $id <= (count($all_links) - 1); $id++)
            {

        ?>
        <form data-subject = '<?php echo $all_links[$id][3] ?>' class='data-form'>
        <div class="video-elem">
          <span class="elem-id elem-fixed-widht"><?php echo $id  + 1 ?></span>
          <div class="vertical-separate-line"></div>
          <span class="elem-file-name elem-fixed-widht" id='elem-file-name-id-<?php echo $id  + 1 ?>'><?php echo $all_links[$id][1] ?></span>
          <div class="vertical-separate-line"></div>
          <span class="elem-subject elem-fixed-widht"><?php echo $all_links[$id][3] ?> </span>
          <div class="vertical-separate-line"></div>
          <span class="elem-inportant-level elem-fixed-widht"><?php echo $all_links[$id][4] ?></span>
          <div class="vertical-separate-line"></div>
          <div class="elem-fixed-widht interract-buttons-holder" >
            <a href="<?php echo $all_links[$id][2] ?>"><input type="button" value='Перейти'></a>
            <input type="button" class="interract-button" onclick="toGetComment(<?php echo $all_links[$id][0] ?>)" value="комментарий">
            
          </div>
        </div>
        </form>
            <?php 
              }
            ?>
        <!-- конец кода php -->
      </div>
    </main>
    <div class="spravka">
      <a href="../spravka/spravka.html" class="spravka-link">?</a>
    </div>
  </body>
</html>
