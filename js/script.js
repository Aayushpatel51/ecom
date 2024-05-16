function menuToggle(){
    const togglemenu = document.querySelector(".navbar-toggler");
    const navbar = document.querySelector(".collapse");
    togglemenu.classList.toggle('active');
    navbar.classList.toggle('active');
}
AOS.init({
    duration:3000,
});
(function($) {



    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("nav").addClass("sticky");
            $("nav").removeClass("container");
        }else{
            $("nav").removeClass("sticky");
        }
    });


    $('.book_date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
      });
      $('.book_time').timepicker();  
})(jQuery);                 