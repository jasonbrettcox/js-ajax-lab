$( document ).ready(function() {
    console.log( "ready!" );
});

let ajax = $.get('https://den-super-crud.herokuapp.com/books/')
    .done(function(data){ 
        console.log(data.books);
        for (let i=0; i<data.books.length; i++){
            $('#books').append($('<li>').html("Title: " + data.books[i].title + "<br>" + "Author: " + data.books[i].author + "<br>" + "Release Date: " + data.books[i].releaseDate  + "<br>" + "<img src='" +  data.books[i].image + "'>" ));
            let id = data.books[i]._id;
            
            let title = data.books[i].title;
            let author = data.books[i].author;
            let image = data.books[i].image;
            let releaseDate = data.books[i].releaseDate;
            console.log(id, title, author, image, releaseDate);
        }

    })
   
    // var main = $('#main');
    // function makeResults() {

        // $( "<section class='container results'><h1></h1>" ).appendTo(main);


    $("form").on("submit", function(event){
        event.preventDefault();
       
        $.post( "https://den-super-crud.herokuapp.com/books/", { title: "Title", author: "Author" } );

        let title = $('#book-title').val(); 
        console.log(title)
        let author = $('#book-author').val();
       let image = $('#book-image').val();
        let releaseDate = $('#book-release-date').val();
    });
    
   


    // ----receive function----v
// function get_json(url, callback) {
//     $.get('https://den-super-crud.herokuapp.com/books/', function(res) {
//         var body = '';
//         res.on('data', function(chunk) {
//             body += chunk;
//         });

//         res.on('end', function() {
//             var response = JSON.parse(body);
// // call function ----v
//             callback(response);
//         });
//     });
// }

//          // -----------the url---v         ------------the callback---v
// var mydata = get_json("https://den-super-crud.herokuapp.com/books/", function (resp) {
//     console.log(resp);
// });