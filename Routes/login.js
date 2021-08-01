 const {generateAccessToken}=require('../auth/jwt')
module.exports=(app,knex)=>{
    app.get("/login",(req,res)=>{
        if (req.body.email==undefined || req.body.password==undefined){
            res.send({message:"user name or password undefind"})
        }else{
            knex.select("*").from('users').where('email',req.body.email).then((data)=>{
                console.log("asdfghjk");
                console.log(data);
                if (data[0].password===req.body.password){
                    const user={id:data[0].id,name:data[0].name,email:data[0].email}
                    const token=generateAccessToken(user)
                    console.log('successfull login')
                    res.cookie("token",token)
                    res.send({message:"login succesfuly"});
                }else{
                    res.send({message:"Invalid password or Email"})
                }
            
            }).then((err)=>{
                res.send(err)
            })
        }
    })
}