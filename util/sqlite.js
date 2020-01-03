//HANDLES ALL SQLITE3 FUNCTIONALITY
const sqlite3 = require('sqlite3').verbose();

module.exports = {
    //Sets up local SQlite DB and returns it
    setup: function () {
        let db = new sqlite3.Database('./leosite.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the local sqlite database.');
        });
        return db;
    },
    //Async 'returns' song of week from sqlite DB
    getSong: function (db, fn) {
        let sql = `SELECT URL url FROM sotw ORDER BY ID DESC LIMIT 1`;
        db.serialize(() => {
            db.each(sql, (err, row) => {
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
        let sql = `SELECT URL url FROM votw ORDER BY ID DESC LIMIT 1`;
        db.serialize(() => {
            db.each(sql, (err, row) => {
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
