const express = require("express");
const router = express.Router();
const path = require("path");
const sqlite = require("./sqlite");
const devApi = require("./devapi");

// If I need middleware for this specific router, use here
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

//Setup DB and retrieve info
let songUrl, videoUrl;
let db = sqlite.setup();
sqlite.getSong(db, (song) => {
  songUrl = song;
});
sqlite.getVideo(db, (vid) => {
  videoUrl = vid;
});
sqlite.closeDB(db);

//Dev API trending article pull
let articleInfo = devApi.convertArticle(devApi.grabArticle());

//Index route
router.get("/", (req, res) => {
  res.render(
    "index",
    {
      songUrl: `${songUrl}`,
      videoUrl: `${videoUrl}`,
      articleTitle: `${articleInfo[1]}`,
      articleImageUrl: `${articleInfo[2]}`,
      articleUrl: `${articleInfo[0]}`,
      articleLikes: `${articleInfo[3]}`
    },
    (err, html) => {
      res.set("Cache-Control", ["public", "max-age=86400"]);
      res.send(html);
    }
  );
});
//CV Route
router.get("/resume", (req, res) => {
  res.render("resume", (err, html) => {
    res.set("Cache-Control", ["public", "max-age=86400"]);
    res.send(html);
  });
});
//CV PDF Download Route
router.get("/resume/:file(*)", (req, res) => {
  let file = req.params.file;
  let fileLocation = path.join("./public/images", file);
  res.download(fileLocation, file, (err) => {
    // console.log(`Error downloading PDF file from ${fileLocation}`);
    res.render("error", (err, html) => {
      res.status(404);
      res.send(html);
    });
  });
});
//Illegal calls
router.all("*", (req, res) => {
  res.render("error", (err, html) => {
    res.status(404);
    res.send(html);
  });
});

module.exports = router;
