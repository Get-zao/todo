$(document).ready(function(){
	//所有弹出框
	$(".caidan").on('click',function(){
		$(".caidan").css('color','#D92974')
		$(".jiantou-s").show();
		$(".zhuangtai").show();
	})
	$(".zhuangtai").on('click',function(){
		$(".caidan").css('color','#fff')
		$(".jiantou-s").hide();
		$(".zhuangtai").hide();
	})
	$(".add").on('click',function(){
		$(".jiantou").show();
		$(".tanchuang").show();
	})
	$(".yes").on('click',function(){
		$(".jiantou").hide();
		$(".tanchuang").hide();
	})
	
	//存储信息
	var add=$('.add');
	var yes=$('.yes');
	var input=$('#renwu');
	var ul=$('.ul');
	var Tchuang=$('.tanchuang');
	var todo=[];
	if(localStorage.x){
		todo=JSON.parse(localStorage.x);
		 for(var i=0;i<todo.length;i++){
            var c=(todo[i].state)?"done":"";
            $("<li class='"+c+"'><div class='content'>"+todo[i].name+"</div><div class='delete'>x</div></li>").appendTo(ul);
        }
	}

	yes.on("touchstart",function(){
		  var v=$.trim(input.val());
        if(!v){
            return;
        }
        var todos={
            name:v,
            state:0
        }
        todo.push(todos);
        localStorage.x=JSON.stringify(todos);
        $("<li><div class='content'>"+v+"</div><div class='delete'>x</div></li>").appendTo(ul);
        input.val("");
        $(".header").removeClass("tuichu_active");
	})
	
	
	 //划去
    var stast;
    ul.on("touchstart","li",function(e){
        stast=e.originalEvent.changedTouches[0].clientX;
    })
    ul.on("touchend","li",function(e){
        var p=e.originalEvent.changedTouches[0].clientX;
        if(p-stast>50){
            $(this).addClass("done");
            todo[$(this).index()].state=1;
            localStorage.x=JSON.stringify(todo);
            
        }else if(p-stast<-50){
            $(this).removeClass("done");
            todo[$(this).index()].state=0;
            localStorage.x=JSON.stringify(todo);
        }
    })
    
    //删除
    ul.on('touchend','.delete',function(e){
        var li=$(this).closest('li');
        var m=li.index();
        ul.find('li').eq(m).remove();
        todo.splice(m,1)
        localStorage.x=JSON.stringify(todo);
        
    });
    $('.delall').on('touchend',function(e){
        var li=ul.find('li');
        var m=li.index();
        var n=li.length;
        ul.find('li').remove();
         todo.splice(m,n)
        localStorage.x=JSON.stringify(todo);
        $(".qita").removeClass("qita_active");
    });

     $('.delall').on('touchend',function(e){
        var li=ul.find('li');
        var m=li.index();
        var n=li.length;
        ul.find('.done').remove();
//      todo.splice(m,1)
         todo.splice(m,n)
        localStorage.x=JSON.stringify(todo);
    });
	
	 var divs=$(".zhuangtai li");
    divs.on("touchend",function(){
        ul.find("li").show();
        var role=$(this).attr("data-role");
        if(role=="com"){
            ul.find("li:not(.done)").hide();
        }
        if(role=="rem"){
            
            ul.find("li.done").hide();
        }
        if(role=="all"){
            ul.find("li").show();
        }
        
    })
	
})