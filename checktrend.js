
	// Google Analytics設定
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-19734506-5']);
			
	// 初期設定
	$(document).bind('mobileinit', function(){

		// 日本語化
		$.mobile.loadingMessage = '読込み中';
		$.mobile.pageLoadErrorMessage = '読込みに失敗しました';
		$.mobile.page.prototype.options.backBtnText = '戻る';
		$.mobile.dialog.prototype.options.closeBtnText = '閉じる';
		$.mobile.selectmenu.prototype.options.closeText= '閉じる';
		
		// Google Analytics設定 ページトラッキング
		$(':jqmData(role="page")').live('pageshow', function (event, ui) {
			_gaq.push(['_trackPageview', $.mobile.activePage.jqmData('url')]);
		});
	});

	//fastckick.js
	$(function() {
    	FastClick.attach(document.body);
	});

	// 個別設定
	$(document).ready(function(){
		// Google Analytics読込み
		var ga = document.createElement('script'); ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);

		// 最初に見せる画面
		getData('japan1');

		//default
		 $("#detailBrowser").attr('src', '');
	});

	function getData(dataCode){
		var dataObj = { 
			testobj: {url: 'http--' , id: '#hogehoge' , msg: 'はーい'} ,
			//
			japan1: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=b4c7153df25b0aa5e1b5034ea03fe54e&_render=json&_callback=?' , id: '#japanTrendContent' , msg: 'Google急上昇ワード'} ,
			japan2: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=cd404ac46440703b203b1f4f129e761e&_render=json&_callback=?' , id: '#japanTrendContent' , msg: 'Yahoo!急上昇ワード'} ,
			japan3: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=81ec292d8c0223b7b675452127028e41&_render=json&_callback=?' , id: '#japanTrendContent' , msg: 'MSN週間急上昇ランキング'} ,
			japan4: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=e95077516313fad645233d42e25efae4&_render=json&_callback=?' , id: '#japanTrendContent' , msg: 'twitterドレンド'} ,
			japan5: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=f3e422424cafd595628fc32645053652&_render=json&_callback=?' , id: '#japanTrendContent' , msg: 'Amazonヒット書籍'} , 
		};
		
		try{
			jsonUrl = dataObj[dataCode]['url'];
			idName  = dataObj[dataCode]['id'];
			idTitle = dataObj[dataCode]['msg'];
			getJsonFromXML(jsonUrl , idName , idTitle);
		}catch(e){
			//エラー
		}
	
		//データ取得準備
		$(idName+'Title').text(idTitle);
		$(idName).empty();						//前の表示内容を消去
		$(idName).html("<img src='./images/load.gif'>");
		
		//rssをjsonデータに変換して取得
		console.log("URL "+ jsonUrl);
		$.getJSON(jsonUrl, function (json) {	//ロードが終わると開始される
			jsonToHtml(idName , idTitle , json);
		}).error(function (e) {
			$(idName).empty();
			$(idName).text("データ読み込み中にエラーが発生しました。しばらく時間を置いてからアクセスをお願いします。");
		});
	}
	
	//jsonをhtmlに反映する
	function jsonToHtml(idName , idTitle , json){
		if (typeof json === "undefined") {
			console.log("データ取得に失敗した模様");
			$(idName).empty();
			$(idName).text("データにエラーが発生しました。しばらく時間を置いてからアクセスをお願いします。");
		}
		
		//表示するテキストを取得
		try{
			var strRSS = "";
			for(var i in json.value.items){
				var linkStr = json.value.items[i].link;
				var titleStr = escapeHTML(json.value.items[i].title);
				if(json.value.items[i].description){
					strRSS = strRSS + "<li><a href='"+ linkStr +"' rel='external'>" + titleStr + "<br><p>"+ escapeHTML(json.value.items[i].description) +"</p></a></li>";
					//strRSS = strRSS + "<li><a href='"+ linkStr +"' rel='external'><h3>" + titleStr + "</h3><p>"+ escapeHTML(json.value.items[i].description) +"</p></a></li>";

					//strRSS = strRSS + "<li><a href='#browser' onclick=\"$('#detailBrowser').attr('src', '" + linkStr +"');\"><h3>" + titleStr + "</h3><p>"+ escapeHTML(json.value.items[i].description) +"</p></a></li>";
				}else{
					strRSS = strRSS + "<li><a href='"+ linkStr +"' rel='external'>" + titleStr + "</a></li>";
					//strRSS = strRSS + "<li><a href='"+ linkStr +"' rel='external'><h3>" + titleStr + "</h3><p>" + "</a></li>";

					//strRSS = strRSS + "<li><a href='#browser' onclick=\"$('#detailBrowser').attr('src', '" + linkStr +"');\"><h3>" + titleStr + "</h3></a></li>";
				}
			}
		}catch(e){
			//console.log(e);
			$(idName).empty();
			$(idName).text("データにエラーが発生しました。しばらく時間を置いてからアクセスをお願いします。");
		}
		
		//画面を作る
		$(idName).empty();
		$( "<ol>", {							//メインのデータを表示
			"role": "listview",
		})
		.append(strRSS)
		.appendTo($(idName))
		.listview();
	}
	
	//textを利用してエスケープ（対策として問題無いのか？）
	//http://yossie09.blogspot.com/2010/11/jquery-html.html
	function escapeHTML(val) {
		return $('<div>').text(val).html();
	};
	function unescapeHTML(val) {
		return $('<div>').html(val).text();
    };
	
