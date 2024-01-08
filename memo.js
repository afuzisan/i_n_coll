jQuery(function($){

  var _href = location.href;
  if(_href.indexOf('https://kabutan.jp/stock/') > -1){
    var _queryStrings = location.search;
    if(_queryStrings === ''){
      return;
    }
    _queryStrings = _queryStrings.replace(/\?/gi,'').split('&');
    var _queryString;
    for(var i in _queryStrings){
      _queryString = _queryStrings[i];
      if(_queryString.indexOf('code=') > -1){
        _queryString = _queryString.replace(/code=/gi,'');
        break;
      }
    }
    if(_queryString.length < 4){
      return;
    }
    var _stockCode = _queryString;
    var _$body = $('body');
    var _tmplt = [
      '<div id="incollInputMemo">',  
      ' <div class="link"> ',
      '  <table>',
      '    <tbody></tbody>',
      '  </table>',
      ' </div>',
      '  <div class="textarea"><textarea></textarea></div>',
	'<div class="button"><button type="button">保存</button></div>', 
      '</div>'
    ].join('');
    _tmplt = _.template(_tmplt);
    _$body.append(_tmplt);
    _$body.on('click','#incollInputMemo button',function(e){
      var _$currentTarget = $(e.currentTarget);
      var _$textarea = $($(_$currentTarget.parent().parent()).find('textarea'));
      var _val = _$textarea.val();
      var _$kobetsuDataTable1Meigara = $('.kobetsu_data_table1_meigara');
      if(_$kobetsuDataTable1Meigara.length === 0){
        return;
      }
      chrome.storage.local.set({[_stockCode] : [_$kobetsuDataTable1Meigara.text(), _val , (new Date()).getTime().toString(10)]}, function() {
        alert('メモが保存されました');
      });
    });

    chrome.storage.local.get(_stockCode, function(result) {
      var _val = result[_stockCode];
      if(typeof _val === 'undefined'){
        return;
      }
      $('#incollInputMemo').find('textarea').val(_val[1]);
    });

    chrome.storage.local.get(null, function(result) {
      var _$tbody = $($('#incollInputMemo').find('tbody'));
      for(i in result){
        /*
        if(parseInt(i,10) === parseInt(_stockCode,10)){
          continue;
        }
        */
        var _val = result[i];
        var _$tr = $('<tr></tr>');

        var _$td = $('<td></td>');
        var _$a = $('<a></a>');
        _$a.attr({
          'href':'https://kabutan.jp/stock/chart?code=' + i,
        });
        _$a.text(_val[0] + '(' + i  + ')');
        _$td.append(_$a);
        _$tr.append(_$td);
        _$tbody.append(_$tr);
      }
    });
  } else {
    var _$threadAbout = $('.threadAbout');
    if(_$threadAbout.length == 0){
      return;
    }
    var _$span = $($(_$threadAbout.find('span'))[0]);
    if(_$span.length === 0){
      return;
    }
    var _txt = _$span.text();
    var _stockName = _txt.substr(_txt.indexOf(' ') + 1);
    _stockName = _stockName.substr(_stockName.indexOf(' ') + 1);
    _stockName = _stockName.substr(0, _stockName.indexOf(' '));
    
    var _stockCode = _txt.match(/\d{4}/)[0];
    
    var _$leftList = $($('.left-list')[0]);
    var _$li;

    _$li = $('<li></li>');
    var _$textarea = $('<textarea></textarea>');
    _$textarea.addClass('_stockMemo');
    _$li.append(_$textarea);
    _$leftList.append(_$li);

    _$li = $('<li></li>');
    var _$button = $('<button type="button" class="_saveMemo">保存</button>');
    _$button.on('click',function(e){
      chrome.storage.local.set({[_stockCode] : [_stockName, _$textarea.val() , (new Date()).getTime().toString(10)]}, function() {
        alert('メモが保存されました');
      });
    });

    _$li.append(_$button);
    _$leftList.append(_$li);
    
    chrome.storage.local.get(_stockCode, function(result) {
      var _val = result[_stockCode];
      if(typeof _val === 'undefined'){
        return;
      }
      _$textarea.val(_val[1]);
    });
    
    chrome.storage.local.get(null, function(result) {
      for(i in result){
        /*
        if(parseInt(i,10) === parseInt(_stockCode,10)){
          continue;
        }
        */
        var _val = result[i];
        var _$li = $('<li></li>');

        var _$a = $('<a></a>');
        _$a.attr({
          'href':'https://textream.yahoo.co.jp/rd/finance/' + i,
          'target':'_blank'
        });
        _$a.text(_val[0] + '(' + i  + ')');
        _$li.append(_$a);
        _$leftList.append(_$li);
      }
    });
  }

})