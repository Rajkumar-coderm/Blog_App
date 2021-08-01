const { authenticateToken } = require('../auth/jwt');
module.exports=(app,knex)=>{
    app.get('/like_dislike',authenticateToken,(req,res)=>{
        knex.select("*").from('user_post').then((data)=>{
            const userdata1={
                user_id:req.data.id,
                like:req.body.like,
                dislike:req.body.dislike
            }
            if (req.body.like==true){
                knex('like_dislike').insert(userdata1).then((data)=>{
                    res.send({message:"like succesfully"})
                })
            }else if(req.body.like==false){
                knex('like_dislike').insert(userdata1).then((data)=>{
                    console.log(data);
                    res.send({message:"dislike succesfully"})
                });


            }
        });
    });
}