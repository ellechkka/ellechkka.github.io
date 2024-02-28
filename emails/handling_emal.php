<?php
// print_r($_POST);
$email = $_POST['email'];
$message = $_POST['message'];

if (trim($email) == '') 
    echo "Вы не ввели email";
else {
    $from = "elinaromanova244@gmail.com";
    $subject = "Тема сообщения";

    // кодирование темы сообщения
    $subject = "=?utf-8?B?".base64_encode($subject)."?=";

    // создание заголовков 
    $headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";
    mail($email, $subject, $message, $headers);

    echo "<h1>Письмо отправлено<h1>";

    // переадресация пользователя
    // header('Location: url');
    // exit;
}