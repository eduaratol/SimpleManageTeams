var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://' + process.env.IP + ':27017/discordserver';
var app = express.Router();
var AdminID = "5b101f9cbcf73139ee92378c";

app.get('/', function(req, res, next)
{
	if (req.cookies['id'])
	{
		res.render('painel',
		{
			script: "AlterView('home', 0);"
		});
	}
	else
	{
		res.render('index');
	}
});

app.get('/logout', function(req, res, next)
{
	res.clearCookie("id");
	res.render('index');
});

app.get('/join', function(req, res, next)
{
	res.render('painel_container/join');
});

app.get('/history', function(req, res, next)
{
	res.render('painel_container/history');
});

app.get('/link', function(req, res, next)
{
	res.render('painel_container/link');
});

app.get('/painel', function(req, res, next)
{
	if (req.cookies['id'])
	{
		res.render('painel',
		{
			script: "AlterView('home', 0);"
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não está logado...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "/"
		});
	}
});

app.get('/admin', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		res.render('admin',
		{
			script: "AlterAdminView('account', 0);"
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.get('/home', function(req, res, next)
{
	var item = {
		_id: new ObjectId(req.cookies['id'])
	};
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			db.collection('user').findOne(item, function(err, result)
			{
				if (result && !err)
				{
					res.render('painel_container/home',
					{
						name: result.name,
						image: result.image
					});
				}
				else
				{
					res.render('info',
					{
						title: "Você não está logado...",
						icone: "error",
						description: "Favor logar novamente.",
						redirect: "/"
					});
				}
				db.close();
			});
		}
	});
});

app.get('/rank', function(req, res, next)
{
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			var players = [];
			var cursor = db.collection("user").find().sort(
			{
				wins: -1
			});
			cursor.forEach(function(doc, err)
			{
				players.push(
				{
					name: doc.name,
					wins: doc.wins,
					image: doc.image,
					vote: doc.vote
				});
			},
			function()
			{
				res.render('painel_container/rank',
				{
					script: "RankList('" + JSON.stringify(players) + "');"
				});
			});
		}
	});
});

app.get('/account', function(req, res, next)
{
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			var players = [];
			var cursor = db.collection("user").find();
			cursor.forEach(function(doc, err)
			{
				players.push(
				{
					_id: doc._id,
					name: doc.name
				});
			},
			function()
			{
				res.render('admin_container/account',
				{
					script: "AccountList('" + JSON.stringify(players) + "');"
				});
			});
		}
	});
});

app.get('/editaccount', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		res.render('admin_container/editaccount');
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.get('/removeaccount', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				db.collection('user').remove(
				{
					_id: ObjectId(req.query['id'])
				});
				res.render('info',
				{
					title: "Conta Removida!",
					icone: "success",
					description: "",
					redirect: "admin"
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.get('/match', function(req, res, next)
{
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			var matchs = [];
			var cursor = db.collection("match").find();
			cursor.forEach(function(doc, err)
			{
				matchs.push(
				{
					_id: doc._id,
					date: doc.date
				});
			},
			function()
			{
				res.render('admin_container/match',
				{
					script: "MatchList('" + JSON.stringify(matchs) + "');"
				});
			});
		}
	});
});

app.get('/editmatch', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		res.render('admin_container/editmatch');
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.get('/removematch', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				db.collection('match').remove(
				{
					_id: ObjectId(req.query['id'])
				});
				res.render('info',
				{
					title: "Partida Removida!",
					icone: "success",
					description: "",
					redirect: "admin"
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.get('/start', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		res.render('admin_container/start');
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.get('/progress', function(req, res, next)
{
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			var cursor = db.collection("match").find().sort(
			{
				date: -1
			}).limit(1);
			cursor.forEach(function(doc, err)
			{
				var t1 = [];
				var t2 = [];
				var votewin = doc.votewin;
				var time1 = doc.time1;
				var time2 = doc.time2;
				var DateMatch = doc.date;
				if (time1 && time2)
				{
					for (var c = 0; c < time1.length; c++)
					{
						t1.push(
						{
							name: time1[c].name,
							image: time1[c].image
						});
					}
					for (var c = 0; c < time2.length; c++)
					{
						t2.push(
						{
							name: time2[c].name,
							image: time2[c].image
						});
					}
					res.render('painel_container/progress',
					{
						script: "ProgressList('" + JSON.stringify(t1) + "','" + JSON.stringify(t2) + "'," + votewin + ",'" + DateMatch + "');"
					});
				}
				else
				{
					res.render('painel_container/progress',
					{
						script: "ProgressList('','','',');"
					});
				}
			},
			function() {});
		}
	});
});

app.get('/confirmed', function(req, res, next)
{
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			var DateMatch;
			var votes = [0, 0, 0, 0];
			var players = [];
			var cursor = db.collection("match").find().sort(
			{
				date: -1
			}).limit(1);
			cursor.forEach(function(doc, err)
				{
					DateMatch = doc.date;
				},
				function() {});
			var cursor2 = db.collection("user").find().sort(
			{
				presence: 1
			});
			cursor2.forEach(function(doc, err)
			{
				if (doc.presence)
				{
					switch (doc.vote)
					{
						case 1:
							votes[1]++;
							break;
						case 2:
							votes[2]++;
							break;
						case 3:
							votes[3]++;
							break;
						default:
							votes[0]++;
							break;
					}
					players.push(
					{
						name: doc.name,
						wins: doc.wins,
						image: doc.image,
						vote: doc.vote
					});
				}
			},
			function()
			{
				var votewin = Math.max.apply(Math, votes)
				for (var c = 0; c < votes.length; c++)
				{
					if (votewin == votes[c])
					{
						res.render('painel_container/confirmed',
						{
							script: "ConfirmList('" + JSON.stringify(players) + "'," + c + ",'" + DateMatch + "');"
						});
						return;
					}
				}
			});
		}
	});
});

