$(function(){
    // 排行榜右边书切换
    $(".ranking_list_grids_item .title h4").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    })
    $("#ranking_list_grids_item1 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item1 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#ranking_list_grids_item2 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item2 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#ranking_list_grids_item3 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item3 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#ranking_list_grids_item4 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item4 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#ranking_list_grids_item5 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item5 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#ranking_list_grids_item6 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item6 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#ranking_list_grids_item7 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item7 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#ranking_list_grids_item8 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item8 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
    $("#ranking_list_grids_item9 .title h4").click(function(){
        var _tab=$(this).index();
        $("#ranking_list_grids_item9 .image-text").eq(_tab).show(200).siblings().hide(200);
    })
});


$(function(){
    $(".Works_reading_page .toolbar ul li a").on('click',function(){
        $(".Works_reading_page .toolbar ul li a").attr('class','');
        $(this).attr('class','on');
    })
    // 目录弹窗
    $("#catalog_btn").on('click',function(){
        $(".Directory_popup_window").fadeIn();
    });

    $(".Directory_popup_window .close").on('click',function(){
        $(".Directory_popup_window").fadeOut();
    })
});
