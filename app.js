const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1><div class="secret" style="display: none;">HcUy6Re2LLBRtj</div></h1>')
})

app.listen(3000, () => console.log('Listening on port 3000!'))
