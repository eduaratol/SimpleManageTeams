/*
 * Third party
 */
! function(a, b)
{
	"function" == typeof define && define.amd ? define([], function()
	{
		return a.svg4everybody = b()
	}) : "object" == typeof module && module.exports ? module.exports = b() : a.svg4everybody = b()
}(this, function()
{
	function a(a, b, c)
	{
		if (c)
		{
			var d = document.createDocumentFragment(),
				e = !b.hasAttribute("viewBox") && c.getAttribute("viewBox");
			e && b.setAttribute("viewBox", e);
			for (var f = c.cloneNode(!0); f.childNodes.length;) d.appendChild(f.firstChild);
			a.appendChild(d)
		}
	}

	function b(b)
	{
		b.onreadystatechange = function()
		{
			if (4 === b.readyState)
			{
				var c = b._cachedDocument;
				c || (c = b._cachedDocument = document.implementation.createHTMLDocument(""), c.body.innerHTML = b.responseText, b._cachedTarget = {}), b._embeds.splice(0).map(function(d)
				{
					var e = b._cachedTarget[d.id];
					e || (e = b._cachedTarget[d.id] = c.getElementById(d.id)), a(d.parent, d.svg, e)
				})
			}
		}, b.onreadystatechange()
	}

	function c(c)
	{
		function e()
		{
			for (var c = 0; c < o.length;)
			{
				var h = o[c],
					i = h.parentNode,
					j = d(i);
				if (j)
				{
					var k = h.getAttribute("xlink:href") || h.getAttribute("href");
					if (f)
						if (!g.validate || g.validate(k, j, h))
						{
							i.removeChild(h);
							var l = k.split("#"),
								q = l.shift(),
								r = l.join("#");
							if (q.length)
							{
								var s = m[q];
								s || (s = m[q] = new XMLHttpRequest, s.open("GET", q), s.send(), s._embeds = []), s._embeds.push(
								{
									parent: i,
									svg: j,
									id: r
								}), b(s)
							}
							else a(i, j, document.getElementById(r))
						}
					else ++c, ++p
				}
				else ++c
			}(!o.length || o.length - p > 0) && n(e, 67)
		}
		var f, g = Object(c),
			h = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
			i = /\bAppleWebKit\/(\d+)\b/,
			j = /\bEdge\/12\.(\d+)\b/,
			k = /\bEdge\/.(\d+)\b/,
			l = window.top !== window.self;
		f = "polyfill" in g ? g.polyfill : h.test(navigator.userAgent) || (navigator.userAgent.match(j) || [])[1] < 10547 || (navigator.userAgent.match(i) || [])[1] < 537 || k.test(navigator.userAgent) && l;
		var m = {},
			n = window.requestAnimationFrame || setTimeout,
			o = document.getElementsByTagName("use"),
			p = 0;
		f && e()
	}

	function d(a)
	{
		for (var b = a;
			"svg" !== b.nodeName.toLowerCase() && (b = b.parentNode););
		return b
	}
	return c
});
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a)
{
	(jQuery.browser = jQuery.browser ||
	{}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
/* perfect-scrollbar v0.6.16 */
! function t(e, n, r)
{
	function o(i, s)
	{
		if (!n[i])
		{
			if (!e[i])
			{
				var a = "function" == typeof require && require;
				if (!s && a) return a(i, !0);
				if (l) return l(i, !0);
				var c = new Error("Cannot find module '" + i + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			var u = n[i] = {
				exports:
				{}
			};
			e[i][0].call(u.exports, function(t)
			{
				var n = e[i][1][t];
				return o(n ? n : t)
			}, u, u.exports, t, e, n, r)
		}
		return n[i].exports
	}
	for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
	return o
}(
{
	1: [function(t, e, n)
	{
		"use strict";

		function r(t)
		{
			t.fn.perfectScrollbar = function(t)
			{
				return this.each(function()
				{
					if ("object" == typeof t || "undefined" == typeof t)
					{
						var e = t;
						l.get(this) || o.initialize(this, e)
					}
					else
					{
						var n = t;
						"update" === n ? o.update(this) : "destroy" === n && o.destroy(this)
					}
				})
			}
		}
		var o = t("../main"),
			l = t("../plugin/instances");
		if ("function" == typeof define && define.amd) define(["jquery"], r);
		else
		{
			var i = window.jQuery ? window.jQuery : window.$;
			"undefined" != typeof i && r(i)
		}
		e.exports = r
	},
	{
		"../main": 7,
		"../plugin/instances": 18
	}],
	2: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			var n = t.className.split(" ");
			n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
		}

		function o(t, e)
		{
			var n = t.className.split(" "),
				r = n.indexOf(e);
			r >= 0 && n.splice(r, 1), t.className = n.join(" ")
		}
		n.add = function(t, e)
		{
			t.classList ? t.classList.add(e) : r(t, e)
		}, n.remove = function(t, e)
		{
			t.classList ? t.classList.remove(e) : o(t, e)
		}, n.list = function(t)
		{
			return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
		}
	},
	{}],
	3: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			return window.getComputedStyle(t)[e]
		}

		function o(t, e, n)
		{
			return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
		}

		function l(t, e)
		{
			for (var n in e)
			{
				var r = e[n];
				"number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
			}
			return t
		}
		var i = {};
		i.e = function(t, e)
		{
			var n = document.createElement(t);
			return n.className = e, n
		}, i.appendTo = function(t, e)
		{
			return e.appendChild(t), t
		}, i.css = function(t, e, n)
		{
			return "object" == typeof e ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
		}, i.matches = function(t, e)
		{
			return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
		}, i.remove = function(t)
		{
			"undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
		}, i.queryChildren = function(t, e)
		{
			return Array.prototype.filter.call(t.childNodes, function(t)
			{
				return i.matches(t, e)
			})
		}, e.exports = i
	},
	{}],
	4: [function(t, e, n)
	{
		"use strict";
		var r = function(t)
		{
			this.element = t, this.events = {}
		};
		r.prototype.bind = function(t, e)
		{
			"undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
		}, r.prototype.unbind = function(t, e)
		{
			var n = "undefined" != typeof e;
			this.events[t] = this.events[t].filter(function(r)
			{
				return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1)
			}, this)
		}, r.prototype.unbindAll = function()
		{
			for (var t in this.events) this.unbind(t)
		};
		var o = function()
		{
			this.eventElements = []
		};
		o.prototype.eventElement = function(t)
		{
			var e = this.eventElements.filter(function(e)
			{
				return e.element === t
			})[0];
			return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e
		}, o.prototype.bind = function(t, e, n)
		{
			this.eventElement(t).bind(e, n)
		}, o.prototype.unbind = function(t, e, n)
		{
			this.eventElement(t).unbind(e, n)
		}, o.prototype.unbindAll = function()
		{
			for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
		}, o.prototype.once = function(t, e, n)
		{
			var r = this.eventElement(t),
				o = function(t)
				{
					r.unbind(e, o), n(t)
				};
			r.bind(e, o)
		}, e.exports = o
	},
	{}],
	5: [function(t, e, n)
	{
		"use strict";
		e.exports = function()
		{
			function t()
			{
				return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
			}
			return function()
			{
				return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
			}
		}()
	},
	{}],
	6: [function(t, e, n)
	{
		"use strict";
		var r = t("./class"),
			o = t("./dom"),
			l = n.toInt = function(t)
			{
				return parseInt(t, 10) || 0
			},
			i = n.clone = function(t)
			{
				if (t)
				{
					if (t.constructor === Array) return t.map(i);
					if ("object" == typeof t)
					{
						var e = {};
						for (var n in t) e[n] = i(t[n]);
						return e
					}
					return t
				}
				return null
			};
		n.extend = function(t, e)
		{
			var n = i(t);
			for (var r in e) n[r] = i(e[r]);
			return n
		}, n.isEditable = function(t)
		{
			return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
		}, n.removePsClasses = function(t)
		{
			for (var e = r.list(t), n = 0; n < e.length; n++)
			{
				var o = e[n];
				0 === o.indexOf("ps-") && r.remove(t, o)
			}
		}, n.outerWidth = function(t)
		{
			return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"))
		}, n.startScrolling = function(t, e)
		{
			r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"))
		}, n.stopScrolling = function(t, e)
		{
			r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"))
		}, n.env = {
			isWebKit: "WebkitAppearance" in document.documentElement.style,
			supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			supportsIePointer: null !== window.navigator.msMaxTouchPoints
		}
	},
	{
		"./class": 2,
		"./dom": 3
	}],
	7: [function(t, e, n)
	{
		"use strict";
		var r = t("./plugin/destroy"),
			o = t("./plugin/initialize"),
			l = t("./plugin/update");
		e.exports = {
			initialize: o,
			update: l,
			destroy: r
		}
	},
	{
		"./plugin/destroy": 9,
		"./plugin/initialize": 17,
		"./plugin/update": 21
	}],
	8: [function(t, e, n)
	{
		"use strict";
		e.exports = {
			handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
			maxScrollbarLength: null,
			minScrollbarLength: null,
			scrollXMarginOffset: 0,
			scrollYMarginOffset: 0,
			suppressScrollX: !1,
			suppressScrollY: !1,
			swipePropagation: !0,
			useBothWheelAxes: !1,
			wheelPropagation: !1,
			wheelSpeed: 1,
			theme: "default"
		}
	},
	{}],
	9: [function(t, e, n)
	{
		"use strict";
		var r = t("../lib/helper"),
			o = t("../lib/dom"),
			l = t("./instances");
		e.exports = function(t)
		{
			var e = l.get(t);
			e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t))
		}
	},
	{
		"../lib/dom": 3,
		"../lib/helper": 6,
		"./instances": 18
	}],
	10: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			function n(t)
			{
				return t.getBoundingClientRect()
			}
			var r = function(t)
			{
				t.stopPropagation()
			};
			e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function(r)
			{
				var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
					s = o > e.scrollbarYTop ? 1 : -1;
				i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation()
			}), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function(r)
			{
				var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
					s = o > e.scrollbarXLeft ? 1 : -1;
				i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation()
			})
		}
		var o = t("../instances"),
			l = t("../update-geometry"),
			i = t("../update-scroll");
		e.exports = function(t)
		{
			var e = o.get(t);
			r(t, e)
		}
	},
	{
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	11: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			function n(n)
			{
				var o = r + n * e.railXRatio,
					i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
				o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
				var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
				c(t, "left", s)
			}
			var r = null,
				o = null,
				s = function(e)
				{
					n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
				},
				u = function()
				{
					l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
				};
			e.event.bind(e.scrollbarX, "mousedown", function(n)
			{
				o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
			})
		}

		function o(t, e)
		{
			function n(n)
			{
				var o = r + n * e.railYRatio,
					i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
				o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
				var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
				c(t, "top", s)
			}
			var r = null,
				o = null,
				s = function(e)
				{
					n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
				},
				u = function()
				{
					l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
				};
			e.event.bind(e.scrollbarY, "mousedown", function(n)
			{
				o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
			})
		}
		var l = t("../../lib/helper"),
			i = t("../../lib/dom"),
			s = t("../instances"),
			a = t("../update-geometry"),
			c = t("../update-scroll");
		e.exports = function(t)
		{
			var e = s.get(t);
			r(t, e), o(t, e)
		}
	},
	{
		"../../lib/dom": 3,
		"../../lib/helper": 6,
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	12: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			function n(n, r)
			{
				var o = t.scrollTop;
				if (0 === n)
				{
					if (!e.scrollbarYActive) return !1;
					if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
				}
				var l = t.scrollLeft;
				if (0 === r)
				{
					if (!e.scrollbarXActive) return !1;
					if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
				}
				return !0
			}
			var r = !1;
			e.event.bind(t, "mouseenter", function()
			{
				r = !0
			}), e.event.bind(t, "mouseleave", function()
			{
				r = !1
			});
			var i = !1;
			e.event.bind(e.ownerDocument, "keydown", function(c)
			{
				if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented))
				{
					var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");
					if (r || u)
					{
						var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
						if (d)
						{
							if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
							else
								for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
							if (o.isEditable(d)) return
						}
						var p = 0,
							f = 0;
						switch (c.which)
						{
							case 37:
								p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
								break;
							case 38:
								f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
								break;
							case 39:
								p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
								break;
							case 40:
								f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
								break;
							case 33:
								f = 90;
								break;
							case 32:
								f = c.shiftKey ? 90 : -90;
								break;
							case 34:
								f = -90;
								break;
							case 35:
								f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
								break;
							case 36:
								f = c.ctrlKey ? t.scrollTop : e.containerHeight;
								break;
							default:
								return
						}
						a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault()
					}
				}
			})
		}
		var o = t("../../lib/helper"),
			l = t("../../lib/dom"),
			i = t("../instances"),
			s = t("../update-geometry"),
			a = t("../update-scroll");
		e.exports = function(t)
		{
			var e = i.get(t);
			r(t, e)
		}
	},
	{
		"../../lib/dom": 3,
		"../../lib/helper": 6,
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	13: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			function n(n, r)
			{
				var o = t.scrollTop;
				if (0 === n)
				{
					if (!e.scrollbarYActive) return !1;
					if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
				}
				var l = t.scrollLeft;
				if (0 === r)
				{
					if (!e.scrollbarXActive) return !1;
					if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
				}
				return !0
			}

			function r(t)
			{
				var e = t.deltaX,
					n = -1 * t.deltaY;
				return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
			}

			function o(e, n)
			{
				var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
				if (r)
				{
					if (!window.getComputedStyle(r).overflow.match(/(scroll|auto)/)) return !1;
					var o = r.scrollHeight - r.clientHeight;
					if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && n < 0)) return !0;
					var l = r.scrollLeft - r.clientWidth;
					if (l > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === l && e > 0)) return !0
				}
				return !1
			}

			function s(s)
			{
				var c = r(s),
					u = c[0],
					d = c[1];
				o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
			}
			var a = !1;
			"undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
		}
		var o = t("../instances"),
			l = t("../update-geometry"),
			i = t("../update-scroll");
		e.exports = function(t)
		{
			var e = o.get(t);
			r(t, e)
		}
	},
	{
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	14: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			e.event.bind(t, "scroll", function()
			{
				l(t)
			})
		}
		var o = t("../instances"),
			l = t("../update-geometry");
		e.exports = function(t)
		{
			var e = o.get(t);
			r(t, e)
		}
	},
	{
		"../instances": 18,
		"../update-geometry": 19
	}],
	15: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			function n()
			{
				var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
				return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
			}

			function r()
			{
				c || (c = setInterval(function()
				{
					return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c)
				}, 50))
			}

			function a()
			{
				c && (clearInterval(c), c = null), o.stopScrolling(t)
			}
			var c = null,
				u = {
					top: 0,
					left: 0
				},
				d = !1;
			e.event.bind(e.ownerDocument, "selectionchange", function()
			{
				t.contains(n()) ? d = !0 : (d = !1, a())
			}), e.event.bind(window, "mouseup", function()
			{
				d && (d = !1, a())
			}), e.event.bind(window, "keyup", function()
			{
				d && (d = !1, a())
			}), e.event.bind(window, "mousemove", function(e)
			{
				if (d)
				{
					var n = {
							x: e.pageX,
							y: e.pageY
						},
						l = {
							left: t.offsetLeft,
							right: t.offsetLeft + t.offsetWidth,
							top: t.offsetTop,
							bottom: t.offsetTop + t.offsetHeight
						};
					n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r()
				}
			})
		}
		var o = t("../../lib/helper"),
			l = t("../instances"),
			i = t("../update-geometry"),
			s = t("../update-scroll");
		e.exports = function(t)
		{
			var e = l.get(t);
			r(t, e)
		}
	},
	{
		"../../lib/helper": 6,
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	16: [function(t, e, n)
	{
		"use strict";

		function r(t, e, n, r)
		{
			function o(n, r)
			{
				var o = t.scrollTop,
					l = t.scrollLeft,
					i = Math.abs(n),
					s = Math.abs(r);
				if (s > i)
				{
					if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation
				}
				else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;
				return !0
			}

			function a(e, n)
			{
				s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t)
			}

			function c()
			{
				w = !0
			}

			function u()
			{
				w = !1
			}

			function d(t)
			{
				return t.targetTouches ? t.targetTouches[0] : t
			}

			function p(t)
			{
				return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
			}

			function f(t)
			{
				if (p(t))
				{
					Y = !0;
					var e = d(t);
					g.pageX = e.pageX, g.pageY = e.pageY, v = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
				}
			}

			function h(t)
			{
				if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t))
				{
					var n = d(t),
						r = {
							pageX: n.pageX,
							pageY: n.pageY
						},
						l = r.pageX - g.pageX,
						i = r.pageY - g.pageY;
					a(l, i), g = r;
					var s = (new Date).getTime(),
						c = s - v;
					c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault())
				}
			}

			function b()
			{
				!w && Y && (Y = !1, clearInterval(y), y = setInterval(function()
				{
					return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
				}, 10))
			}
			var g = {},
				v = 0,
				m = {},
				y = null,
				w = !1,
				Y = !1;
			n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)) : r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)))
		}
		var o = t("../../lib/helper"),
			l = t("../instances"),
			i = t("../update-geometry"),
			s = t("../update-scroll");
		e.exports = function(t)
		{
			if (o.env.supportsTouch || o.env.supportsIePointer)
			{
				var e = l.get(t);
				r(t, e, o.env.supportsTouch, o.env.supportsIePointer)
			}
		}
	},
	{
		"../../lib/helper": 6,
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	17: [function(t, e, n)
	{
		"use strict";
		var r = t("../lib/helper"),
			o = t("../lib/class"),
			l = t("./instances"),
			i = t("./update-geometry"),
			s = {
				"click-rail": t("./handler/click-rail"),
				"drag-scrollbar": t("./handler/drag-scrollbar"),
				keyboard: t("./handler/keyboard"),
				wheel: t("./handler/mouse-wheel"),
				touch: t("./handler/touch"),
				selection: t("./handler/selection")
			},
			a = t("./handler/native-scroll");
		e.exports = function(t, e)
		{
			e = "object" == typeof e ? e :
			{}, o.add(t, "ps-container");
			var n = l.add(t);
			n.settings = r.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function(e)
			{
				s[e](t)
			}), a(t), i(t)
		}
	},
	{
		"../lib/class": 2,
		"../lib/helper": 6,
		"./handler/click-rail": 10,
		"./handler/drag-scrollbar": 11,
		"./handler/keyboard": 12,
		"./handler/mouse-wheel": 13,
		"./handler/native-scroll": 14,
		"./handler/selection": 15,
		"./handler/touch": 16,
		"./instances": 18,
		"./update-geometry": 19
	}],
	18: [function(t, e, n)
	{
		"use strict";

		function r(t)
		{
			function e()
			{
				a.add(t, "ps-focus")
			}

			function n()
			{
				a.remove(t, "ps-focus")
			}
			var r = this;
			r.settings = s.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function()
			{
				var e = t.scrollLeft,
					n = null;
				return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
			}(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(u.css(r.scrollbarXRail, "marginLeft")) + s.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(u.css(r.scrollbarYRail, "marginTop")) + s.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null
		}

		function o(t)
		{
			return t.getAttribute("data-ps-id")
		}

		function l(t, e)
		{
			t.setAttribute("data-ps-id", e)
		}

		function i(t)
		{
			t.removeAttribute("data-ps-id")
		}
		var s = t("../lib/helper"),
			a = t("../lib/class"),
			c = t("./default-setting"),
			u = t("../lib/dom"),
			d = t("../lib/event-manager"),
			p = t("../lib/guid"),
			f = {};
		n.add = function(t)
		{
			var e = p();
			return l(t, e), f[e] = new r(t), f[e]
		}, n.remove = function(t)
		{
			delete f[o(t)], i(t)
		}, n.get = function(t)
		{
			return f[o(t)]
		}
	},
	{
		"../lib/class": 2,
		"../lib/dom": 3,
		"../lib/event-manager": 4,
		"../lib/guid": 5,
		"../lib/helper": 6,
		"./default-setting": 8
	}],
	19: [function(t, e, n)
	{
		"use strict";

		function r(t, e)
		{
			return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
		}

		function o(t, e)
		{
			var n = {
				width: e.railXWidth
			};
			e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
			var r = {
				top: t.scrollTop,
				height: e.railYHeight
			};
			e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, r), s.css(e.scrollbarX,
			{
				left: e.scrollbarXLeft,
				width: e.scrollbarXWidth - e.railBorderXWidth
			}), s.css(e.scrollbarY,
			{
				top: e.scrollbarYTop,
				height: e.scrollbarYHeight - e.railBorderYWidth
			})
		}
		var l = t("../lib/helper"),
			i = t("../lib/class"),
			s = t("../lib/dom"),
			a = t("./instances"),
			c = t("./update-scroll");
		e.exports = function(t)
		{
			var e = a.get(t);
			e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
			var n;
			t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function(t)
			{
				s.remove(t)
			}), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function(t)
			{
				s.remove(t)
			}), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
		}
	},
	{
		"../lib/class": 2,
		"../lib/dom": 3,
		"../lib/helper": 6,
		"./instances": 18,
		"./update-scroll": 20
	}],
	20: [function(t, e, n)
	{
		"use strict";
		var r, o, l = t("./instances"),
			i = function(t)
			{
				var e = document.createEvent("Event");
				return e.initEvent(t, !0, !0), e
			};
		e.exports = function(t, e, n)
		{
			if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
			if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
			if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
			"top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(i("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(i("ps-x-reach-start")));
			var s = l.get(t);
			"top" === e && n >= s.contentHeight - s.containerHeight && (n = s.contentHeight - s.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(i("ps-y-reach-end"))), "left" === e && n >= s.contentWidth - s.containerWidth && (n = s.contentWidth - s.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(i("ps-x-reach-end"))), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && n < r && t.dispatchEvent(i("ps-scroll-up")), "top" === e && n > r && t.dispatchEvent(i("ps-scroll-down")), "left" === e && n < o && t.dispatchEvent(i("ps-scroll-left")), "left" === e && n > o && t.dispatchEvent(i("ps-scroll-right")), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(i("ps-scroll-y"))), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(i("ps-scroll-x")))
		}
	},
	{
		"./instances": 18
	}],
	21: [function(t, e, n)
	{
		"use strict";
		var r = t("../lib/helper"),
			o = t("../lib/dom"),
			l = t("./instances"),
			i = t("./update-geometry"),
			s = t("./update-scroll");
		e.exports = function(t)
		{
			var e = l.get(t);
			e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
		}
	},
	{
		"../lib/dom": 3,
		"../lib/helper": 6,
		"./instances": 18,
		"./update-geometry": 19,
		"./update-scroll": 20
	}]
},
{}, [1]);
/*!
 * Draggabilly PACKAGED v2.1.1
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */
! function(t, i)
{
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(e)
	{
		i(t, e)
	}) : "object" == typeof module && module.exports ? module.exports = i(t, require("jquery")) : t.jQueryBridget = i(t, t.jQuery)
}(window, function(t, i)
{
	function e(e, r, a)
	{
		function d(t, i, n)
		{
			var o, r = "$()." + e + '("' + i + '")';
			return t.each(function(t, d)
			{
				var h = a.data(d, e);
				if (!h) return void s(e + " not initialized. Cannot call methods, i.e. " + r);
				var u = h[i];
				if (!u || "_" == i.charAt(0)) return void s(r + " is not a valid method");
				var c = u.apply(h, n);
				o = void 0 === o ? c : o
			}), void 0 !== o ? o : t
		}

		function h(t, i)
		{
			t.each(function(t, n)
			{
				var o = a.data(n, e);
				o ? (o.option(i), o._init()) : (o = new r(n, i), a.data(n, e, o))
			})
		}
		a = a || i || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t)
		{
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[e] = function(t)
		{
			if ("string" == typeof t)
			{
				var i = o.call(arguments, 1);
				return d(this, t, i)
			}
			return h(this, t), this
		}, n(a))
	}

	function n(t)
	{
		!t || t && t.bridget || (t.bridget = e)
	}
	var o = Array.prototype.slice,
		r = t.console,
		s = "undefined" == typeof r ? function() {} : function(t)
		{
			r.error(t)
		};
	return n(i || t.jQuery), e
}),
function(t, i)
{
	"function" == typeof define && define.amd ? define("get-size/get-size", [], function()
	{
		return i()
	}) : "object" == typeof module && module.exports ? module.exports = i() : t.getSize = i()
}(window, function()
{
	function t(t)
	{
		var i = parseFloat(t),
			e = -1 == t.indexOf("%") && !isNaN(i);
		return e && i
	}

	function i()
	{}

	function e()
	{
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, i = 0; h > i; i++)
		{
			var e = d[i];
			t[e] = 0
		}
		return t
	}

	function n(t)
	{
		var i = getComputedStyle(t);
		return i || a("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
	}

	function o()
	{
		if (!u)
		{
			u = !0;
			var i = document.createElement("div");
			i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
			var e = document.body || document.documentElement;
			e.appendChild(i);
			var o = n(i);
			r.isBoxSizeOuter = s = 200 == t(o.width), e.removeChild(i)
		}
	}

	function r(i)
	{
		if (o(), "string" == typeof i && (i = document.querySelector(i)), i && "object" == typeof i && i.nodeType)
		{
			var r = n(i);
			if ("none" == r.display) return e();
			var a = {};
			a.width = i.offsetWidth, a.height = i.offsetHeight;
			for (var u = a.isBorderBox = "border-box" == r.boxSizing, c = 0; h > c; c++)
			{
				var p = d[c],
					f = r[p],
					g = parseFloat(f);
				a[p] = isNaN(g) ? 0 : g
			}
			var l = a.paddingLeft + a.paddingRight,
				v = a.paddingTop + a.paddingBottom,
				m = a.marginLeft + a.marginRight,
				y = a.marginTop + a.marginBottom,
				b = a.borderLeftWidth + a.borderRightWidth,
				P = a.borderTopWidth + a.borderBottomWidth,
				E = u && s,
				_ = t(r.width);
			_ !== !1 && (a.width = _ + (E ? 0 : l + b));
			var x = t(r.height);
			return x !== !1 && (a.height = x + (E ? 0 : v + P)), a.innerWidth = a.width - (l + b), a.innerHeight = a.height - (v + P), a.outerWidth = a.width + m, a.outerHeight = a.height + y, a
		}
	}
	var s, a = "undefined" == typeof console ? i : function(t)
		{
			console.error(t)
		},
		d = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = d.length,
		u = !1;
	return r
}),
function(t, i)
{
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", i) : "object" == typeof module && module.exports ? module.exports = i() : t.EvEmitter = i()
}("undefined" != typeof window ? window : this, function()
{
	function t()
	{}
	var i = t.prototype;
	return i.on = function(t, i)
	{
		if (t && i)
		{
			var e = this._events = this._events ||
				{},
				n = e[t] = e[t] || [];
			return -1 == n.indexOf(i) && n.push(i), this
		}
	}, i.once = function(t, i)
	{
		if (t && i)
		{
			this.on(t, i);
			var e = this._onceEvents = this._onceEvents ||
				{},
				n = e[t] = e[t] ||
				{};
			return n[i] = !0, this
		}
	}, i.off = function(t, i)
	{
		var e = this._events && this._events[t];
		if (e && e.length)
		{
			var n = e.indexOf(i);
			return -1 != n && e.splice(n, 1), this
		}
	}, i.emitEvent = function(t, i)
	{
		var e = this._events && this._events[t];
		if (e && e.length)
		{
			var n = 0,
				o = e[n];
			i = i || [];
			for (var r = this._onceEvents && this._onceEvents[t]; o;)
			{
				var s = r && r[o];
				s && (this.off(t, o), delete r[o]), o.apply(this, i), n += s ? 0 : 1, o = e[n]
			}
			return this
		}
	}, t
}),
function(t, i)
{
	"function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(e)
	{
		return i(t, e)
	}) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.Unipointer = i(t, t.EvEmitter)
}(window, function(t, i)
{
	function e()
	{}

	function n()
	{}
	var o = n.prototype = Object.create(i.prototype);
	o.bindStartEvent = function(t)
	{
		this._bindStartEvent(t, !0)
	}, o.unbindStartEvent = function(t)
	{
		this._bindStartEvent(t, !1)
	}, o._bindStartEvent = function(i, e)
	{
		e = void 0 === e ? !0 : !!e;
		var n = e ? "addEventListener" : "removeEventListener";
		t.navigator.pointerEnabled ? i[n]("pointerdown", this) : t.navigator.msPointerEnabled ? i[n]("MSPointerDown", this) : (i[n]("mousedown", this), i[n]("touchstart", this))
	}, o.handleEvent = function(t)
	{
		var i = "on" + t.type;
		this[i] && this[i](t)
	}, o.getTouch = function(t)
	{
		for (var i = 0; i < t.length; i++)
		{
			var e = t[i];
			if (e.identifier == this.pointerIdentifier) return e
		}
	}, o.onmousedown = function(t)
	{
		var i = t.button;
		i && 0 !== i && 1 !== i || this._pointerDown(t, t)
	}, o.ontouchstart = function(t)
	{
		this._pointerDown(t, t.changedTouches[0])
	}, o.onMSPointerDown = o.onpointerdown = function(t)
	{
		this._pointerDown(t, t)
	}, o._pointerDown = function(t, i)
	{
		this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== i.pointerId ? i.pointerId : i.identifier, this.pointerDown(t, i))
	}, o.pointerDown = function(t, i)
	{
		this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, i])
	};
	var r = {
		mousedown: ["mousemove", "mouseup"],
		touchstart: ["touchmove", "touchend", "touchcancel"],
		pointerdown: ["pointermove", "pointerup", "pointercancel"],
		MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
	};
	return o._bindPostStartEvents = function(i)
	{
		if (i)
		{
			var e = r[i.type];
			e.forEach(function(i)
			{
				t.addEventListener(i, this)
			}, this), this._boundPointerEvents = e
		}
	}, o._unbindPostStartEvents = function()
	{
		this._boundPointerEvents && (this._boundPointerEvents.forEach(function(i)
		{
			t.removeEventListener(i, this)
		}, this), delete this._boundPointerEvents)
	}, o.onmousemove = function(t)
	{
		this._pointerMove(t, t)
	}, o.onMSPointerMove = o.onpointermove = function(t)
	{
		t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
	}, o.ontouchmove = function(t)
	{
		var i = this.getTouch(t.changedTouches);
		i && this._pointerMove(t, i)
	}, o._pointerMove = function(t, i)
	{
		this.pointerMove(t, i)
	}, o.pointerMove = function(t, i)
	{
		this.emitEvent("pointerMove", [t, i])
	}, o.onmouseup = function(t)
	{
		this._pointerUp(t, t)
	}, o.onMSPointerUp = o.onpointerup = function(t)
	{
		t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
	}, o.ontouchend = function(t)
	{
		var i = this.getTouch(t.changedTouches);
		i && this._pointerUp(t, i)
	}, o._pointerUp = function(t, i)
	{
		this._pointerDone(), this.pointerUp(t, i)
	}, o.pointerUp = function(t, i)
	{
		this.emitEvent("pointerUp", [t, i])
	}, o._pointerDone = function()
	{
		this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
	}, o.pointerDone = e, o.onMSPointerCancel = o.onpointercancel = function(t)
	{
		t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
	}, o.ontouchcancel = function(t)
	{
		var i = this.getTouch(t.changedTouches);
		i && this._pointerCancel(t, i)
	}, o._pointerCancel = function(t, i)
	{
		this._pointerDone(), this.pointerCancel(t, i)
	}, o.pointerCancel = function(t, i)
	{
		this.emitEvent("pointerCancel", [t, i])
	}, n.getPointerPoint = function(t)
	{
		return {
			x: t.pageX,
			y: t.pageY
		}
	}, n
}),
function(t, i)
{
	"function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(e)
	{
		return i(t, e)
	}) : "object" == typeof module && module.exports ? module.exports = i(t, require("unipointer")) : t.Unidragger = i(t, t.Unipointer)
}(window, function(t, i)
{
	function e()
	{}

	function n()
	{}
	var o = n.prototype = Object.create(i.prototype);
	o.bindHandles = function()
	{
		this._bindHandles(!0)
	}, o.unbindHandles = function()
	{
		this._bindHandles(!1)
	};
	var r = t.navigator;
	return o._bindHandles = function(t)
	{
		t = void 0 === t ? !0 : !!t;
		var i;
		i = r.pointerEnabled ? function(i)
		{
			i.style.touchAction = t ? "none" : ""
		} : r.msPointerEnabled ? function(i)
		{
			i.style.msTouchAction = t ? "none" : ""
		} : e;
		for (var n = t ? "addEventListener" : "removeEventListener", o = 0; o < this.handles.length; o++)
		{
			var s = this.handles[o];
			this._bindStartEvent(s, t), i(s), s[n]("click", this)
		}
	}, o.pointerDown = function(t, i)
	{
		if ("INPUT" == t.target.nodeName && "range" == t.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
		this._dragPointerDown(t, i);
		var e = document.activeElement;
		e && e.blur && e.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, i])
	}, o._dragPointerDown = function(t, e)
	{
		this.pointerDownPoint = i.getPointerPoint(e);
		var n = this.canPreventDefaultOnPointerDown(t, e);
		n && t.preventDefault()
	}, o.canPreventDefaultOnPointerDown = function(t)
	{
		return "SELECT" != t.target.nodeName
	}, o.pointerMove = function(t, i)
	{
		var e = this._dragPointerMove(t, i);
		this.emitEvent("pointerMove", [t, i, e]), this._dragMove(t, i, e)
	}, o._dragPointerMove = function(t, e)
	{
		var n = i.getPointerPoint(e),
			o = {
				x: n.x - this.pointerDownPoint.x,
				y: n.y - this.pointerDownPoint.y
			};
		return !this.isDragging && this.hasDragStarted(o) && this._dragStart(t, e), o
	}, o.hasDragStarted = function(t)
	{
		return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
	}, o.pointerUp = function(t, i)
	{
		this.emitEvent("pointerUp", [t, i]), this._dragPointerUp(t, i)
	}, o._dragPointerUp = function(t, i)
	{
		this.isDragging ? this._dragEnd(t, i) : this._staticClick(t, i)
	}, o._dragStart = function(t, e)
	{
		this.isDragging = !0, this.dragStartPoint = i.getPointerPoint(e), this.isPreventingClicks = !0, this.dragStart(t, e)
	}, o.dragStart = function(t, i)
	{
		this.emitEvent("dragStart", [t, i])
	}, o._dragMove = function(t, i, e)
	{
		this.isDragging && this.dragMove(t, i, e)
	}, o.dragMove = function(t, i, e)
	{
		t.preventDefault(), this.emitEvent("dragMove", [t, i, e])
	}, o._dragEnd = function(t, i)
	{
		this.isDragging = !1, setTimeout(function()
		{
			delete this.isPreventingClicks
		}.bind(this)), this.dragEnd(t, i)
	}, o.dragEnd = function(t, i)
	{
		this.emitEvent("dragEnd", [t, i])
	}, o.onclick = function(t)
	{
		this.isPreventingClicks && t.preventDefault()
	}, o._staticClick = function(t, i)
	{
		if (!this.isIgnoringMouseUp || "mouseup" != t.type)
		{
			var e = t.target.nodeName;
			("INPUT" == e || "TEXTAREA" == e) && t.target.focus(), this.staticClick(t, i), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function()
			{
				delete this.isIgnoringMouseUp
			}.bind(this), 400))
		}
	}, o.staticClick = function(t, i)
	{
		this.emitEvent("staticClick", [t, i])
	}, n.getPointerPoint = i.getPointerPoint, n
}),
function(t, i)
{
	"function" == typeof define && define.amd ? define(["get-size/get-size", "unidragger/unidragger"], function(e, n)
	{
		return i(t, e, n)
	}) : "object" == typeof module && module.exports ? module.exports = i(t, require("get-size"), require("unidragger")) : t.Draggabilly = i(t, t.getSize, t.Unidragger)
}(window, function(t, i, e)
{
	function n()
	{}

	function o(t, i)
	{
		for (var e in i) t[e] = i[e];
		return t
	}

	function r(t)
	{
		return t instanceof HTMLElement
	}

	function s(t, i)
	{
		this.element = "string" == typeof t ? d.querySelector(t) : t, f && (this.$element = f(this.element)), this.options = o(
		{}, this.constructor.defaults), this.option(i), this._create()
	}

	function a(t, i, e)
	{
		return e = e || "round", i ? Math[e](t / i) * i : t
	}
	var d = t.document,
		h = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame,
		u = 0;
	h || (h = function(t)
	{
		var i = (new Date).getTime(),
			e = Math.max(0, 16 - (i - u)),
			n = setTimeout(t, e);
		return u = i + e, n
	});
	var c = d.documentElement,
		p = "string" == typeof c.style.transform ? "transform" : "WebkitTransform",
		f = t.jQuery,
		g = s.prototype = Object.create(e.prototype);
	s.defaults = {}, g.option = function(t)
	{
		o(this.options, t)
	};
	var l = {
		relative: !0,
		absolute: !0,
		fixed: !0
	};
	return g._create = function()
	{
		this.position = {}, this._getPosition(), this.startPoint = {
			x: 0,
			y: 0
		}, this.dragPoint = {
			x: 0,
			y: 0
		}, this.startPosition = o(
		{}, this.position);
		var t = getComputedStyle(this.element);
		l[t.position] || (this.element.style.position = "relative"), this.enable(), this.setHandles()
	}, g.setHandles = function()
	{
		this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element], this.bindHandles()
	}, g.dispatchEvent = function(i, e, n)
	{
		var o = [e].concat(n);
		this.emitEvent(i, o);
		var r = t.jQuery;
		if (r && this.$element)
			if (e)
			{
				var s = r.Event(e);
				s.type = i, this.$element.trigger(s, n)
			}
		else this.$element.trigger(i, n)
	}, g._getPosition = function()
	{
		var t = getComputedStyle(this.element),
			i = this._getPositionCoord(t.left, "width"),
			e = this._getPositionCoord(t.top, "height");
		this.position.x = isNaN(i) ? 0 : i, this.position.y = isNaN(e) ? 0 : e, this._addTransformPosition(t)
	}, g._getPositionCoord = function(t, e)
	{
		if (-1 != t.indexOf("%"))
		{
			var n = i(this.element.parentNode);
			return n ? parseFloat(t) / 100 * n[e] : 0
		}
		return parseInt(t, 10)
	}, g._addTransformPosition = function(t)
	{
		var i = t[p];
		if (0 === i.indexOf("matrix"))
		{
			var e = i.split(","),
				n = 0 === i.indexOf("matrix3d") ? 12 : 4,
				o = parseInt(e[n], 10),
				r = parseInt(e[n + 1], 10);
			this.position.x += o, this.position.y += r
		}
	}, g.pointerDown = function(t, i)
	{
		this._dragPointerDown(t, i);
		var e = d.activeElement;
		e && e.blur && e != d.body && e.blur(), this._bindPostStartEvents(t), this.element.classList.add("is-pointer-down"), this.dispatchEvent("pointerDown", t, [i])
	}, g.pointerMove = function(t, i)
	{
		var e = this._dragPointerMove(t, i);
		this.dispatchEvent("pointerMove", t, [i, e]), this._dragMove(t, i, e)
	}, g.dragStart = function(t, i)
	{
		this.isEnabled && (this._getPosition(), this.measureContainment(), this.startPosition.x = this.position.x, this.startPosition.y = this.position.y, this.setLeftTop(), this.dragPoint.x = 0, this.dragPoint.y = 0, this.element.classList.add("is-dragging"), this.dispatchEvent("dragStart", t, [i]), this.animate())
	}, g.measureContainment = function()
	{
		var t = this.options.containment;
		if (t)
		{
			var e = r(t) ? t : "string" == typeof t ? d.querySelector(t) : this.element.parentNode,
				n = i(this.element),
				o = i(e),
				s = this.element.getBoundingClientRect(),
				a = e.getBoundingClientRect(),
				h = o.borderLeftWidth + o.borderRightWidth,
				u = o.borderTopWidth + o.borderBottomWidth,
				c = this.relativeStartPosition = {
					x: s.left - (a.left + o.borderLeftWidth),
					y: s.top - (a.top + o.borderTopWidth)
				};
			this.containSize = {
				width: o.width - h - c.x - n.width,
				height: o.height - u - c.y - n.height
			}
		}
	}, g.dragMove = function(t, i, e)
	{
		if (this.isEnabled)
		{
			var n = e.x,
				o = e.y,
				r = this.options.grid,
				s = r && r[0],
				d = r && r[1];
			n = a(n, s), o = a(o, d), n = this.containDrag("x", n, s), o = this.containDrag("y", o, d), n = "y" == this.options.axis ? 0 : n, o = "x" == this.options.axis ? 0 : o, this.position.x = this.startPosition.x + n, this.position.y = this.startPosition.y + o, this.dragPoint.x = n, this.dragPoint.y = o, this.dispatchEvent("dragMove", t, [i, e])
		}
	}, g.containDrag = function(t, i, e)
	{
		if (!this.options.containment) return i;
		var n = "x" == t ? "width" : "height",
			o = this.relativeStartPosition[t],
			r = a(-o, e, "ceil"),
			s = this.containSize[n];
		return s = a(s, e, "floor"), Math.min(s, Math.max(r, i))
	}, g.pointerUp = function(t, i)
	{
		this.element.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [i]), this._dragPointerUp(t, i)
	}, g.dragEnd = function(t, i)
	{
		this.isEnabled && (p && (this.element.style[p] = "", this.setLeftTop()), this.element.classList.remove("is-dragging"), this.dispatchEvent("dragEnd", t, [i]))
	}, g.animate = function()
	{
		if (this.isDragging)
		{
			this.positionDrag();
			var t = this;
			h(function()
			{
				t.animate()
			})
		}
	}, g.setLeftTop = function()
	{
		this.element.style.left = this.position.x + "px", this.element.style.top = this.position.y + "px"
	}, g.positionDrag = function()
	{
		this.element.style[p] = "translate3d( " + this.dragPoint.x + "px, " + this.dragPoint.y + "px, 0)"
	}, g.staticClick = function(t, i)
	{
		this.dispatchEvent("staticClick", t, [i])
	}, g.enable = function()
	{
		this.isEnabled = !0
	}, g.disable = function()
	{
		this.isEnabled = !1, this.isDragging && this.dragEnd()
	}, g.destroy = function()
	{
		this.disable(), this.element.style[p] = "", this.element.style.left = "", this.element.style.top = "", this.element.style.position = "", this.unbindHandles(), this.$element && this.$element.removeData("draggabilly")
	}, g._init = n, f && f.bridget && f.bridget("draggabilly", s), s
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory)
{
	if (typeof define === 'function' && define.amd)
	{
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	}
	else if (typeof exports === 'object')
	{
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	}
	else
	{
		// Browser globals
		factory(jQuery);
	}
}(function($)
{
	var pluses = /\+/g;

	function encode(s)
	{
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s)
	{
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value)
	{
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s)
	{
		if (s.indexOf('"') === 0)
		{
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try
		{
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		}
		catch (e)
		{}
	}

	function read(s, converter)
	{
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}
	var config = $.cookie = function(key, value, options)
	{
		// Write
		if (arguments.length > 1 && !$.isFunction(value))
		{
			options = $.extend(
			{}, config.defaults, options);
			if (typeof options.expires === 'number')
			{
				var days = options.expires,
					t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}
			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '',
				options.domain ? '; domain=' + options.domain : '',
				options.secure ? '; secure' : ''
			].join(''));
		}
		// Read
		var result = key ? undefined :
			{},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;
		for (; i < l; i++)
		{
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');
			if (key === name)
			{
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}
			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined)
			{
				result[name] = cookie;
			}
		}
		return result;
	};
	config.defaults = {};
	$.removeCookie = function(key, options)
	{
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend(
		{}, options,
		{
			expires: -1
		}));
		return !$.cookie(key);
	};
}));
/*
 * Custom
 */
