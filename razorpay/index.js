const express= require('express')
const cors=require('cors')
const app=express()
const Razorpay = require('razorpay');
var razor = new Razorpay({
    key_id: "rzp_test_jjUXc8oij8CaLy",
    key_secret: "9FZhiat5q7dADleln6cpzz5R",
  });


app.listen(3000)
app.use(cors())

app.get('/order',async (req,res)=>{
    const data = await razor.orders.create({
  "amount": (400*100),
  "currency": "INR",
  "receipt": "receipt_id"+Date.now()
 
})
res.json({
    amount:data.amount,
    orderId:data.id
    }
)
})