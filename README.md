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

#### Amazon Linux2へインストールした際の一例
```javascript
const ClamScan = new NodeClam().init({
  clamscan: {
    path: '/usr/bin/clamscan',
    db: '/var/lib/clamav'
  }
})
```
```javascript
const ClamScan = new NodeClam().init({
  clamdscan: {
    socket: '/run/clamd.scan/clamd.sock',
    host: '127.0.0.1',
    port: 3310,
    path: '/usr/bin/clamdscan',
    config_file: '/etc/clamd.d/scan.conf'
  }
})
```

### 実行する
コマンド版
```shellsession
$ node check_clamscan.js
```

デーモン版。
```shellsession
$ sudo node check_clamdscan.js
```

## 参考
* [clamscan - npm](https://www.npmjs.com/package/clamscan)