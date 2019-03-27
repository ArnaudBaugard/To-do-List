$(function() {
	Todo();
	
	function Todo(){
		var but = document.getElementById("task");
		var trHeader = document.createElement('tr');
				
		var firstTh = document.createElement('th');
			firstTh.innerHTML = "Numero"
		
		var secondTh = document.createElement('th');
			secondTh.innerHTML = "Date"
			
		var thirdTh = document.createElement('th');
			thirdTh.innerHTML = "Tache"
		
		var fourthTh = document.createElement('th');
			fourthTh.innerHTML = "Action"
		
		trHeader.appendChild(firstTh);
		trHeader.appendChild(secondTh);
		trHeader.appendChild(thirdTh);
		trHeader.appendChild(fourthTh);
		but.appendChild(trHeader);

		$.ajax({
		type : "GET",
		url : "./includes/service.php",
		datatype : "json",
		success : function(data) {
			data = JSON.parse(data);
			var table = document.getElementById("task");
			for (i=0;i<data.length;i++){
				var firstTr = document.createElement('tr');
				firstTr.setAttribute('class','data');
				
				var firstTd = document.createElement('td');
					firstTd.innerHTML = data[i].id;
					
				var secondTd = document.createElement('td');
					secondTd.innerHTML = data[i].date;
					
				var thirdTd = document.createElement('td');
					thirdTd.innerHTML = data[i].name;
					
				var fourthTd = document.createElement('td');
					fourthTd.innerHTML = "<a id='update' data-id='" +data[i].id + "''> <img src='https://img.icons8.com/material/32/000000/multi-edit.png'> </a>"
					fourthTd.innerHTML += "<a id='delete' data-id='" +data[i].id + "''> <img src='https://img.icons8.com/windows/32/000000/cancel.png'> </a>"
					
				firstTr.appendChild(firstTd);
				firstTr.appendChild(secondTd);
				firstTr.appendChild(thirdTd);
				firstTr.appendChild(fourthTd);
				table.appendChild(firstTr);
			}
		}
	});
	}
	
		var ajoutElement = document.getElementById("add");
		ajoutElement.addEventListener("click",function(){
		var date = document.getElementById("date").value;
		var nom = document.getElementById("message").value;
		$.ajax({
			type : "GET",
			url : "./includes/service.php",
			data : {name : nom,
					date : date,
					action : "add"
					},
			datatype : "json",
			success : function(donnees){
				var table = document.getElementById("task");
				task.innerHTML = "";
				Todo();
			}
		});
	});
	
	
	$("body").on("click","#delete",function(){
		var id = $(this).attr("data-id");
		
		var modal = document.getElementById('popUp');
        modal.style.display = "block";
        var contenu = document.getElementsByClassName("body");
        contenu[0].innerHTML = "Voulez-vous supprimer ?"

        annuler = document.getElementsByClassName("cancel");
        annuler[0].addEventListener("click", function () {
            modal.style.display = "none";
        });

        valider = document.getElementsByClassName("validate");
        valider[0].addEventListener("click", function (e) {
		modal.style.display = "none";
		
		
		$.ajax({
			type : "GET",
			url : "./includes/service.php",
			data : {id : id,
					action : "remove"
					},
			datatype : "json",
			success : function(){
				var table = document.getElementById("task");
				task.innerHTML = "";
				Todo();
			 }
            })
        }, {once : true});
		
    });
	
	
	$("body").on("click","#update",function(){
		var id = $(this).attr("data-id");
		
		var modal = document.getElementById('popUp');
		modal.style.display = "block";
		var contenu = document.getElementsByClassName("body");
		contenu[0].innerHTML = "Modifier le texte"
		
		annuler = document.getElementsByClassName("cancel");
        annuler[0].addEventListener("click", function () {
            modal.style.display = "none";
        });
		
		var inputDate = document.createElement("input");
		inputDate.setAttribute("type", "datetime-local");
		inputDate.setAttribute("id", "newDate");
		contenu[0].appendChild(inputDate);
		
		
		var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "newId");
        contenu[0].appendChild(input);
		
		
		
		valider = document.getElementsByClassName("validate");
        valider[0].addEventListener("click", function (e) {
			var newTask = document.getElementById("newId").value;
			var newDate = document.getElementById("newDate").value;
			modal.style.display = "none";
		
		$.ajax({
			type : "GET",
			url : "./includes/service.php",
			data : {id : id,
					name : newTask,
					date : newDate,
					action : "update"
					},
			datatype : "json",
			success : function(){
				var table = document.getElementById("task");
				task.innerHTML = "";
				Todo();
			}
		})		
	}, {once : true});
});

});