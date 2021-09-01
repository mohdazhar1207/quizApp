let express = require("express");
let app = express();

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, , authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}`));

let { getConnection } = require("./modDB.js");

app.get("/quiz", function(req,res){
    let connection = getConnection();
    let sql = "SELECT * FROM quiz";
    connection.query(sql, function(err, result){
        if(err) {
            console.log(err);
            res.status(404).send("Error in fetching data", err);
        }
        else res.send(result);
    });
});

app.post("/quiz", function(req,res){
    let body = req.body;
    let connection = getConnection();
    let sql = "INSERT INTO quiz(name,time,date,errorCount) VALUES(?,?,?,?)";
    connection.query(sql,[body.name,body.time,body.date,body.errorCount],function(err,result){
        if(err){
            res.status(404).send("Error in fetching data", err);
        }
        else{
            res.send(`Post success. Id of new Employee is ${result.insertId}`);
        }
    });
});