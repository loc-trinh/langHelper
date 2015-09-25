$(document).ready(function(){

	hljs.initHighlightingOnLoad();

	window.onscroll = function(){
	    document.getElementById('menu').scrollTop=document.body.scrollTop;
	    document.getElementById('right_menu').scrollTop=document.body.scrollTop;
	}

	$('.sub_menu').hide();
	$(".right_menu_button").click(function(){
		$('.sub_menu').slideUp();
		$(".right_menu_button img").attr("src", "/img/right_menu_arrow.png");
		$(".right_menu_button img").removeClass('rotate_img');
		$(this).find('img').attr("src", "/img/right_menu_arrow_active.png");
		$(this).find('img').addClass('rotate_img');
		$(this).siblings().slideDown();
	});


	$('#mobile_right_menu').click(function(){
		$('#right_menu').addClass('show');
	});
	$('#mobile_right_close').click(function(){
		$('#right_menu').removeClass('show');
	});
	$('#mobile_left_menu').click(function(){
		$('#menu').addClass('lshow');
	});
	$('#mobile_left_close').click(function(){
		$('#menu').removeClass('lshow');
	});
	$('#search_button').click(function(){
		$('#search_bar').slideToggle();
	})



	$('.menu_button').click(function(){
		var page = $(this).find('p').text().toLowerCase();
		if (page === 'c++') page = 'cpp';
		window.location.href='/lang/'+page;
	})
	
	$(window).resize(function(){
		var width = $(window).width();
		if (width < 500) $('#search_bar').show();
		else $('#search_bar').hide();
	});

	$(".sub_menu").click(function(){
		$('.sub_menu p').removeClass('active').css({"font-weight":"200"});
		$(this).find('p').addClass('active').css({"font-weight":"400"});

		$('#header_title').text($(this).siblings('.right_menu_button').text());
		var collection = document.title.split(" ")[0].toLowerCase();
		var page = $(this).find('p').text().split(" ").join("_");
		var to_get = collection+"+"+page;
		$.get("/api/"+to_get, function(data){
			data = data[0]
			data["page-title"] = data["page-title"].toUpperCase();
			var source   = $("#page_script").html();
			var temp = Handlebars.compile(source);
			$("#page").html(temp(data));

			var prettify = hljs.highlightAuto($('#syntax').text()).value;
			prettify = hljs.fixMarkup(prettify);
			$("#syntax").html(prettify);

			var prettify = hljs.highlightAuto($('#example').text()).value;
			prettify = hljs.fixMarkup(prettify);
			$("#example").html(prettify);
		});
		
		if($(window).width() < 800){
			$('#right_menu').removeClass('show');
		}
	});
});