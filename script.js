let newBook =''
let myLibrary = [];
let table = document.getElementById('myTable')
let row = ''
let numberRow = 1
let render_switch = 'off'


function bookGenerator(title, author, pages, read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    
};


function addEntry(book){
    myLibrary.push(book);

}

function render(){
    
    let book_items = ''
    if(render_switch == 'on'){
        for(let i=0; i<myLibrary.length; i++){
            let delete_row = document.getElementById('new_book'+[i])
            if(delete_row==null){}
            else{;
            delete_row.remove()}}};
        
    for(let i=0; i<myLibrary.length; i++){
    let row = table.insertRow(numberRow);
    row.id= 'new_book'+[i]
    title = row.insertCell(0);
    author = row.insertCell(1);
    pages = row.insertCell(2);
    read = row.insertCell(3);
    title.innerHTML = myLibrary[i].title;
    author.innerHTML = myLibrary[i].author;
    pages.innerHTML = myLibrary[i].pages
    read.innerHTML = myLibrary[i].read
    numberRow += 1

    
    }
    numberRow = 1
    render_switch = 'on'
}

document.getElementById('new_book').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';});

    document.getElementById('add_book').addEventListener('click', function(){
        newBook = new bookGenerator(document.getElementById('title').value, 
        document.getElementById('author').value, document.getElementById('pages').value, 'yes');
        addEntry(newBook);
        render();
        document.querySelector('.bg-modal').style.display = 'none';
    });
    
