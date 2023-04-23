const express = require('express');
const newsController = require('./controller/newsController');

const app = express();

// Define routes
app.get('/news', newsController.getNewsArticles);

app.listen(3000, () => {
  console.log('BNRY backend is running');
});