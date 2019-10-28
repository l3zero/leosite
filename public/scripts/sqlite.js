//HANDLES ALL SQLITE3 FUNCTIONALITY
const sqlite3 = require('sqlite3').verbose();
// var jsdoc = require('jsdoc'); //Change comments to JSDoc syntax
module.exports = {
    //Sets up local SQlite DB and returns it
    setup: function () {
        let db = new sqlite3.Database('./ly_votw.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the local sqlite database.');
        });
        return db;
    },
    //Async 'returns' song of week from sqlite DB
    getSong: function (db, fn) {
        let sql = `SELECT URL url FROM sotw WHERE Title = ?`;
        db.serialize(() => {
            db.each(sql, ['Tycho-Japan'], (err, row) => {
                if (err) {
                    console.error(err.message);
                }
                console.log("Got song from local DB");
                fn(row.url);
            });
        });
    },
    //Async 'returns' video of week from sqlite DB
    getVideo: function (db, fn) {
        let sql = `SELECT URL url FROM votw WHERE Title = ?`;
        db.serialize(() => {
            db.each(sql, ['Dog-Thing'], (err, row) => {
                if (err) {
                    console.error(err.message);
                }
                console.log("Got video from local DB");

                fn(row.url);
            });
        });
    },
    closeDB: function(db) {
        db.close((err) => {
            if (err) {
              console.error(err.message);
            }
            console.log('Closed the database connection.');
          });
    }
}