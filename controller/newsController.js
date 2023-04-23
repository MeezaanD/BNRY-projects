const newsModel = require('../model/news');

exports.getNewsArticles = async (req, res, next) => {
  try {
    const articles = await newsModel.getNewsArticles();
    res.render('news', { articles });
  } catch (error) {
    next(error);
  }
};
