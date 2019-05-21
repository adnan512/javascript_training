
function Book(author, title, readingStatus, rating) {
    this.author = author;
    this.title = title;
    this.readingStatus = readingStatus;
    this.rating = rating;
    this.setNotes = function(note) {
        this.notes = note;
    };
    this.getNotes = function() 
    {
        return this.notes;
    };
}

var library = []; 

function populateLibrary()
{
    var book1 = new Book('shakespeare', 'Life is always uncertain', true, 3);
    var book2 = new Book('Dietel and Dietel', 'Introduction to C++', false , 4);
    var book3 = new Book('Wasi Shah', 'Lahore culture', true, 4);
    var book4 = new Book('Adnan', 'javascript', true, 2);
    var book5 = new Book('Imran farid', 'Discrete Structure', false, 2);
    library.push(book1);
    library.push(book2);
    library.push(book3);
    library.push(book4);
    library.push(book5);
}

function openBooks()
{
    for (i =0; i < library.length; i++)
    {
        if (library[i].readingStatus == true)
        {
            console.log('Author : "' +  library[i].author + '" Title : "' +  library[i].title + '" Rating : ' + library[i].rating);
        }   
    }
}

function searchBook(title)
{
    for (i =0; i < library.length; i++)
    {
        if (library[i].title == title)
        {
            console.log('Author : "' +  library[i].author +  '" Rating : ' + library[i].rating);
        }
    }
}

function changeRating(title , rating)
{
    for (i =0; i < library.length; i++)
    {
        if (library[i].title == title)
        {
            library[i].rating = rating
            console.log('Author : "' +  library[i].author + '" Title : "' +  library[i].title + '" Rating : ' + library[i].rating);
        }
    }
}

console.log('Populating library')
populateLibrary()
console.log('\n')
console.log('Currently reading books')
openBooks()
console.log('\n')
console.log('Searching book')
searchBook('Introduction to C++')
console.log('\n')
console.log('Changing rating of book')
changeRating('Introduction to C++', 10)
console.log('\n')

library[2].setNotes('Read page 34')
console.log(library[2].getNotes())
console.log(library[3].getNotes())
