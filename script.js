const express = require('express');
const app = express();

//  middleware
app.use(function(req, res, next) {
    console.log('middleware runing')
    next()
})

// static files

app.use(express.static('./public'))

//  ejs implementation for prforming calculation
app.set("view engine", "ejs")

app.get('/', function (req, res)  {
   res.render('index', { age: 12 })
});

app.get('/error', function (req, res, next)  {
    throw new Error("somthing is wrong dude")
 });
 
app.get('/contact', function (req, res)  {
    res.render('contact',{name:'pankaj'})
 });

app.get('/profile', function (req, res)  {
    res.send('hellow profile')
 });

//  dynamic routing use of params

 app.get('/profile/:username', function (req, res)  {
    res.send(`hellow from ${req.params.username}`)
 });

//   error handling
 app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000);