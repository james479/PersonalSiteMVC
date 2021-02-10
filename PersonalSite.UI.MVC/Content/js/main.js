//year for the footer
document.getElementById('year').textContent = new Date().getFullYear();

//scroll fixed top nav bar



//active class
$('.navbar-nav li').each(function () {
    if ($(this).find('a').attr('href') == window.location.pathname) {
        $(this).addClass('active');
    }
});


$('#recipeCarousel').carousel({
    interval: 5000
})

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});



// Closes responsive menu when a scroll trigger link is clicked
$(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
});

$("body").scrollspy({
    target: "#navbarSupportedContent",
    offset: 74,
});

var navbarCollapse = function () {
    if ($("#navbarSupportedContent").offset().top > 100) {
        $("#navbarSupportedContent").addClass("navbar-shrink");
    } else {
        $("#navbarSupportedContent").removeClass("navbar-shrink");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

//carousel

