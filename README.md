# jQuery
## https://kanaitakeshi.github.io/jQuery/

- jQueryの準備  
  ①jQueryライブラリの読み込み  
  ②jQueryファイルの読み込み  
  ③jQueryの型  
  <br>
- モーダルを表示する（ログインボタン（1つ））<br>
  ①モーダルをCSSで非表示にする<br>
  ②ログインボタンにclickイベントを設定  
  ③clickイベントでモーダルを表示  
- モーダルを表示する（新規登録ボタン（2つ））  
  ①新規登録のボタンに共通のクラス名を指定  
  ②fadeInメソッドで新規登録のモーダルを表示する
- モーダルを隠す（閉じるボタン）  
  ①閉じるボタンにclickイベントを設定  
  ②fadeOutメソッドでモーダルを隠す  
  <br>
- hover機能をつくる  
  ①class名「lesson-hover」を追加  
  ②hoverイベントを設定  
- hover機能の概要  
  ①text-activeがついていない状態  
  ②text-activeがついている状態　　
- addClassメソッド　　
- removeClassメソッド  
  <br>
- アコーディオン機能の概要  
  ①答えの部分はCSSで非表示にする  
  ②3つの質問部分には同一のclass名を付与  
  ③それらのclickイベントを作る  
- hasClassメソッド
- if文を用いた開閉操作  
  質問をクリックした時に、  
  ①openクラスを持っていればopenクラスを外し、答えを隠す  
  ②openクラスを持っていいなければopenクラスを付け、答えを表示する  
- アコーディオンのスライド操作  
  ①if文がtrueの時、答えの部分はslideUpメソッドを用いて隠し、「-」記号は「+」記号に書き換える    
  ②if文がfalseの時は、答えをslideDownメソッドで表示し、「+」記号は「-」記号に書き換える  
