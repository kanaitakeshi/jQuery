// jQueryの型を用意する
$(function() {
  // 「#login-show」要素に対するclickイベント
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });
  // 「.signup-show」のclickイベント
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });
  // 「.close-modal」要素にclickイベントを設定
  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  // 「.lesson-hover」がhoverされたときのhoverイベントを作成
  $('.lesson-hover').hover(
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつける
      $(this).find('.text-contents').addClass('text-active'); 
    },
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外す
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  // FAQのアコーディオン
  // 「.faq-list-item」のclickイベントを作成する
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠す
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換える
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示する
      $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換える
      $(this).find('span').text('-');
      
    }
  });
});
