const express=require('express')
const db=require('../db')
const utils=require('../utils')
const router=express.Router()

router.get('/',(request,response)=>
{
    const connection=db.connect();
    const statement=`select id,name,address from Employee`
      connection.query(statement,(error,data)=>{
          connection.end()
          const result=utils.createResult(error,data)
         response.send(result)
      })
})
router.post('/',(request,response)=>
{ 
    const {name,address}=request.body
    const connection=db.connect();
    const statement=`insert into Employee (name,address) values('${name}','${address}')`
      connection.query(statement,(error,data)=>{
          connection.end()
          const result=utils.createResult(error,data)
         response.send(result)
      })
})
router.put('/:id',(request,response)=>
{
     const {address}=request.body;
    const connection=db.connect();
    const statement=`update  Employee set address='${address}' where id=${request.params.id}`
      connection.query(statement,(error,data)=>{
          connection.end()
          const result=utils.createResult(error,data)
         response.send(result)
      })
})
router.delete('/:id',(request,response)=>
{
     
    const connection=db.connect();
    const statement=`delete from Employee where id=${request.params.id}`
      connection.query(statement,(error,data)=>{
          connection.end()
          const result=utils.createResult(error,data)
         response.send(result)
      })
})
module.exports =router