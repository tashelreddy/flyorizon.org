const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require('body-parser');
const morgan = require('morgan'); // for logging
const app = express();
const PORT = 3000;


// Set up morgan middleware for logging
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/contact', (req, res) => {
    res.render('contact-us'); 
});

app.get('/signup', (req, res) => {
    res.render('signup'); 
});

app.get('/login', (req, res) => {
    res.render('login'); 
});

app.get('/about', (req, res) => {
    res.render('about'); 
});

app.get('/tracker', (req, res) => {
    res.render('tracker'); 
});

app.get('/travel', (req, res) => {
    res.render('travel'); 
});

//invalid route
app.get('/deals-service', (req, res) => {
   
});

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/form-submitted', (req, res) => {
    res.render('form-submitted'); 
});


app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;


res.render('form-submitted', { name, email, message });
    // res.send ( { name, email, message });
  
});

// Error handling for invalid routes
app.use((req, res, next) => {
    res.status(404).send("Sorry, the page you are looking for does not exist.");
});


// Start the server
const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
