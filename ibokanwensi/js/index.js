$(function(){
		/*html5师资简介*/
		var a=0;
		var bLen=$(".y_html4Teacher .y_switchPic li").length-1;
		
		$(".y_html4Teacher .y_switchBtn a.y_switchRightBtn").click(function(){
			a++;
			if(a >bLen){

				a=0;
			}
			$(".y_switchCn").fadeOut(100);
				
			creatAjaxh(a);
			
			
		})
		$(".y_html4Teacher .y_switchBtn a.y_switchLeftBtn").click(function(){
			a--;
			if(a < 0){
				a=bLen;
			}
			$(".y_switchCn").fadeOut(100);
		
			creatAjaxh(a);
			
		})
		$(".y_html4Teacher .y_switchPic li").click(function(){
			a = ($(this).index());
			$(".y_switchCn").fadeOut(100);
			creatAjaxh(a);
		})
		
		var arr=[]
		for(var i = 0 ;i<=bLen;i++){
			arr[i] = "ajax/y_html4Teacher/"+(i)+".html";
		}
		 var arr=["ajax/y_html4Teacher/1.html","ajax/y_html4Teacher/2.html","ajax/y_html4Teacher/3.html","ajax/y_html4Teacher/4.html","ajax/y_html4Teacher/5.html","ajax/y_html4Teacher/6.html","ajax/y_html4Teacher/7.html"]
		function creatAjaxh(h){
			var xhr  = new XMLHttpRequest(); //创建AJAX对象
			xhr.open("get",arr[h]+"?date="+new Date().getTime(),true);  //设置请求发送的形式和相关信息
			xhr.send(null);//发送请求
			xhr.onload = function(){		//请求成功
				// alert(xhr.responseText)			//服务器返回的数据,请求之前为空
				$(".y_switchCn").html(xhr.responseText).fadeIn(1000);
			}
		}
		$(".y_html4Teacher .y_switchPic a.y_switchLeftBtn").click(function(){
			$(".y_switchPicCn ul").css('left', "0px");
			$(".y_switchPicCn ul").css('right', "");
			$(".y_switchPicCn ul  li:first").appendTo($('.y_switchPicCn ul'));
			$(".y_switchPicCn ul").animate({
                    left: -146
                }, 450);
		})
		$(".y_html4Teacher .y_switchPic a.y_switchRightBtn").click(function(){
			$(".y_switchPicCn ul").css('right', "0px");
			$(".y_switchPicCn ul").css('left', "");
			$(".y_switchPicCn ul  li:last").prependTo($('.y_switchPicCn ul'));
			
			$(".y_switchPicCn ul").animate({
                   right: -146
                }, 450);
			})
		
		/*html5师资简介  end*/	
			
		/*banner轮播图*/	
		var yy = 1
		$(".y_mainBanner .y_bannerFocus ul li").click(function(){
			yy = $(this).index();
			$(".y_mainBanner .y_bannerCen ul li").fadeOut(900).eq($(this).index()).fadeIn(3000);
			$(this).siblings().removeClass("active").end().addClass("active");
		})
		// var arr5=["../images/template/311.png","../images/template/312.png","../images/template/313.png"]
		setInterval(function(){
			if(yy>=0&&yy<3){
				$(".y_mainBanner .y_bannerCen ul li").fadeOut(900).eq(yy).fadeIn(3000);
				$(".y_mainBanner .y_bannerFocus ul li").removeClass("active").eq(yy).addClass("active")
				yy++;
			}
			else{
				yy=0
			}
				
		},6000)
		/*HTML5就业明星*/
		var b=0
		$(".y_emyStarCn .y_emyStarBtn a.y_emyStarRightBtn").click(function(){
			b++;
			if(b >3){
				b=0;
			}
			$(".y_emyStarCn .y_cnBox").fadeOut(1000);
			creatAjaxj(b);
			
			
		})
		$(".y_emyStarCn .y_emyStarBtn a.y_emyStarLeftBtn").click(function(){
			b--;
			if(b < 0){
				b=3;
			}
			$(".y_emyStarCn .y_cnBox").fadeOut(1000);
			creatAjaxj(b);
			
		})
		var arr2=["ajax/y_emyStar/1.html","ajax/y_emyStar/2.html","ajax/y_emyStar/3.html","ajax/y_emyStar/4.html"];
		function creatAjaxj(j){
			var xhr  = new XMLHttpRequest(); //创建AJAX对象
			xhr.open("get",arr2[j]+"?date="+new Date().getTime(),true);  //设置请求发送的形式和相关信息
			xhr.send(null);//发送请求
			xhr.onload = function(){		//请求成功
				// alert(xhr.responseText)			//服务器返回的数据,请求之前为空
				$(".y_emyStarCn .y_cnBox").html(xhr.responseText).fadeIn(1000);
			}
		}
		/*项目展示*/
		var c=0
		$(".y_projectPres  .y_effectsOne a.y_effectsRightBtnOne").click(function(){
			c++;
			if(c >3){
				c=0;
			}
			$(".y_projectPres .y_effectsOne .y_cnBoxOne").fadeOut(1000);
			creatAjaxk(c);
			
			
		})
		$(".y_projectPres .y_effectsOne  a.y_effectsLeftBtnOne").click(function(){
			c--;
			if(c < 0){
				c=3;
			}
			$(".y_projectPres .y_effectsOne .y_cnBoxOne").fadeOut(1000);
			creatAjaxk(c);
			
		})
		var arr3=["ajax/y_projectPres/1.html","ajax/y_projectPres/2.html","ajax/y_projectPres/3.html","ajax/y_projectPres/4.html"];
		function creatAjaxk(k){
			var xhr  = new XMLHttpRequest(); //创建AJAX对象
			xhr.open("get",arr3[k]+"?date="+new Date().getTime(),true);  //设置请求发送的形式和相关信息
			xhr.send(null);//发送请求
			xhr.onload = function(){		//请求成功
				// alert(xhr.responseText)			//服务器返回的数据,请求之前为空
				$(".y_projectPres .y_effectsOne .y_cnBoxOne").html(xhr.responseText).fadeIn(1000);
			}
		}
		var d=0
		$(".y_projectPres .y_effectsTwo a.y_effectsRightBtnTwo").click(function(){
			d++;
			if(d >3){
				d=0;
			}
			$(".y_projectPres  .y_effectsTwo  .y_cnBoxTwo").fadeOut(1000);
			creatAjaxl(d);
			
			
			
		})
		$(".y_projectPres .y_effectsTwo   a.y_effectsLeftBtnTwo").click(function(){
			d--;
			if(d < 0){
				d=3;
			}
			$(".y_projectPres  .y_effectsTwo  .y_cnBoxTwo").fadeOut(1000);
			creatAjaxl(d);

			
		})
		var arr4=["ajax/y_projectPres/5.html","ajax/y_projectPres/6.html","ajax/y_projectPres/7.html","ajax/y_projectPres/8.html"];
		function creatAjaxl(l){
			var xhr  = new XMLHttpRequest(); //创建AJAX对象
			xhr.open("get",arr4[l]+"?date="+new Date().getTime(),true);  //设置请求发送的形式和相关信息
			xhr.send(null);//发送请求
			xhr.onload = function(){		//请求成功
				// alert(xhr.responseText)			//服务器返回的数据,请求之前为空
				$(".y_projectPres  .y_effectsTwo  .y_cnBoxTwo").html(xhr.responseText).fadeIn(1000);
				
			}
		}
		/*sdfs*/
		var e = 0;
		$(".y_envirCampus .y_switchLeftBtn").click(function(){
			e--;
			if(e<0){
				e=3
			}
				$(".y_envirCampus .envirBigPic li").fadeOut(400).eq(e).fadeIn(1000);
			$(".y_envirCampus .envirSmPic ul li").eq(e).siblings().removeClass("cur").end().addClass("cur");
		})
		$(".y_envirCampus .y_switchRightBtn").click(function(){
			e++;
			if(e>3){
				e=0
			}
			$(".y_envirCampus .envirBigPic li").fadeOut(400).eq(e).fadeIn(1000);
			$(".y_envirCampus .envirSmPic ul li").eq(e).siblings().removeClass("cur").end().addClass("cur");
		})
		$(".y_envirCampus .envirSmPic ul li").click(function(){
			$(this).siblings().removeClass("cur").end().addClass("cur");
			e = $(this).index();
			$(".y_envirCampus .envirBigPic li").fadeOut(400).eq(e).fadeIn(1000);

		})
		$(".y_envirCampus .y_switchRightBtn").hide();
			$(".y_envirCampus .y_switchLeftBtn").hide();
		$(".y_envirCampusBox").hover(function(){
			$(".y_envirCampus .y_switchRightBtn").show();
			$(".y_envirCampus .y_switchLeftBtn").show();
		},function(){
			$(".y_envirCampus .y_switchRightBtn").hide();
			$(".y_envirCampus .y_switchLeftBtn").hide();
		})
		
			var scrollTop = $(window).scrollTop();
		
		/*返回顶部*/
		$(".y_Ttop ").click(function(){
			$("html,body").animate({scrollTop:0},1000)//scrollTop:需要返回的位置
		})
		
		$(".y_mainLeft .y_proListInfo .banBtn span").click(function(){
			var g= $(this).index();
			$(".y_mainLeft .y_proListInfo .y_PhonePic ul li").hide().eq(e).fadeIn(500);
			$(this).siblings().removeClass('cur').end().addClass("cur");
		})
		$(".y_mainLeft .y_switchPic a.y_switchLeftBtn").click(function(){
			$(".y_mainLeft .y_switchPic ul").css('left', "0px");
			$(".y_mainLeft .y_switchPic ul").css('right', "");
			$(".y_mainLeft .y_switchPic ul  li:last").prependTo($('.y_mainLeft .y_switchPic ul'));
			$(".y_mainLeft .y_switchPic ul").animate({
                    left: -150
                }, 450);
			$(".y_mainLeft .y_switchPic ul").css('left', "0px");
		})
		$(".y_mainLeft .y_switchPic a.y_switchRightBtn").click(function(){
			$(".y_mainLeft .y_switchPic ul").css('right', "0px");
			$(".y_mainLeft .y_switchPic ul").css('left', "");
			$(".y_mainLeft .y_switchPic ul li:first").appendTo($('.y_mainLeft .y_switchPic ul'));
			$(".y_mainLeft .y_switchPic ul").animate({
                   right: -150
                }, 450);
			})
		$(".y_mainLeft .y_switchPic ul").css('right', "0px");

	}
)