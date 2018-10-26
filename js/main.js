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
    parallax();

    // Navbar Scroll Background
    $(document).scroll(function() {
      navBackground()
    });

    // Smooth Scrolling
    smoothScroll();

    // Lightbox
    lightbox();

    // Portfolio Filter


    // Portfolio Filter Active
    portfolioFilters();
});

// Main Functions

// Parallax Feature
function parallax() {
  if($('.rellax').length) {
    const rellax = new Rellax('.jumbotron-content');
  }
}

//  Lightbox
function lightbox() {
  if($('.fancy-box').length) {
    $('.fancy-box').fancybox();
  }
}

// Smooth Scrolling
function smoothScroll() {
  $('.navbar .nav-link, .scrollTo').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 1000);
      e.preventDefault();
  });
}

// Portfolio Filter
function portfolioFilter() {
  if($('.filtr-container').length) {
    const filterizd = $('.filtr-container').filterizr();
  }
}

// Portfolio filters
function portfolioFilters() {
  if($('.portfolio-filters').length) {
    $('.portfolio-filters button').on('click', function() {
        $('.portfolio-filters button').removeClass('active');
        $(this).addClass('active');
    })
  }
}

// Change Navbar background
function navBackground() {
  $('.navbar').toggleClass('navbar-scrolled', $(this).scrollTop() > $('.navbar').height());
}