app.post('/startmatch', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				var IDMatch;
				var votes = [0, 0, 0, 0];
				var players = [];
				var time1 = [];
				var time2 = [];
				var cursor = db.collection("match").find().sort(
				{
					date: -1
				}).limit(1);
				cursor.forEach(function(doc, err)
					{
						IDMatch = doc._id;
					},
					function() {});
				var cursor2 = db.collection("user").find().sort(
				{
					presence: 1
				});
				cursor2.forEach(function(doc, err)
				{
					if (doc.presence)
					{
						switch (doc.vote)
						{
							case 1:
								votes[1]++;
								break;
							case 2:
								votes[2]++;
								break;
							case 3:
								votes[3]++;
								break;
							default:
								votes[0]++;
								break;
						}
						players.push(
						{
							_id: doc._id,
							name: doc.name,
							wins: doc.wins,
							image: doc.image,
							vote: doc.vote
						});
					}
				},
				function()
				{
					var votewin = Math.max.apply(Math, votes)
					for (var c = 0; c < votes.length; c++)
					{
						if (votewin == votes[c])
						{
							if (votewin == 3)
							{
								if (players.length > 8)
								{
									players = players.slice(0, 8)
								}
							}
							else
							{
								if (players.length > 10)
								{
									players = players.slice(0, 8)
								}
							}
							players = shuffle(players);
							for (var c = 0; c < players.length; c++)
							{
								if (c < parseInt(players.length / 2))
								{
									time1.push(players[c]);
								}
								else
								{
									time2.push(players[c]);
								}
							}
							db.collection('match').update(
							{
								_id: IDMatch
							},
							{
								'$set':
								{
									votewin: c,
									time1: time1,
									time2: time2
								}
							}, function(err, result)
							{
								if (result && !err)
								{
									res.render('admin',
									{
										script: "AlterAdminView('start', 2);"
									});
									console.log('(Start Match)');
								}
								db.close();
							});
							return;
						}
					}
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.post('/presence', function(req, res, next)
{
	var presence = req.body.presence;
	if (presence)
	{
		presence = new Date();
	}
	var item = {
		_id: new ObjectId(req.cookies['id'])
	};
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			db.collection('user').update(item,
			{
				'$set':
				{
					presence: presence
				}
			}, function(err, result)
			{
				if (result && !err)
				{
					res.render('painel',
					{
						script: "AlterView('join', 1);"
					});
					console.log('(Presence) Presence: ' + presence + ' ID: ' + item._id);
				}
				db.close();
			});
		}
	});
});

app.post('/vote', function(req, res, next)
{
	var vote = parseInt(req.body.vote);
	if (vote != 1 && vote != 2 && vote != 3)
	{
		vote = 0;
	}
	var item = {
		_id: new ObjectId(req.cookies['id'])
	};
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			db.collection('user').update(item,
			{
				'$set':
				{
					vote: vote
				}
			}, function(err, result)
			{
				if (result && !err)
				{
					res.render('painel',
					{
						script: "AlterView('join', 1);"
					});
					console.log('(Vote) Vote: ' + vote + ' ID: ' + item._id);
				}
				db.close();
			});
		}
	});
});

