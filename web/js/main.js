$(document).ready( function() {
   $('.jquery').append('<p>Jquery - Document rdy</p>')
});

$(window).on('load', function() {
    $('.jquery').append('<p>Jquery - Documtent load</p>')
});

var statusFlag = false;

$(window).on('resize',function() {

    if(statusFlag == false) {

        $('.jquery').append('<p>Jquery - Documtent resize</p>');

        statusFlag = true;

    }

});