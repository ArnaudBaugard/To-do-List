<?php 

include("connexion.inc.php");
if(isset($_GET['action'])){

if($_GET['action'] == 'add' ){
	$query="INSERT INTO task(date, name) VALUES(:date, :name)";
	$prep=$pdo->prepare($query);
	$prep->bindValue(':date', $_GET['date']);
	$prep->bindValue(':name', $_GET['name']);
	$prep->execute();
	//header("Location:../index.php");
}
else if($_GET['action'] == 'update'){
	$query="UPDATE task SET name=:name, date=:date WHERE id=:id";
	$prep=$pdo->prepare($query);
	$prep->bindValue(':name', $_GET['name']);
	$prep->bindValue(':date', $_GET['date']);
	$prep->bindValue(':id', $_GET['id']);
	$prep->execute();
    //header("Location:../index.php");
}
else if($_GET['action'] == 'remove'){
	$query="DELETE FROM task WHERE id=:id; ";
	$prep = $pdo->prepare($query);
	$prep->bindValue(':id', $_GET['id']);
	$prep->execute();
	//header("Location:../index.php");
}
}
else {
	$query = "SELECT * FROM task";
	$stmt = $pdo->query($query);
	$donnees = $stmt->fetchAll();
	echo json_encode($donnees);
}

?>