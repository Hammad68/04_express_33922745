// Create a new router
const express = require("express");
const router = express.Router();
const path = require('path');

// Handle the main routes

// Route for the hompe page
router.get("/", (req, res) => res.send("Hello World!")); 

// Route for the welcome page
router.get("/welcome/:name", (req, res) => res.send(`<h1>Welcome ${req.params.name}</h1>`)); 

// Route for the about page
router.get('/about', (req, res) => res.send ('<h1>I am Computer Science student at Goldsmiths, University of London.</h1>'));

// Route for the contact page
router.get('/contact', (req, res) => res.send('<h1>Please Contact me via email: <a href="mailto:hahme029@gold.ac.uk">hahme029@gold.ac.uk</a></h1>'));

// Route for the date page
router.get('/date', (req, res) => res.send('<h1>Date: ' + new Date().toLocaleDateString() + '</h1>' + '<h1>Time: ' + new Date().toLocaleTimeString() + '</h1>'));

// Independet functions to be passed as parameters to chained route below
const routeHandler1 = (req, res, next) =>  { req.message = 'All is well...'; next();};
const routeHandler2 = (req, res) =>  { res.send(`<h1> Final Message:  ${req.message} </h1>`) };

// Chaine Route with two handlers
router.get('/chain', routeHandler1, routeHandler2);

// Rourte to send an html file
router.get('/file' , (req, res) => {

    // path of the file
    const filePath = path.join(__dirname, '../public', 'a.html');

    // sending the file and handling error
    res.sendFile(filePath, (err) => {

        // if error happens then show error message and status code 500
        if(err){
            console.log(err.message);
            res.status(500).send('File not found')
        } 

        // if no error occured then print out confirmation message on the console
        else {
            console.log('File has been sent successfully...');
        }
        
    });
});

// Export the router object so index.js can access it
module.exports = router;