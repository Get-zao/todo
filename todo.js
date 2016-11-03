$(document).ready(function(){
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
	
	
	
	
	
	
	
	
	
})