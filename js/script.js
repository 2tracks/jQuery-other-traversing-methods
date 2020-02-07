$(document).ready(function(){

   /* $(".theButton").click(function(){
        $('#panel .container').siblings().hide();
    }); */

    /*$('.theButton').click(function(){
        $(this).hide();
    });*/

   /* $('.theButton').click(function(){
        $('#panel .container').siblings().fadeTo('slow', 0.1);
    });

    $('.superButton').on('click', function(){
        $('#panel .container').siblings().fadeTo(1000, 1);
    })*/

    /*$('.theButton').on('mouseenter', function(){
        $(this).css('background-color', '#000');
    });*/

    /*$('.theButton').on('mouseenter', function(){
        $(this).addClass('makeBlack');
    });

    $('.theButton').on('mouseout', function(){
        $(this).removeClass('makeBlack');
    });*/

    //Challenge 3

    $('.theButton').click(function(){
        var color = $(this).css('background-color');
        $('.superButton').text(color);
    });



});