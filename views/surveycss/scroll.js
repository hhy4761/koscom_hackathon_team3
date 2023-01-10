function up(){
    const height=$('.wholeproblem').height();
    $('html,body').animate({
        scrollTop: ((Math.floor($(window).scrollTop()/Math.floor(height))-1)*height)
    },500);
}

function down(){
    const height=$('.wholeproblem').height();
    $('html,body').animate({
        scrollTop: ((Math.floor($(window).scrollTop()/Math.floor(height))+1)*height)
    },500);
}

$(function(){
    
    $('.next').click(function(e){
        e.preventDefault();
        down();

    })

    $('.before').click(function(e){
        e.preventDefault();
        up();

    })
    $('html,body').animate({
        scrollTop:0
    },500);
})