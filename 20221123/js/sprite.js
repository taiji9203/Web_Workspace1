// JavaScript Document

$(function(){
		 
		   $('#navigation li a').append('<span class="hover"></span>')
		   
		   $('#navigation li a').hover(function() {
	        
		// Stuff that happens when you hover on + the stop()
		$('.hover', this).stop().animate({
			'opacity': 1
			}, 1000,'easeOutSine')
	
	},function() {
	
		// Stuff that happens when you unhover + the stop()
		$('.hover', this).stop().animate({
			'opacity': 0
			}, 1000, 'easeOutQuad')
	
	})
		   });