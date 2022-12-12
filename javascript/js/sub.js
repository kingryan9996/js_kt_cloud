$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header",head);
$("footer").load("./inc.html footer");

let idx = localStorage.idx || 0;

function head () {
    $("header li").eq(idx).css("scale","7.0")
    .css(    'transform','translateY(70px)')
    .css('background-color','rgba(0,0,0,0.6)')
    $("header li a").eq(idx).css("color","coral")
    

    $("header li").click(function(){
        let idx = $(this).index();

        localStorage.idx = idx;
    })


}
head();