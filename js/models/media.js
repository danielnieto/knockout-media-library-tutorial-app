var app = window.app || {};

app.Media = function(isbn, mediaType, name){
    "use strict";

    this.isbn = isbn;
    this.mediaType = mediaType;
    this.name = name; 

}