// This is a JavaScript file


function popOpen(page){
	myNavigator.pushPage(page, { animation : 'lift' } );
};
function slideOpen(page){
	myNavigator.pushPage(page, { animation : 'slide' } );
}
var alertMsg = function(target){
  $('#alert-msg').show(target);
}
var showPopover = function(target) {
  document
    .getElementById('popover')
    .show(target);
};
var openDialog = function(id){
  $(id).show();
  //document.getElementById(id).show();
}
function closeDialog(id){
  document.getElementById(id).hide();
}
      

/*
var showPopover = function(target) {
	var me = document.querySelector("#me1")
  document.getElementById('popover').show(me);
};
*/

/*BBS****************/
function bbsWrite(){
	var title = $("#bbs-title").val();
	var content = $("#bbs-content").val();
	//var location = getLocation();
	//alert(location.ido);
	$.ajax({
   type: "POST",
   url: "http://exout.net/~kashima_dollars/postinfo.php",
   data: 
   "user_id="+"1"+
   "&title="+title+
   "&content="+content+
   "&ido="+"100"+
   "&keido="+"200"+
   "&image="+"bbs.img",
   success: function(msg){
     alert(msg);
 	 }
 	});
}

function locationRegi(){
	var location1 = $("#location1").val();
	var location1 = $("#location1").val();
	var location1 = $("#location1").val();
	var content = $("#bbs-content").val();
	$.ajax({
   type: "POST",
   url: "http://exout.net/~kashima_dollars/postinfo.php",
   data: 
   "user_id="+"1"+
   "&title="+title+
   "&content="+content+
   "&ido="+"100"+
   "&keido="+"200"+
   "&image="+"bbs.img",
   success: function(msg){
     alert(msg);
 	 }
 	});
}

/*********************/

/*Rental**************/

function rentWrite(){
	var title = $("#rent-title").val();
	var content = $("#rent-content").val();
	$.ajax({
   type: "POST",
   url: "http://exout.net/~kashima_dollars/postinfo.php",
   data: 
   "user_id="+"1"+
   "&title="+title+
   "&content="+content+
   "&ido="+"100"+
   "&keido="+"200"+
   "&limit="+"3"+
   "&image="+"rent.img",
   success: function(msg){
     alert(msg);
 	 }
 	});
}
/*******************/


