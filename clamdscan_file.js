/**
 * clamdscanで感染チェック（ファイル）
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
  .then(async clamscan => {
    try {
      // const target = path.resolve('sample/arupaka.png')
      const target = path.resolve('sample/eicar.com')
      const {is_infected, file, viruses} = await clamscan.is_infected(target)

      // 感染チェック
      if (is_infected){
        console.log(`${file} は ${viruses} に感染しています`)
      }
      else{
        console.log(`${file} は健康です`)
      }
    }
    catch (err) {
      console.log(`[ERROR1] ${err}`)
    }
  })
  .catch(err => {
    console.log(`[ERROR2] ${err}`)
  })