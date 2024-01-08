jQuery(function($){
  var _$tbody = $('tbody');
  var _chartMode = null;


  chrome.storage.sync.get(['chart_mode'], function(result) {
    _chartMode = result.chart_mode;
    if(typeof _chartMode === 'undefined'){
      _chartMode = 0;
    }else{
      _chartMode = parseInt( _chartMode ,10);
    }
    _showMemoData();
  });

  function _getImgUrl(stockCode){
    switch(_chartMode){
      case 0:
        return 'https://www.kabudragon.com/chart/s=' + stockCode ;
      case 1:
        return 'https://www.kabudragon.com/chart/s=' + stockCode + '/volb=1/a=1/';
      case 2:
        return 'https://www.kabudragon.com/chart/s=' + stockCode + '/volb=1/a=2/';
      case 3:
        return 'https://chart.yahoo.co.jp/?code=' + stockCode + '.T&tm=ay&type=c&log=on&size=m&over=m65,m130,s&add=v&comp='
    }
  }

  function _showMemoData(){
    var _$filterColorCheckBox = $('._filterColorCheckBox:checked');
    var _filterColorCheckBoxLen = _$filterColorCheckBox.length;
    var _filterColorCheckBox = null;
    for(var i=0;i<_filterColorCheckBoxLen;i++){
      if(_filterColorCheckBox === null){
        _filterColorCheckBox = '';
      }
      _filterColorCheckBox = _filterColorCheckBox + $(_$filterColorCheckBox[i]).val() + ',';
    }


    chrome.storage.local.get(null, function(result) {

      var _result = [];
      for(i in result){
        var _val = result[i];
        if(_filterColorCheckBox !== null && _filterColorCheckBox.indexOf(_val[3]) === -1){
          continue;
        }
        _result[_result.length] = {
          stockCode:i,
          date:_val[2],
          value:_val
        }
      }
      
      _result.sort(function(a,b){
        var _$sort = $('._sort');
        var _sortStockCode = parseInt($(_$sort[0]).val(),10);
        var _sortDate = parseInt($(_$sort[1]).val(),10);

        if(_sortStockCode === 1){
          if(parseInt(a.stockCode,10) > parseInt(b.stockCode,10)){
            return -1;
          } else {
            return 1;
          }
        } else if(_sortStockCode === 2){
          if(parseInt(a.stockCode,10) > parseInt(b.stockCode,10)){
            return 1;
          } else {
            return -1;
          }
        }

        if(_sortDate === 1){
          if(parseInt(a.date,10) > parseInt(b.date,10)){
            return -1;
          } else {
            return 1;
          }
        } else if(_sortDate === 2){
          if(parseInt(a.date,10) > parseInt(b.date,10)){
            return 1;
          } else {
            return -1;
          }
        }

      });
      
      for(i in _result){
        var _stockCode = _result[i].stockCode;
        var _val = _result[i].value;
        var _$tr = $('<tr></tr>'); 
        var _bgColorIndex = parseInt(_val[3],10);
        if(_bgColorIndex > 0 ){
          switch(_bgColorIndex) {
            case 1:
              _$tr.css('background-color','#FAE2E1');//赤
              break;
            case 2:
              _$tr.css('background-color','#C8DFFA');//青
              break;
            case 3:
              _$tr.css('background-color','#C8FAE3');//緑
              break;
            case 4:
              _$tr.css('background-color','#F9FAE1');//黄色
              break;
          }
        }
        _$tr.attr('data-stock-code',_stockCode);
        var _$td;

        _$td = $('<td></td>');
        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text(_stockName);
        _$a.attr({
          href:'https://kabutan.jp/stock/chart?code=' + _stockCode ,
          target:'_blank'
        });
        _$td.append(_$a);
        _$td.append('<br>');
        
        var _$radio;

        _$label = $('<label class="radio-label red">&nbsp;</label>');
        _$label.attr('for','radioRed' + _stockCode);
        _$radio = $('<input type="radio" value="1" class="radio _filterColorRadioButton">');
        _$radio.attr('name','radio'+_stockCode);
        _$radio.attr('id','radioRed'+_stockCode);
        _$radio.attr('data-stock-code',_stockCode);
        if(_bgColorIndex === 1){
          _$label.text('レ');
          _$radio.attr('checked','checked');
        }
        _$td.append(_$label);
        _$td.append(_$radio);


        _$label = $('<label class="radio-label blue">&nbsp;</label>');
        _$label.attr('for','radioBlue' + _stockCode);
        _$radio = $('<input type="radio" value="2" class="radio _filterColorRadioButton">');
        _$radio.attr('name','radio'+_stockCode);
        _$radio.attr('id','radioBlue'+_stockCode);
        _$radio.attr('data-stock-code',_stockCode);
        if(_bgColorIndex === 2){
          _$label.text('レ');
          _$radio.attr('checked','checked');
        }
        _$td.append(_$label);
        _$td.append(_$radio);

        _$label = $('<label class="radio-label green">&nbsp;</label>');
        _$label.attr('for','radioGreen' + _stockCode);
        _$radio = $('<input type="radio" value="3" class=" radio _filterColorRadioButton">');
        _$radio.attr('name','radio'+_stockCode);
        _$radio.attr('id','radioGreen'+_stockCode);
        _$radio.attr('data-stock-code',_stockCode);
        if(_bgColorIndex === 3){
          _$label.text('レ');
          _$radio.attr('checked','checked');
        }
        _$td.append(_$label);
        _$td.append(_$radio);

        _$label = $('<label class="radio-label yellow">&nbsp;</label>');
        _$label.attr('for','radioYellow' + _stockCode);
        _$radio = $('<input type="radio" value="4" class=" radio _filterColorRadioButton">');
        _$radio.attr('name','radio'+_stockCode);
        _$radio.attr('id','radioYellow'+_stockCode);
        _$radio.attr('data-stock-code',_stockCode);
        if(_bgColorIndex === 4){
          _$label.text('レ');
          _$radio.attr('checked','checked');
        }
        _$td.append(_$label);
        _$td.append(_$radio);
        
        _$label = $('<label class="radio-label black">&nbsp;</label>');
        _$label.attr('for','radioBlack' + _stockCode);
        _$radio = $('<input type="radio" value="0" class=" radio _filterColorRadioButton">');
        _$radio.attr('name','radio'+_stockCode);
        _$radio.attr('id','radioBlack'+_stockCode);
        _$radio.attr('data-stock-code',_stockCode);
        if(_bgColorIndex === 0){
          _$label.text('レ');
          _$radio.attr('checked','checked');
        }
        _$td.append(_$label);
        _$td.append(_$radio);

        _$tr.append(_$td);
	_$td.append('<br>');

        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('NEWS ');
        _$a.attr({
          href:'https://kabutan.jp/stock/news?code=' + _stockCode ,
          target:'_blank'
        });
        _$td.append(_$a);

        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('決算 ');
        _$a.attr({
          href:'https://kabutan.jp/stock/finance?code=' + _stockCode +'&mode=k',
          target:'_blank'
        });
        _$td.append(_$a);

        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('掲示板');
        _$a.attr({
          href:'https://textream.yahoo.co.jp/rd/finance/' + _stockCode,
          target:'_blank'
        });
        _$td.append(_$a);
        _$td.append('<br>');

        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('PTS ');
        _$a.attr({
          href:'http://portal.morningstarjp.com/StockInfo/pts/info/' + _stockCode,
          target:'_blank'
        });
        _$td.append(_$a);

        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('空売り残 ');
        _$a.attr({
          href:'https://karauri.net/' + _stockCode,
          target:'_blank'
        });
        _$td.append(_$a);

        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('日証金 ');
        _$a.attr({
          href:'https://www.nisshokin.com/' + _stockCode,
          target:'_blank'
        });
	 _$td.append(_$a);
        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('バフェットコード ');
        _$a.attr({
          href:'https://www.buffett-code.com/company/' + _stockCode,
          target:'_blank'
        });
	 _$td.append(_$a);
        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('Tradingview ');
        _$a.attr({
          href:'https://jp.tradingview.com/chart/?symbol=:' + _stockCode,
          target:'_blank'
        });
	 _$td.append(_$a);
        var _stockName = _val[0] + '(' + _stockCode + ')';
        var _$a = $('<a></a>');
        _$a.text('Youtube');
        _$a.attr({
          href:'https://www.youtube.com/results?search_query=' + _stockName,
          target:'_blank'
        });
        _$td.append(_$a);

        _$td = $('<td></td>');
        _$td.attr('data-stock-code',_stockCode);
        var _time = new Date(parseInt(_val[2],10));
        var _yyyy = _time.getFullYear() + '年';
        var _mm = (_time.getMonth() + 1) + '月';
        var _dd = _time.getDate() + '日';
        _$td.text(_yyyy + _mm + _dd);
        _$tr.append(_$td);

        _$td = $('<td></td>');
        _$td.attr('data-stock-code',_stockCode);
        _$td.attr('data-stock-name',_val[0]);
        _$td.text(_val[1]);
        _$tr.append(_$td);

        _$td = $('<td></td>');
        var _$img = $('<img>');
        _$img.attr('src',_getImgUrl(_stockCode));
        _$img.attr('data-stock-code',_stockCode);
        _$td.append(_$img);
        _$tr.append(_$td);


        _$td = $('<td></td>');
        _$buton = $('<button type="button" class="ui button _edit">編集</button><br /><br /><button type="button" class="ui button _delete">削除</button>');
        _$buton.data('stock-code',_stockCode);
        _$td.append(_$buton);
        _$tr.append(_$td);

        _$tbody.append(_$tr);
      }

    });
  }

  _$tbody.on('click','._edit',function(e){
    var _$currentTarget = $(e.currentTarget);
    var _stockCode = _$currentTarget.data('stock-code');

    var _$tds = $('td[data-stock-code="' + _stockCode + '"]');

    var _$td = $(_$tds[1]);
    var _$textarea = $(_$td.find('textarea'));
    if(_$textarea.length === 0){
      _$currentTarget.text('完了');
      var _txt = _$td.text();
      _$textarea = $('<textarea></textarea>');
      _$textarea.val(_txt);
      _$td.empty();
      _$td.append(_$textarea);
    } else {
      var _txt = _$textarea.val();
      var _$radio = $('input[type="radio"][name="radio' + _stockCode + '"]:checked');
      var _colorType;
      if(_$radio.length === 0){
        _colorType = '0';
      }else{
        _colorType = _$radio.val();
      }
      chrome.storage.local.set({[_stockCode] : [_$td.attr('data-stock-name'), _txt , (new Date()).getTime().toString(10), _colorType]}, function() {

        _$td.empty();
        _$td.text(_txt);
        _$currentTarget.text('編集');

        var _time = new Date();
        var _yyyy = _time.getFullYear() + '年';
        var _mm = (_time.getMonth() + 1) + '月';
        var _dd = _time.getDate() + '日';
        $(_$tds[0]).text(_yyyy + _mm + _dd);
      });
    }
  });

  _$tbody.on('click','._delete',function(e){
    var _$currentTarget = $(e.currentTarget);
    var _stockCode = _$currentTarget.data('stock-code');
    var _$tr = $('tr[data-stock-code="' + _stockCode+ '"]');
    chrome.storage.local.remove([_stockCode], function(){

      _$tr.fadeOut('normal',function(){
        _$tr.remove();
      });
    });
  });

  $('._save').on('click',function(e){
    var _stockCode = $('#txtKeywd').val();
    if(_stockCode.length < 4){
      alert('4桁の証券コードではありません');
      return;
    }

    if(isNaN(_stockCode)){
      alert('4桁の証券コードではありません');
      return;
    }

    var _stockName = GET_STOCK_NAME(_stockCode);
    if(typeof _stockName === 'undefined'){
      alert('証券名がありませんでした');
      return;
    }

    var _$tr = $('tr[data-stock-code="' + _stockCode+ '"]');
    if(_$tr.length > 0){
      alert('既に登録されています');
      return;
    }

    chrome.storage.local.set({[_stockCode] : [_stockName, '' , (new Date()).getTime().toString(10),'0']}, function() {
        alert('メモが保存されました');
        _$tbody.empty();
        _showMemoData();
    });

  });


  $('._chartType').on('click',function(e){
    var _$currentTarget = $(e.currentTarget);
    _chartMode = _$currentTarget.val();
    chrome.storage.sync.set({'chart_mode':_chartMode }, function(result) {
      _chartMode = parseInt(_chartMode,10);
      var _$imgs = $('tbody img');
      var _imgsLen = _$imgs.length;
      for(var i=0;i<_imgsLen;i++){
        var _$img = $(_$imgs[i]);
        _$img.attr('src', _getImgUrl(_$img.data('stock-code')))
      }
    });
  });

  $('._sort').on('click',function(e){
    var _$currentTarget = $(e.currentTarget);
    var _val = parseInt(_$currentTarget.val(),10);
    if(_val === 0){
      _$currentTarget.text('▲');
      _$currentTarget.val(1);
    } else if(_val === 1){
      _$currentTarget.text('▼');
      _$currentTarget.val(2);
    } else {
      _$currentTarget.text('-');
      _$currentTarget.val(0);
    }
    _$tbody.empty();
    _showMemoData();
  });

  $('._filterColorCheckBox').on('change',function(e){
    var _$currentTarget = $(e.currentTarget);
    var _id = _$currentTarget.attr('id');
    var _$label = $('label[for="' + _id + '"]');
    if(_$currentTarget.prop('checked')){
      _$label.text('レ');
    } else {
      _$label.html('&nbsp;');
    }
    
    _$tbody.empty();
    _showMemoData();
  });

  _$tbody.on('change','._filterColorRadioButton',function(e){
    var _$currentTarget = $(e.currentTarget);
    var _stockCode = _$currentTarget.data('stock-code');
    var _$tr = $('tr[data-stock-code="' + _stockCode+ '"]');
    var _$td = _$tr.find('td[data-stock-name]');

    var _txt = '';
    var _$textarea = $(_$td.find('textarea'));
    if(_$textarea.length === 0){
      _txt = _$td.text();
    } else{
      _txt = _$textarea.val();
    }
    
    chrome.storage.local.set({[_stockCode] : [_$td.attr('data-stock-name'), _txt , (new Date()).getTime().toString(10), _$currentTarget.val()]}, function() {
      _$tbody.empty();
      _showMemoData();
    });
    
  });
});
