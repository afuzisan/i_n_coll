
var nkey = "sdkey";
var PTM = 0.083;
var brs = 0;
var qkey = new String("");
var dkey = new String("");



jQuery(function($){
	var $li = $('._li');

	$('form').on('submit',function(){
		fu('169');
	});
	$('._clear').on('click',function(){
		$li.val('');
		putKey(nkey,'',PTM);
		$li.focus();
	});
	$('.container').on('click','._btn',function(e){
	//$('._btn').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[1]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});


//株探
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn2',function(e){
	//$('._btn2').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[179]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});
//株ドラゴン
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn23',function(e){
	//$('._btn2').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[202]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//Twitter
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn3',function(e){
	//$('._btn3').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[180]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//Yahoo!掲示板
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn4',function(e){
	//$('._btn4').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[181]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//四季報
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn5',function(e){
	//$('._btn5').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[182]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//PTS
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn6',function(e){
	//$('._btn6').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[183]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//大量保有報告書
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn7',function(e){
	//$('._btn7').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[184]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//空売り残高
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn8',function(e){
	//$('._btn8').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[185]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//経済レポート
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn9',function(e){
	//$('._btn9').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[186]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//facebook
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn10',function(e){
	//$('._btn10').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[187]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//ミラクルチャート
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn11',function(e){
	//$('._btn11').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[188]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//増田足チャート
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn12',function(e){
	//$('._btn12').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[189]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//ケンミレチャート
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn13',function(e){
	//$('._btn13').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[190]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//Quick
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn14',function(e){
	//$('._btn14').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[191]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//株マップ
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn15',function(e){
	//$('._btn15').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[192]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//格付けレート
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn16',function(e){
	//$('._btn16').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[193]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//めいがらナビ
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn17',function(e){
	//$('._btn17').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[194]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//株価アルゴリズム
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn18',function(e){
	//$('._btn18').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[195]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//日本証券新聞
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn19',function(e){
	//$('._btn19').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[196]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//日本経済新聞
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn20',function(e){
	//$('._btn20').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[197]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//ブルームバーグ
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn21',function(e){
	//$('._btn21').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[198]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//ロイター
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn22',function(e){
	//$('._btn22').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[199]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});
//Yahoo!ファイナンスTOP
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn23',function(e){
	//$('._btn23').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[201]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});

//Google+
jQuery(function($){
	var $li = $('._li');
	$('.container').on('click','._btn24',function(e){
	//$('._btn24').on('click',function(e){
	e.preventDefault();
	var _$currentTarget = $(e.currentTarget);
	//フォームに何も入力されていない時
	if($li.val() == ''){
	window.open(uu[200]);
		return;
	}

		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;
		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10));
		}
	});
});


/*
jQuery(function($){
	var $li = $('._li');

	$('form').on('submit',function(){
		fu('151');
	});

	$('._clear').on('click',function(){
		$li.val('');
		$li.focus();
	});



	$('._btn').on('click',function(e){
          dkey = document.S_EG_F.qkey.value;
		if(dkey){
		e.preventDefault();
		var _$currentTarget = $(e.currentTarget);
		var _codes = _$currentTarget.data('codes').toString(10).split(',');
		var _codesLen = _codes.length;

		for(var i=0;i<_codesLen;i++){
			fu(parseInt(_codes[i],10))};
		}else{
		button_click(value) {
    		  var target = document.getElementById("searchLink");
    		  }if (value == 0) {
    		    window.open("aaa.htm");
   				   }
	       	else if (value == 1) {
      		  window.open("bbb.htm");
  				    }
		});

*/


uu=new Array(81);uu[0]="";uu[1]="http://www.google.co.jp/search?hi=ja&lr=lang_ja&ie=utf-8&tbo=1&q=";uu[2]="";uu[3]="http://www.bing.com/search?go=%8C%9F%8D%F5&form=QBRE&scope=web&filt=all&q=";uu[4]="http://search.naver.jp/search?sm=tab_jum&q=";uu[5]="http://www.baidu.jp/s?tn=baidujp&ie=utf-8&cl=3&ct=262144&wd=";uu[6]="http://search.yahoo.co.jp/search?meta=fl%3D3&ei=utf-8&fr=sfp_as&p=";uu[7]="http://search.yahoo.com/search?ei=utf-8&fr=sfp&p=";uu[8]="http://search.goo.ne.jp/web.jsp?IE=UTF-8&PT=OCNTOP&from=OCNTOP&button=%8C%9F%8D%F5&MT=";uu[9]="http://search.nifty.com/websearch/search?select=2&ss=up&cflg=%E6%A4%9C%E7%B4%A2&chartype=utf8&prekey=&Text=";uu[10]="http://cgi.search.biglobe.ne.jp/cgi-bin/search?c=%E6%A4%9C%E7%B4%A2&ie=utf8&q=";
uu[11]="http://chiebukuro.search.yahoo.co.jp/search?flg=3&fr=common-nav&p=";uu[12]="http://search.goo.ne.jp/web.jsp?STYPE=oshiete&IE=UTF-8&from=gootop&MT=";uu[13]="http://b.hatena.ne.jp/search?q=";uu[14]="http://search.yahoo.co.jp/search/dir?fr=dir&ei=UTF-8&p=";uu[15]="";uu[16]="http://ja.wikipedia.org/wiki/";uu[17]="http://www.weblio.jp/content_find?esearchType=exact&query=";uu[18]="http://dictionary.goo.ne.jp/srch/all/";uu[19]="http://eow.alc.co.jp/";uu[20]="http://100.search.yahoo.co.jp/search?p=";uu[21]="http://en.wikipedia.org/wiki/";uu[22]="http://www.dictionary.com/cgi-bin/dict.pl?term=";uu[23]="http://www.alexa.com/data/details/traffic_details?url=";uu[24]="http://web.archive.org/web/*/";uu[25]="https://siteexplorer.search.yahoo.com/advsearch?ei=utf-8&bwm=i&searchbwm=Explore+URL&p=";uu[26]="";uu[27]="";uu[28]="http://search.yahoo.com/search/dir?fr=sfp&ei=utf-8&p=";uu[29]="http://www.google.com/search?hl=en&btnG=search&tbo=1&q=";uu[30]="http://www.bing.com/search?go=&form=QBLH&mkt=en-us&q=";
uu[31]="http://news.google.co.jp/news/search?pz=1&cf=all&ned=jp&ie=utf-8&hl=ja&q=";uu[32]="http://news.search.yahoo.co.jp/search?aq=-1&oq=&ei=UTF-8&p=";uu[33]="http://search.weather.yahoo.co.jp/bin/search?p=";uu[34]="http://tv.yahoo.co.jp/search/?g=&Submit.x=14&Submit.y=16&q=";uu[35]="http://news.google.com/news/search?aq=f&pz=1&cf=all&ned=us&hl=en&q=";uu[36]="http://news.search.yahoo.com/news/search;_ylc=X1MDMjE0MjQ3ODk0OARfcgMyBGZyA25ld3MtdXMtc3MEZnIyA3NidG4Ebl9ncHMDNQRxdWVyeQNiaXJkcw--?ei=UTF-8&fr=news-us-ss&c=&p=";uu[37]="";uu[38]="";uu[39]="";uu[40]="";
uu[41]="http://twitter.com/#!/search/";uu[42]="https://plus.google.com/s/";uu[43]="http://yahoo-mbga.jp/game/search?q=";uu[44]="http://www.linkedin.com/pub/dir/?first=&search=%E6%A4%9C%E7%B4%A2&last=";uu[45]="http://www.google.co.jp/search?tbm=blg&hl=ja&source=hp&biw=898&bih=587&btnG=%E6%A4%9C%E7%B4%A2&gbv=2&q=";uu[46]="http://www.youtube.com/results?aq=f&search_query=";uu[47]="http://www.google.co.jp/search?tbo=p&tbm=vid&source=vgc&hl=ja&aq=f&q=";uu[48]="http://video.search.yahoo.co.jp/search?p=";uu[49]="http://www.google.co.jp/images?hl=ja&source=imghp&biw=789&bih=618&gbv=2&aq=f&aqi=g10&aql=&oq=&q=";uu[50]="";uu[51]="http://image-search.yahoo.co.jp/search?p=";uu[52]="";uu[53]="http://search.nifty.com/imagesearch/search?select=1&cflg=%E6%A4%9C%E7%B4%A2&ss=up&q=";uu[54]="http://www.flickr.com/search/?f=hp&q=";uu[55]="";uu[56]="";uu[57]="";uu[58]="";uu[59]="http://www.google.com/images?hl=en&source=imghp&biw=1334&bih=824&btnG=Search+Images&gbv=2&aq=f&aqi=g10&aql=&oq=&q=";uu[60]="http://images.search.yahoo.com/search/images?ei=utf-8&fr=&fr2=sfp&p=";
uu[61]="http://www.amazon.co.jp/gp/search?ie=UTF8&tag=searchdesk-22&index=blended&linkCode=ur2&camp=247&creative=1211&keywords=";uu[62]="http://www.google.co.jp/products?hl=ja&aq=f&q=";uu[63]="http://search.vector.co.jp/search?query=";uu[64]="http://company.nikkei.co.jp/index.aspx?scode=";uu[65]="http://stocks.finance.yahoo.co.jp/stocks/detail/?code=";uu[66]="";uu[67]="http://finance.yahoo.com/q?d=t&s=";uu[68]="";uu[69]="";uu[70]="";
uu[71]="http://maps.google.co.jp/maps?hl=ja&tab=il&btnG=%E5%9C%B0%E5%9B%B3%E3%82%92%E6%A4%9C%E7%B4%A2&q=";uu[72]="http://search.map.yahoo.co.jp/search?ac=&gc=&ei=UTF-8&p=";uu[73]="http://map.goo.ne.jp/search.php?src=1&selop=&sw=0&from=map_tp&MT=";uu[74]="http://r.tabelog.com/rst/rstsearch/?sa=&pal=japan&LstCosT=0&voluntary_search=1&sk=";uu[75]="http://cookpad.com/search/?page=1&date_sort.x=18&date_sort.y=9&keyword=";uu[76]="http://www.post.japanpost.jp/cgi-zip/zipcode.php?pref=&addr=";uu[77]="http://www.post.japanpost.jp/cgi-zip/zipcode.php?zip=";uu[78]="http://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=";uu[79]="http://search.kantei.go.jp/search/?U=kantei&cs=UTF8&S=";uu[80]="http://nettv.gov-online.go.jp/keyword.html?k=";


function fu(nm){
	dkey=document.S_EG_F.qkey.value;

	if(dkey!=""){
		dkey = uu[nm] + encodeURIComponent(dkey);

		if(nm === 18){
			dkey=dkey+"/m0u/";
		}

		if($('._checkBox').prop('checked')){
			window.open(dkey,"_blank");
		}else{
			location.href=dkey;
		}
	}
}

function fs(nm){
	dkey=document.S_EG_F.qkey.value;

	if(dkey!=""){
		if(tgt==1||nm>4||brs==8){
			document.forms[nm].target="";
		}else{
			document.forms[nm].target="_blank";
		}

		if(nm>4){
			document.charset="euc-jp";
		}
		if(nm==12){
			dkey="http://auctions.search.yahoo.co.jp/search?auccat=0&tab_ex=commerce&ei=euc-jp&p="+dkey;document.forms[nm].elements[2].value=dkey;
		}else{
			document.forms[nm].elements[0].value=dkey;
		}
		document.forms[nm].submit();
		document.charset="shift_jis";
	}
}





uu=new Array(81);
uu[0]="";
uu[1]="http://www.google.co.jp/search?hi=ja&lr=lang_ja&ie=utf-8&tbo=1&q=";uu[2]="";uu[3]="http://www.bing.com/search?go=%8C%9F%8D%F5&form=QBRE&scope=web&filt=all&q=";uu[4]="http://search.naver.jp/search?sm=tab_jum&q=";uu[5]="http://www.baidu.jp/s?tn=baidujp&ie=utf-8&cl=3&ct=262144&wd=";uu[6]="http://search.yahoo.co.jp/search?meta=fl%3D3&ei=utf-8&fr=sfp_as&p=";uu[7]="http://search.yahoo.com/search?ei=utf-8&fr=sfp&p=";uu[8]="http://search.goo.ne.jp/web.jsp?IE=UTF-8&PT=OCNTOP&from=OCNTOP&button=%8C%9F%8D%F5&MT=";uu[9]="http://search.nifty.com/websearch/search?select=2&ss=up&cflg=%E6%A4%9C%E7%B4%A2&chartype=utf8&prekey=&Text=";uu[10]="http://cgi.search.biglobe.ne.jp/cgi-bin/search?c=%E6%A4%9C%E7%B4%A2&ie=utf8&q=";
uu[11]="http://chiebukuro.search.yahoo.co.jp/search?flg=3&fr=common-nav&p=";uu[12]="http://search.goo.ne.jp/web.jsp?STYPE=oshiete&IE=UTF-8&from=gootop&MT=";uu[13]="http://b.hatena.ne.jp/search?q=";uu[14]="http://search.yahoo.co.jp/search/dir?fr=dir&ei=UTF-8&p=";uu[15]="";uu[16]="http://ja.wikipedia.org/wiki/";uu[17]="http://www.weblio.jp/content_find?esearchType=exact&query=";uu[18]="http://dictionary.goo.ne.jp/srch/all/";uu[19]="http://eow.alc.co.jp/";uu[20]="http://100.search.yahoo.co.jp/search?p=";uu[21]="http://en.wikipedia.org/wiki/";uu[22]="http://www.dictionary.com/cgi-bin/dict.pl?term=";uu[23]="http://www.alexa.com/data/details/traffic_details?url=";uu[24]="http://web.archive.org/web/*/";uu[25]="https://siteexplorer.search.yahoo.com/advsearch?ei=utf-8&bwm=i&searchbwm=Explore+URL&p=";uu[26]="";uu[27]="";uu[28]="http://search.yahoo.com/search/dir?fr=sfp&ei=utf-8&p=";uu[29]="http://www.google.com/search?hl=en&btnG=search&tbo=1&q=";uu[30]="http://www.bing.com/search?go=&form=QBLH&mkt=en-us&q=";
uu[31]="http://news.google.co.jp/news/search?pz=1&cf=all&ned=jp&ie=utf-8&hl=ja&q=";uu[32]="http://news.search.yahoo.co.jp/search?aq=-1&oq=&ei=UTF-8&p=";uu[33]="http://search.weather.yahoo.co.jp/bin/search?p=";uu[34]="http://tv.yahoo.co.jp/search/?g=&Submit.x=14&Submit.y=16&q=";uu[35]="http://news.google.com/news/search?aq=f&pz=1&cf=all&ned=us&hl=en&q=";uu[36]="http://news.search.yahoo.com/news/search;_ylc=X1MDMjE0MjQ3ODk0OARfcgMyBGZyA25ld3MtdXMtc3MEZnIyA3NidG4Ebl9ncHMDNQRxdWVyeQNiaXJkcw--?ei=UTF-8&fr=news-us-ss&c=&p=";uu[37]="";uu[38]="";uu[39]="";uu[40]="";
uu[41]="https://twitter.com/search?q=";uu[42]="https://plus.google.com/s/";uu[43]="http://yahoo-mbga.jp/game/search?q=";uu[44]="http://www.linkedin.com/pub/dir/?first=&search=%E6%A4%9C%E7%B4%A2&last=";uu[45]="http://www.google.co.jp/search?tbm=blg&hl=ja&source=hp&biw=898&bih=587&btnG=%E6%A4%9C%E7%B4%A2&gbv=2&q=";uu[46]="http://www.youtube.com/results?aq=f&search_query=";uu[47]="http://www.google.co.jp/search?tbo=p&tbm=vid&source=vgc&hl=ja&aq=f&q=";uu[48]="http://video.search.yahoo.co.jp/search?p=";uu[49]="http://www.google.co.jp/images?hl=ja&source=imghp&biw=789&bih=618&gbv=2&aq=f&aqi=g10&aql=&oq=&q=";uu[50]="";uu[51]="http://image-search.yahoo.co.jp/search?p=";uu[52]="";uu[53]="http://search.nifty.com/imagesearch/search?select=1&cflg=%E6%A4%9C%E7%B4%A2&ss=up&q=";uu[54]="http://www.flickr.com/search/?f=hp&q=";uu[55]="";uu[56]="";uu[57]="";uu[58]="";uu[59]="http://www.google.com/images?hl=en&source=imghp&biw=1334&bih=824&btnG=Search+Images&gbv=2&aq=f&aqi=g10&aql=&oq=&q=";uu[60]="http://images.search.yahoo.com/search/images?ei=utf-8&fr=&fr2=sfp&p=";
uu[61]="http://www.amazon.co.jp/gp/search?ie=UTF8&tag=searchdesk-22&index=blended&linkCode=ur2&camp=247&creative=1211&keywords=";uu[62]="http://www.google.co.jp/products?hl=ja&aq=f&q=";uu[63]="http://search.vector.co.jp/search?query=";uu[64]="https://www.trkd-asia.com/rakutensec/resultcnt_ja.jsp?all=on&sector=na&code=";uu[65]="http://info.finance.yahoo.co.jp/search/?query=";uu[66]="";uu[67]="http://finance.yahoo.com/q?d=t&s=";uu[68]="";uu[69]="";uu[70]="";
uu[71]="http://maps.google.co.jp/maps?hl=ja&tab=il&btnG=%E5%9C%B0%E5%9B%B3%E3%82%92%E6%A4%9C%E7%B4%A2&q=";uu[72]="http://search.map.yahoo.co.jp/search?ac=&gc=&ei=UTF-8&p=";uu[73]="http://map.goo.ne.jp/search.php?src=1&selop=&sw=0&from=map_tp&MT=";uu[74]="http://r.tabelog.com/rst/rstsearch/?sa=&pal=japan&LstCosT=0&voluntary_search=1&sk=";uu[75]="http://cookpad.com/search/?page=1&date_sort.x=18&date_sort.y=9&keyword=";uu[76]="http://www.post.japanpost.jp/cgi-zip/zipcode.php?pref=&addr=";uu[77]="http://www.post.japanpost.jp/cgi-zip/zipcode.php?zip=";uu[78]="http://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=";uu[79]="http://search.kantei.go.jp/search/?U=kantei&cs=UTF8&S=";uu[80]="http://nettv.gov-online.go.jp/keyword.html?k=";
uu[81]="http://kashisearch.jp/search/free/";
uu[82]="http://www.nicovideo.jp/search/";
uu[83]="http://catchapp.net/item/search/keyword?w=";
uu[84]="http://www.coojin.com/osearch.do?method=osearch&keywords=";
uu[85]="http://www.htmq.com/search/?cx=partner-pub-1165233953818792%3Axuor2kioa5b&cof=FORID%3A10&ie=Shift_JIS&q=";
uu[86]="https://addons.mozilla.jp/firefox/search?q=";
uu[87]="https://chrome.google.com/webstore/search/";
uu[88]="http://www.redcruise.com/search.php?srcstr=";
uu[89]="http://worldadult-videos.info/?site=1&site=5&site=8&site=9&site=10&site=4&site=6&site=2&scope=all&minDuration=0&age=0&searchRequest=true&q=";
uu[90]="http://eiga.com/search/";
uu[91]="http://www.google.com/cse?cx=017100316412229404875%3Ac8wdpcbngle&q=%82%A0&sa.x=38&sa.y=17&siteurl=www.forest.impress.co.jp%2F&ref=www.google.co.jp%2F&ss=0j0j1#gsc.tab=0&gsc.q=";
uu[92]="https://play.google.com/store/search?q=";
uu[93]="https://www.google.co.jp/search?q=google&oq=google&aqs=chrome.0.59j60j65j59j65l2.1419j0&sourceid=chrome&ie=UTF-8#tbm=app&sclient=psy-ab&q=";
uu[94]="http://matome.naver.jp/search?q=";
uu[95]="http://wordpress.org/search/";
uu[96]="http://zozo.jp/_search/search_result.html?p_maid=1&p_ptype=0&p_gcs=1&p_cutyid=0&p_keyv=";
uu[97]="http://live.nicovideo.jp/search?orig_filter=&sort=point&date=&keyword=";
uu[98]="http://is.2ch.net/?ie=SJIS&q=";
uu[99]="http://livedoor-search.naver.jp/search?c=ld_top_sb&ie=utf-8&q=";
uu[100]="http://search.rakuten.co.jp/search/mall?sitem=";
uu[101]="http://search.shopping.yahoo.co.jp/search?p=";
uu[102]="http://infogra.me/ja/search/?keyword=";
uu[103]="http://auctions.search.yahoo.co.jp/search?auccat=&p=";
uu[104]="http://r.gnavi.co.jp/area/jp/rs/?fwp=&fw=";
uu[105]="http://r.gnavi.co.jp/area/jp/rs/?fwp=";
uu[106]="https://www.facebook.com/search/results.php?q=";
uu[107]="http://seocheki.net/site-check.php?u=";
uu[108]="http://www.opensiteexplorer.org/links?site=";
uu[109]="http://www.google.co.jp/trends/explore?q=";
uu[110]="https://www.google.co.jp/search?hl=ja&gl=jp&tbm=nws&authuser=0&q=";
uu[111]="http://scholar.google.co.jp/scholar?hl=ja&q=";
uu[112]="http://find.2ch.net/?STR=";
uu[113]="http://anipo.jp/out/search.php?q=";
uu[114]="http://junkch.com/?s=";
uu[115]="http://moviemaga.blog20.fc2.com/?q=";
uu[116]="http://www.doramadougas.com/?s=";
uu[117]="http://videonavi.blog66.fc2.com/?q=a";
uu[118]="http://guitarlist.net/search/index.php?query=aa";
uu[119]="https://developers.google.com/speed/pagespeed/insights#url=http_3A_2F_2F";
uu[120]="http://nanapi.jp/search/q:";
uu[121]="http://search.allabout.co.jp/?q=";
uu[122]="http://search.yomiuri.co.jp/komachi.html?kw=";
uu[123]="http://www.7netshopping.jp/all/search_result/?site=default_collection&client=default_frontend&access=p&ctgySelect=all&kword_in=";
uu[124]="http://travel.yahoo.co.jp/search/search.html?p=";
uu[125]="http://cross.realestate.yahoo.co.jp/map?lc=&p=";
uu[126]="http://search.rakuten.co.jp/search/present?f=1&v=2&uwd=1&s=1&p=1&sitem=";
uu[127]="http://www.knshow.com/search/?keyword=";
uu[128]="http://coconala.com/search?q=";
uu[129]="http://www.pixiv.net/search.php?s_mode=s_tag&word=";
uu[130]="http://talent.search.yahoo.co.jp/search?p=";
uu[131]="http://www.jalan.net/uw/uwp2011/uww2011init.do?keyword=";
uu[132]="http://www.pakutaso.com/#fs-result_";
uu[133]="http://www.modelpiece.com/search.php?keyword=";
uu[134]="http://photomaterial.net/?s=";
uu[135]="http://www.ashinari.com/search/search.php?search=";
uu[136]="http://www.igosso.net/se.cgi?q=";
uu[137]="http://www.kys-lab.com/photo/mtos/mt-search.cgi?search=";
uu[138]="http://sozaing.com/?s=";
uu[139]="http://www.futta.net/search/search.cgi?page=1&mode=search&word=";
uu[140]="http://www.google.co.jp/custom?domains=www.tokyo-date.net&q=";
uu[141]="http://photo.v-colors.com/?s=";
uu[142]="http://free.stocker.jp/?s=";
uu[143]="http://lovefreephoto.jp/?q=";
uu[144]="http://www.techs.co.jp/photoshare/?s=";
uu[145]="http://coneta.jp/result?cx=015178230480814360830%3A3i6kbaln3m4&ie=UTF-8&q=";
uu[146]="http://cosme.beauty.yahoo.co.jp/skinlab/search/";
uu[147]="http://cosme.beauty.yahoo.co.jp/search/search?type=keyword&p=";
uu[148]="http://diet.beauty.yahoo.co.jp/db/search/?type=keyword&keyword=";
uu[149]="http://volunteer.yahoo.co.jp/search?area_pref=AREA-0&query=";
uu[150]="http://www.mooter.co.jp/moot/?keywords=";
uu[151]="http://kabutan.jp/stock/?code=";
uu[152]="http://textream.yahoo.co.jp/search?query=";
uu[153]="http://karauri.net/";
uu[154]="http://jp.kabumap.com/servlets/kabumap/Action?SRC=basic/top/base&codetext=";
uu[155]="http://dt.kabumap.com/servlets/dt/Action?SRC=basic/base&codetext=";
uu[156]="http://kabutan.jp/stock/finance?code=";
uu[157]="http://kabutan.jp/stock/news?code=";
uu[158]="http://ichioshikabunavi.net/stocks/nichan/";
uu[159]="http://www.morningstar.co.jp/StockInfo/pts/info/";
uu[160]="http://kabuyoho.ifis.co.jp/index.php?action=tp1&sa=report&bcode=";
uu[161]="http://www2010.masudaasi.com/landingIFIS2/index.html?mode=if&ac=ifw&iniMeigara=";
uu[162]="http://www.google.co.jp/cse?cx=partner-pub-4325202183662963:0946021500&ie=UTF-8&q=";
uu[163]="http://www.bloomberg.co.jp/search?q=%22";
uu[164]="http://www.nikkei.com/search/site/?searchKeyword=";
uu[165]="http://search.jp.reuters.com/query/?blob=";
uu[166]="http://search.tse.or.jp/?PHPSESSID=f1d58752277df2452e0efa796a24af66&la=jp&domain=tse&ie=u&kw=";
uu[167]="http://nsjournal.jp/?s=";
uu[168]="http://www.asset-alive.com/rating/index.php?offset=60&s_code=";
uu[169]="http://kabutan.jp/stock/chart?code=";
uu[170]="https://maonline.jp/shareholding_reports?utf8=?&query%5Bfildate_gteq%5D=2017-03-10&query%5Bfildate_lteq%5D=&query%5Bisname_or_issyokencode_or_company_iscode_start%5D=";
uu[171]="https://shikiho.jp/tk/search/article?search_text=";
uu[172]="https://shikiho.jp/tk/stock/info/";
uu[173]="http://toyokeizai.net/search?fulltext=";
uu[174]="https://www.k-zone.co.jp/miracle_chart/index.jsp?stock_code=";
uu[175]="http://growth-investment.net/list/";
uu[176]="http://search.keizaireport.com/search.php?keyword=";
uu[177]="http://www.miller.co.jp/chart.cgi?_hps=off&from=chr&quote=";
uu[178]="http://discl.quick.co.jp/Library/?query=&query_company=%20&query_subject=";
uu[179]="https://kabutan.jp/";//株探TOP
uu[180]="https://twitter.com/";//Twitter
uu[181]="https://textream.yahoo.co.jp/personal/history/comment";//Yahoo!掲示板
uu[182]="https://shikiho.jp/tk/";//四季報
uu[183]="https://www.morningstar.co.jp/";//PTS
uu[184]="https://maonline.jp/shareholding_reports";//大量保有報告書
uu[185]="https://karauri.net/";//空売り残高
uu[186]="http://www3.keizaireport.com/";//経済レポート
uu[187]="https://www.facebook.com/";//facebook
uu[188]="https://www.k-zone.co.jp/miracle_chart/";//ミラクルチャート
uu[189]="http://www.masudaasi.com/";//増田足チャート
uu[190]="http://www.miller.co.jp/";//ケンミレチャート
uu[191]="http://discl.quick.co.jp/";//Quick
uu[192]="http://jp.kabumap.com/";//株マップ
uu[193]="https://www.asset-alive.com/rating/index.php?offset=60&s_code=";//格付けレート
uu[194]="http://ichioshikabunavi.net/";//めいがらナビ
uu[195]="http://www.rizumu.net/";//株価アルゴリズム
uu[196]="http://www.nsjournal.jp/";//日本証券新聞
uu[197]="https://www.nikkei.com/";//日本経済新聞
uu[198]="https://www.bloomberg.co.jp/";//ブルームバーグ
uu[199]="https://jp.reuters.com/";//ロイター
uu[200]="https://plus.google.com/";//Google+
uu[201]="https://finance.yahoo.co.jp/";//Yahooファイナンス
uu[202]="http://www.kabudragon.com/s?t=";//株ドラゴン
uu[203]="";
