/*Jquery Events*/
(function ($) {
	"use strict";
	$(".fadeIn").click(function () {
		$(".box").fadeIn(3000);
	});

	$(".fadeOut").click(function () {
		$(".box").fadeOut(3000);
	});

	$(".fadeToogle").click(function () {
		$(".box").fadeToggle(3000);
	});

	$(".fadeTo").click(function () {
		$(".box").fadeTo("slow", 0.15);
		$(".box").fadeTo("slow", 0.4);
		$(".box").fadeTo("slow", 0.7);
		$(".box").fadeTo("slow", 1);
	});

})(jQuery);


/*=====Slide Panel=====*/
(function ($) {
	"use strict";
	$(".flip").click(function () {
		$(".panel").slideToggle(3000);
	});
})(jQuery);


/*=====Animation=====*/
(function ($) {
	"use strict";
	$(".flagBtn").click(function () {
		$(".circle").animate({
			left: '800px',
			top: '160px',
			opacity: '1',
			height: '150px',
			width: '150px',
			borderRadius: '50%',
			backgroundColor: 'red',
			zIndex: '1'
		}, 3000);

		$(".ractangular").animate({
			left: '650px',
			top: '80px',
			opacity: '1',
			height: '300px',
			width: '500px',
			backgroundColor: 'green'
		}, 5000);

		$(".w3codevs").animate({
			left: '650px',
			top: '20px',
			opacity: '1',
			height: '50px',
			width: '600px',
			backgroundImage: 'linear-gradient(to right, #200122, #6f0000)',
			fontSize: '36px'
		}, 5000);

	});


})(jQuery);


/*======Magic Box======*/
(function ($) {
	"use strict";
	$(".magic-box").on({

		click: function () {
			alert("You have Clicked Magic Box");
		},
		mouseenter: function () {
			$(".magic-box").css("background-image", "linear-gradient(to right, #360033, #0b8793)");
		},
		mouseleave: function () {
			$(".magic-box").css("background-image", "linear-gradient(to right, #0f0c29 , #302b63,#24243e)");
		}
	});
})(jQuery);


(function ($) {
	"use strict";

	$(".toggleBtn").click(function () {
		$(".magic-box").toggle(1000);
	});

	$(".showBtn").click(function () {
		$(".magic-box").show(1000);
	});

	$(".hideBtn").click(function () {
		$(".magic-box").hide(1000, function () {
			alert("Magic Box is now hidden");
		});
	});

	$(".circleBtn").click(function () {
		$(".magic-box").css("clip-path", "circle(50% at 50% 50%)");
	});

	$(".octagonBtn").click(function () {
		$(".magic-box").css("clip-path", "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)");
	});

	$(".triangleBtn").click(function () {
		$(".magic-box").css("clip-path", "polygon(50% 0%, 0% 100%, 100% 100%)");
	});

	$(".rabbetBtn").click(function () {
		$(".magic-box").css("clip-path", "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)");
	});

})(jQuery);


(function ($) {
	"use strict";
	$(".one").mouseenter(function () {
		$(".two").hide("slow");
	});
})(jQuery);


(function ($) {
	"use strict";
	$(".one").mouseleave(function () {
		$(".two").show("slow");
	});
})(jQuery);


(function ($) {
	"use strict";
	$(".three").dblclick(function () {
		$(this).hide("slow");
	});
})(jQuery);

(function ($) {
	"use strict";
	$(".four").click(function () {
		$(".three").show("slow");
	});
})(jQuery);


(function ($) {
	"use strict";
	$(".headShow").dblclick(function () {
		$(".heading").show("slow");
	});
})(jQuery);


(function ($) {
	"use strict";
	$(".headHide").hover(function () {
		$(".heading").hide("slow");
	});
})(jQuery);


(function ($) {
	"use strict";
	$(".form input[type='text']").focus(function () {
		$(this).css("background-color", "black");
		$(this).css("color", "#fff");
	});

	$(".form input[type='text']").blur(function () {
		$(this).css("background-color", "crimson");
		$(this).css("color", "#fff");
	});

})(jQuery);


/*=====Admin=====*/
(function ($) {
	"use strict";

	$(".adminBtn").click(function () {
		$(".admin h1").css("textAlign", "center").slideUp(2000).slideDown(2000).animate({
			left: '800px',
			height: '150px',
			width: '150px',
			borderRadius: '50%',
			backgroundColor: 'rgba(34,1,33)',
			lineHeight: '150px'
		}, 3000).css("backgroundImage", "linear-gradient(to right,#200122, #FFA17F, #00223E)");
	});

})(jQuery);
