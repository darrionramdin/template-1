$(function() {
  "use strict";
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
    portfolioFilter()

    // Portfolio Filter Active
    portfolioFilters();

    // TypedJS
    typed();

    // Particles
    particles();
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

// Typed JS
function typed() {
  if($('.typed').length) {
    const typedTexts = $('.typed').data('texts').split(',');
    const typed = new Typed('.typed',{
      strings: typedTexts,
      typeSpeed: 50,
      backSpeed: 20,
      loop: true
    })
  }
}

// Particles JS
function particles() {
  if($('.particles').length) {
    particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ddd"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#888888"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#777",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
  }
}
