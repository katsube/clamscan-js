const NodeClam = require('clamscan');
const ClamScan = new NodeClam().init({
  clamscan: {
    path: '/usr/local/bin/clamscan',
    db: '/usr/local/var/lib/clamav'
  }
});

ClamScan
  .then(async clamscan => {
    try {
        const {is_infected, file, viruses} = await clamscan.is_infected('/Users/katsube/Desktop/E2A0ilGVUAAqtC1.png');

        if (is_infected){
          console.log(`${file} は ${viruses} に感染しています`);
        }
        else{
          console.log(`${file} は健康です`);
        }
    }
    catch (err) {
      console.log(`[ERROR1] ${err}`)
    }
  })
  .catch(err => {
    console.log(`[ERROR2] ${err}`)
  });