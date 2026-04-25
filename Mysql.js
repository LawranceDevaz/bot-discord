const MySQL = require("mysql2");
const config = require("./config.json")

let MysqlMerpati = MySQL.createPool(config.mysql)
MysqlMerpati.getConnection((err, connect) => {
    if(err) {
        console.log("\x1b[36m[MYSQL]: \x1b[0mDatabase MySql tidak dapat terhubung!")
        console.log("\x1b[31m[ERROR]: \x1b[0m", err.message)
        return;
    }
    if(connect) {
        console.log("\x1b[36m[MYSQL]: \x1b[0mDatabase MySql telah berhasil terhubung!");
        connect.release();
    }
})

module.exports = MysqlMerpati;
