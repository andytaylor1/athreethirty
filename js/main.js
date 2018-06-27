// animate smooth scroll
$(document).ready(function () {
    $('#lv').on('click', function() {
        const images = $('#images').position().top;
    
        $('html, body').animate(
            {
                scrollTop: images
            },
            900
        );
    }); 
  });