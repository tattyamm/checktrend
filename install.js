
// ホスト型アプリのインストール
  function install(ev) {
    // マニフェスト URL を定義
    // アプリをインストール
    if(ev=="install"){
      var manifest_url = "http://tattyamm.github.io/checktrend/manifest.webapp";
      var myapp = navigator.mozApps.install(manifest_url);
      console.log("install");
    }
    if(ev=="installPackage"){
      var manifest_url = "http://tattyamm.github.io/checktrend/package.webapp";
      var myapp = navigator.mozApps.installPackage(manifest_url);
      console.log("installPackage");
    }
    myapp.onsuccess = function(data) {
      // アプリがインストールされたらボタンを削除
      this.parentNode.removeChild(this);
    };
    myapp.onerror = function() {
      // アプリがインストールされなかった場合、this.error.name に情報が含まれています
      console.log('インストール失敗、エラー: ' + this.error.name);
     };
  };
