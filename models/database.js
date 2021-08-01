const env=require("dotenv").config()

const knex=require("knex")({
    client:"mysql",
    connection:{
        host:process.env.db_host,
        user:process.env.db_user,
        password:process.env.db_pass,
        database:process.env.db_name
    }
})

// create a table in users  
knex.schema.createTable('users',(Table)=>{
    Table.increments('id').primary();
    Table.string('name')
    Table.string('email')
    Table.string('password')
}).then((data)=>{
    console.log("users Table create succesfully")
}).catch((err)=>{
console.log('users Table already exit in Databases');
})

knex.schema.createTable('user_post', function(table){
    table.increments('id').primary();
    table.integer('user_id');
    table.string('text');
    table.string('description');
    table.date('Date');
 }).then(() => {
    console.log("User_post table created successfully....")
 }).catch(() => {
    console.log("user_post table is already exists!");
})

knex.schema.createTable('like_dislike',(table)=>{
    table.increments('id').primary();
    table.integer('user_id');
    table.boolean('like');
    table.boolean('dislike');
 }).then(() => {
    console.log("like_dislike table created successfully....")
 }).catch(() => {
    console.log("like_dislike table is already exists!");
})

module.exports=knex;