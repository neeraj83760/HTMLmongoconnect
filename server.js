const express = require("express");

const mongoose = require("mongoose");

const app = express();

const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://neeraj:Ramswarup123@cluster0.vu4bt.mongodb.net/moviesDB?retryWrites=true&w=majority")

// ************* when it comes to connecting the database with the forntend application
// we first need to think about the creating the schema and the model of the database 

//  Lets create the schema first 

const movieSchema = {

    name:String,
    rating:String
}

const Movie = mongoose.model('Movie', movieSchema); 

app.get('/', (req, res)=>{

// res.send('Working!!')  

// res.sendFile(__dirname + '/index.html')

//  In case if we have the html file we write the below mentioned code in the app.get method
//  res.sendFile(_dirname + '/index.html') u can try the same by creating the HTML file in the
//  mongoget-html directory 

// But with EJS files we first need to create a seprate folder inside the mongoget-html folder 
// named as "views" and create a new file inside it ... index.ejs file is also similar like 
// index.html but index.ejs file allows us to incorporate some javascript as well 
// so to render the ejs file we need to write the below mentioned code where we use 
// render method instead of sendFile method

// also there is no need to specify the path because the render method knows that the respective 
// file will be found in the views folder so there is no need to specify the path

// Ejs also allows u the pass in the second argument in the render function as an object 


// let name = 'Marina'

// res.render('index',{

//     UserName:name 
// }) 


Movie.find({}, (err, movie)=> {

res.render('index',{

    moviesList: movie
})

}) 

})

app.listen(3000, (req, res)=>{

    console.log("server is running!!!")

})

// module.exports = moviesList;