const express = require('express');
const mysql = require('mysql2');

const app = express();

const sqlConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Makapuu1',
  database: 'swimming',
});

app.get('/users', (req, res) => {
  sqlConnection.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      console.log(err);
      return;
    }
    console.log('Connection established');
  });

  sqlConnection.query('SELECT * FROM users', (err,rows) => {
    if(err) throw err;
    
    console.log('Data received from Db');
    // rows.forEach( (row) => {
    //   console.log(`User with ID of ${row.user_id} has first name of ${row.first_name}`)
    // });
    res.send(rows);
  });
  // sqlConnection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  // });
});

app.get('/users/:email', (req, res) => {
  console.log(req.params.email);
  sqlConnection.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      console.log(err);
      return;
    }
    console.log('Connection established');
  });

  sqlConnection.query(`SELECT * FROM users WHERE email=\'${req.params.email}\'`, (err,rows) => {
    if(err) throw err;
    
    console.log('Data received from Db');
    // rows.forEach( (row) => {
    //   console.log(`User with ID of ${row.user_id} has first name of ${row.first_name}`)
    // });
    res.send(rows);
  });
  // sqlConnection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  // });
  // res.send(req.params.email);
});

app.get('/swim_workouts', (req, res) => {
  // clear CORS error for now, allow all to connect
  res.set('Access-Control-Allow-Origin', '*');
  sqlConnection.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      console.log(err);
      return;
    }
    console.log('Connection established');
  });

  sqlConnection.query('SELECT * FROM swim_workouts', (err,rows) => {
    if(err) throw err;
    
    console.log('Data received from Db');
    console.log("type:", rows[0].type);
    console.log("workout:", rows[0].swim_workout);
    // rows.forEach( (row) => {
    //   console.log(`User with ID of ${row.user_id} has first name of ${row.first_name}`)
    // });
    res.send(rows);
  });
  // sqlConnection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  // });
  // res.send(req.params.email);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
})

