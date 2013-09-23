
// ホスト型アプリのインストール
(function(){

  function install(ev) {
    ev.preventDefault();
    // マニフェスト URL を定義
    var manifest_url = "http://tattyamm.github.io/checktrend/manifest.webapp";
    // アプリをインストール
    var myapp = navigator.mozApps.install(manifest_url);
    myapp.onsuccess = function(data) {
      // アプリがインストールされたらボタンを削除
      this.parentNode.removeChild(this);
    };
    myapp.onerror = function() {
      // アプリがインストールされなかった場合、this.error.name に情報が含まれています
      console.log('インストール失敗、エラー: ' + this.error.name);
     };
  };
  // ボタンへの参照を取得し、クリック時に install() を呼び出します
  var button = document.getElementById('install');
  button.addEventListener('click', install, false);
 }


  function installPackage(ev) {
    ev.preventDefault();
    // マニフェスト URL を定義
    var manifest_url = "http://tattyamm.github.io/checktrend/package.webapp";
    // アプリをインストール
    var myapp = navigator.mozApps.installPackage(manifest_url);
    myapp.onsuccess = function(data) {
      // アプリがインストールされたらボタンを削除
      this.parentNode.removeChild(this);
    };
    myapp.onerror = function() {
      // アプリがインストールされなかった場合、this.error.name に情報が含まれています
      console.log('インストール失敗、エラー: ' + this.error.name);
     };
  };
  // ボタンへの参照を取得し、クリック時に install() を呼び出します
  var button = document.getElementById('install');
  button.addEventListener('click', install, false);
 }

)();
