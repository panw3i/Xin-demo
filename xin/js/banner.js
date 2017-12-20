
$(function() {
    $('#focus').slideFocus();
    var Blen=$(".focus ul li").size();
    $(".focus ul li").css("width",100/Blen+"%");

    window.onresize=function(){
    	 var Blen=$(".focus ul li").size();
    	 $(".focus ul li").css("width",100/Blen+"%");
    }
});

$(function(){
    // 导航目录
    var _left=$(".container").offset().left-160+"px";
    $("#catalog").css("left",_left);
    // 阅读页工具条
    var _right=$(".container").offset().left-73+"px";
    $(".Works_reading_page .toolbar").css("right",_right);

    // 目录弹窗
    var _l=$(".Works_reading_page .container").offset().left+"px";
    $(".Directory_popup_window").css("right",_l)

    $(window).resize(function(){
        var _left=$(".container").offset().left-160+"px";
        $("#catalog").css("left",_left);
        // 阅读页工具条
        var _right=$(".container").offset().left-73+"px";
        $(".Works_reading_page .toolbar").css("right",_right);

        // 目录弹窗
        var _l=$(".Works_reading_page .container").offset().left+"px";
        $(".Directory_popup_window").css("right",_l)

    });

    $("#toolbar_top").click(function(){
        $("body,html").animate({scrollTop:0},500);
    })
});


jQuery.fn.extend({
	
	slideFocus: function(){
		var This = $(this);
		var sWidth = $(This).width(),
			len    =$(This).find('ul li').length,
			index  = 0,
			Timer;

		// btn event
		var btn = "<div class='btn'>";
		for(var i=0; i < len; i++) {
			btn += "<span></span>";
		};
		btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$(This).append(btn);
		$(This).find('.btn span').eq(0).addClass('on');


		$(This).find('.btn span').mouseover(function(){
			index = $(This).find('.btn span').index(this);
			Tony(index);
		});

		$(This).find('.next').click(function(){
			index++;
			if(index == len){index = 0;}
			Tony(index);
		});

		$(This).find('.pre').click(function(){
			index--;
			if(index == -1){index = len - 1;}
			Tony(index);
		});


		// start setInterval		
		$(This).find('ul').css("width",sWidth * (len));
		$(This).hover(function(){
			clearInterval(Timer);
			show($(This).find('.preNext'));
		},function(){
			hide($(This).find('.preNext'));
			Timer=setInterval(function(){
				Tony(index);
				index++;
				if(len == index){index = 0;}
			}, 3000)
		}).trigger("mouseleave");

		function Tony(index){
			var new_width = -index * sWidth;
			$(This).find('ul').stop(true,false).animate({'left' : new_width},500);
			$(This).find('.btn span').stop(true,false).eq(index).addClass('on').siblings().removeClass('on');
		};

		
		// show hide
		function show(obj){ $(obj).stop(true,false).fadeIn();}
		function hide(obj){ $(obj).stop(true,false).fadeOut();}
	}
});