(function($) {
	

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
			
		});

	};
	fullHeight();
	
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
		});
	
})(jQuery);



  $(document).ready(function () {
	clickSidebarItem();
	toogleInSmallScrean();
    })

function clickSidebarItem(){
	$(".main-list-item").click(function(){
		$(".main-list-item:not(this)").removeClass("active")
		$(this).addClass("active")

	})

	}

	function toogleInSmallScrean() {
			// $("#sidebar.active  .lits-link-item").addClass("custom-dropdown-list");
			$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('activeInSmallScrean');

	        });
			}
		
	