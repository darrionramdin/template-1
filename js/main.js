$(function() {
  const imageElements = $('[data-image]');
    for(let element of imageElements) {
        $(element).css("background-image",`url(${$(element).data('image')})`);
    }


    const overlayElements = $('.overlay');
    for(let element of overlayElements) {
        const options = $(element).data('overlay').split(",");
        const styles = {
          background: options[0],
          opacity: options[1]
        }
        $(element).css(styles);
    }

    // const rellax = new Rellax('.jumbotron-content');

    $(document).scroll(function() {
        $('.navbar').toggleClass('navbar-scrolled', $(this).scrollTop() > $('.navbar').height());
    });

    $('.fancy-box').fancybox();

    const filterizd = $('.filtr-container').filterizr();

    $('.portfolio-filters button').on('click', function() {
        $('.portfolio-filters button').removeClass('active');
        $(this).addClass('active');
    })
})
