$('.quyu').click(function(){
    if($('.quyu').hasClass('more-nav-items-active')){
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.quyu').removeClass('more-nav-items-active');
        $('.bumen').removeClass('more-nav-items-active');
        $('.hangye').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').hide();
        $('.neirong3').hide();
        $('.smak').hide();
    }else{
        $('.more-nav-bottom1').addClass('more-nav-bottom-avtive');
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.quyu').addClass('more-nav-items-active');
        $('.bumen').removeClass('more-nav-items-active');
        $('.hangye').removeClass('more-nav-items-active');
        $('.neirong1').show();
        $('.neirong2').hide();
        $('.neirong3').hide();
        $('.smak').show();
    }
});
$('.bumen').click(function(){
    if($('.bumen').hasClass('more-nav-items-active')){
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.quyu').removeClass('more-nav-items-active');
        $('.hangye').removeClass('more-nav-items-active');
        $('.bumen').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').hide();
        $('.neirong3').hide();
        $('.smak').hide();
    }else{
        $('.more-nav-bottom2').addClass('more-nav-bottom-avtive');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.bumen').addClass('more-nav-items-active');
        $('.hangye').removeClass('more-nav-items-active');
        $('.quyu').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').show();
        $('.neirong3').hide();
        $('.smak').show();
        }
});
$('.hangye').click(function(){
    if($('.hangye').hasClass('more-nav-items-active')){
        $('.hangye').removeClass('more-nav-items-active');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.quyu').removeClass('more-nav-items-active');
        $('.bumen').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').hide();
        $('.neirong3').hide();
        $('.smak').hide();
    }else{
        $('.hangye').addClass('more-nav-items-active');
        $('.more-nav-bottom3').addClass('more-nav-bottom-avtive');
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.quyu').removeClass('more-nav-items-active');
        $('.bumen').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').hide();
        $('.neirong3').show();
        $('.smak').show();
        }
});
$('.smak').click(function(e){
    $('.quyu').removeClass('more-nav-items-active');
    $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
    $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
    $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
    $('.bumen').removeClass('more-nav-items-active');
    $('.hangye').removeClass('more-nav-items-active');
    $('.neirong1').hide();
    $('.neirong2').hide();
    $('.neirong3').hide();
    $('.smak').hide();
});
$(function(){
    $('.search-btn').click(function(){
        $(this).toggle();
        $('.quxiao').toggle();
        $('.mui-title').toggle();
        $('.nav-inp').toggle();
    });
    $('.quxiao').click(function(){
        $(this).toggle();
        $('.search-btn').toggle();
        $('.mui-title').toggle();
        $('.nav-inp').toggle();
    })
});
$('.click1 span').click(function(){
    if($('.click1 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click1 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click1 span').toggleClass('addClass')
});
$('.click2 span').click(function(){
    if($('.click2 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click2 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click2 span').toggleClass('addClass')
});

$('.click3 span').click(function(){
    if($('.click3 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click3 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click3 span').toggleClass('addClass')
});

