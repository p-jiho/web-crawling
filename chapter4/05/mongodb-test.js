// levelDB를 대신하여 mongoDB 사용 참고 : https://javafa.gitbooks.io/nodejs_server_basic/content/chapter12.html


var mongoose = require('mongoose');
const { stringify } = require('querystring');

mongoose.connect('mongodb://localhost:27017/testDB');

var db = mongoose.connection;

db.on('error', function(){
    console.log('Connection Failed!');
});

db.once('open', function() {
    console.log('Connected!');

});

var student = mongoose.Schema({
    name : "string",
    color : "string"
});

var Student = mongoose.model("Schema", student);

var newstudent = new Student({name : "Apple", color : "red"});

newstudent.save(function(error, data){
    if(error){
        console.log(error);
    } else{
        console.log("save");
    }
    insert();
});


function insert(){
    Student.insertMany({name:"Banana", color:"yellow"},function(error, res){
    if(error) {console.log(error);
    } else {
        console.log("insert");
        find();
    }
});
}

function find(){Student.find({},function(error, student){
    if(error){
        console.log(error);
    } else{
        console.log(student);
        remove();
    }
});
}

function remove(){
    Student.deleteMany({},function(error, res){
        if(error){
            console.log(error);
        }else{
            console.log("remove");
            Student.find({},function(error,res){
                if(error){console.log(error)};
                db.close();
            });
        }
    })
}

