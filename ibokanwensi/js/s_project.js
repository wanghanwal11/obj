
	$(document).ready(function(){


	$('#jd2').mousemove(function(){

		$(this).addClass("add3")
		$('#jd2con').addClass('add2');
	})
	$('#jd2').mouseout(function(){
		$(this).removeClass("add3");
		$('#jd2con').removeClass('add2');

	})
	$('#jd3').mousemove(function(){
		$(this).addClass("add1")
		$('#jd3con').addClass('add2');
	})
	$('#jd3').mouseout(function(){
		$(this).removeClass("add1");
		$('#jd3con').removeClass('add2');
	})
	$('#jd1').mousemove(function(){
		$(this).addClass("add3");
		$('#jd1con').addClass('add2');

	})
	$('#jd1').mouseout(function(){
		$(this).removeClass("add3");
		$('#jd1con').removeClass('add2');

	})
$("#dl1").hover(function(){
$("#dt2").fadeIn();

},function(){
	$("#dt2").fadeOut();
});


$("#dl2").hover(function(){
$("#dt4").fadeIn();

},function(){
	$("#dt4").fadeOut();
});

$("#dl3").hover(function(){
$("#dt5").fadeIn();

},function(){
	$("#dt5").fadeOut();
});

	// $(".zhanshi").mousemove(function(){
	// 	$('.img1').style.width='300px';
	// })
	$("#dl4").hover(function(){
$("#dt6").fadeIn();

},function(){
	$("#dt6").fadeOut();
});
$("#dl5").hover(function(){
$("#dt7").fadeIn();

},function(){
	$("#dt7").fadeOut();
});

$("#dl6").hover(function(){
$("#dt8").fadeIn();

},function(){
	$("#dt8").fadeOut();
});

// $('.lun1').click(function(){
// 	$('.star').style.marginLeft="-600px";
// })
	



});
window.onload=function(){
	lun11.onclick=function(){
		bigstar1.style.marginLeft="-960px"
		bigstar2.style.marginLeft="-960px"
	}
	lun22.onclick=function(){
		bigstar1.style.marginLeft="0px"
		bigstar2.style.marginLeft="0px"
	}
}


	