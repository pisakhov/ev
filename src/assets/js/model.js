//swipe between screens
let startX;
let endX;
const threshold = 100; // Minimum distance for a swipe to be detected

const $sideInputsContent = $('#InputMobileBtn');
const $graphsContent = $('#InputGraphBtn');
const $sideInstructionsContent = $('#InputHelpBtn');


$(document).on('touchstart', (e) => {
  if ($(window).width() > 768) return; // Ignore if not a small screen
  startX = e.touches[0].clientX;
});

$(document).on('touchmove', (e) => {
  if ($(window).width() > 768) return; // Ignore if not a small screen
  endX = e.touches[0].clientX;
});

$(document).on('touchend', () => {
  if ($(window).width() > 768) return; // Ignore if not a small screen
  handleSwipe();
});

function handleSwipe() {
	const distance = startX - endX;
  
	if (Math.abs(distance) >= threshold) {
	  showSwipeIndicator(distance > 0 ? 'left' : 'right');
	  if (distance > 0) {
		// Swipe left
		toggleDivs('left');
	  } else {
		// Swipe right
		toggleDivs('right');
	  }
	}
  }


function toggleDivs(direction) {
  const $divs = [$sideInputsContent, $graphsContent, $sideInstructionsContent];

  // Get the index of the currently visible div
// Get the index of the currently visible div
let visibleDivIndex = -1;
for (let i = 0; i < $divs.length; i++) {
  if ($divs[i].hasClass('bg-violet-300')) {
	visibleDivIndex = i;
	break;
  }
}

  // Show the next or previous div depending on the swipe direction
  if (direction === 'left') {
	const nextDivIndex = (visibleDivIndex + 1) % $divs.length;
	$divs[nextDivIndex].trigger("click");
  } else {
	const prevDivIndex = (visibleDivIndex - 1 + $divs.length) % $divs.length;
	$divs[prevDivIndex].trigger("click");
  }
}

function showSwipeIndicator(direction) {
	const $swipeIndicator = $('#swipe-indicator'); 


  
	$swipeIndicator.removeClass('fade-out');

	if(direction == "left"){
		$swipeIndicator.show();
		$swipeIndicator.addClass('slide-out-right');
		setTimeout(() => {
			$swipeIndicator.removeClass('slide-out-right');
			$swipeIndicator.addClass('fade-out');
			$swipeIndicator.hide();
		  }, 500); // Hide the indicator after 500ms
	}
	else{
		$swipeIndicator.addClass('slide-out-left');
		setTimeout(() => {
			$swipeIndicator.removeClass('slide-out-left');
			$swipeIndicator.addClass('fade-out');
			$swipeIndicator.hide();
		  }, 500); // Hide the indicator after 500ms
	}



  }



function getElementHeight(elementName) {
	return $(elementName).height();
}
var lastScroll = 0;
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll > lastScroll) {
		// Scrolling down
		$('.after-icon').next().stop().fadeOut(100, function() {
			$(".after-icon").parent().parent().stop().animate({
				width: "8rem"
			});
		});
		$('.after-icon2').parent().stop().fadeOut(100);
	} else {
		// Scrolling up
		$(".after-icon").parent().parent().stop().animate({
			width: "16rem"
		}, {
			duration: 100,
			complete: function() {
				$('.after-icon').next().stop().show();
			}
		});
		$('.after-icon2').parent().stop().show();
	}
	lastScroll = scroll;
});
var elem = document.documentElement;
let mode = false;
$("#fullScreenBtn").click(function() {
	toggleScreen();
});
$(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange", function() {
	if (!document.fullscreenElement) {
		mode = false;
		$("#fullScreenBtn").html('<i class="fas fa-expand after-icon"></i><p>Full Screen</p>');
		$("#fullScreenBtn").removeClass("bg-violet-600").addClass("bg-violet-900");
		$("nav").slideDown(300);
		$("#footer").slideDown(300);
	}
});

