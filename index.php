<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width,
    initial-scale=1, maximum-scale=1" />
	<title>TO DO LIST</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" />
	<link rel="icon" href="img/icon.png"/> <!-- Favicon -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	
</head>

<body>
	<h1> Ma belle To DO LIST</h1>
		<div id="maj">
		<input type="datetime-local" id="date"> </input>
		<img src="https://img.icons8.com/windows/32/000000/overtime.png">
		<input type="text" id="message"> </input>
		<button id="add"> Ajouter la tache </button>
		</div>
		
		<div id="table">
			<table id="task">
			</table>
		</div>
		
		
		

		<div id="popUp" class="pop">

        <div class="content">
            <div class="header">
            </div>
            <div class="body">
            </div>
            <div class="footer">
                <button class="button cancel"> Annuler</button>
                <button class="button validate">Approuver</button>
            </div>
        </div>

    </div>
		
		<!-- https://codepen.io/peiche/pen/vhqym pour le modal suppression -->
		
</body>
</html>