// document.addEventListener('DOMContentLoaded', function () {
//     //タイマーID
//     let timerID;
//     function print() {

//         document.getElementById('result').innerHTML += '3秒経過しました。<br>';
//     }

//     //3秒毎にprint()を実行。
//     timerID = setInterval(print, 3000);
//     //「スタート」ボタン押下時に呼び出される関数。
//     // function start() {
//     // }

//     //「キャンセル」ボタン押下時に呼び出される関数。
//     function cansel() {
//         //タイマーを終了する。
//         window.clearInterval(timerID);
//         //キャンセルした旨を画面に表示する。
//         document.getElementById('result').innerHTML += "キャンセルされました。<br>";
//     }

//     //イベントリスナー登録（スタート）
//     document.getElementById('start').addEventListener('click', start, false);

//     //イベントリスナー登録（キャンセル）
//     document.getElementById('cansel').addEventListener('click', cansel, false);
// }, false);