function toggleScreen() {
	if (mode) {
		mode = false;
		$("#fullScreenBtn").html('<i class="fas fa-expand after-icon"></i><p>Full Screen</p>');
		$("#fullScreenBtn").removeClass("bg-violet-600").addClass("bg-violet-900");
		$("nav").slideDown(300);
		$("#footer").slideDown(300);
		closeFullscreen();
	} else {
		mode = true;
		$("#fullScreenBtn").html('<i class="fas fa-compress after-icon"></i><p>Exit</p>');
		$("#fullScreenBtn").removeClass("bg-violet-900").addClass("bg-violet-600");
		$("nav").slideUp(300);
		$("#footer").slideUp(300);
		openFullscreen();
	}
}

function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE11 */
		elem.msRequestFullscreen();
	}
}

function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		/* Safari */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		/* IE11 */
		document.msExitFullscreen();
	}
}
// Toggle the offcanvas panel when the button is clicked
$("#toggleOffcanvas").click(function() {
	$("nav").hide();
	$("#offcanvasPanel").show();
	$("#dark-screen").show();
	defaultBtnColors();
	if ($("#offcanvasPanel").is(":visible")) {
		$(this).removeClass("bg-violet-900").addClass("bg-violet-600");
		$("#InputHelpBtn").removeClass("bg-white/80").addClass("bg-violet-300");
	}
});

function addHashtag(t) {
	var n = window.location.href,
		e = n.indexOf("#") != -1 ? n.substring(0, n.indexOf("#")) + t : n + t;
	window.location.href = e;
}
$('.exit-offcanvas, #dark-screen').click(function() {
	$("nav").show();
	location.hash = '';
	$('#offcanvasPanel').hide();
	$("#dark-screen").hide();
	defaultBtnColors();
	$("#InputHelpBtn").removeClass("bg-white/80").addClass("bg-violet-300");
});
$("#InputMobileBtn, #InputGraphBtn, #InputHelpBtn").click(function() {
	defaultBtnColors();
	$(this).removeClass("bg-white/80").addClass("bg-violet-300");
	$(this).removeClass("pt-0").addClass("pt-2");
});
$("#InputMobileBtn").click(function() {
	defaultBtnColors();
	$(this).removeClass("bg-white/80").addClass("bg-violet-300");
	$(this).removeClass("pt-0").addClass("pt-2");
	$("#sideInputsContent").show();
	$("#offcanvasPanel").hide();
	$("#graphsContent").parent().hide();
	$("#dark-screen").hide();
});
$("#InputGraphBtn").click(function() {
	defaultBtnColors();
	$(this).removeClass("bg-white/80").addClass("bg-violet-300");
	$(this).removeClass("pt-0").addClass("pt-2");
	$("#graphsContent").parent().show();
	$("#sideInputsContent, #offcanvasPanel").hide();
	$("#dark-screen").hide();
});
$("#InputHelpBtn").click(function() {
	location.hash = '';
	defaultBtnColors();
	$(this).removeClass("bg-white/80").addClass("bg-violet-300");
	$(this).removeClass("pt-0").addClass("pt-2");
	$("#offcanvasPanel").show();
	$("#sideInputsContent").hide();
	$("#graphsContent").parent().hide();
	$("#dark-screen").show();
});

function defaultBtnColors() {
	$("#InputMobileBtn, #InputGraphBtn, #InputHelpBtn").removeClass("bg-violet-300").addClass("bg-white/80");
	$("#InputMobileBtn, #InputGraphBtn, #InputHelpBtn").removeClass("pt-2").addClass("pt-0");
	$("#toggleOffcanvas").removeClass("bg-violet-600").addClass("bg-violet-900");
}
$(window).on("resize", function() {
	if ($(window).width() > 768) {
		$("#sideInputsContent").show();
		$("#graphsContent").parent().show();
	} else {
		// $("#InputMobileBtn").removeClass("bg-white/80").addClass("bg-violet-300");
		// $("#graphsContent").parent().hide();
		if ($("#offcanvasPanel").is(":visible")) {
			$("#sideInputsContent").hide();
			defaultBtnColors();
			$("#InputHelpBtn").removeClass("bg-white/80").addClass("bg-violet-300");
		}
	}
});

