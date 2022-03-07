window.onscroll = () => {

    searchForm.classList.remove('active')

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    } else {
        document.querySelector('.header .header-2').classList.remove('active')
    }
}

window.onload = () => {
    fadeOut()
}



let searchForm     = document.querySelector('.search-form'),
    searchBtn      = document.querySelector('#search-btn'),
    loginForm      = document.querySelector('.login-form-container')
    openLoginBtn   = document.querySelector('#login-btn')
    closeLoginBtn  = document.querySelector('#close-login-btn')

    searchBtn.onclick = () => {
        searchForm.classList.toggle('active')
    }

    openLoginBtn.onclick = () => {
        loginForm.classList.toggle('active')
    }

    closeLoginBtn.onclick = () => {
        loginForm.classList.remove('active')
    }

function loader(){
    document.querySelector('.loader-container').classList.add('active')
}

function fadeOut(){
    setTimeout(loader, 4000)
}

    // slider start
    var swiper = new Swiper(".books-slider", {
       loop: true,
       centeredSlides:true,
       autoplay: {
           delay: 9500,
           disableOnInteraction: false
       },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });

    var swiper = new Swiper(".featured-slider", {
        spaceBetween: 10,
        loop: true,
        centeredSlides:true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
         breakpoints: {
           0: {
             slidesPerView: 1,
           },
           450: {
             slidesPerView: 2,
           },
           768: {
             slidesPerView: 3,
           },
           1024: {
             slidesPerView: 4,
           },
         },
       });

       var swiper = new Swiper(".arrivals-slider", {
        spaceBetween: 10,
        loop: true,
        centeredSlides:true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
         breakpoints: {
           0: {
             slidesPerView: 1,
           },
           450: {
             slidesPerView: 2,
           },
           768: {
             slidesPerView: 3,
           },
           1024: {
             slidesPerView: 4,
           },
         },
       });

       var swiper = new Swiper(".reviews-slider", {
        spaceBetween: 30,
        grabCursor:true,
        loop: true,
        centeredSlides:true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
         breakpoints: {
           0: {
             slidesPerView: 1,
           },
           450: {
             slidesPerView: 2,
           },
           768: {
             slidesPerView: 3,
           },
           1024: {
             slidesPerView: 4,
           },
         },
       });

       var swiper = new Swiper(".blogs-slider", {
        spaceBetween: 30,
        grabCursor:true,
        loop: true,
        centeredSlides:true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
         breakpoints: {
           0: {
             slidesPerView: 1,
           },
           450: {
             slidesPerView: 2,
           },
           768: {
             slidesPerView: 3,
           },
           1024: {
             slidesPerView: 4,
           },
         },
       });

    // slider end








