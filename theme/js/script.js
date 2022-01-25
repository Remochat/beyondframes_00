$(window).on('load', function () {
  'use strict';

  // preloader
  $('#preloader').fadeOut('slow');
  $('body').css({
    'overflow': 'visible'
  });
  
  // Shuffle js filter and masonry
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});
		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

  // back to top
  var offset = 300,
  offset_opacity = 500,
  scroll_top_duration = 700,
  $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, scroll_top_duration);
  });

  // input
  $('.input-contact input, .textarea-contact textarea').focus(function () {
    $(this).next('span').addClass('active');
  });
  $('.input-contact input, .textarea-contact textarea').blur(function () {
    if ($(this).val() === '') {
      $(this).next('span').removeClass('active');
    }
  });


});

//

    //colored animation//
    // Created by Tiffany Rayside: https://codepen.io/tmrDevelops/pen/vOPZBv//

    //var c = document.getElementById("gradient");
    var $ = c.getContext("2d");

    var col = function (x, y, r, g, b) {
      $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      $.fillRect(x, y, 1, 1);
    };
    var R = function (x, y, t) {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    var G = function (x, y, t) {
      return Math.floor(
        192 +
          64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    var B = function (x, y, t) {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    var t = 0;

    var run = function () {
      for (x = 0; x <= 35; x++) {
        for (y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.06;
      window.requestAnimationFrame(run);
    };

    run();


    //

