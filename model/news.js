const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('452d05bf6c4d4555874a25c54fd797fa');

exports.getNewsArticles = async () => {
  try {
    const response = await newsapi.v2.topHeadlines({
      sources: 'bbc-news,the-verge',
      q: 'bitcoin',
      category: 'business',
      language: 'en',
      country: 'us'
    });
    return response.articles;
  } catch (error) {
    throw new Error(error);
  }
};