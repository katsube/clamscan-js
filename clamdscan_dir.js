/**
 * clamdscanで感染チェック（ディレクトリ）
 *
 */
const path = require('path')
const NodeClam = require('clamscan')

//-------------------------------------------
// 初期化
//-------------------------------------------
const ClamScan = new NodeClam().init({
  clamdscan: {
    socket: '/tmp/clamd.socket',
    host: '127.0.0.1',
    port: 3310,
    path: '/bin/clamdscan',
    config_file: '/usr/local/etc/clamav/clamd.conf'
  }
})

//-------------------------------------------
// ウイルススキャン
//-------------------------------------------
ClamScan
  .then( clamscan => {
    try {
      const target = path.resolve('sample/')
      clamscan.scan_dir(target, (err, good_files, bad_files, viruses) => {
        // 実行時エラー
        if (err){
          console.log(err)
        }
        // 感染が見つかった
        else if (bad_files.length > 0) {
          console.log(`${viruses.join(',')}に感染しています`)
          console.log(bad_files.join('\n'))
        }
        // 感染なし
        else{
          console.log('健康です')
        }
      })
    }
    catch(err) {
      console.log(`[ERROR1] ${err}`)
    }
  })
  .catch(err => {
    console.log(`[ERROR2] ${err}`)
  })