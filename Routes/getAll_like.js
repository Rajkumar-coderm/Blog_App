module.exports=(app,knex)=>{
    app.get('/getlike_dislike',(req,res)=>{
        knex.select('*').from('like_dislike').then((data)=>{
            res.send(data)
        });
    });
    app.get('/getuser',(req,res)=>{
        knex.select('*').from('users').then((data)=>{
            res.send(data)
        });
    });

    app.get("/getpost",(req,res)=>{
        knex.select("*").from("user_post").then((data)=>{
            res.send(data)
        })
    })

}