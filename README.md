# ClamAVをNode.jsから利用する

## インストール
### ClamAV
* [Clam AntiVirusをAmazon Linux2へ導入する
](https://blog.katsubemakito.net/aws/clam-antivirus-on-amazonlinux2)

### Node.js
LTS版(v14.17.0)で動作確認をしています。

* [Node.js](https://nodejs.org/ja/)

### プログラム
このリポジトリのコードを取得します。
```shellsession
$ git clone https://github.com/katsube/clamscan-js.git
$ cd clamscan-js
$ npm install
```

## 実行方法
### 設定
各スクリプトの`NodeClam().init()`で指定している値を環境に合わせて設定してください。

### 実行する
コマンド版
```shellsession
$ node check_clamscan.js
```

デーモン版
```shellsession
$ node check_clamdscan.js
```

## 参考
* [clamscan - npm](https://www.npmjs.com/package/clamscan)