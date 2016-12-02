/*上传图片时的缩略图*/
var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i; //控制格式
var iMaxFilesize = 2097152; //控制大小2M
function preview1(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    if (!rFilter.test(file.type)) {
        alert("文件格式必须为图片");
        return;
    }
    if (file.size > iMaxFilesize) {
        alert("图片大小不能超过2M");
        return;
    }
    reader.onload = function(e) {
        var $img = $('<img>').attr("src", e.target.result);
        $(".preview").eq(0).empty().append($img);
    };
}
function preview2(file) {
    var reader = new FileReader();
    if (!rFilter.test(file.type)) {
        alert("文件格式必须为图片");
        return;
    }
    if (file.size > iMaxFilesize) {
        alert("图片大小不能超过2M");
        return;
    }
    reader.onload = function(e) {
        var $img = $('<img>').attr("src", e.target.result);
        $(".preview").eq(1).empty().append($img);
    };
    reader.readAsDataURL(file);
}
function preview3(file) {
    var reader = new FileReader();
    if (!rFilter.test(file.type)) {
        alert("文件格式必须为图片");
        return;
    }
    if (file.size > iMaxFilesize) {
        alert("图片大小不能超过2M");
        return;
    }
    reader.onload = function(e) {
        var $img = $('<img>').attr("src", e.target.result);
        $(".preview").eq(2).empty().append($img);
    };
    reader.readAsDataURL(file);
}
function preview4(file) {
    var reader = new FileReader();
    if (!rFilter.test(file.type)) {
        alert("文件格式必须为图片");
        return;
    }
    if (file.size > iMaxFilesize) {
        alert("图片大小不能超过2M");
        return;
    }
    reader.onload = function(e) {
        var $img = $('<img>').attr("src", e.target.result);
        $(".preview").eq(3).empty().append($img);
    };
    reader.readAsDataURL(file);
}
/*删除行*/
var remove = function(){
    $(".remove").click(function(){
        $(this).parents("tr") .remove();
    });
};
/*增加行*/
var add = function(){
    $("#add").click(function(){
    var tbody = $("#tbody");
    var addTr = $('<tr>' +
        '<td  class="text-center"><input placeholder="请填写您的项目名称"></td>' +
        '<td  class="text-center"><input placeholder="请填写价格"></td>' +
        '<td  class="text-center"><a  class="button btn-danger remove">删除</a></td>' +
        '</tr>');
    addTr.appendTo(tbody);
    remove();
    });
};
/*修改单选框样式*/
var select = function(){
    $("#project label").click(function(){
        var a = $(this).siblings().attr("class","unselect");
        $(this).attr("class","select");
    })
};
/*读取省级option*/
function loadJson1() {
    $.getJSON('city.json',function(data){
        $.each(data, function(entryIndex, entry){
            var html = '<option>'+entry.name+'</option>';
            /*将省名插入*/
            $("#province").append(html);
            /*检测现在所选定的值*/
            var select = ($("#province option:selected").text());
            if(entry.name==select){
                var citys = entry.city;
                $.each(citys,function(entryIndex, entry){
                    city+='<option>'+entry.name+'</option>';
                    //  area+='<option>'+entry.area+'</option>';
                });
            }
        });
        // $("#province").html(html);
        /*初值，就是北京*/
        $("#city").html(city);
        // $("#area").html(area);
    });
}
/*根据省级变化读取城市option*/
function loadJson2(){
    $.getJSON('city.json',function(data){
        var select1 = ($("#province option:selected").text());
        $.each(data, function(entryIndex, entry){
            /*检测现在所选定的值*/
            if(entry.name==select1){
                var cityss = entry.city;
                citysss='';
                //areasss='';  区，现在暂时不需要
                $.each(cityss,function(entryIndex, entry){
                    citysss+='<option>'+entry.name+'</option>';
                    // areasss+='<option>'+entry.area+'</option>';
                });
            }
        });
        // $("#province").html(html);
        $("#city").html(citysss);
        //$("#area").html(areasss);
    })
}
$(function() {
    loadJson1();//初始化地区三联动option.
    $('[type=file]').change(function(e) {
        var file1 = e.target.files[0];
        var file2 = e.target.files[1];
        var file3 = e.target.files[2];
        var file4 = e.target.files[3];
        preview1(file1);
        preview2(file2);
        preview3(file3);
        preview4(file4);
    });
       add();
    remove();
    select();
});
