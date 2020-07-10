let mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host : 'database-1.ckd17nv1s0bt.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'lhj0531'
} 
)
//1.문제

connection.query('select email, created_at  from users limit 30' ,

(error, res , field)=>{
    console.log(res)
})

//2.문제

connection.query('select email,created_at  from users order by created_at asc limit 1' ,

(error, res , field)=>{
    console.log(res)
})
//3.문제
connection.query('select monthname(created_at) as "month",count(*) as "count"\
from users group by month(created_at)  order by count desc' ,

(error, res , field)=>{
    console.log(res)
})

//4.문제

connection.query('select*from users where email like "%yahoo%" order by created_at desc limit 20' ,

(error, res , field)=>{
    console.log(res)
})

//5.문제

connection.query('select count(*)as "야후 사용자" from users where email like "%yahoo%"' ,

(error, res , field)=>{
    console.log(res)
})

connection.end()
