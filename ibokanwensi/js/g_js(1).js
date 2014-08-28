// 下拉效果
$(document).ready(function(){
	$("#g_show li:gt(4)").hide()
	$("#g_btn").click(function(){
		if ($("#g_show li:gt(4)").is(":hidden")) {
			$("#g_show li:gt(4)").show()
			$("#g_btn").attr("class","g_norepeat g_goTop")
		}else{
			$("#g_show li:gt(4)").hide()
			$("#g_btn").attr("class","g_norepeat g_goDown")
		}
	})
})
// Tab图片的切换效果
$(document).ready(function(){
	var a = 0;
	$("#g_Right").click(function(){
		a ++;
		change(a);
	})
	$("#g_Left").click(function(){
		a --;
		change(a);
	})
	$(".g_oLis li").click(function(){
		a  = $(this).index();
		change(a);
	})
	function change(num){
		if (num > $("#g_oLis li").length) {
			num =1;
			a=num;
		}else if (num < 1) {
			num = $("#g_oLis li").length;
			a=num;
		}
		var arr1=["images/template/211.png","images/template/212.png","images/template/213.png","images/template/214.png"]
		
		$("#g_oChange").attr("src",arr1[num])
		// $("#g_oLis li").eq(num-1).removeClass("g_oShow").siblings().addClass("g_oShow")
	}
})
// 划过效果
$(document).ready(function(){
	var arr1=["images/template/211.png","images/template/212.png","images/template/213.png","images/template/214.png"]
	$("#g_oLis li").mouseover(function(){
		$("#g_oLis li").addClass("g_oShow")
		var a = $(this).index();
		$(this).removeClass("g_oShow")
		$("#g_oChange").attr("src", arr1[a] )
	})
		$("#g_oLis li").mouseleave(function(){
			$(this).addClass("g_oShow")
			$("#g_oLis li").removeClass("g_oShow")
			
	})
})



$(function(){
	var a = 0;
	var arr=["ajax/g_zx/g_ajax.html","ajax/g_zx/g_ajax1.html","ajax/g_zx/g_ajax2.html"];
	$("#g_toRight").click(function(){
		a--;
		g_ajax(a)
	})
	$("#g_toLeft").click(function(){
		a++;
		g_ajax(a)
	})
	function g_ajax(num){
		if (num>arr.length-1) {
			num=0;
			a=num;
		}else if(num<0){
			num=arr.length-1;
			a=num;
		}
		$.ajax({
			type:"get",
			url:arr[num],
			success:function(data){
				$("#g_imgs").html(data)
				$("#g_imgsBottom").html(data)	
			}
		})	
	}
})



$(function(){
	var a = 0;
	var arr=["ajax/g_zx/g_ajax3.html","ajax/g_zx/g_ajax4.html","ajax/g_zx/g_ajax5.html"];
	$("#g_Right").click(function(){
		a--;
		g_ajax(a)
	})
	$("#g_Left").click(function(){  
		a++;
		g_ajax(a)
	})
	function g_ajax(num){
		if (num>arr.length-1) {
			num=0;
			a=num;
		}else if(num<0){
			num=arr.length-1;
			a=num;
		}
		$.ajax({
			type:"get",
			url:arr[num],
			success:function(data){
				$("#g_oLi").html(data)	
			}
		})	
	}
})


$(function(){
	$(".g_last").mouseenter(function(){
		$(this).children("div").css("display","block")
		$(this).children("a").css("display","block")
	})
	$(".g_last").mouseleave(function(){
		$(this).children("div").css("display","none")
		$(this).children("a").css("display","none")
	})
})