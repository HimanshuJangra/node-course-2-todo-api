const {
    MongoClient,
    ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {

    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");

    // db.collection("Todos").find(/*{completed: false*/{
    //     _id: new ObjectID("5c276d9e7a07e2322c336efe")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection("Users").find({name: "Himanshu"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });



    //client.close();
});
