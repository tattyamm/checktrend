
	
	//**
	//**  何かありましたら@tattyammまでご連絡お願いします  **
	// 2012.06.27
	
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

	// 個別設定
	$(document).ready(function(){
		// Google Analytics読込み
		var ga = document.createElement('script'); ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
	});

	function getData(dataCode){
		var dataObj = { 
			testobj: {url: 'http--' , id: '#hogehoge' , msg: 'はーい'} ,
			
			//
			japan1: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=7707570b0133e8b923431104f084755f&_render=rss' , id: '#japanTrendContent' , msg: '日本の流行キーワード - Google急上昇ワード'} ,
			japan2: {url: 'http://searchranking.yahoo.co.jp/rss/burst_ranking-rss.xml' , id: '#japanTrendContent' , msg: '日本の流行キーワード - Yahoo!急上昇ワード'} ,
			japan3: {url: 'http://keyword.jp.msn.com/rss/weekly_rapidly.xml' , id: '#japanTrendContent' , msg: '日本の流行キーワード - MSN週間急上昇ランキング'} ,
			japan4: {url: 'http://api.twitter.com/1/trends/1118370.json' , id: '#japanTrendContent' , msg: '日本の流行キーワード - twitterドレンド'} ,
			japan5: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=3836eafa302096555a8438637c649a7a&_render=rss' , id: '#japanTrendContent' , msg: '日本の流行キーワード - Amazonヒット書籍'} , 
			
			//
			america1: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=1cc9f8303f7b92c3aecc63622a7579c6&_render=rss' , id: '#americaTrendContent' , msg: 'アメリカの流行キーワード - Google trends'} ,
			america2: {url: 'http://api.twitter.com/1/trends/23424977.json' , id: '#americaTrendContent' , msg: 'アメリカの流行キーワード - twitterドレンド'} ,
			
			//
			china1: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=5a25627486de90491e5a8623abd455ce&_render=rss' , id: '#chinaTrendContent' , msg: '中国 - リアルタイムキーワード'} ,
			china2: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=229aadf7786a645797a62ce107a656b7&_render=rss' , id: '#chinaTrendContent' , msg: '中国 - 今日のキーワード'} ,
			china3: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=274871cc4ae732f8e11f7cbc37d7bece&_render=rss' , id: '#chinaTrendContent' , msg: '中国 - 過去7日間のキーワード'} ,
			
			//
			g71: {url: 'http://api.twitter.com/1/trends/23424819.json' , id: '#g7TrendContent' , msg: 'G7の流行キーワード - フランス'} ,
			g72: {url: 'http://api.twitter.com/1/trends/23424977.json' , id: '#g7TrendContent' , msg: 'G7の流行キーワード - アメリカ'} ,
			g73: {url: 'http://api.twitter.com/1/trends/23424975.json' , id: '#g7TrendContent' , msg: 'G7の流行キーワード - イギリス'} ,
			g74: {url: 'http://api.twitter.com/1/trends/23424829.json' , id: '#g7TrendContent' , msg: 'G7の流行キーワード - ドイツ'} ,
			g75: {url: 'http://api.twitter.com/1/trends/23424856.json' , id: '#g7TrendContent' , msg: 'G7の流行キーワード - 日本'} ,
			g76: {url: 'http://api.twitter.com/1/trends/23424853.json' , id: '#g7TrendContent' , msg: 'G7の流行キーワード - イタリア'} ,
			g77: {url: 'http://api.twitter.com/1/trends/23424775.json' , id: '#g7TrendContent' , msg: 'G7の流行キーワード - カナダ'} ,
			
			//
			brics1: {url: 'http://api.twitter.com/1/trends/23424768.json' , id: '#bricsTrendContent' , msg: 'ブラジル'} ,
			brics2: {url: 'http://api.twitter.com/1/trends/23424936.json' , id: '#bricsTrendContent' , msg: 'ロシア'} ,
			brics3: {url: 'http://api.twitter.com/1/trends/23424768.json' , id: '#bricsTrendContent' , msg: 'インド'} ,
			brics4: {url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=229aadf7786a645797a62ce107a656b7&_render=rss' , id: '#bricsTrendContent' , msg: '中国'} ,
			brics5: {url: 'http://api.twitter.com/1/trends/23424942.json' , id: '#bricsTrendContent' , msg: '南アフリカ'} ,
			
			//next11
			next111: {url: '' , id: '#next11TrendContent' , msg: '韓国'} ,
			next112: {url: '' , id: '#next11TrendContent' , msg: 'バングラデシュ'} ,
			next113: {url: '' , id: '#next11TrendContent' , msg: 'エジプト'} ,
			next114: {url: 'http://api.twitter.com/1/trends/23424846.json' , id: '#next11TrendContent' , msg: 'インドネシア'} ,
			next115: {url: '' , id: '#next11TrendContent' , msg: 'イラン'} ,
			next116: {url: 'http://api.twitter.com/1/trends/23424908.json' , id: '#next11TrendContent' , msg: 'ナイジェリア'} ,
			next117: {url: 'http://api.twitter.com/1/trends/23424922.json' , id: '#next11TrendContent' , msg: 'パキスタン'} ,
			next118: {url: 'http://api.twitter.com/1/trends/23424934.json' , id: '#next11TrendContent' , msg: 'フィリピン'} ,
			next119: {url: 'http://api.twitter.com/1/trends/23424969.json' , id: '#next11TrendContent' , msg: 'トルコ'} ,
			next1110: {url: '' , id: '#next11TrendContent' , msg: 'ベトナム'} ,
			next1111: {url: 'http://api.twitter.com/1/trends/23424900.json' , id: '#next11TrendContent' , msg: 'メキシコ'} 

		}; 
		
		try{
			jsonUrl = dataObj[dataCode]['url'];
			idName  = dataObj[dataCode]['id'];
			idTitle = dataObj[dataCode]['msg'];
			getJsonFromXML(jsonUrl , idName , idTitle);
		}catch(e){
			//エラー
			console.log("未定義データが指定されました")
		}
	
		//データ取得準備
		$(idName+'Title').text(idTitle);
		$(idName).empty();						//前の表示内容を消去
		$(idName).html("<img src='./load.gif'>");
		
		//データ取得
		if(jsonUrl.slice(0,32) != 'http://api.twitter.com/1/trends/'){
		//通常
			//rssをjsonデータに変換して取得
			console.log("XML "+ jsonUrl);
			$.getJSON("http://query.yahooapis.com/v1/public/yql?callback=?", {
				q: "select title,link,description from rss where url='" + jsonUrl + "'",
				format: "json"
			}, function (json) {	//ロードが終わると開始される
				jsonToHtml(idName , idTitle , json);
			}).error(function (e) {
				//console.log(e);
				$(idName).empty();
				$(idName).text("データ読み込み中にエラーが発生しました。しばらく時間を置いてからアクセスをお願いします。");
			});
		//twitterのトレンドを持ってきた場合のみ
		} else {
			//jsonデータを取得
			console.log("twitter json " + jsonUrl);
			$.getJSON("http://query.yahooapis.com/v1/public/yql?callback=?", {
				q: "select * from json where url='" + jsonUrl + "'",
				format: "json"
			}, function (json) {	//ロードが終わると開始される
				twitterjsonToHtml(idName , idTitle , json);
			}).error(function (e) {
				//console.log(e);
				$(idName).empty();
				$(idName).text("データ読み込み中にエラーが発生しました。しばらく時間を置いてからアクセスをお願いします。");
			});
		}
	}
	
	//twitterのjsonをhtmlに反映する
	function twitterjsonToHtml(idName , idTitle , json){
		console.log("twitterjsonToHtml");
		if (typeof json === "undefined") {
			console.log("データ取得に失敗した模様");
			$(idName).empty();
			$(idName).text("データにエラーが発生しました。しばらく時間を置いてからアクセスをお願いします。");
		}
		
		//表示するテキストを取得
		try{
			var strRSS = "";
			for(var i in json.query.results.json.trends){
				strRSS = strRSS + "<li><a href='"+ escapeHTML(json.query.results.json.trends[i].url) +"' rel='external'><h3>" + escapeHTML(json.query.results.json.trends[i].name) + "</h3></a></li>";
			}
		}catch(e){
			//console.log(e);
			$(idName).empty();
			$(idName).text("データにエラーが発生しました。しばらく時間を置いてからアクセスをお願いします。");
		}
		
		//画面をつくる
		$(idName).empty();
		$( "<ol>", {							//メインのデータを表示
			"role": "listview",
		})
		.append(strRSS)
		.appendTo($(idName))
		.listview();
		
	}
	
	//jsonをhtmlに反映する
	function jsonToHtml(idName , idTitle , json){
		console.log("jsonToHtml");
		if (typeof json === "undefined") {
			console.log("データ取得に失敗した模様");
			$(idName).empty();
			$(idName).text("データにエラーが発生しました。しばらく時間を置いてからアクセスをお願いします。");
		}
		
		//表示するテキストを取得
		try{
			var strRSS = "";
			for(var i in json.query.results.item){
				if(typeof json.query.results.item[i].description == "undefined" ){	//descriptionが定義されていない時はカット
					strRSS = strRSS + "<li><a href='"+ escapeHTML(json.query.results.item[i].link) +"' rel='external'><h3>" + escapeHTML(json.query.results.item[i].title) + "</h3></a></li>";
				}else{
					strRSS = strRSS + "<li><a href='"+ escapeHTML(json.query.results.item[i].link) +"' rel='external'><h3>" + escapeHTML(json.query.results.item[i].title) + "</h3><p>"+ escapeHTML(json.query.results.item[i].description) +"</p></a></li>";
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
	
