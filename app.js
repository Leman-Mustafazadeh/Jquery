
// Jquery $

// $.noConflict();

const Leman = $.noConflict();





Leman(document).ready(function(){
    Leman("[class]").click(function(){
        Leman("div").css("background-color","yellow")
        Leman(".R").css("background-color","red")
    });
});



Leman(function(){
    Leman("div").hover(function(){
        Leman(this).css("background-color","blue")
    })

    Leman("div").mouseleave(function(){
        Leman(this).css("background-color","green")
    })
})