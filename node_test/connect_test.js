// (require)== mysql라이브러리를 사용할 것이다 해당 파일 안에서만
//변수로 항상 저장을 시켜야 한다
// 이름도 꼭 통일 시켜야한다 (mysql)
let mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host : 'database-1.ckd17nv1s0bt.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'lhj0531'
} 
)

connection.query('select count(*) from memo' , 
function(error, res , field){
    console.log(res)
})
// 중요!! 안넣어주면 빠져나오질 못 함
connection.end()