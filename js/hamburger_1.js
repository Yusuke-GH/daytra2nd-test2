


//スクロール
//--------------------------------------------------------
// $(function() {
//   var windowWidth = $(window).width();    //windowの幅を取得して、変数(windowWidth)に代入する。　　]  初期設定
//   var headerHight = 75;   //変数(header)にヘッダーの高さを代入する                                ]
//
//   $('header a').click(function() {   //クリックイベント（トリガー：header内のaタグ）
//     var speed = 500;   //速度設定
//     var href = $(this).attr('href');   //クリックされたaタグのリンク先を取得して、変数に格納する。
//     var target = $(href == "#" ? 'html' : href);   //hrefの値が"#"のとき、文字列'html'になる。それ以外のとき、変数hrefになる。
//     var position = $(target).offset().top-headerHight;   //ヘッダーの底（topからheaderHightを引いたポジション）からターゲットの距離を取得して、変数targetに格納する。
//
//     $('body,html').animate({'scrollTop':position}, speed, 'swing');    //変数positionの距離分をトップからスクロールする。
//
//     return false;   //プログラム処理終了
//   })
// })



//ハンバーガーメニュー
//--------------------------------------------------------


(function($) {
    $(function () {
      $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
      });
    });
})(jQuery);
