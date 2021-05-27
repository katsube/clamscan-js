/**
 * clamscanで感染チェック
 *
 */

const path = require('path')
const NodeClam = require('clamscan')

//-------------------------------------------
// 初期化
//-------------------------------------------
const ClamScan = new NodeClam().init({
  clamscan: {
    path: '/usr/local/bin/clamscan',
    db: '/usr/local/var/lib/clamav'
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
  });