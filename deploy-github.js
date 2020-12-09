const ghpages = require('gh-pages')
const fs = require('fs')

const path = './dist/level-eight-cloud-drives'
const url = 'enginelin.com'
fs.writeFile(path + '/CNAME', url, function (err) {
  if (err) {
    console.log(err)
  } else {
    ghpages.publish(
      'dist/level-eight-cloud-drives',
      {
        branch: 'doc',
        repo: 'https://github.com/EngineLin/hex-work-level-eight-cloud-drives',
      },
      () => {
        console.log('================')
        console.log('Deploy Complete!')
        console.log('================')
      }
    )
  }
})
