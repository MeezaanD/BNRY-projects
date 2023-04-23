const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const NEWS_API_KEY = '452d05bf6c4d4555874a25c54fd797fa';

app.get('/news', (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`;
  axios.get(url)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error fetching news');
    });
});

app.use((req, res, next)=> {
  req.header('Access-Control-Allow-Origin', 'http://localhost:8080/')
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next();
});

app.listen(port, () => {
  console.log(`BNRY backend is running on port ${port}`);
});