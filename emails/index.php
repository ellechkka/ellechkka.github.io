<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Отправь себе письмо</h1>

    <form action="handling_emal.php" method="post">
        <label for="email">Введи свой email:</label><br>
        <input type="email" name='email' id='email'>
        <br><br>
        <label for="message">Введи сообщение:</label><br>
        <textarea name='message' id='message'></textarea>
        <br><br>
        <input type="submit" value="Отправить">  
    </form>
    <?php
    
    ?>
</body>

</html>