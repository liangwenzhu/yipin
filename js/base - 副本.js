/*二维码弹出*/
$(document).ready(function(){
    $("#download-app").hover(function (){
        $("#QR-code").stop(false,false);
        $("#QR-code").show(0);
    },function () {
        $("#QR-code").stop(false,false);
        $("#QR-code").hide(200);
    });
    $("#QR-code").hover(function (){
        $("#QR-code").stop(false,false);
        $("#QR-code").show(100);
    },function () {
        $("#QR-code").stop(false,false);
        $("#QR-code").hide(100);
    });
});
/*首页最外围SWIPER*/
var mySwiper = new Swiper('.swiper1',{
    speed:1000,
    pagination: '.my-pagination',
    direction: 'vertical',
    paginationClickable: true,
    slidesPerView: 1,
    mousewheelControl: true,
    onInit:function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd:function(swiper){
        swiperAnimate(swiper);
    },
    paginationBulletRender: function (index, className) {
        switch (index) {
            case 0: name='首页';break;
            case 1: name='产品简介';break;
            case 2: name='产品简介2';break;
            case 3: name='产品简介3';break;
            case 4: name='产品简介4';break;
            case 5: name='精准地图';break;
            case 6: name='服务平台';break;
            case 7: name='空气社交';break;
            case 8: name='联系我们';break;
        }
        return '<span class="' + className + '">' + name + '</span>';

    }
});
$(function(){
    var hide = function(){
    $("span:contains(产品简介2)").hide();
    $("span:contains(产品简介3)").hide();
    $("span:contains(产品简介4)").hide();
    };
    setInterval(hide,1);
});
