$(function(){
  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slider__btn--prev slick-prev"><img src="images/icons/prevArrow.svg"></button>',
    nextArrow: '<button type="button" class="slider__btn--next slick-next"><img src="images/icons/nextArrow.svg"></button>',
    dots: true,
    arrows: true,
    fade: true,
    responsive: [
      {
        breakpoint: 585,
        settings: {
          arrows: false,
        }
      }]
    
  });

  $('.burger').on('click', function(){
    $('.menu').toggleClass('menu--active');
    $('.burger').toggleClass('burger--active');
  });

  $('.menu__link--list').on('click', function(){
  $('.menu__sublist').toggleClass('menu__sublist--active');
});
});

const header = document.getElementById('header');

window.addEventListener('scroll', checkScroll)

function checkScroll() {
  let scrollPos = window.scrollY;
  if (scrollPos > 200) {
    header.classList.add('header--show');
  } else {
    header.classList.remove('header--show')
  }
}