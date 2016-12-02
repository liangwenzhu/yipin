var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i; //控制格式
var iMaxFilesize = 2097152; //2M
function preview1(file) {
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
     $(".preview").eq(0).empty().append($img);
 };
 reader.readAsDataURL(file);
 }
function preview2(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var $img = $('<img>').attr("src", e.target.result);
        $(".preview").eq(1).empty().append($img);
    };
    reader.readAsDataURL(file);
}
function preview3(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var $img = $('<img>').attr("src", e.target.result);
        $(".preview").eq(2).empty().append($img);
    };
    reader.readAsDataURL(file);
}
function preview4(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var $img = $('<img>').attr("src", e.target.result);
        $(".preview").eq(3).empty().append($img);
    };
    reader.readAsDataURL(file);
}

 $(function() {
 $('[type=file]').change(function(e) {
     var file1 = e.target.files[0];
     var file2 = e.target.files[1];
     var file3 = e.target.files[2];
     var file4 = e.target.files[3];
       preview1(file1);
       preview2(file2);
       preview3(file3);
       preview4(file4);
 })
 });

/*
 function preview1(file) {
 var img = new Image(), url = img.src = URL.createObjectURL(file);
 var $img = $(img);
 img.onload = function() {
 URL.revokeObjectURL(url);
 $('#preview').empty().append($img);
 }
 }
 function preview2(file) {
 var reader = new FileReader();
 reader.onload = function(e) {
 var $img = $('<img>').attr("src", e.target.result);
 $('#preview').empty().append($img);
 alert($img);
 };
 reader.readAsDataURL(file)
 }
 $(function() {
 $('[type=file]').change(function(e) {
 var file = e.target.files[0]
 preview2(file)
 })
 })*/
