$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("mabel");
        }else{
            $('.navbar').removeClass("mabel");
        }
    });
    // Efectos en la pagina 
ScrollReveal().reveal('.home');
ScrollReveal().reveal('.abaut', { delay: 100 });
ScrollReveal().reveal('.services', { delay: 100 });
ScrollReveal().reveal('.skills', { delay: 100 });
ScrollReveal().reveal('.social', { delay: 100 });
ScrollReveal().reveal('footer', { delay: 100 });
    // Comando de menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    /* Letras que se mueven */
    var typed = new Typed(".prueba2", {
        strings: ["Mabelcito", "mabelcito.site"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing", {
        strings: ["website.", "Portfolio."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});