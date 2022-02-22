//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".top-bar").offset().top > 150) {
        $('.top-bar').addClass("top-nav-fixed");
    } else {
        $('.top-bar').removeClass("top-nav-fixed");
    }
});

//javascript to show/hide the navbar on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerNew").style.top = "0";
  } else {
    document.getElementById("headerNew").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
// jQuery - add active class to Bootstrap Accordion Heading

if ($('#MTaccordion').length) {

	var $panels = $('.panel');

	// add active class to first open panel
	// only necessary if this panel is open by default on your accordion
	$panels.first().addClass('active');

	$('.panel-heading').on('click', function (e) {

		$this = $(this);

		$panel = $this.parents('.panel');

		$panels.not( $panel ).removeClass('active');

		$panel.toggleClass('active');

    });
}


/*
// scroll animation left,right 
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".anim",this);

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $('.leftanim').addClass("animate__fadeInLeft");
      $('.rightanim').addClass("animate__fadeInRight");
    } else {
      $(tag).removeClass("animate__fadeInLeft");
      $(tag).removeClass("animate__fadeInRight");
    }
  }
});
*/

// scroll animation up
$(document).on("scroll", function() {
  var pageUp = $(document).scrollTop();
  var pageBot = pageUp + $(window).height();
  var tags = $(".anim2",this);

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBot) {
      $('.upanim').addClass("animate__fadeInUp");
    } else {
      $(tag).removeClass("animate__fadeInUp");
    }
  }
});


$(function() {
    $('.radiobox').click( function() {
      $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
    });
});

