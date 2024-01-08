jQuery(function($){
	var _$body = $('body');
	var _tmplt = [
		'<div id="chrome_extension_container">',
		'<form action="#" name="S_EG_F" id="searchLink" autocomplete="off">',
			'<div id="searchbox">',

				'<a href="#" class="_close"><span >×</span></a>',
			'</div>',
			'<div id="contents">',
				'<div class="google_boxs">',
					'<h4 id="0">チェックリスト </h4>',
					'<ol class="_nav"></ol>',
				'</div>',
			'</div>',
		'</form>',
		'</div>'
	].join('');
	var _compiled = _.template(_tmplt);
	_$body.append(_compiled);

	var _$chromeExtensionContainer = $('#chrome_extension_container');
	var $li = _$chromeExtensionContainer.find('._li');
	_$chromeExtensionContainer.find('form').on('submit',function(e){
		e.preventDefault();
		fu('169');
		return false;
	});
	_$chromeExtensionContainer.find('._clear').on('click',function(){
		$li.val('');
		putKey(nkey,'',PTM);
		$li.focus();
	});

	_$chromeExtensionContainer.find('._close').on('click',function(e){
		e.preventDefault();
		_$chromeExtensionContainer.hide();
	});


	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		var _$nav = $('._nav');
		_$nav.empty();
		_$nav.append(request.html);
		_$chromeExtensionContainer.show();
	});

	var port = chrome.extension.connect({name: "incoll"});
	port.postMessage();
	port.onMessage.addListener(function(msg) {
		//console.log(msg)
	});
});

