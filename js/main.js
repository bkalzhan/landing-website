/*Carusel*/

const owl = $('.owl-carousel');
owl.owlCarousel(
    {
        center: true,
        loop: true,
        margin: 10,
        startPosition: 1,
        item: 1,

        responsive : {
            0:{
                item: 1,
            },

            755 : {
                margin: 15,
                item: 2
            },
            1000 : {
                margin: 20,
                item: 3
            },

            1200 : {
                margin: 30
            }
        }
    }
);
$('.slider__btn-prev').click(function() {
    owl.trigger('prev.owl.carousel');
})
$('.slider__btn-next').click(function() {
    owl.trigger('next.owl.carousel');
});



/*Burger Menu*/
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.header__nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon--active');
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll')
};