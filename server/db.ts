const Pool = require("pg").Pool;

const pool = new Pool({
    user: "perl",
    password: "myp",
    host: "localhost",
    post: 5432,
    database: "perntasks"
});

module.exports = pool;
