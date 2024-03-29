$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Java Back-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // var typed = new Typed(".typing-2", {
    //     strings: ["Java Back-End Developer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });


});

GitHubCalendar(".calendar", "alokkr11", { responsive: true });

let resume1 = document
    .getElementById("resume-link-1")
    .addEventListener("click", opendrive);

let resume2 = document
    .getElementById("resume-link-2")
    .addEventListener("click", opendrive);

function opendrive() {
    window.open(
        (href =
            "https://drive.google.com/file/d/1doAT0ISRLyAoP-RMX3H5ajyQcVlyfqBO/view")
    );
}