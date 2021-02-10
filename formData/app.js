const express=require('express');
const app=express();
// this is for post request

app.set('views engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/form',(req,res)=>{
    console.log(req.body);
    
    res.render('data.ejs')
})


app.listen(3000,()=>{
    
    console.log('Server 3000 is Here///');
    
})