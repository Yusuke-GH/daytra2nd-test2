

// スクロール
// --------------------------------------------------------
$(function() {
  var windowWidth = $(window).width();    //windowの幅を取得して、変数(windowWidth)に代入する。　　]  初期設定
  var headerHight = 75;   //変数(header)にヘッダーの高さを代入する                                ]

  $('header a').click(function() {   //クリックイベント（トリガー：header内のaタグ）
    var speed = 500;   //速度設定
    var href = $(this).attr('href');   //クリックされたaタグのリンク先を取得して、変数に格納する。
    var target = $(href == "#" ? 'html' : href);   //hrefの値が"#"のとき、文字列'html'になる。それ以外のとき、変数hrefになる。
    var position = $(target).offset().top-headerHight;   //ヘッダーの底（topからheaderHightを引いたポジション）からターゲットの距離を取得して、変数targetに格納する。

    $('body,html').animate({'scrollTop':position}, speed, 'swing');    //変数positionの距離分をトップからスクロールする。

    return false;   //プログラム処理終了
  })
})


//ハンバーガーメニュー
//--------------------------------------------------------
//＜ ハンバーガーメニューのクリックに伴い、クラスactiveの付与・除去を切り替える ＞
$(function() {
  $('.hamburger-menu-btn').click(function() {    //ハンバーガーメニューがクリックされたとき、イベントを実行する。
    $(this).toggleClass('active');    //ハンバーガーメニューにクラスactiveを付与 or 除去

    if ($(this).hasClass('active')) {   //条件式：ハンバーガーメニューがクラスactiveを持っているか？
      $('#global-navigation').addClass('active');   //true : グローバルナビゲーションにクラスactiveを付加する。
        $('img.logo, .main-nav li:not(:last-of-type)').fadeOut(100);    //ハンバーガーメニュー以外の要素をフェードアウト
        $('header').css('box-shadow', 'none');    //ヘッダーの影除去
    } else {
      $('#global-navigation').removeClass('active');    //false : グローバルナビゲーションから、クラスactiveを除去
        $('img.logo, .main-nav li:not(:last-of-type)').fadeIn(1000);    //ハンバーガーメニュー以外の要素をフェードイン
        $('header').css('box-shadow', 'rgba(24, 24, 24, 0.08) 0px 2px 6px');    //ヘッダーの影再出現
    }
  });
});
