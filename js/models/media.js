var app = window.app || {};

app.Media = function(isbn, mediaType, name, borrower, dueDate){
    "use strict";

    this.ISBN = isbn;
    this.MediaType = mediaType;
    this.Name = name; 
    this.Borrower = ko.observable(borrower ? borrower : '');
    this.DueDate = ko.observable(dueDate ? dueDate : undefined);

}