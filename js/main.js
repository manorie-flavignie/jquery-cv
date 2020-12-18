function getrandom(){
    return Math.floor(Math.random() * Math.floor(3));
}

$(document).ready(function(){
    var list = ['#d38be3', '#fff438', '#76f16c' ];
    $("#button1").click(function(){
        $(".ui-page").css("background-color", "#ff6200");
    });
    $("#buttonb").click(function(){
        $(".ui-page").css("background-color", "#8be3da");
    });
    $("#buttonalea").click(function() {
        var i = getrandom();
        $(".ui-page").css("background-color", list[i]);
    });
});
