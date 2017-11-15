/*
* @Author: hsy
* @Date:   2017-08-11 15:12:29
* @Last Modified by:   hsy
* @Last Modified time: 2017-08-11 17:01:10
*/

'use strict';
$(function(){
	var num=0;
	$('.left').click(function(event){
		num+=1;
		if (num>2){
			num=0;
		}
		$('#banner ul').animate({'left':-1350*num+'px'},500);
	});

	$('.right').click(function(event){
		num-=1;;
		if (num<0){
			num=2;
		}
		$('#banner ul').animate({'left':-1350*num+'px'},500);
	});

})