const {MongoClient} = require("mongodb")

const client = new MongoClient('mongodb+srv://arda:arda1.>@cluster0.vvysx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const start = async () => {
try{

    await client.connect()
    console.log("Database connected")
} catch (error)
{}
}

start()
