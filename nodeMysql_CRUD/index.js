const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});
// connect to mysql
db.connect(err=>{
    if(err) throw err;
    console.log('mysql connected');
});

const app = express()

//connect to database
app.get('/createdb', (req, res)=>{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, err=>{
        if(err) throw err;
        res.send('DATABASE CREATED !')
    });
})

//create table

app.get('/createemployee', (req, res)=>{
    let sql = 'CREATE TABLE employee(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), designation VARCHAR(255))';
    db.query(sql, err=>{
        if(err) throw err;
        res.send('Employee TABLE CREATED!')
    });
})

//insert employee

app.get('/employee1', (req, res)=>{
    let post = {name: "abcs", designation:"officer"}
    let sql = 'INSERT INTO employee SET ?';
    db.query(sql, post, (err, results)=>{
        if(err) throw err;
        console.log(results);
        res.send('Employee details inserted!')
    });
});

//select employee

app.get('/getemployee', (req, res)=>{
    let sql = 'SELECT * FROM employee';
    db.query(sql, (err, results)=>{
        if(err) throw err;
        console.log(results);
        res.send('Employee TABLE fetched!')
    });
});

//update employee , delete functon is same as this
app.get('/updateemployee/:id', (req, res)=>{
    let newname = 'updated name';
    let sql = `UPDATE employee SET name = '${newname}' WHERE id = '${req.params.id}'`;
    let query = db.query(sql, err=>{
        if(err) throw err;
        res.send('employee updated')
    });
});

app.listen('3000', ()=>{
    console.log('Server started at port 3000')
})

