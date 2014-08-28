
// teacherInfo  ----------  3(1).HTML5讲师详情
// 明星学院
$(function(){
	$('.z_i_stdiv dl').hover(function(){
		$('.z_i_stdiv dl').removeClass('cur');
		$(this).addClass('cur');
	},function(){
		$(this).removeClass('cur');
	});
})
// 图片切换
$(function(){
	var i=0;
	var z_i_timer=null;
	z_i_timer=setInterval(z_i_tuleft,2000);
	$('.z_i_turn .z_i_tuleft').click(function(){
		clearInterval(z_i_timer);
		z_i_timer=setInterval(z_i_tuleft,2000);
	});
	$('.z_i_turn .z_i_turight').click(function(){
		clearInterval(z_i_timer);
		z_i_timer=setInterval(z_i_turight,2000);
	});
	function z_i_tuleft(){
		if(i>=$('.z_i_tuul li').length/2){
			i=0;
		}
		i++;
		$('.z_i_tuul').css({'margin-left':-$(".z_i_tuul li").eq(0).width()*i+"px"});
	};
	
	function z_i_turight(){
		if(i<=0){
			i=$('.z_i_tuul li').length/2;
		}
	i--;
	$('.z_i_tuul').css({'margin-left':-$(".z_i_tuul li").eq(0).width()*i+"px"});
	};
	$('.z_i_tuul li').hover(function(){
		clearInterval(z_i_timer);
	},function(){
		z_i_timer=setInterval(z_i_tuleft,2000);	
	});
})

// teacherList  ----------  3.HTML5讲师列表
// 图片切换
$(function(){
	var i=0;
	var z_i_timer=null;
	z_i_timer=setInterval(z_l_heturn_left,2000);
	$('.z_l_heturn .z_l_heturn_left').click(function(){
		
		clearInterval(z_i_timer);
		z_i_timer=setInterval(z_l_heturn_left,2000);
	});
	$('.z_l_heturn .z_l_heturn_right').click(function(){
		
		clearInterval(z_i_timer);
		z_i_timer=setInterval(z_l_heturn_right,2000);
	});
	function z_l_heturn_left(){
		if(i>=$('.z_l_heul li').length/2){
			i=0;
		}
		i++;
		$('.z_l_heul').css({'margin-left':-$(".z_l_heul li").eq(0).width()*i+"px"});
	};
	
	function z_l_heturn_right(){
		if(i<=0){
			i=$('.z_l_heul li').length/2;
		}
	i--;
	$('.z_l_heul').css({'margin-left':-$(".z_l_heul li").eq(0).width()*i+"px"});
	};
	$('.z_l_heul li').hover(function(){
		clearInterval(z_i_timer);
	},function(){
		z_i_timer=setInterval(z_l_heturn_left,2000);	
	});
});