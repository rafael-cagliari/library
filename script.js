let myLibrary = [];
let table = document.getElementById('myTable')
let row = ''
function bookGenerator(title, author, pages, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    
};
let book1 = new bookGenerator("Harry Potter and the Philosopher's Stone", 'J.K Rowling', 223, 'Read')
function render(){
    let row = table.insertRow(1);
    title = row.insertCell(0);
    author = row.insertCell(1);
    pages = row.insertCell(2);
    read = row.insertCell(3);
    title.innerHTML = book1.title;
    author.innerHTML = book1.author;
    pages.innerHTML = book1.pages
    read.innerHTML = book1.read
}