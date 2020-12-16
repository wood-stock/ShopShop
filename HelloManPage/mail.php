<?
// ----------------------------конфигурация-------------------------- //
$adminemail="aksenov.design@gmail.com";  // e-mail админа
$date=date("d.m.y"); // число.месяц.год
$time=date("H:i"); // часы:минуты:секунды
$backurl="Answer.html";  // На какую страничку переходит после отправки письма
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8';
$msg = $_POST['email'];
 // Отправляем письмо админу
mail($adminemail, "$date $time Новый email с сайта ShopShopShop", $msg, $headers);
// Сохраняем в базу данных
$f = fopen("message.txt", "a+");
fwrite($f," \n $date $time ");
fwrite($f,"\n $msg ");
fwrite($f,"\n ---------------");
fclose($f);
// Выводим сообщение пользователю

print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 100);
//--></script>";
exit;
?>
