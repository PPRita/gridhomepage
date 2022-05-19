$(document).ready(()=>{

    // STICKY NAVIGATION
    $(document).scroll(function() {
        var position  = $(window).scrollTop();
        if(10 < position ){
            $('.navigation').addClass('nav-sitcky ');
        } else {
            $('.navigation').removeClass('nav-sitcky ');
        }
    });

    // CLOSE ALERT
    $('#closeAlert').on('click', ()=>{
        $('.alert-container').fadeOut(440);
        $('.alert').fadeOut(500);
    });


    // LAZY LOADING
    $(document).scroll(function() {
        var position  = $(window).scrollTop();
        if(500 < position ){
            $('.lazy-loading').css('display', 'flex');
        } else {
            $('.lazy-loading').hide();
        }
    });
})