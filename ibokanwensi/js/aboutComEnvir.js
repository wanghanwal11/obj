$(document).ready(function(){
	var timer="";
	var i=1;

	$('.s_content1 dl dt img').mouseover(function(){
		 $(this).css('opacity',0.5)
	})
	$('.s_content1 dl dt img').mouseout(function(){
		 $(this).css('opacity',1)
	})
 var odd=$('.s_lunbo div.s_huanjing ul.s_ull li.s_li7 img').attr('backImg');
 $('.s_lunbo div.s_huanjing ul.s_ull li.s_li7 img').mouseover(function(){
 	$('.s_lunbo div.s_huanjing ul.s_ull li.s_li7 img').css('src','odd')
 })



     
})