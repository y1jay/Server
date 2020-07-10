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

connection.query('select concat(author_fname," ",author_lname) as "fullname"  from books' ,

(error, res , field)=>{
    console.log(res)
})

//2.문제

connection.query('select concat(substring(title,1,10),"...") as "short title" from books' ,

(error, res , field)=>{
    console.log(res)
})

//3.문제 

connection.query('select concat(title," was"," released in ",released_year) as "blurd" from books' ,

(error, res , field)=>{
    console.log(res)
})

//4.문제 

connection.query('select title,char_length(title) as "character count" from books' ,

(error, res , field)=>{
    console.log(res)
})

//5.문제 


// let insert_query = 'insert into books(title, author_fname, author_lname, released_year, stock_quantity, pages) \
//   values ("10% Happier","Dan","Harris",2014,29,256),\
//   ("fake_book","Freida", "Harris",2001,287,428),\
//   ("Lincoln In The Bardo","George","Saunders",2017,1000,367)'

//   connection.query(insert_query,(error,result)=>{
//         console.log(result)
//     }
//     )

//6.문제 

connection.query('select title,released_year from books order by  released_year desc limit 5' ,

(error, res , field)=>{
    console.log(res)
})

//7.문제 

connection.query('select title, pages from books order by pages desc limit 1' ,

(error, res , field)=>{
    console.log(res)
})

//8.문제 

connection.query('select count(*) as count from books where title like "%the%"' ,

(error, res , field)=>{
    console.log(res)
})

//9.문제 

connection.query('select released_year, count(*) from books group by released_year' ,

(error, res , field)=>{
    console.log(res)
})

//10.문제 

connection.query('select released_year, count(*) as "#books",format(avg(pages),4) as avg from books group by released_year order by released_year asc' ,

(error, res , field)=>{
    console.log(res)
})

connection.end()

