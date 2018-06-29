// animate smooth scroll
$(document).ready(function () {
    $('#lv').on('click', function(e) {
        const images = $('#images').position().top;
        e.preventDefault();
    
        $('html, body').animate(
            {
                scrollTop: images
            },
            900
        );
    }); 

    $( "#MANLAS" ).click(function(e) {
        e.preventDefault();
        $( "#MANLASSEC" ).toggle();
    });

    $( "#LAS" ).click(function(e) {
        e.preventDefault();
        $( "#LASSEC" ).toggle();
    });

    $( "#LASMAN" ).click(function(e) {
        e.preventDefault();
        $( "#LASMANSEC" ).toggle();
    });

});