// wrapper alerts	
window.cust = window.cust ? window.cust :
{};
var walert = window.cust.walert = function(wtype, wtext, times = 3000)
{
	var t = wtype,
		txt = wtext,
		b,
		w = $('.wrapper__allerts');
	if (wtype == 'error')
	{
		b = document.createElement('div');
		b.className = 'wrapper__allert wrapper__allert--error';
		b.innerHTML = txt;
	}
	else if (wtype == 'success')
	{
		b = document.createElement('div');
		b.className = 'wrapper__allert wrapper__allert--success';
		b.innerHTML = txt;
	}
	else
	{
		return;
	}
	w.append($(b));
	$(b).fadeIn(300);
	setTimeout(function()
	{
		$(b).fadeOut(300, function()
		{
			$(this).remove();
		});
	}, times);
	walertPosition();
	//notice
	var messages = $.cookie('notesmessNew');
	if ('undefined' === typeof(messages))
	{
		messages = [];
	}
	else
	{
		messages = JSON.parse(messages);
		if (messages.length >= 5)
		{
			$('.notification li:last').remove();
			messages.splice(0, 1);
		}
	}
	//chech pages
	var loc = window.location;
	loc = loc.pathname;
	var titl = 'System message';
	if (loc == '/gamedouble')
	{
		titl = 'Roulette';
	}
	else if (loc == '/')
	{
		titl = 'JackPot (major)';
	}
	else if (loc == '/bum')
	{
		titl = 'JackPot (bum)';
	}
	else if (loc == '/crashgame')
	{
		titl = 'CrashGame';
	}
	else if (loc == '/coinflips')
	{
		titl = 'Coinflip';
	}
	else if (loc == '/freeskins')
	{
		titl = 'Free skins';
	}
	else if (loc == '/shop')
	{
		titl = 'Shop';
	}
	//ignore list
	if (wtext == 'Bets closed') return;
	if (wtext == 'Bets open') return;
	if (wtext == 'Ставки закрыты') return;
	if (wtext == 'Ставки открыты') return;
	var addMess = {
		'text': wtext,
		'type': wtype,
		'title': titl,
		'timenotes': Math.floor(Date.now() / 1000),
		'read': false
	};
	messages.push(
	{
		'text': wtext,
		'type': wtype,
		'title': titl,
		'timenotes': Math.floor(Date.now() / 1000),
		'read': false
	});
	$.cookie('notesmessNew', '',
	{
		expires: -1
	});
	$.cookie('notesmessNew', JSON.stringify(messages));
	notesAdd(addMess, (messages.length - 1));
	notifCount();
}
var walertPosition = function()
{
	/*var w = $('.wrapper__space'),
		w_pos = w[0].getBoundingClientRect();
	$('.wrapper__allerts').css('left', w_pos.right);*/
}
var footeRpos = function()
{
	if (!$(".chat").hasClass("chat--close"))
	{
		$(".footer-content .right-text").css('margin-right', '300px');
	}
	else
	{
		$(".footer-content .right-text").css('margin-right', '0');
	}
}
// walertPosition();
$(window).on('load', function()
{
	walertPosition();
	setTimeout(function()
	{
		footeRpos();
	}, 100);
});
$(window).on('resize', function()
{
	walertPosition();
	footeRpos();
});
$(document).ready(function()
{
	var mobileAndTabletcheck = function()
	{
		var check = false;
		(function(a)
		{
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	};
	var is_touch_device = function()
	{
		try
		{
			document.createEvent("TouchEvent");
			return true;
		}
		catch (e)
		{
			return false;
		};
	};
	var is_touch_enabled = mobileAndTabletcheck();
	$('body').addClass('is-touch', is_touch_device());
	window.cust = window.cust ? window.cust :
	{};
	window.cust.breakPoint = false;
	window.cust.bp_SM = 1550;
	var body = $('body');
	$(window).on('load', function()
	{
		window.cust.resizer();
		svg4everybody();
	});
	$(window).on('resize', function()
	{
		window.cust.resizer();
	});
	window.cust.resizer = function()
	{
		var ww = window.innerWidth;
		if (ww > window.cust.bp_SM)
		{
			windowLG();
		}
		else
		{
			windowSM();
		};
	};

	function windowSM()
	{
		if (window.cust.breakPoint != 'sm')
		{
			window.cust.breakPoint = 'sm';
			body.trigger('resize_sm_once');
		};
		body.trigger('resize_sm');
	};

	function windowLG()
	{
		if (window.cust.breakPoint != 'lg')
		{
			window.cust.breakPoint = 'lg';
			body.trigger('resize_lg_once');
		};
		body.trigger('resize_lg');
	};
	window.cust = window.cust ? window.cust :
	{};
	// scrolls
	if (!mobileAndTabletcheck())
	{
		$('.main').perfectScrollbar(
		{
			suppressScrollX: true
		});
		$('.chat__messages').perfectScrollbar();
		$('.trade-wheel__scroll').perfectScrollbar(
		{
			useBothWheelAxes: true
		});
		// $('.trade-wheel__scroll').perfectScrollbar('destroy'); // Destroy
		// $('.trade-wheel__scroll').perfectScrollbar({useBothWheelAxes: true}); // init
		$('.modal-items__items-inn').perfectScrollbar(
		{
			wheelPropagation: true
		});
		$('.modal').perfectScrollbar();
		$('.freebie__latest__ppls').perfectScrollbar(
		{
			useBothWheelAxes: true,
			suppressScrollY: true
		});
		$('.shop-cart__items__scroll').perfectScrollbar();
		$('.gameh-peoples__inn').perfectScrollbar(
		{
			useBothWheelAxes: true,
			suppressScrollY: true
		});
	}
	else
	{
		$('body').addClass('touch-device');
		'.chat__messages'
	}
	// chat scroll on bottom
	$(".chat__messages").scrollTop($(".chat__messages").prop("scrollHeight"));
	window.cust.chatBottomScroll = function()
	{
		$(".chat__messages").animate(
		{
			scrollTop: $(".chat__messages").prop("scrollHeight")
		}, 300);
		// alert();
	}
	$('.chat__messages').perfectScrollbar().mouseenter(function()
	{
		$(this).perfectScrollbar('update');
	})
	//checkbot
	function botCheck()
	{
		var botPattern = "(googlebot|Googlebot-Mobile|Googlebot-Image|yandexbot)";
		var re = new RegExp(botPattern, 'i');
		var userAgent = navigator.userAgent;
		if (re.test(userAgent))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if (botCheck())
	{
		$('.main').perfectScrollbar('destroy');
	}
	// volume
	$('.volume').on('click', function(event)
	{
		$(this).toggleClass('volume--mute');
		event.preventDefault();
	});
	// navigation
	if (is_touch_enabled)
	{
		$('.gamebox__pic').on('click', function()
		{
			var th = $(this),
				pa = th.closest('.gamebox');
			$('.gamebox').not(pa).removeClass('is-active');
			pa.toggleClass('is-active');
		});
		$('body').on('click', function(e)
		{
			var th = $(e.target),
				pa = th.closest('.gamebox');
			if (pa.length === 0) $('.gamebox').removeClass('is-active');
		});
	};
	// dropdowns
	$('.dropdown__toggle').on('click', function(event)
	{
		var th = $(this),
			drop = th.closest('.dropdown');
		$('.dropdown__toggle').not($(this)).closest('.dropdown').removeClass('dropdown--open');
		drop.toggleClass('dropdown--open');
		event.preventDefault();
	});
	$('body').click(function(event)
	{
		if ($(event.target).closest(".dropdown").length) return;
		$(".dropdown").removeClass('dropdown--open');
	});
	var isChatOpened;
	if (typeof $.cookie('isChatOpenedCookie') === 'undefined')
	{
		$.cookie('isChatOpenedCookie', 1);
	}
	isChatOpened = parseInt($.cookie('isChatOpenedCookie'));
	$('.openChant').on('click', function(event)
	{
		var th = $(this),
			chat = th.closest('.chat');
		if (!chat.hasClass('chat--mini'))
		{
			// open/close normal chat
			if (chat.hasClass('chat--close'))
			{
				// open
				chat.removeClass('chat--close');
				$('.wrapper__offset').removeClass('wrapper__offset--right');
				$('.wrapper__wrapper').removeClass('wrapper__wrapper--align');
				$(".chat__messages").scrollTop($(".chat__messages").prop("scrollHeight"));
				$(".chat__messages").perfectScrollbar('update');
				$.cookie('isChatOpenedCookie', 1);
			}
			else
			{
				// close
				chat.addClass('chat--close');
				$('.wrapper__offset').addClass('wrapper__offset--right');
				$('.wrapper__wrapper').addClass('wrapper__wrapper--align');
				$.cookie('isChatOpenedCookie', 0);
			}
			setTimeout(function()
			{
				footeRpos();
			}, 100);
			var walertInterval = setInterval(function()
			{
				walertPosition();
			}, 10);
			setTimeout(function()
			{
				clearInterval(walertInterval);
			}, 500);
		}
		else
		{
			var wih = $(window).innerHeight(),
				ch = 400,
				cof = chat.offset().top;
			// open/close mini chat
			if (chat.hasClass('chat--close'))
			{
				// open
				chat.removeClass('chat--close');
				if (cof > wih - ch)
				{
					chat.css('top', '');
				}
				$(".chat__messages").scrollTop($(".chat__messages").prop("scrollHeight"));
				$(".chat__messages").perfectScrollbar('update');
			}
			else
			{
				// close
				chat.addClass('chat--close');
				if (cof == wih - ch)
				{
					chat.css('top', '');
				}
			}
		}
		$(".chat__messages").scrollTop($(".chat__messages").prop("scrollHeight"));
		event.preventDefault();
	});
	var chatDoNormal = function()
	{
		var chat = $('.chat');
		chat.removeClass('chat--mini');
		chat.css(
		{
			left: 'auto',
			top: '0px'
		});
		if (chat.hasClass('chat--close'))
		{
			$('.wrapper__offset').addClass('wrapper__offset--right');
			$('.wrapper__wrapper').addClass('wrapper__wrapper--align');
		}
		else
		{
			$('.wrapper__offset').removeClass('wrapper__offset--right');
			$('.wrapper__wrapper').removeClass('wrapper__wrapper--align');
		}
		// $draggableChat.draggabilly('disable');
	}
	var chatDoMini = function()
	{
		var chat = $('.chat');
		$('.chat').removeAttr('style');
		$('.wrapper__offset').addClass('wrapper__offset--right');
		$('.wrapper__wrapper').addClass('wrapper__wrapper--align');
		chat.addClass('chat--mini chat--close');
		var chat__messages = $('.chat__messages')
		chat__messages.perfectScrollbar('update');
		// $draggableChat.draggabilly('enable');
	}
	body.on('resize_sm_once', function()
	{
		chatDoMini();
		$('.chat').removeClass('__no-transition');
		$('.wrapper__offset').removeClass('__no-transition');
	})
	body.on('resize_lg_once', function()
	{
		chatDoNormal();
		$('.chat').addClass('__no-transition');
		$('.wrapper__offset').addClass('__no-transition');
		if (isChatOpened)
		{
			$('.chat').removeClass('chat--close');
			$('.wrapper__offset').removeClass('wrapper__offset--right');
			$('.wrapper__wrapper').removeClass('wrapper__wrapper--align');
		}
		else
		{
			$('.chat').addClass('chat--close');
			$('.wrapper__offset').addClass('wrapper__offset--right');
			$('.wrapper__wrapper').addClass('wrapper__wrapper--align');
		}
		setTimeout(function()
		{
			$('.chat').removeClass('__no-transition');
			$('.wrapper__offset').removeClass('__no-transition');
		}, 100);
	})
	window.cust.resizer();
	$('[modal-trigger]').on('click', function(e)
	{
		var m = $($(this).attr('modal-target'));
		m.fadeIn(500, function()
		{
			m.trigger('modal.opened');
		});
		m.addClass('active');
		e.preventDefault();
	});
	$('.modal-close, .js-modal-close').on('click', function(e)
	{
		m = $(this).closest('.modal');
		m.fadeOut(500, function()
		{
			m.trigger('modal.closed');
		});
		m.removeClass('active');
		e.preventDefault();
	});
	$('body').click(function(event)
	{
		if ($('.modal.active').length > 0)
		{
			if ($(event.target).closest(".modal__content").length) return;
			if ($(event.target).closest("[modal-trigger]").length) return;
			$('.modal').fadeOut(500);
		}
	});

	function initSomeThing(currentTab)
	{
		var timer = currentTab.find('.js-timer')
		if (timer.length) setTimer(timer);
	};

	function loadNextSection(pa, currentTab, nextTab)
	{
		var nextTab_url = nextTab.attr('data-url'),
			nextTab_size = nextTab.attr('data-size');
		if (nextTab_size)
		{
			pa.removeClass('modal-put-items_lg modal-put-items_md');
			pa.addClass(nextTab_size);
		}
		else
		{
			pa.removeClass('modal-put-items_lg modal-put-items_md');
		};
		pa.addClass('loading');
		if (nextTab_url)
		{
			$.get("/get-my-offers/" + room, function(data)
			{
				if (data.type == 'success')
				{
					$.ajax(
					{
						url: nextTab_url,
						context: document.body,
						dataType: 'html',
						success: function(data)
						{
							if (data.indexOf('error') == -1)
							{
								var container = nextTab.find('.js-load-content--target');
								container.html(data);
								liveSearch(container, '.mitems-item__name', '', 100)
								nextTab.animate(
								{
									height: "toggle"
								}, 0, function()
								{
									nextTab.addClass('active');
									pa.removeClass('loading');
									container.addClass('active');
									initSomeThing(nextTab);
								});
							}
							else
							{
								data = JSON.parse(data);
								walert(data.type, data.text);
								setTimeout(function()
								{
									location.reload();
								}, 2000);
							}
						}
					});
				}
				if (data.type == 'quee')
				{
					nextTab.animate(
					{
						height: "toggle"
					}, 0, function()
					{
						nextTab.addClass('active');
						pa.removeClass('loading');
						initSomeThing(nextTab);
						$('.modal-put-items__tab').css('display', 'none');
						$('.laststep.offerSucces').css('display', 'block');
						$('.tradeidAccept').val(data.info.tradeid);
						var timer = currentTab.find('.js-timer')
						if (timer.length) setTimer(timer);
					});
				}
				if (data.type == 'quee0')
				{
					console.log('load');
				}
			});
		}
		else
		{
			nextTab.animate(
			{
				height: "toggle"
			}, 0, function()
			{
				nextTab.addClass('active');
				// pa.removeClass('loading');
				initSomeThing(nextTab);
			});
		};
	};

	function loadSection(th, e, way)
	{
		var th = th,
			pa = th.closest('.modal__content'),
			currentTab = th.closest('.modal-put-items__tab'),
			featureTab = way == 'next' ? currentTab.next('.modal-put-items__tab') : currentTab.prev('.modal-put-items__tab');
		if (featureTab.length > 0 && !th.hasClass('disabled'))
		{
			currentTab.animate(
			{
				height: "toggle"
			}, 0, function()
			{
				currentTab.removeClass('active');
			});
			loadNextSection(pa, currentTab, featureTab);
			// currentTab.removeClass('active');
			// nextTab.addClass('active');
		};
		e.preventDefault();
	};
	$('.modal-firststep').on('click', function(e)
	{
		loadSection($(this), e, 'next');
	});
	$('.modal-godeposit').on('click', function(e)
	{
		loadSection($(this), e, 'next');
		$('.modal-put-items__tab.laststep').css('display', 'none');
		$(".modal-put-items.modal-put-items_lg").addClass('loading');
	});
	$('.js-prev-modal-tab').on('click', function(e)
	{
		loadSection($(this), e, 'prev');
	});

	function roundPlus(x, n)
	{ //x - price, n - symbol count after dot
		if (isNaN(x) || isNaN(n)) return false;
		var m = Math.pow(10, n);
		return Math.round(x * m) / m;
	};

	function calcTotalPrice(checkedItems)
	{
		var count = 0;
		var price = 0;
		$.each(checkedItems, function(index)
		{
			count++;
			price += Number($(this).find('.mitems-item__price span').text().replace(GetMyinv('price-ico'), ''));
		});
		return {
			count: count,
			price: roundPlus(price, 3)
		};
	};

	function calcPrice(container, th)
	{
		pa = th.closest('.modal-items__items-inn'),
			checkedItems = pa.find('.mitems-item.active');
		var tmp = '';
		var calcTotal = calcTotalPrice(checkedItems);
		if (checkedItems.length > 0)
		{
			tmp += '<span class="modal-items__price__items">' + calcTotal.count + ' item.</span>';
			tmp += '— <span class="modal-items__price__count">' + GetMyinv('price-ico') + calcTotal.price + '</span>';
		}
		else
		{
			tmp += 'не выбрано';
		};
		container.html(tmp);
	};

	function debounce(func, wait, immediate)
	{ // filter
		var timeout;
		return function()
		{
			var context = this,
				args = arguments;
			var later = function()
			{
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	function liveSearch(container, itemsUrl, notfoundUrl, debounceTime)
	{
		'use strict';
		var $container = container;
		if (!$container.length) return true;
		var $input = $('.modal-items__sort__right input'),
			$items = $container.find(itemsUrl),
			// $notfound       = $container.find( notfoundUrl ),
			$item = $(),
			itemsIndexed = [];
		$items.each(function()
		{
			itemsIndexed.push($(this).text().replace(/\s{2,}/g, ' ').toLowerCase());
		});
		$input.on('keyup', debounce(function(e)
		{
			if (e.keyCode == 13)
			{ // enter
				$input.trigger('blur');
				return true;
			}
			$items.each(function()
			{
				$item = $(this);
				$item.html($item.html().replace(/<b>([^<]+)<\/b>/gi, '$1'));
			});
			var searchVal = $.trim($input.val()).toLowerCase();
			if (searchVal.length)
			{
				for (var i in itemsIndexed)
				{
					$item = $items.eq(i);
					if (itemsIndexed[i].indexOf(searchVal) != -1)
						// $item.html( $item.html().replace( new RegExp( searchVal+'(?!([^<]+)?>)', 'gi' ), '<b>$&</b>' ) ).closest('.mitems-item').removeClass( 'hidden' );
						$item.closest('.mitems-item').removeClass('hidden');
					else $item.closest('.mitems-item').addClass('hidden');
				}
			}
			else $items.closest('.mitems-item').removeClass('hidden');
			// if($notfound)
			// 	$notfound.toggleClass( 'is-visible', $items.closest('.search__thumb').parent().not( '.is-hidden' ).length == 0 );
		}, debounceTime));
	};

	function sortPrice(parent, childSelector, keySelector, down)
	{ // sort
		var items = parent.children(childSelector).sort(function(a, b)
		{
			var vA = parseFloat($(keySelector, a).text().replace(GetMyinv('price-ico'), ''));
			var vB = parseFloat($(keySelector, b).text().replace(GetMyinv('price-ico'), ''));
			if (down)
			{
				return (vA > vB) ? -1 : (vA < vB) ? 1 : 0;
			}
			else
			{
				return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
			}
		});
		parent.html(items);
	};
	var setTimer = function(elem)
	{
		window.interval = setInterval(function()
		{
			var timer = elem.html();
			timer = timer.split(':');
			var minutes = timer[0];
			var seconds = timer[1];
			var checkMinutes = minutes.split('');
			var checkSeconds = seconds.split('');
			console.log(checkMinutes, checkSeconds);
			if (checkMinutes[0] == 0)
			{
				minutes = checkMinutes[1];
			}
			if (checkSeconds[0] == 0)
			{
				seconds = checkSeconds[1];
			}
			console.log(minutes, seconds);
			if (seconds != 0)
			{
				--seconds;
			}
			else
			{
				if (minutes != 0)
				{
					--minutes;
					seconds = 59;
				}
				else
				{
					minutes = 0;
					seconds = 0;
				}
			}
			var htmlminutes = 0;
			var htmlseconds = 0;
			if (parseInt(minutes) < 10)
			{
				htmlminutes = "0" + minutes;
			}
			else
			{
				htmlminutes = minutes;
			}
			if (parseInt(seconds) < 10)
			{
				htmlseconds = "0" + seconds;
			}
			else
			{
				htmlseconds = seconds;
			}
			/* snip */
			elem.html(htmlminutes + ':' + htmlseconds);
			if (seconds == 0 && minutes == 0)
			{
				clearInterval(window.interval);
				elem.closest('.modal-put-items__tab.active').find('.js-next-modal-tab').addClass('disabled')
			}
		}, 1000);
	};
	// modal item select
	$('body').on('click', '.mitems-item', function(e)
	{
		var th = $(this),
			pa = th.closest('.modal-put-items__tab');
		th.toggleClass('active');
		var checkedItems = pa.find('.mitems-item.active');
		calcPrice($('.modal-items__price'), $(this));
		var minprice = parseFloat($('.minPriceDeposit').html()).toFixed(2);
		var calcTotal = calcTotalPrice(checkedItems);
		if (minprice > calcTotal.price)
		{
			$('.modal-godeposit').addClass('disabled');
		}
		else
		{
			pa.find('.js-next-modal-tab').toggleClass('disabled', checkedItems.length === 0);
		}
		e.preventDefault();
	});
	$('.js-sort-items a').on('click', function(e)
	{
		var th = $(this),
			th_sort = th.attr('data-sort') == 'down' ? true : false;
		th.addClass('active').siblings().removeClass('active')
		sortPrice($('.js-load-content--target'), ".mitems-item", ".mitems-item__price span", th_sort);
		e.preventDefault();
	});
	$('.modal').on('modal.opened', function() {});
	$('.modal').on('modal.closed', function()
	{
		var th = $(this),
			modal__content = th.find('.modal__content'),
			tabs_container = th.find('.modal-put-items'),
			tabs = tabs_container.children('.modal-put-items__tab');
		modal__content.removeClass('modal-put-items_lg modal-put-items_md');
		$('.modal-items__price').html('не выбрано');
		tabs.removeClass('active').removeAttr('style');
		tabs.eq(1).find('.js-next-modal-tab').addClass('disabled');
		clearInterval(window.interval);
		tabs.eq(2).find('.js-timer').html('02:00');
		tabs.eq(0).addClass('active');
	});
	$('html').on('click', function()
	{
		setTimeout(function()
		{
			$('.main').perfectScrollbar('update');
		}, 10);
	});
});