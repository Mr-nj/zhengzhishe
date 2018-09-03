$('.hangye').click(function(){
    if($('.hangye').hasClass('more-nav-items-active')){
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.hangye').removeClass('more-nav-items-active');
        $('.fuwu').removeClass('more-nav-items-active');
        $('.select').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').hide();
        $('.neirong3').hide();
        $('.smak').hide();
        $('.company-list').show();
    }else{
        $('.more-nav-bottom1').addClass('more-nav-bottom-avtive');
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.hangye').addClass('more-nav-items-active');
        $('.fuwu').removeClass('more-nav-items-active');
        $('.select').removeClass('more-nav-items-active');
        $('.neirong1').show();
        $('.neirong2').hide();
        $('.neirong3').hide();
        $('.smak').show();
        $('.company-list').show();
    }
});
$('.fuwu').click(function(){
    if($('.fuwu').hasClass('more-nav-items-active')){
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.fuwu').removeClass('more-nav-items-active');
        $('.hangye').removeClass('more-nav-items-active');
        $('.select').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').hide();
        $('.neirong3').hide();
        $('.smak').hide();
        $('.company-list').show();
    }else{
        $('.more-nav-bottom2').addClass('more-nav-bottom-avtive');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.fuwu').addClass('more-nav-items-active');
        $('.hangye').removeClass('more-nav-items-active');
        $('.select').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').show();
        $('.neirong3').hide();
        $('.smak').show();
        $('.company-list').hide();}
});
$('.select').click(function(){
    if($('.select').hasClass('more-nav-items-active')){
        $('.fuwu').removeClass('more-nav-items-active');
        $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.hangye').removeClass('more-nav-items-active');
        $('.select').removeClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').hide();
        $('.neirong3').hide();
        $('.company-list').show();
        $('.smak').hide();
    }else{
        $('.fuwu').removeClass('more-nav-items-active');
        $('.more-nav-bottom3').addClass('more-nav-bottom-avtive');
        $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
        $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
        $('.hangye').removeClass('more-nav-items-active');
        $('.select').addClass('more-nav-items-active');
        $('.neirong1').hide();
        $('.neirong2').hide();
        $('.neirong3').show();
        $('.company-list').show();
        $('.smak').show();
        }
});
$('.smak').click(function(e){
    $('.fuwu').removeClass('more-nav-items-active');
    $('.more-nav-bottom3').removeClass('more-nav-bottom-avtive');
    $('.more-nav-bottom1').removeClass('more-nav-bottom-avtive');
    $('.more-nav-bottom2').removeClass('more-nav-bottom-avtive');
    $('.hangye').removeClass('more-nav-items-active');
    $('.select').removeClass('more-nav-items-active');
    $('.neirong1').hide();
    $('.neirong2').hide();
    $('.neirong3').hide();
    $('.company-list').show();
    $('.smak').hide();
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
$('.click4 span').click(function(){
    if($('.click4 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click4 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click4 span').toggleClass('addClass')
});
$('.click5 span').click(function(){
    if($('.click5 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click5 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click5 span').toggleClass('addClass')
});
$('.click6 span').click(function(){
    if($('.click6 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click6 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click6 span').toggleClass('addClass')
});
$('.click7 span').click(function(){
    if($('.click7 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click7 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click7 span').toggleClass('addClass')
});
$('.click8 span').click(function(){
    if($('.click8 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click8 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click8 span').toggleClass('addClass')
});

$('.click9 span').click(function(){
    if($('.click9 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click9 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click9 span').toggleClass('addClass')
});
$('.click10 span').click(function(){
    if($('.click10 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click10 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click10 span').toggleClass('addClass')
});
$('.click11 span').click(function(){
    if($('.click11 p').hasClass('active')){
        return false;
    }else{
        $(this).toggleClass('active');
    }
});
$('.click11 p').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $('.click11 span').toggleClass('addClass')
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
   