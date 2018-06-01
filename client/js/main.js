var mazawar = function()
{
	'use strict';
	var initAjaxToken = function()
	{
		$.ajaxSetup(
		{
			headers:
			{
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
	};
	return {
		init: function()
		{
			initAjaxToken();
		}
	}
}();
$(document).ready(function()
{
	$('.moretext').on('click', function()
	{
		$(".content.seo.front").css('height', '100%');
		$(".moretext").hide();
		$(".moretextUp").show();
	});
	$('.moretextUp').on('click', function()
	{
		$('html, body').scrollTop(0);
		$(".content.seo.front").css('height', '160px');
		$(".moretext").show();
		$(".moretextUp").hide();
	});
	$('.save-trade-link-input').keypress(function(e)
	{
		if (e.which == 13) $('.save-trade-link-input-btn').click()
	}).on('paste', function()
	{
		setTimeout(function()
		{
			$('.save-trade-link-input-btn').click();
		}, 0);
	});
	$('.save-trade-link-input-btn').click(function()
	{
		var that = $(this).next();
		$.ajax(
		{
			url: '/settings/save',
			type: 'get',
			dataType: 'json',
			data:
			{
				trade_link: $('.save-trade-link-input').val()
			},
			success: function(data)
			{
				if (data.status == 'success')
				{
					$('#linkBlock').slideUp();
					$('.no-link').removeClass('no-link');
					setTimeout(function()
					{
						location.reload();
					}, 1000);
					if (data.msg) return walert('success', data.msg);
				}
				if (data.msg) walert('error', data.msg);
			},
			error: function()
			{
				walert('error', 'ajaxError');
			}
		});
		return false;
	});
	$(".settings__sheckbox input").on('click', function()
	{
		if ($(".settings__sheckbox input").prop("checked"))
		{
			walert('success', 'First modal will be shown!');
			$.cookie('settings.firstform', null,
			{
				expires: -1
			});
			$.cookie('settings.firstform', 'yes');
		}
		else
		{
			$.cookie('settings.firstform', null,
			{
				expires: -1
			});
			$.cookie('settings.firstform', 'no');
			walert('success', 'First modal will not be shown!');
		}
	});
	$('.modal-put-items__check input.rhidden-input').on('click', function()
	{
		if ($(".modal-put-items__check input.rhidden-input").prop("checked"))
		{
			$.cookie('settings.firstform', null,
			{
				expires: -1
			});
			$.cookie('settings.firstform', 'no');
			walert('success', 'First modal will not be shown!');
		}
		else
		{
			walert('success', 'First modal will be shown!');
			$.cookie('settings.firstform', null,
			{
				expires: -1
			});
			$.cookie('settings.firstform', 'yes');
		}
	});
	$(".modal-put-items__btn a.btn_green.btn_full").on('click', function()
	{
		var statusMOdal = $.cookie('settings.firstform');
		console.log("STATUS MODAL1" + statusMOdal);
		if (statusMOdal == 'no')
		{
			$.cookie('settings.firstformWHEREGO', 'no',
			{
				expires: -1
			});
			$.cookie('settings.firstformWHEREGO', 'GO_STEAM');
		}
	});
	$(".modal-put-items__btn .modal-firststep").on('click', function()
	{
		var statusMOdal = $.cookie('settings.firstform');
		console.log("STATUS MODAL2" + statusMOdal);
		if (statusMOdal == 'no')
		{
			$.cookie('settings.firstformWHEREGO', 'no',
			{
				expires: -1
			});
			$.cookie('settings.firstformWHEREGO', 'LOAD_MODAL');
		}
	});
	$(".gamespace button.btn.btn-orange.btn_full").on('click', function()
	{
		var checkWhere = $.cookie('settings.firstformWHEREGO');
		var statusMOdal = $.cookie('settings.firstform');
		console.log(checkWhere);
		if (statusMOdal == 'no')
		{
			if (checkWhere == 'LOAD_MODAL')
			{
				$(".modal-put-items__btn .modal-firststep").click();
			}
			if (checkWhere == 'GO_STEAM')
			{
				window.open($(".modal-put-items__btn a.btn_green.btn_full").attr('href'));
				$(".modal-close").click();
			}
		}
	});
	setTimeout(function()
	{
		$(".content.seo.front").css('height', '160');
	}, 3000);
});
var current_rating = function(id, num)
{
	for (var o = 5; o > num; o--)
	{
		$("#rating_" + id + "_" + o).addClass('ratehovers');
	}
}
var ratings_off = function(id)
{
	$(".ratehover").removeClass('ratehovers');
}
var rate_post = function(id, rate)
{
	$.ajax(
	{
		url: '/rate/' + id + '/' + rate,
		type: 'get',
		dataType: 'json',
		success: function(data)
		{
			walert(data.type, data.text);
		}
	});
}

function countdown()
{
	var remTime = parseInt($("#neewWAIT").html());
	var s = Math.floor(remTime);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);
	h %= 24;
	m %= 60;
	s %= 60;
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	remTime = remTime - 1;
	if (remTime <= 0)
	{
		$("#neewWAIT").html('this');
		$("#DAYMNECOIN").html('Get 10 freeby Coin’s');
	}
	else
	{
		$("#neewWAIT").html(parseInt(remTime));
		$("#DAYMNECOIN").html("You can get in  " + h + ":" + m + ":" + s);
		setTimeout(countdown, 1000);
	}
}
if ($("#neewWAIT").html() != 'this')
{
	countdown('');
}

function countdowns()
{
	var remTime = parseInt($("#neewWAITSkin").html());
	var s = Math.floor(remTime);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);
	h %= 24;
	m %= 60;
	s %= 60;
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	remTime = remTime - 1;
	if (remTime <= 0)
	{
		$("#neewWAITSkin").html('this');
		$("#DAYMNE").html('Get a free CS:GO skin');
	}
	else
	{
		$("#neewWAITSkin").html(parseInt(remTime));
		$("#DAYMNE").html("You can get in  " + h + ":" + m + ":" + s);
		setTimeout(countdowns, 1000);
	}
}
if ($("#neewWAITSkin").html() != 'this')
{
	countdowns('');
}
$(document).ready(function()
{
	//not main
	$('.b-f-q-table-list').perfectScrollbar(
	{
		useBothWheelAxes: true,
		suppressScrollX: true
	});
	$('.b-f-errors-list').perfectScrollbar(
	{
		useBothWheelAxes: true,
		suppressScrollX: true
	});
	$('.b-f-subnav-btn').on('click', function()
	{
		$('.b-f-subnav-btn').removeClass('active');
		$('.b-freebie-tab').hide();
		$(this).addClass('active');
		var tab_class = '.' + $(this).attr('data-tab');
		$(tab_class).show();
	});
	$("#DAYMNECOIN").click(function()
	{
		$.get("/freebotcoin", function(data)
		{
			if (data == 1)
			{
				walert('success', "Great, you are in the line. Await for crediting!");
				appendUser('skin1');
			}
			if (data == 2)
			{
				walert('error', "You are already in the line. Await for crediting!");
			}
			if (data == 0)
			{
				walert('error', "Unknown error! Please approach site support!");
			}
			if (data == 55)
			{
				walert('error', "Sorry but you got enough. We do not give away more than 5 coins a day!");
			}
			if (data == 56)
			{
				walert('error', "Sorry but you are banned in chat");
			}
			if (data == 10)
			{
				walert('error', "Big line! Try again later.");
			}
			if (data == 100)
			{
				walert('error', "Today's limit reached! Try tomorrow.");
			}
			if (data == 15)
			{
				walert('error', "You need to point out the exchange link i the trade");
			}
			if (data == 86400)
			{
				walert('error', "You must wait!");
			}
			var reg = /161111111-/g;
			if (reg.test(data))
			{
				data = data.replace("161111111-", "");
				walert('error', "You haven't added your nickname to the website. Add <b>csfate.com</b> to your nick and try again. If you've already done that this maust be cache. You need to wait for a little bit. Your current nickname: " + data);
			}
		});
	});
	$("#DAYMNE").click(function()
	{
		$.get("/freebot", function(data)
		{
			if (data == 1)
			{
				walert('success', "Great, you are in the line. Await for crediting!");
				appendUser('skin');
			}
			if (data == 2)
			{
				walert('error', "You are already in the line. Await for crediting!");
			}
			if (data == 0)
			{
				walert('error', "Unknown error! Please approach site support!");
			}
			if (data == 3)
			{
				walert('error', "You didn't particiapte in the previous game. You can get your prize after you lose.");
			}
			if (data == 4)
			{
				walert('error', "Sorry but you got enough. We do not give away prizes for winners!");
			}
			if (data == 5)
			{
				walert('error', "You got yours for the current game. You can get your prize after you lose.");
			}
			if (data == 55)
			{
				walert('error', "Sorry but you got enough. We do not give away more than 2 skins a day!");
			}
			if (data == 56)
			{
				walert('error', "Sorry but you are banned in chat!");
			}
			if (data == 86400)
			{
				walert('error', "You must wait!");
			}
			if (data == 10)
			{
				walert('error', "Big line! Try again later.");
			}
			if (data == 15)
			{
				walert('error', "You need to point out the exchange link i the trade");
			}
			var reg = /161111111-/g;
			if (reg.test(data))
			{
				data = data.replace("161111111-", "");
				walert('error', "You haven't added your nickname to the website. Add <b>csfate.com</b> to your nick and try again. If you've already done that this maust be cache. You need to wait for a little bit. Your current nickname: " + data);
			}
		});
	});
});

function appendUser(types = '')
{
	if (types == 'skin')
	{
		var countLi = $('.freebie-table-skins .b-f-q-table-list-ordin li').length;
	}
	else
	{
		var countLi = $('.freebie-table-coin .b-f-q-table-list-ordin li').length;
	}
	var html = '<li class="b-f-q-table-item">';
	html += '<div class="b-f-q-table-item-cell b-f-q-player-photo">';
	html += '<img class="b-f-q-photo-src" src="' + $(".dropdown .user__photo-src").attr('src') + '">';
	html += '</div>';
	html += '<div class="b-f-q-table-item-cell b-f-q-player-info">';
	html += '<span class="b-f-q-player-order">' + (countLi + 1) + '</span>';
	html += '<p class="b-f-q-player-name">' + $(".dropdown .user__body-name").html() + '</p>';
	html += '</div>';
	html += '</li>';
	if (types == 'skin')
	{
		$('.freebie-table-skins .b-f-q-table-list-ordin').append(html);
	}
	else
	{
		$('.freebie-table-coin .b-f-q-table-list-ordin').append(html)
	}
	return true;
}