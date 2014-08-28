/* zhangcong*/
$(document).ready(function(){
    $.fn.bk_slideClick = function(options){
        var elm = $(this);
        //获取li的长度给予ul宽度
        var liLength = elm.find('ul li').length;
        var liWidth = elm.find('ul li').width();
        var liMarginRight = elm.find('ul li').css('marginLeft');//读取值带单位px的、
        var liMarginRight2 = '';
        
        //删除单位、并获取数值
        for (var i = 0; i < liMarginRight.length - 2; i++) {
            liMarginRight2 += liMarginRight[i];
        }
        liMarginRight2 = liMarginRight2 - 0;//转换成数字
        //为ul赋值
        elm.find('.cn ul').width(liLength * (liWidth + liMarginRight2));
        
        defaults = {
            sldieStart: true
        }
        opt = $.extend(defaults, options);
        
        
        var slideX = {
            init: function(){
                //判断开始是否自动滚动
                if (opt.sldieStart) {
                    slideX.slideAuto();
                    elm.hover(slideX.slideStop, slideX.slideAuto);
                }
                elm.find('div.btn-l').live('click', slideX.slideLeft);
                elm.find('div.btn-r').live('click', slideX.slideRight);
                
            },
            slideAuto: function(){
                slideX.slideId = window.setInterval(slideX.slideRight, 4500);
            },
            slideLeft: function(){
                elm.find('div.btn-l').die('click', slideX.slideLeft);
                elm.find('ul').css('marginLeft', -liWidth - liMarginRight2);
                elm.find('ul li:last').prependTo(elm.find('ul'));
                elm.find('ul').animate({
                    marginLeft: 0
                }, 450, function(){
                    elm.find('div.btn-l').live('click', slideX.slideLeft);
                });
            },
            slideRight: function(){
                elm.find('div.btn-r').die('click', slideX.slideRight);
                elm.find('ul').animate({
                    marginLeft: -liWidth - liMarginRight2
                }, 450, function(){
                    $(this).css('marginLeft', 0);
                    $(this).find('li:first').appendTo(this);
                    elm.find('div.btn-r').live('click', slideX.slideRight);
                });
            },
            slideStop: function(){
                window.clearInterval(slideX.slideId);
            }
        }
        slideX.init();
    }
});


$(document).ready(function(){ 
    $("#h_clickAdd").mouseover(function(){
            if($("#h_add").css("display")=="none"){
                $("#h_clickAdd").click(function(){
                    $("#h_add").show();
                    $("#h_clickAdd").addClass("y_slide2");
                    $("#h_clickAdd").removeClass("y_slide1");
                })
            }
             if($("#h_add").css("display")=="block"){ 
                $("#h_clickAdd").click(function(){    
                    $("#h_add").css("display","none");
                    $("#h_clickAdd").removeClass("y_slide2");
                    $("#h_clickAdd").addClass("y_slide1");
                 })

            }
        })
});
/*star*/
$(document).ready(function(){
    var arr1=["ajax/w_h/ajax_00.html","ajax/w_h/ajax.html","ajax/w_h/ajax_0.html","ajax/w_h/ajax_00.html"]
        $("#h_scroll li").mouseover(function(){
            $("#h_scroll li").eq($(this).index()).removeClass("li2");
            $("#h_scroll li").eq($(this).index()).addClass("h_bgRed");
             $("#h_scroll li").eq($(this).index()).click(function(){
                $.ajax({
                    type:"get",
                    url:arr1[$(this).index()],
                    data:null,
                    success:function(data){
                        $("#h_scrollStar").html(data);
                    }
                })
             })
        })
        $("#h_scroll li").mouseleave(function(){
           $("#h_scroll li").eq($(this).index()).removeClass("h_bgRed");
            $("#h_scroll li").eq($(this).index()).addClass("li2"); 
        })
        var s=0;
        $("#h_scroll .span1").click(function(){
            s++;
            if (s>arr1.length-2) {
                s=0;
            };
            $.ajax({
                type:"get",
                url:arr1[s],
                success:function(data){
                    $("#h_scrollStar").html(data)
                }
            })   
        })
         $("#h_scroll .span2").click(function(){
            s--;
            if (s<0) {  
            s=2     
            };
            $.ajax({
                type:"get",
                url:arr1[s],
                success:function(data){
                    $("#h_scrollStar").html(data)
                }
            })
        })
});
/*Employment*/
$(document).ready(function(){
       $("#h_empStar dl").mouseover(function(){
        $("#h_empStar dt").eq($(this).index()).addClass("dt")
        $("#h_empStar dl .dts").eq($(this).index()).css("display","block")
       })
       $("#h_empStar dl").mouseleave(function(){
        $("#h_empStar dt").eq($(this).index()).removeClass("dt")
        $("#h_empStar dl .dts").eq($(this).index()).css("display","none")
       })
});
/*就业明星*/
$(document).ready(function(){
    var speed=0;
    $(".h_tag .span0").click(function(){
        speed-=190;
        if (speed<=-760) {
        speed=0;
       }
       $("#h_coopEnter ul").css("marginLeft",speed+"px")
       
    })
    $(".h_tag .span5").click(function(){
        speed+=190;
         if (speed>0) {
        speed=-760;
       }
       $("#h_coopEnter ul").css("marginLeft",speed+"px")
      
    })
     var arr=["ajax/w_h/ajax_c.html","ajax/w_h/ajax_a.html","ajax/w_h/ajax_b.html"]
     var num=0;
        $(".h_icon .span1").click(function(){
            num++;
            if (num>arr.length-1) {
                num=0;
            };
            $.ajax({
                type:"get",
                url:arr[num],
                success:function(data){
                    $("#h_empStar .h_empStar").html(data)
                }
            })   
        })
         $(".h_icon .span2").click(function(){
            num--;
            if (num<0) {  
            num=2     
            };
            $.ajax({
                type:"get",
                url:arr[num],
                success:function(data){
                    $("#h_empStar .h_empStar").html(data)
                }
            })
        })
});

/*就业活动*/
$(document).ready(function(){
     var arr=["ajax/w_h/ajax3.html","ajax/w_h/ajax1.html","ajax/w_h/ajax2.html"]
     var num=0;
        $(".h_icon1 .span1").click(function(){
            num++;
            if (num>arr.length-1) {
                num=0;
            };
            $.ajax({
                type:"get",
                url:arr[num],
                success:function(data){
                    $("#h_empSport").html(data)
                }
            })   
        })
         $(".h_icon1 .span2").click(function(){
            num--;
            if (num<0) {  
            num=2     
            };
            $.ajax({
                type:"get",
                url:arr[num],
                success:function(data){
                    $("#h_empSport").html(data)
                }
            })
        })
});
/*实战项目*/
$(document).ready(function(){
     var arr=["ajax/w_h/ajax_a3.html","ajax/w_h/ajax_a1.html","ajax/w_h/ajax_a2.html"]
     var num=1;
        $(".h_icon1 .span1").click(function(){
            num++;
            if (num>arr.length-1) {
                num=0;
            };
            $.ajax({
                type:"get",
                url:arr[num],
                success:function(data){
                    $("#h_text").html(data)
                }
            })   
        })
         $(".h_icon1 .span2").click(function(){
            num--;
            if (num<0) {  
            num=2     
            };
            $.ajax({
                type:"get",
                url:arr[num],
                success:function(data){
                    $("#h_text").html(data)
                }
            })
        })
});

//
