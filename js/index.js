/**
 * Created by Administrator on 2016/10/18.
 */
//移入导航时背景的改变
$(function(){
    $(".daohang li").hover(function(){
        var index=$(".daohang li").index(this)
       $(".daohang li").eq(index).css("background","#d13d3b");
        $("ul li a").eq(index).css("color","white");
    },function(){
        var index=$(".daohang li").index(this)
        $(".daohang li").eq(index).css("background","white")
        $(".daohang li a").eq(index).css("color","#5a5a5a")
    })

//响应式的导航变幻效果
    var flag=true;
    $(".small-r").click(function(){
        if(flag){
            $(".menu").css({"height":"440px","visibility":"visible"})
            $(".menu a" ).each(function(index,obj){
                $(obj).css("transition","all 0.1s ease "+index*0.05+"s")
            }).css({"opacity":1,"transform":"rotateY(0deg) scale(1,1)"})
            flag=false;
        } else{
            flag=false;
            $(".menu").css({"height":"440px","visibility":"hidden"})
            $(".menu a" ).each(function(index,obj){
                $(obj).css("transition","none")
            }).css({"opacity":1,"transform":"rotateY(0deg) scale(1,1)"});
            flag=true;
        }
    })
    //轮播
    //轮播
    //next 为当前屏幕的
    //now为滑到左边的
    var now=0;
    var next=0;
    $(".con1").css("left","100%").eq(0).css("left",0);
    function move(){
        next++;
        if(next==$(".con1").length){
            next=0;
        }
        $(".con1").eq(now).animate({left:"-100%"});
        $(".con1").eq(next).css("left","100%");
        $(".con1").eq(next).animate({left:0});
        $(".btn li").css({"background":"#999",border:"none"}).eq(next).css({"background": "#fff"})
        now=next;
    }
    var t=setInterval(move,2000)
    $(".rightbtn").click(function(){
        next--;
        if(next<=-1){
            next=($(".con1").length)-1;
        }
        $(".con1").eq(now).animate({left:"100%"});
        $(".con1").eq(next).css("left","-100%");
        $(".con1").eq(next).animate({left:0});
        $(".btn li").css({"background":"#999",border:"none"}).eq(next).css({"background": "#fff"})
        now=next;

    })
    $(".leftbtn").click(function(){
        move();
    })
    $(".banner").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(move,2000);
    })
    //点击小圆点
    $(".btn li").click(function(){
        var index=$(".btn li").index(this);
        next=index;
        $(".con1").eq(now).animate({left:"-100%"});
        $(".con1").eq(next).css("left","100%");
        $(".con1").eq(next).animate({left:0});
        $(".btn li").css({"background":"#999",border:"none"}).eq(next).css({"background": "#fff"})
        //让now也跟着next的数字变化
        now=next;
    })
    //节点轮播
    var lunbo=document.getElementsByClassName("lunbo")[0];
    var left=getFirst(lunbo);
    var right=getNum(lunbo,1)
    var inner=getFirst(getNext(right));
    var childs=getChilds(inner);
    var width=400;
    inner.style.width=childs.length*width+"px"
    // alert(width)
    var flag=true;
    left.onclick=function(){
        if(!flag){//
            return
        }
        flag=false;
        animate(inner,{marginLeft:-width},function(){
            var first=getFirst(inner);
            inner.appendChild(first);
            inner.style.marginLeft=0;
            flag=true;
        })
    }
    right.onclick=function(){
        if(!flag){
            return;
        }
        flag=false
        var last=getLast(inner);
        pre(inner,last);
        inner.style.marginLeft=-width+"px"
        animate(inner,{marginLeft:0},function(){
            flag=true;
        })
    }
    //箭头点击效果
        $(".left").click(function(){
            $(".left").css("background","#dfaa42");
            $(".right").css("background","#bbbbbb");
        })
        $(".right").click(function(){
           $(".right").css("background","#dfaa42");
           $(".left").css("background","#bbbbbb");
    })
})