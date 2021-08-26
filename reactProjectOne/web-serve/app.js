const express = require('express');

const expressStaticGzip = require('express-static-gzip');
const app = express();

app.use(
  expressStaticGzip('../', {
    maxAge: '3d',
    setHeaders: setCustomCacheControl,
  })
);

function setCustomCacheControl (res, currentFilePath, stat) {
  if (currentFilePath.match(/\index\.html$/)) {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'no-cache');
  }
}

app.use(express.static('../dist'));


app.listen(9901, (req, res) => {
  console.log(req, res);
  console.log('启动成功，请通过localhost:9901访问');
});

