function AlterAdminView(Name, ID)
{
	for(var i = 0; i < 3; i++)
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
	$("#admin_container").load(Name);
}

function RemoveMatch(ID)
{
    swal(
	{
		title: "Realmente deseja remover essa partida?",
		text: "",
		icon: "info",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => 
	{
		if (willDelete) 
		{
			window.location = "removematch?id=" + ID;
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

function RemoveAccount(ID)
{
    swal(
	{
		title: "Realmente deseja remover essa conta?",
		text: "",
		icon: "info",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => 
	{
		if (willDelete) 
		{
			window.location = "removeaccount?id=" + ID;
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

function AccountList(accounts)
{
    var players = JSON.parse(accounts);
    var tables = "";
    for(var c = 0; c < players.length; c++)
	{
	    tables +=   "<tr>" +
    			        "<td style='width:80%;padding:4px;'>" + players[c].name + "</td>" +
    			        "<td style='width:10%;padding:4px;text-align:center'><a href='editaccount?id=" + players[c]._id + "'>Editar</a></td>" +
    			        "<td style='width:10%;padding:4px;text-align:center'><a href='#' onclick=\"RemoveAccount('" + players[c]._id + "')\">Remover</a></td>" +
    			    "</tr>";
	}
	document.getElementById("table").innerHTML = tables;
}

function MatchList(Matchs)
{
    var matchs = JSON.parse(Matchs);
    var tables = "";
    for(var c = 0; c < matchs.length; c++)
	{
	    tables +=   "<tr>" +
    			        "<td style='width:80%;padding:4px;'>" + new Date(matchs[c].date) + "</td>" +
    			        "<td style='width:10%;padding:4px;text-align:center'><a href='editmatch?id=" + matchs[c]._id + "'>Editar</a></td>" +
    			        "<td style='width:10%;padding:4px;text-align:center'><a href='#' onclick=\"RemoveMatch('" + matchs[c]._id + "')\">Remover</a></td>" +
    			    "</tr>";
	}
	document.getElementById("table").innerHTML = tables;
}

function Base64Converter()
{
    var filesSelected = document.getElementById("image").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) 
        {
        	document.getElementById("base64image").value = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(fileToLoad);
    }
}

function CreateMatch()
{
	document.getElementById('date').value = new Date(document.getElementById('localdate').value);
	matchform.submit();
}

function UpdateMatch()
{
	document.getElementById('date').value = new Date(document.getElementById('localdate').value);
	matchform.submit();
}