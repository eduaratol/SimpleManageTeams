function AlterView(Name, ID)
{
	for(var i = 0; i < 5; i++)
	{
		if(ID == i)
		{
			document.getElementById("menubutton" + i).className = "gamebox gamebox--active";
		}
		else
		{
			document.getElementById("menubutton" + i).className = "gamebox";
		}
	}
	$("#painel_container").load(Name);
}

function ChoseGame(ID)
{
	var GameName;
	switch (ID) 
	{
		case 1:
			GameName = "League of Legends";
			break;
		case 2:
			GameName = "Counter-Strike";
			break;
		case 3:
			GameName = "Left 4 Dead 2";
			break;
		default:
			GameName = "Indiferente";
			break;
	}
	swal(
	{
		title: "Você confirma seu voto?",
		text: "O jogo escolhido foi '" + GameName + "'",
		icon: "info",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => 
	{
		if (willDelete) 
		{
			document.getElementById("vote").value = ID;
			document.getElementById("voteform").submit();
			AlterView('join', 1);
			swal("Voto computado com sucesso!", 
			{
				icon: "success",
			});
		} 
		else 
		{
			swal("Operação cancelada!",
			{
				icon: "error",
			});
		}
	});
}

function RankList(players)
{
	var player = JSON.parse(players);
	var tables = "";

	for(var c = 0; c < player.length; c++)
	{
		tables +=	"<tr class='__hovered '>" +
					"<td class='__topPlace __center'>" +
					"	<span> " + (c+1) + " </span>" +
					"</td>" +
					"<td class='__topProfile'>" +
					"	<div class='history__table__winner'>" +
					"		<div class='history__table__winner__img'>" +
					"			<img src='" + player[c].image + "' alt='' />" +
					"		</div>"+
					"		<span class='uname'>" +
					"			  " + player[c].name +
					"		</span>" +
					"	</div>" +
					"</td>" +
					"<td class='__topGames' >" +
					"	<span style='margin-left:20px;'>" + player[c].wins + "</span>" +
					"</td>"+
					"</tr>";
	}
	document.getElementById("tabela").innerHTML = tables;
}

function ProgressList(time1, time2, votewin, datematch)
{
	if(datematch)
	{
		var playertime1 = JSON.parse(time1);
		var playertime2 = JSON.parse(time2);
		var tables = "";
		var gamename;
		var gameimg;
		var gameimgbackground;
		
		switch (votewin) 
		{
			case 1:
				gamename = "League of Legends";
				gameimg = "images/lolicon.png";
				gameimgbackground = "images/lolbackground.png";
				break;
			case 2:
				gamename = "Counter-Strike";
				gameimg = "images/csgoicon.png";
				gameimgbackground = "images/csgobackground.JPG";
				break;
			case 3:
				gamename = "Left 4 Dead 2";
				gameimg = "images/left4dead2icon.png";
				gameimgbackground = "images/left4dead2background.jpg";
				break;
			default:
				gamename = "Indiferente";
				gameimg = "images/qualquericon.png";
				gameimgbackground = "";
				break;
		}
		document.getElementById("gameimgbackground").style.backgroundImage = "url('" + gameimgbackground + "')";
		document.getElementById("gameimg").src = gameimg;
		document.getElementById("gamename").innerHTML = gamename;
		var date = new Date(datematch);
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		if (day < 10) 
		{
		  day = '0' + day;
		}
		if (month < 10) 
		{
		  month = '0' + month;
		}
		var formattedDate = day + '/' + month + '/' + year + " ás " + date.getHours() + ":" + date.getMinutes() + "h";
		document.getElementById("datematch").innerHTML = formattedDate;
		
		tables +=	"<thead>" +
						"<tr>" +
							"<th class='__topProfile'><span style='color:White;font-size:20px;'>Time 1:</span></th>" +
						"</tr>" +
					"</thead><tbody id='t1'>";
		
		for(var c = 0; c < playertime1.length; c++)
		{
			
			tables +=	"<tr class='__hovered '>" +
							"<td class='__topProfile'>" +
								"<div class='history__table__winner'>" +
									"<div class='history__table__winner__img'>" +
										"<img src='" + playertime1[c].image + "' alt='' />" +
									"</div>" +
									"<span >" +
										  playertime1[c].name +
									"</span>" +
								"</div>" +
							"</td>" +
						"</tr>";
		}
		
		tables +=	"</tbody><thead>" +
						"<tr>" +
							"<th class='__topProfile'><span style='color:White;font-size:20px;'>Time 2:</span></th>" +
						"</tr>" +
					"</thead><tbody id='t2'>";
		
		for(var c = 0; c < playertime2.length; c++)
		{
			
			tables +=	"<tr class='__hovered '>" +
							"<td class='__topProfile'>" +
								"<div class='history__table__winner'>" +
									"<div class='history__table__winner__img'>" +
										"<img src='" + playertime2[c].image + "' alt='' />" +
									"</div>" +
									"<span >" +
										  playertime2[c].name +
									"</span>" +
								"</div>" +
							"</td>" +
						"</tr>";
		}
		document.getElementById("gameimgbackground").innerHTML = tables + "</tbody>";
	}
	else
	{
		document.getElementById("gameimgbackground").innerHTML = "Nenhuma partida em andamento!";
	}
}

function ConfirmList(players, votewin, datematch)
{
	var player = JSON.parse(players);
	var tables = "";
	var gamename;
	var gameimg;
	
	switch (votewin) 
	{
		case 1:
			gamename = "League of Legends";
			gameimg = "images/lolicon.png";
			break;
		case 2:
			gamename = "Counter-Strike";
			gameimg = "images/csgoicon.png";
			break;
		case 3:
			gamename = "Left 4 Dead 2";
			gameimg = "images/left4dead2icon.png";
			break;
		default:
			gamename = "Indiferente";
			gameimg = "images/qualquericon.png";
			break;
	}
	document.getElementById("gameimg").src = gameimg;
	document.getElementById("gamename").innerHTML = gamename;
	var date = new Date(datematch);
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	if (day < 10) 
	{
	  day = '0' + day;
	}
	if (month < 10) 
	{
	  month = '0' + month;
	}
	var formattedDate = day + '/' + month + '/' + year + " ás " + date.getHours() + ":" + date.getMinutes() + "h";
	document.getElementById("datematch").innerHTML = formattedDate;
	
	for(var c = 0; c < player.length; c++)
	{
		var playervote;
		switch (player[c].vote) 
		{
			case 1:
				playervote = "images/lolicon.png";
				break;
			case 2:
				playervote = "images/csgoicon.png";
				break;
			case 3:
				playervote = "images/left4dead2icon.png";
				break;
			default:
				playervote = "images/qualquericon.png";
				break;
		}
		
		tables +=	"<tr class='__hovered '>" +
					"<td class='__topPlace __center'>" +
					"	<span> " + (c+1) + " </span>" +
					"</td>" +
					"<td class='__topProfile'>" +
					"	<div class='history__table__winner'>" +
					"		<div class='history__table__winner__img'>" +
					"			<img src='" + player[c].image + "' alt='' />" +
					"		</div>"+
					"		<span class='uname'>" +
					"			  " + player[c].name +
					"		</span>" +
					"	</div>" +
					"</td>" +
					"<td class='__topGames' >" +
					"	<span style='margin-left:20px;'>" + player[c].wins + "</span>" +
					"</td>"+
					"<td class='__topWins'>" +
					"	<div style='text-align:center;'>"+
					"		<img src='" + playervote + "' alt='' />" +
					"	</div>" +
					"</td>" +
					"</tr>";
	}
	document.getElementById("tabela").innerHTML = tables;
}

function ConfirmPresence(Really)
{
	if(Really)
	{
		swal(
		{
			title: "Você confirma sua presença na proxima partida?",
			text: "OBS: Caso não consiga participar favor cancelar sua presença.",
			icon: "info",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => 
		{
			if (willDelete) 
			{
				document.getElementById("presence").value = true;
				document.getElementById("presenceform").submit();
				swal("Presença confirmada!", 
				{
					icon: "success",
				});
			} 
			else 
			{
				swal("Operação cancelada!",
				{
					icon: "error",
				});
			}
		});
	}
	else
	{
		swal(
		{
			title: "Você realmente quer desistir de participar da proxima partida?",
			text: "OBS: Caso queira participar novamente sua posição não será a mesma.",
			icon: "info",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => 
		{
			if (willDelete) 
			{
				document.getElementById("presence").value = "";
				document.getElementById("presenceform").submit();
				swal("Desistência confirmada!", 
				{
					icon: "success",
				});
			} 
			else 
			{
				swal("Operação cancelada!",
				{
					icon: "error",
				});
			}
		});
	}
}