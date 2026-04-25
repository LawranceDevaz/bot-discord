const MySQL = require("mysql2"); // Pastikan sudah install mysql2
const config = require("./config.json");

let MysqlMerpati = MySQL.createPool({
    ...config.mysql,
    ssl: {
        rejectUnauthorized: false
    }
});

MysqlMerpati.getConnection((err, connect) => {
    if (connect) {
        console.log("\x1b[36m[MYSQL]: \x1b[0mDatabase MySql telah berhasil terhubung!");
        connect.release();
        return;
    }
    console.log("\x1b[31m[MYSQL ERROR]: \x1b[0m" + (err ? err.message : "Tidak dapat terhubung!"));
});

module.exports = MysqlMerpati;
