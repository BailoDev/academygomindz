// =========================scroo-header-active===============================
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    // sections.forEach(current =>{
    //    const sectionHeight = current.offsetHeight,
    //         sectionTop = current.offsetTop - 50,
    //         sectionId = current.getAttribute('id')

    //     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    //         document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    //     }else{
    //         document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    //     }
    // })
}
window.addEventListener('scroll', scrollActive)


// ===================change-background-header====================
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ================overview-carousel=============
$('.overview-carousel').owlCarousel({
    loop:true,
    margin:8,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        }
    }
})


// =============Courses-content=================
$(".courses-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// ==============Swapper JS==============
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
  });

// ==========team-carousel===============  
$('.team-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:8,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1280:{
            items:4
        }
    }
})