//HANDLES API CALLS TO DEV.to for articles of the week section
const fetch = require("node-fetch");
const url = "https://dev.to/api/articles";
const tagParam = "?tag=javascript"; //for JS articles
const topParam = "&top=3"; //for top articles in past 3 days

module.exports = {
  grabArticle: async () => {
    let data, jsonData;
    try {
      data = await fetch(`${url}${tagParam}${topParam}`).then(checkStatus);
      jsonData = await data.json();
    } catch (error) {
      console.log(JSON.stringify(error));
    }

    return jsonData;
  },
  convertArticle: (prom) => {
    let articleInfo = [];
    prom.then(result => {
      articleInfo.push(result[0].url);
      articleInfo.push(result[0].title);

      (result[0].cover_image == undefined) ? articleInfo.push('./images/no-img.jpeg') : articleInfo.push(result[0].cover_image.toString());

      articleInfo.push(result[0].positive_reactions_count);
    }).catch((error) => {
      console.log(JSON.stringify(error));
    });
    return articleInfo;
  }

};

function checkStatus(res) {
  if (res.ok) {
    return res;
  } else {
    throw Error(res.statusText);
  }
}
