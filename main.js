

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
function showPopup() {
    alert("At Blynk Media, we believe that every brand has a unique story to tell. Our goal is to help you present your brand in a way that resonates with your target audience and leaves a lasting impression. Through a blend of strategic marketing, creative design, and innovative digital solutions, we bring your brand’s vision to life, making sure it stands out in a crowded market.");
}
function showPopup2() {
    alert("At Blynk Media, we don’t just provide digital marketing services; we partner with you to understand your unique business challenges, goals, and vision. We know that every business is different, and that’s why we take the time to truly understand your needs before crafting custom solutions that deliver measurable results.");
}
  

$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

