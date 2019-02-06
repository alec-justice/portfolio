var mysql = require('mysql');
var connection  = mysql.createConnection({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'admin',
  password        : 'BeGre@t2019',
  database        : 'portfolio_db'
});

connection.connect(function(err){
    if (err) {
        return console.error('error: ' + err.message);
    }

    let createTodos = `create table if not exists todos(
        id int primary key auto_increment,
        title varchar(255)not null,
        completed tinyint(1) not null default 0
    )`;
});