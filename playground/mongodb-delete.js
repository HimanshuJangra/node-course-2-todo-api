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

    //detete many
    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection("Todos").deleteOne({
    //     text: "Eat lunch"
    // }).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    // db.collection("Todos").findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Users").deleteMany({name: "Himanshu"});

    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5c2794f47a07e2322c336f2e")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    //client.close();
});
