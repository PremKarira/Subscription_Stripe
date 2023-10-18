const express = require('express');
const app = express();
const port = 8000;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use('/', require('./routes/index'));
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
