const parseNewsArticles = (newsResponseJson) => {
  if(newsResponseJson === null || newsResponseJson === undefined) {
    return [];
  }
  let articleList = [];
  let parsedArticleList = [];
  articleList = newsResponseJson.articles;
  if(articleList === null || articleList == undefined) {
    return [];
  }
  for(let i = 0; i < articleList.length; i++) {
    let articleJson = articleList[i];
    parsedArticleList[i] = {
      title: articleJson.title,
      text: articleJson.description,
      footer: articleJson.source.name,
      url: articleJson.url
    }
  }
  return parsedArticleList;
};

export default parseNewsArticles;