app.post('/login', function(req, res, next)
{
	MongoClient.connect(url, function(err, db)
	{
		if (!err)
		{
			db.collection('user').findOne(
			{
				login: req.body.login,
				password: req.body.password
			}, function(err, result)
			{
				if (result && !err)
				{
					console.log('(LogIn) ID: ' + result._id + ' User: ' + result.name);
					res.cookie('id', result._id,
					{
						maxAge: 86400000,
						httpOnly: true
					});
					res.render('info',
					{
						title: "Logado com sucesso!",
						icone: "success",
						description: "Seja Bem-Vindo!!!",
						redirect: "painel"
					});
				}
				else
				{
					res.render('info',
					{
						title: "Conta não encontrada.",
						icone: "error",
						description: "Favor verificar se os campos foram digitados corretamente.",
						redirect: "/"
					});
				}
				db.close();
			});
		}
	});
});

app.post('/creatematch', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				var item = {
					date: new Date(req.body.date)
				};
				db.collection('match').insertOne(item, function(err, result)
				{
					if (result && !err)
					{
						res.render('info',
						{
							title: "Partida criada com sucesso!",
							icone: "success",
							description: "",
							redirect: "admin"
						});
						console.log('(Create Match) Date: ' + new Date(req.body.date));
					}
					db.close();
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.post('/createaccount', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				var item = {
					name: req.body.name,
					login: req.body.login,
					email: req.body.email,
					password: req.body.password,
					image: req.body.base64image,
					vote: 0,
					wins: 0
				};
				db.collection('user').insertOne(item, function(err, result)
				{
					if (err)
					{
						res.render('info',
						{
							title: "Erro ao criar a conta!",
							icone: "error",
							description: "Não foi possivel criar a conta...",
							redirect: "admin"
						});
					}
					else
					{
						console.log('(Create Account)');
						res.render('info',
						{
							title: "Conta Criada!",
							icone: "success",
							description: "Conta criada com sucesso!",
							redirect: "admin"
						});
					}
					db.close();
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.post('/updatematch', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				db.collection('match').update(
				{
					_id: ObjectId(req.body.id)
				},
				{
					'$set':
					{
						date: new Date(req.body.date),
						image: req.body.base64image,
						timewin: req.body.timewin
					}
				}, function(err, result)
				{
					if (result && !err)
					{
						res.render('admin',
						{
							script: "AlterAdminView('match', 1);"
						});
						console.log('(UpdateMatch) Date: ' + req.body.date + " Win: " + req.body.timewin);
					}
					db.close();
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.post('/updateaccount', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				db.collection('user').update(
				{
					_id: ObjectId(req.body.id)
				},
				{
					'$set':
					{
						name: req.body.name,
						image: req.body.base64image
					}
				}, function(err, result)
				{
					if (result && !err)
					{
						res.render('admin',
						{
							script: "AlterAdminView('account', 0);"
						});
						console.log('(UpdateAccount) Name: ' + req.body.name);
					}
					db.close();
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.post('/updatewinup', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				var cursor = db.collection('user').find(
				{
					_id: ObjectId(req.body.id2)
				});
				cursor.forEach(function(doc, err)
				{
					db.collection('user').update(
					{
						_id: ObjectId(req.body.id2)
					},
					{
						'$set':
						{
							wins: (doc.wins + 1)
						}
					}, function(err, result)
					{
						if (result && !err)
						{
							res.render('admin',
							{
								script: "AlterAdminView('account', 0);"
							});
							console.log('(UpdateWin) Name: ' + doc.name);
						}
						db.close();
					});
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.post('/updatewindown', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				var cursor = db.collection('user').find(
				{
					_id: ObjectId(req.body.id3)
				});
				cursor.forEach(function(doc, err)
				{
					db.collection('user').update(
					{
						_id: ObjectId(req.body.id3)
					},
					{
						'$set':
						{
							wins: (doc.wins - 1)
						}
					}, function(err, result)
					{
						if (result && !err)
						{
							res.render('admin',
							{
								script: "AlterAdminView('account', 0);"
							});
							console.log('(UpdateWin) Name: ' + doc.name);
						}
						db.close();
					});
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

app.post('/reset', function(req, res, next)
{
	if (req.cookies['id'] == AdminID)
	{
		MongoClient.connect(url, function(err, db)
		{
			if (!err)
			{
				db.collection('user').update(
				{},
				{
					'$set':
					{
						presence: null
					}
				},
				{
					multi: true
				}, function(err, result)
				{
					if (result && !err)
					{
						res.render('admin',
						{
							script: "AlterAdminView('start', 2);"
						});
						console.log('(Reset)');
					}
					db.close();
				});
			}
		});
	}
	else
	{
		res.render('info',
		{
			title: "Você não é administrador...",
			icone: "error",
			description: "Favor logar novamente.",
			redirect: "painel"
		});
	}
});

function shuffle(array)
{
	var tmp, current, top = array.length;
	if (top)
		while (--top)
		{
			current = Math.floor(Math.random() * (top + 1));
			tmp = array[current];
			array[current] = array[top];
			array[top] = tmp;
		}
	return array;
}

module.exports = app;