$(document).ready(function() {
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
}).append("<span>");

$(".toggle_menu").click(function() {
	if ($(".top_menu").is(":visible")) {
		$(".top_text").css("opacity", "1");
		$(".top_menu").fadeOut(600);
		$(".top_menu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_text").css("opacity", ".1");
		$(".top_menu").fadeIn(600);
		$(".top_menu li a").addClass("fadeInUp animated");
		};	
	});

	$("input, select, textarea").jqBootstrapValidation();
	$(".top_menu ul a").mPageScroll2id();
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$(".video-about").animated("fadeInDown");
}); 


/*$(document).ready(function(){
 	$(".top_menu").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	    top = $(id).offset().top;
	    ('body,html').animate({scrollTop: top}, 2000);
    });
});*/

