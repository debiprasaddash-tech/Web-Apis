const express= require('express');
const app=express();
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const authRoute= require('./routes/auth')
const productRoute=require('./routes/product')
const categoryRoute=require('./routes/category')
const cartRoute=require('./routes/cart')
const orderRoute=require('./routes/order')


const cors=require('cors')

dotenv.config();

app.use(cors())
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true},()=>{})

app.use(express.json());


//route middlewares
app.use('/user',authRoute)
app.use('/category',categoryRoute)
app.use('/product', productRoute)
app.use('/cart',cartRoute)
app.use('/order',orderRoute)



app.listen(8005,()=>console.log("http://localhost:8005/user"));