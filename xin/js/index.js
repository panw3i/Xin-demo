// 换一换
        function Viewpoints(){
        var div =document.getElementById('Tags_Search').getElementsByTagName('ul');
        for(var i=0,len = div.length;i<len;i++){
            if(div[i].style.display === 'block'){
                div[i].style.display = 'none';
                i++;
                if(i>len-1){i=0}
                    div[i].style.transition="2s";
                    div[i].style.display = 'block';
                break;
            }
        }
    }
    
// 导航高亮
$(document).ready(function(){  
    $("#nav a").each(function(){  
        $this = $(this);  
        if($this[0].href==String(window.location)){  
            $this.addClass("on");  
        }  
    });  
});


$(function(){
    //$(".image-text ul li:eq(0) dt span,.image-text ul li:eq(1) dt span,.image-text ul li:eq(2) dt span").css("background","#eb6100");
        $(".image-text ul li").hover(function(){
            $(this).find("dd").show();
            $(this).siblings().find("dd").hide();
        });
});

$(function(){
//    轮播
    var playcont=null;
    var _n=0;
    var len=$("#lunbo_first ul li").size();
    $("#lunbo_first .iconf li").hover(function(){
        clearInterval(playcont);
        var _n=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $("#lunbo_first ul li").eq(_n).css("display","block").animate({opacity:1},500).siblings().animate({opacity:0}, 500).css("display","none");
        $(".flash .describe_first p").eq(_n).fadeIn().siblings().fadeOut();
    },function(){
         playauto();
    });
    function playauto(){
        playcont=setInterval(function(){
            _n++;
            if(_n>len-1){_n=0;}
            $("#lunbo_first .iconf li").eq(_n).addClass("on").siblings().removeClass("on");
            $("#lunbo_first ul li").eq(_n).css("display","block").animate({opacity:1},500).siblings().animate({opacity:0}, 500).css("display","none");
            $(".flash .describe_first p").eq(_n).fadeIn().siblings().fadeOut();
        },2500);
    }
    playauto();
});

$(function(){
//    轮播2
    var playcont=null;
    var _n=0;
    var len=$("#lunbo_two ul li").size();
    $("#lunbo_two .iconf li").hover(function(){
        clearInterval(playcont);
        var _n=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $("#lunbo_two ul li").eq(_n).css("display","block").animate({opacity:1},500).siblings().animate({opacity:0}, 500).css("display","none");
        $(".flash .describe_two p").eq(_n).fadeIn().siblings().fadeOut();
    },function(){
         playauto();
    });
    function playauto(){
        playcont=setInterval(function(){
            _n++;
            if(_n>len-1){_n=0;}
            $("#lunbo_two .iconf li").eq(_n).addClass("on").siblings().removeClass("on");
            $("#lunbo_two ul li").eq(_n).css("display","block").animate({opacity:1},500).siblings().animate({opacity:0}, 500).css("display","none");
            $(".flash .describe_two p").eq(_n).fadeIn().siblings().fadeOut();
        },2800);
    }
    playauto();
});

// 更新列表切换
$(function(){
    var _index=0;
    $(".Update_List .title p a").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var _index=$(this).index();
        //alert(_index)
        $(".Tab_article ul").eq(_index).show(100).siblings().hide(100);
    });
});


// 字体随机
$(document).ready(function() {
 var tags_a = $(".Novel_title a");
 tags_a.each(function(){
     var x = 9;
     var y = 0;
     var rand = parseInt(Math.random() * (x - y + 1) + y);
     $(this).addClass("tags"+rand);
  });

function color(){
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
}

});

$(function(){
    // 首页右边书切换
     $(".Context_Switch .title h4").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    })
    $("#Context_Switch1 .title h4").click(function(){
        var _tab=$(this).index();
        $("#Context_Switch1 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#Context_Switch2 .title h4").click(function(){
        var _tab=$(this).index();
        $("#Context_Switch2 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#Context_Switch3 .title h4").click(function(){
        var _tab=$(this).index();
        $("#Context_Switch3 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
});


// 登录弹窗
$(function(){
    $("#login").click(function(){
        $(".login_popup,#mask_layer").fadeIn();
    });
    $(".login_popup .but").click(function(){
        $(".login_popup,#mask_layer").fadeOut();
    });
})

