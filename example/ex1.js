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
// let limit = "20"
connection.query('select article,color from shirts limit 20' ,
// [limit] , 
(error, res , field)=>{
    console.log(res)
})

//2.문제

// let insert_query = 'insert into shirts(article, color, shirt_size, last_worn) \
//   values ("polo shirt","Purple","size M","50")'

//   connection.query(insert_query,(error,result)=>{
//         console.log(result)
//     }
//     )
//3.문제

// query = 'select * from shirts where shirt_size = "M";'

// connection.query(query , function(error , results , fields){
                  
    
//     //console.log(results) 
//       for(let i  = 0 ; i < results.length; i++){
//           console.log(results[i].shirt_id)
//       }
//         })
 query = 'select * from shirts where shirt_size = "M"'

connection.query(query,(error, res, field)=>{
    for(let i =0; i<res.length; i++){
        console.log(res[i].shirt_id)
    }
})

// connection.query('select * from shirts where shirt_size = "M" ' ,

// (error, res , field)=>{
//     console.log(res)
// })

//4.문제

// let update_query = 'update shirts set shirt_size ="L" where article = "polo shirt"'
//   connection.query(update_query,(error,result)=>{
//         console.log(result)
//     }
//     )

//5.문제

// let update_query = 'update shirts set last_worn =0 where last_worn = 15'
//   connection.query(update_query,(error,result)=>{
//         console.log(result)
//     }
//     )

//6.문제
// let update_query = 'update shirts set shirt_size ="XS" ,color = "off white" where color = "Orange"'
//   connection.query(update_query,(error,result)=>{
//         console.log(result)
//     }
//     )

//7.문제 

//  let delete_query = 'delete from shirts where last_worn = 200'
//  connection.query(delete_query,(error,result)=>{
//             console.log(result)
//         }
//         )

//  let delete_query = 'delete from shirts where article ="tank top"'
//  connection.query(delete_query,(error,result)=>{
//             console.log(result)
//         }
//         )

connection.end()
