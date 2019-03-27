<?php 

/* Auteur : Arnaud Baugard */
/* Version : 1.0 */
/* Projet : TP1 To-Do-List */

/* Log pour la BDD */

$serv="localhost";
$user="root";
$pass="";
$db="todo-list";

$pdo = new PDO("mysql:host=$serv;dbname=$db", $user, $pass);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>