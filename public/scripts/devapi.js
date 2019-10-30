//HANDLES API CALLS TO DEV.to for articles of the week section
const fetch = require('node-fetch');
const url = 'https://dev.to/api/articles';
const tagParam = '?tag=javascript'; //for JS articles
const topParam = '&top=7'; //for top articles in past 7 days
module.exports = {
    grabArticle: function (fn) {
        fetch(`${url}${tagParam}${topParam}`)
            .then(checkStatus)
            .then((res) => res.json())
            .then((json) => {
                let articleInfo = [];
                articleInfo.push(json[0].url);
                articleInfo.push(json[0].title);
                articleInfo.push(json[0].cover_image.toString());
                articleInfo.push(json[0].positive_reactions_count);
                fn(articleInfo);
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
                let articleInfo = [];
                articleInfo.push("There has been an error retrieving from API. See console for more details");
                articleInfo.push("There has been an error retrieving from API. See console for more details");
                articleInfo.push("There has been an error retrieving from API. See console for more details");
                articleInfo.push("There has been an error retrieving from API. See console for more details");
                fn(articleInfo);
            });
    }
  
}

function checkStatus(res) {
    if (res.ok) { // res.status >= 200 && res.status < 300
        return res;
    } else {
        throw Error(res.statusText);
    }
}