! function(a) {
	a.fn.mPickDater = function(b) {
		function k(e, f, g, h, i) {
			function k(b, c) {
				var b = parseInt(b) + 1;
				2 == b ? (a("#mPickDaterBoxCldd ul li").eq(32).addClass("hiddenObj"), a("#mPickDaterBoxCldd ul li").eq(33).addClass("hiddenObj"), 0 != c % 4 && a("#mPickDaterBoxCldd ul li").eq(31).addClass("hiddenObj")) : 8 > b ? 0 == b % 2 && a("#mPickDaterBoxCldd ul li").eq(33).addClass("hiddenObj") : 0 != b % 2 && a("#mPickDaterBoxCldd ul li").eq(33).addClass("hiddenObj"), a("#mPickDaterBoxCldd ul li").css({
					color: "rgb(67, 67, 67)"
				}), a(".hiddenObj").css({
					color: "#bbb"
				})
			}

			function v() {
				var b;
				a("#mPickDaterBox-slide").css("transition", "all 0.3s 0.2s"), a("#mPickDaterBox-slide").css({
					opacity: 1,
					transform: "translate3d(0,0,0)"
				}), a("#mPickDaterBox-bg").css("transition", "all 0.2s 0.1s"), a("#mPickDaterBox-bg").css({
					opacity: 1
				}), (1 == d.mPickerType || 3 == d.mPickerType) && (a("#mPickDaterBoxCldy ul").css({
					transform: "translate3D(0,-" + 40 * j + "px,0)"
				}), b = 3 - a("#mPickDaterBoxCldy ul").position().top / 40, w(b, -1, "mPickDaterBoxCldy"), x("mPickDaterBoxCldy"), a("#mPickDaterBoxCldm ul").css({
					transform: "translate3D(0,-" + 40 * f + "px,0)"
				}), b = 3 - a("#mPickDaterBoxCldm ul").position().top / 40, w(b, -1, "mPickDaterBoxCldm"), x("mPickDaterBoxCldm"), a("#mPickDaterBoxCldd ul").css({
					transform: "translate3D(0,-" + 40 * (g - 1) + "px,0)"
				}), b = 3 - a("#mPickDaterBoxCldd ul").position().top / 40, w(b, -1, "mPickDaterBoxCldd"), x("mPickDaterBoxCldd")), (2 == d.mPickerType || 3 == d.mPickerType) && (a("#mPickDaterBoxTimes ul").css({
					transform: "translate3D(0,-" + 40 * h + "px,0)"
				}), b = 3 - a("#mPickDaterBoxTimes ul").position().top / 40, w(b, -1, "mPickDaterBoxTimes"), x("mPickDaterBoxTimes"), a("#mPickDaterBoxTimef ul").css({
					transform: "translate3D(0,-" + 40 * i + "px,0)"
				}), b = 3 - a("#mPickDaterBoxTimef ul").position().top / 40, w(b, -1, "mPickDaterBoxTimef"), x("mPickDaterBoxTimef")), a("#mPickDaterBox-cancel").on("click", function() {
					a("#mPickDaterBox-slide").css("transition", "all 0.2s 0.1s"), a("#mPickDaterBox-slide").css({
						opacity: 0,
						transform: "translate3d(0,100%,0)"
					}), a("#mPickDaterBox-bg").css("transition", "all 0.3s 0.2s"), a("#mPickDaterBox-bg").css({
						opacity: 0
					}), setTimeout(function() {
						a("#mPickDaterBox").remove()
					}, 500)
				}), a("#mPickDaterBox-confirm").on("click", function() {
					a("#mPickDaterBox-slide").css("transition", "all 0.2s 0.1s"), a("#mPickDaterBox-slide").css({
						opacity: 0,
						transform: "translate3d(0,100%,0)"
					}), a("#mPickDaterBox-bg").css("transition", "all 0.3s 0.2s"), a("#mPickDaterBox-bg").css({
						opacity: 0
					});
					var b = "";
					1 == d.mPickerType ? (b += a("#mPickDaterBoxCldy .active").text() + d.separator + a("#mPickDaterBoxCldm .active").text() + d.separator + a("#mPickDaterBoxCldd .active").text(), b += " 00:00") : 2 == d.mPickerType ? b += a("#mPickDaterBoxTimes .active").text() + ":" + a("#mPickDaterBoxTimef .active").text() : (b += a("#mPickDaterBoxCldy .active").text() + d.separator + a("#mPickDaterBoxCldm .active").text() + d.separator + a("#mPickDaterBoxCldd .active").text(), b += " " + a("#mPickDaterBoxTimes .active").text() + ":" + a("#mPickDaterBoxTimef .active").text()), a(c).val(b), setTimeout(function() {
						a("#mPickDaterBox").remove()
					}, 500)
				})
			}

			function w(b, c, d) {
				var f, g, h, i, j, e = a("#" + d + " ul li");
				0 > c ? (f = Math.floor(b), g = .1 * (b - f)) : (f = Math.ceil(b), g = .1 * (f - b)), h = 10 * g, e.css({
					transition: "all 0s"
				}), e.css({
					lineHeight: "40px",
					height: "40",
					transform: "scale(1,0.4)",
					opacity: "0.4"
				}).removeClass("active").eq(f).addClass("active"), e.css({
					transition: "all 0.1s"
				}), 0 > c ? (e.eq(f).css({
					transform: "scale(1," + (1 - g) + ")",
					opacity: 1 - g,
					lineHeight: 70 - h + "px",
					height: 70 - h + "px"
				}), e.eq(f - 1).css({
					transform: "scale(1," + (.8 - g) + ")",
					opacity: .8 - g,
					lineHeight: 60 - h + "px",
					height: 60 - h + "px"
				}), e.eq(f - 2).css({
					transform: "scale(1," + (.7 - g) + ")",
					opacity: .7 - g,
					lineHeight: 50 - h + "px",
					height: 50 - h + "px"
				}), e.eq(f + 1).css({
					transform: "scale(1," + (.8 + g) + ")",
					opacity: .8 + g,
					lineHeight: 60 + h + "px",
					height: 60 + h + "px"
				}), e.eq(f + 2).css({
					transform: "scale(1," + (.7 + g) + ")",
					opacity: .7 + g,
					lineHeight: 50 + h + "px",
					height: 50 + h + "px"
				})) : (e.eq(f).css({
					transform: "scale(1," + (1 - g) + ")",
					opacity: 1 - g,
					lineHeight: 70 - h + "px",
					height: 70 - h + "px"
				}), e.eq(f + 1).css({
					transform: "scale(1," + (.8 - g) + ")",
					opacity: .8 - g,
					lineHeight: 60 - h + "px",
					height: 60 - h + "px"
				}), e.eq(f + 2).css({
					transform: "scale(1," + (.7 - g) + ")",
					opacity: .6 - g,
					lineHeight: 50 - h + "px",
					height: 50 - h + "px"
				}), e.eq(f - 1).css({
					transform: "scale(1," + (.8 + g) + ")",
					opacity: .8 + g,
					lineHeight: 60 + h + "px",
					height: 60 + h + "px"
				}), e.eq(f - 2).css({
					transform: "scale(1," + (.7 + g) + ")",
					opacity: .6 + g,
					lineHeight: 50 + h + "px",
					height: 50 + h + "px"
				}), e.eq(f - 3).css({
					transform: "scale(1," + (.4 + g) + ")",
					opacity: .4 + g,
					lineHeight: 40 + h + "px",
					height: 40 + h + "px"
				})), "mPickDaterBoxCldd" != d && (i = a("#mPickDaterBoxCldm .active").text(), j = a("#mPickDaterBoxCldy .active").text(), a("#mPickDaterBoxCldd ul li").removeClass("hiddenObj"), k(i - 1, j))
			}

			function x(b) {
				var d, e, f, c = document.getElementById(b);
				c.addEventListener("touchstart", function(a) {
					f = 3;
					var b = a.touches[0];
					d = b.pageY
				}), c.addEventListener("touchmove", function(c) {
					var i, g = c.touches[0],
						h = g.pageY;
					e = h - d, a("#" + b + " ul").position().top > 0 && (e = 0, f = 2), 370 - a("#" + b + " ul").position().top > parseInt(a("#" + b + " ul").height()) && (e = 0, f = 1), a("#" + b + " ul").css("transform", "translate3D(0," + (e + a("#" + b + " ul").position().top) + "px,0)"), i = 3 - a("#" + b + " ul").position().top / 40, w(i, e, b), d = h
				}), c.addEventListener("touchend", function() {
					var d, h, c = 3 - a("#" + b + " ul").position().top / 40;
					d = 0 > e ? Math.floor(c) : Math.ceil(c), 1 == f ? (h = "mPickDaterBoxCldd" == b && a("#" + b + " ul").find(".hiddenObj").length > 0 ? a("#" + b + " ul").find(".hiddenObj").length : 0, d = a("#" + b + " ul li").length - 4 - h) : 2 == f && (d = 3), a("#" + b + " ul").css("transform", "translate3D(0,-" + 40 * (d - 3) + "px,0)"), "mPickDaterBoxCldd" == b && (g = d - 2), w(d, e, b)
				})
			}
			var j, l, m, n, o, p, q, r, s, t, u;
			for(d = a.extend(d, b), j = e - d.startY > 0 ? d.endY - e > 0 ? e - d.startY : d.endY - d.startY : 0, l = "<div id='mPickDaterBox' style='position: absolute;width: 100%;height: 100%;top: 0;left: 0'><div id='mPickDaterBox-bg' style='position: absolute;height: 100%;width: 100%;background: rgba(0,0,0,0.4);opacity: 0.5'></div><div id='mPickDaterBox-slide' style='position: absolute;bottom: 0;left: 0;width: 100%;opacity: 0; transform:translate3d(0,100%,0)'><div id='mPickDaterBox-option' style='background: #eee;box-shadow: 0 0 5px #eee;border: 1px solid #ddd;'><div id='mPickDaterBox-head' style='font-size: 24px;font-family: Microsoft YaHei;padding: 0 30px; height: 90px;line-height: 90px;border-bottom: 1px solid #ccc;'><span id='mPickDaterBox-cancel' style='line-height: 56px;background: #fff;display: inline-block;border-radius: 6px;padding: 0 25px;box-shadow: 0 0 7px #aaa;'>取消</span><span id='mPickDaterBox-confirm' style='line-height: 56px;background: #007AFF;border-radius: 6px;padding: 0 25px;float: right;color: #fff;margin-top: 17px;'>确认</span><div style='clear: both'></div></div></div></div></div></div>", m = '<div id="mPickDaterBoxCld" ><div id="mPickDaterBoxTopCld" style="text-align: center;font-size: 28px;color: #8F8F94;line-height: 50px;box-shadow: 0 0 5px #ccc;"><span>年</span><span>月</span><span>日</span></div><div style="height: 370px;background: #ddd;border-top: #aaa 1px solid;position: relative"><div id="mPickDaterBoxCldy" class="item"></div><div id="mPickDaterBoxCldm" class="item"></div><div id="mPickDaterBoxCldd" class="item"></div><div style="clear: both"></div><div style="position: absolute;border-bottom: 1px solid #aaa;width: 100%;top: 145px;box-shadow: 0 0 1px #aaa;"></div><div style="position: absolute;border-bottom: 1px solid #aaa;width: 100%;top: 220px;box-shadow: 0 0 1px #aaa;"></div></div></div>', n = '<div id="mPickDaterBoxTime" ><div id="mPickDaterBoxTopCld" style="text-align: center;font-size: 28px;color: #8F8F94;line-height: 50px;box-shadow: 0 0 5px #ccc;"><span>时</span><span>分</span></div><div style="height: 370px;background: #ddd;border-top: #aaa 1px solid;position: relative"><div id="mPickDaterBoxTimes" class="item"></div><div id="mPickDaterBoxTimef" class="item"></div><div style="clear: both"></div><div style="position: absolute;border-bottom: 1px solid #aaa;width: 100%;top: 145px;box-shadow: 0 0 1px #aaa;"></div><div style="position: absolute;border-bottom: 1px solid #aaa;width: 100%;top: 220px;box-shadow: 0 0 1px #aaa;"></div></div></div>', o = "<ul>", o += "<li></li><li></li><li></li>", p = d.startY; p < d.endY + 1; p++) o += "<li>" + (p > 9 ? p : "0" + p) + "</li>";
			for(o += "<li></li><li></li><li></li>", o += "</ul>", q = "<ul>", q += "<li></li><li></li><li></li>", p = 1; 13 > p; p++) q += "<li>" + (p > 9 ? p : "0" + p) + "</li>";
			for(q += "<li></li><li></li><li></li>", q += "</ul>", r = "<ul>", r += "<li></li><li></li><li></li>", p = 1; 32 > p; p++) r += "<li>" + (p > 9 ? p : "0" + p) + "</li>";
			for(r += "<li></li><li></li><li></li>", r += "</ul>", s = "<ul>", s += "<li></li><li></li><li></li>", p = 0; 24 > p; p++) s += "<li>" + (p > 9 ? p : "0" + p) + "</li>";
			for(s += "<li></li><li></li><li></li>", s += "</ul>", t = "<ul>", t += "<li></li><li></li><li></li>", p = 0; 60 > p; p++) t += "<li>" + (p > 9 ? p : "0" + p) + "</li>";
			t += "<li></li><li></li><li></li>", t += "</ul>", a("body").append(l), 1 == d.mPickerType ? a("#mPickDaterBox-option").append(m) : 2 == d.mPickerType ? a("#mPickDaterBox-option").append(n) : 3 == d.mPickerType && (u = '<div><div style="width: 60%;float: left">' + m + '</div><div style="width: 40%;float: left">' + n + '</div><div style="clear: both"></div></div>', a("#mPickDaterBox-option").append(u)), a("#mPickDaterBoxCldy").append(o), a("#mPickDaterBoxCldm").append(q), a("#mPickDaterBoxCldd").append(r), a("#mPickDaterBoxTimes").append(s), a("#mPickDaterBoxTimef").append(t), k(f, e), a("#mPickDaterBoxTopCld span,#mPickDaterBoxTime span").css({
				display: "inline-block",
				width: "33.33%"
			}), a("#mPickDaterBoxCld .item,#mPickDaterBoxTime .item").css({
				width: "33.33%",
				"float": "left",
				height: "100%",
				position: "relative",
				overflow: "hidden",
				fontSize: "40px",
				textAlign: "center",
				color: "#434343 "
			}).find("ul").css({
				transform: "translate3D(0,-200px,0)",
				transition: "all 0s"
			}).find("li").css({
				lineHeight: "40px",
				height: "40",
				transform: "scale(1,0.4)",
				opacity: "0.4"
			}), a("#mPickDaterBoxTime .item").css("width", "50%"), a("#mPickDaterBoxTime span").css("width", "50%"), setTimeout(function() {
				v()
			}, 50)
		}
		var c = this,
			d = {
				startY: 1990,
				endY: 2050,
				mPickerType: 3,
				separator: "/"
			},
			e = new Date,
			f = e.getFullYear(),
			g = e.getMonth(),
			h = e.getDate(),
			i = e.getHours(),
			j = e.getMinutes();
		c.val(f + d.separator + (g + 1) + d.separator + h + " " + i + ":" + j), c.focus(function() {
			var b, e, f, g, h, i, j;
			a("#mPickDaterBox").length || (b = 2 == d.mPickerType ? [] : c.val().split(" ")[0].split(d.separator), e = -1 == c.val().indexOf(" ") ? c.val().split(":") : c.val().split(" ")[1].split(":"), f = parseInt(b[0]), g = parseInt(b[1]), h = parseInt(b[2]), i = parseInt(e[0]), j = parseInt(e[1]), k(f, g - 1, h, i, j))
		})
	}
}(jQuery);