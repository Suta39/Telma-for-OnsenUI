/*BBS****************/

//詳細表示
function bbsContent(id){
  console.log(id);
  /*$.ajax({
   type: "GET",
   url: _domain+"/keiji/content",
   //url:_domain+"/postinfo.php?type=bbs-content",
   //data:sendData,
   success: function(msg){
    //console.log(msg);
    console.log(JSON.parse(msg));
    msg = JSON.parse(msg);
    //var msg = JSON.stringify(msg);
    //alert(msg);
    /*
    var data = msg['data'];
    //alert(msg[0].title)
    listDom.attr("onclick","bbsContent("+val.keiji_id+")");
    listDom.find(".list__item__title").html(val.title);
    listDom.find(".list__item__subtitle").html(val.content);
    //var cloneDom = listDom.clone(true);
    listDom.prependTo($("#bbs-lists"));
    }
   });
   */
  myNavigator.pushPage("page/bbs/bbs-content.html", { animation : 'slide' } );
}

//記事リスト
function bbsList(){
  var listDom = $(".bbs-list:first").clone(true);//.html("List"+listCnt)
  listDom.attr("onclick","bbsContent("+listCnt+")");
  listDom.find(".keijiban_id").attr('id',listCnt);
  listDom.find(".list__item__title").html("title"+listCnt);
  listDom.find(".list__item__subtitle").html("content"+listCnt);
  listDom.prependTo($("#bbs-lists"));
  return listCnt++;
  /*
  console.log("start!");
  console.log(_domain+"/keiji?longitude=80&latitude=70");
  var sendData = {
    email:"oonuma@denpa.co.jp"
  };
  $.ajax({
   type: "POST",
   url:"https://it2-sotuken.herokuapp.com/keiji/list-all?longitude=80&latitude=70",
   //url:_domain+"/postinfo.php?type=bbs-list",
   //url:"https://it2-sotuken.herokuapp.com/DBtest",
   data:sendData,
   success: function(msg){
    console.log("success!");
    console.log(JSON.stringify(msg));
    //console.log(msg);
    //console.log(JSON.parse(msg));
    //console.log(JSON.stringify(msg));
    //msg = JSON.parse(msg);
    //var msg = JSON.stringify(msg);
    //alert(msg);
    /*
    var data = msg['data'];
    /*******/
    //alert(msg[0].title)
    /*
    $.each(msg,function(key,val){
      var listDom = $(".bbs-list:first").clone(true);//.html("List"+listCnt)
      listDom.attr("onclick","bbsContent("+val.keiji_id+")");
      listDom.find(".list__item__title").html(val.title);
      listDom.find(".list__item__subtitle").html(val.content);
      //var cloneDom = listDom.clone(true);
      listDom.prependTo($("#bbs-lists"));
    });
    },
    error: function(err){
      console.log("ajax-error!<br>"+JSON.stringify(err));
    }
 	});
  /******/
}

//記事投稿
function bbsWrite(){
	var title = $("#bbs-title").val();
	var content = $("#bbs-content").val();
	//var location = getLocation();
	//alert(location.ido);
  console.log("start!");
  var sendData = {
    title:title,
    content:content,
    ido:"100",
    keido:"200",
    image:"bbs.img"
  };
  
	$.ajax({
   type: "POST",
   //url: _domain+"postinfo.php",
   url:"https://it2-sotuken.herokuapp.com/keiji/post",
   data:sendData,
   success: function(msg){
     console.log("aaa");
     alert(msg);
      console.log(JSON.stringify(msg));
      console.log(msg);
    }
 	});
}

//地点登録
function locationRegi(id){
  var region_id = ["1","2","3"];
  var region_name = ["友人","学校","実家"];
  var ido = ["100","200","300"];
  var keido = ["300","200","100"];
  
  var sendData = {
    session_id:_session_id,
    user_id:_user_id,
    region1:{
      region_id:region_id,
      name:region_name,
      ido:ido,
      keido:keido
    }
  };
	
  $.ajax({
   type: "POST",
   url: "http://exout.net/~kashima_dollars/postinfo.php",
   data:sendData,
   success: function(msg){
     alert(msg);
 	 }
 	});
  closeDialog(id);
}
//Refresh
function bbdRefresh(event){
  console.log('change');/*
  var pullHook = $('#refresh');
  var message = '';
  switch (event.state) {
    case 'initial':
      message = 'Pull to refresh';
      break;
    case 'preaction':
      message = 'Release';
      break;
    case 'action':
      message = 'Loading...';
      break;
  }
  pullHook.innerHTML = message;

  pullHook.onAction = function(done) {
    setTimeout(done, 1000);
  }*/
}
function locationEdit(){
  $("#location-edit").html
}


/*********************/