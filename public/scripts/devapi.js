//HANDLES API CALLS TO DEV.to for articles of the week section
const fetch = require('node-fetch');
const url = 'https://dev.to/api/articles';
const tagParam = '?tag=javascript'; //for JS articles
const topParam = '&top=7'; //for top articles in past 7 days
module.exports = {
    grabArticle: function (fn) {
        fetch(`${url}${tagParam}${topParam}`)
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
            });
    }
    // checkStatus: function (res) {
    //     if (res.ok) { // res.status >= 200 && res.status < 300
    //         return res;
    //     } else {
    //         throw MyCustomError(res.statusText);
    //     }
    // }
}