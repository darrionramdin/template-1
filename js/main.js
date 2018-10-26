$(function() {
  // Sets background images
  const imageElements = $('[data-image]');
    for(let element of imageElements) {
        $(element).css("background-image",`url(${$(element).data('image')})`);
    }

    // Creates an Overlay
    const overlayElements = $('.overlay');
    for(let element of overlayElements) {
        const options = $(element).data('overlay').split(",");
        const styles = {
          background: options[0],
          opacity: options[1]
        }
        $(element).css(styles);
    }

    // Parallax Feature
    const rellax = new Rellax('.jumbotron-content');

    // Navbar Scroll Background
    $(document).scroll(function() {
        $('.navbar').toggleClass('navbar-scrolled', $(this).scrollTop() > $('.navbar').height());
    });

    // Smooth Scrolling
    $('.navbar .nav-link, .scrollTo').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    // Lightbox
    $('.fancy-box').fancybox();

    // Portfolio Filter
    const filterizd = $('.filtr-container').filterizr();

    // Portfolio Filter Active
    $('.portfolio-filters button').on('click', function() {
        $('.portfolio-filters button').removeClass('active');
        $(this).addClass('active');
    })
})
