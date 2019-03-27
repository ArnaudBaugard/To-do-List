<?php

/* Auteur : Arnaud Baugard */
/* Version : 1.0 */
/* Projet : TO-DO-LIST */

/* Page qui supprime les messages */

include ("connexion.inc.php");

	$query="DELETE FROM task WHERE id=:id; ";

	$prep = $pdo->prepare($query);

	$prep->bindValue(':id', $_GET['id']);

	$prep->execute();

header("Location:../index.php");


?>