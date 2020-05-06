let newBook =''
let myLibrary = [];
let table = document.getElementById('myTable')
let row = ''
let numberRow = 1
let render_switch = 'off'
let BookID = 0


function bookGenerator(title, author, pages, read, id){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.id = id;
    
};


function addEntry(book){
    myLibrary.push(book);

}

function renderDelete(){
    if(render_switch == 'on'){
        for(let i=0; i<myLibrary.length+1; i++){
            let delete_row = document.getElementById('ok')
            if(delete_row==null){}
            else{
            delete_row.remove()}}};
}
        
function render(){
    for(let i=0; i<myLibrary.length; i++){
    let row = table.insertRow(numberRow);
    row.id = 'ok'
    title = row.insertCell(0);
    author = row.insertCell(1);
    pages = row.insertCell(2);
    read = row.insertCell(3);
    deleteBook = row.insertCell(4);
    title.innerHTML = myLibrary[i].title;
    author.innerHTML = myLibrary[i].author;
    pages.innerHTML = myLibrary[i].pages
    read.innerHTML = myLibrary[i].read
    deleteBook.innerHTML = "<button id='"+myLibrary[i].id+"'>Delete Book</button>"
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
        document.getElementById('author').value, document.getElementById('pages').value, document.querySelector('input[name=read]:checked').value, BookID);
        addEntry(newBook);
        document.querySelector('.bg-modal').style.display = 'none';
        BookID += 1;
        renderDelete();
        render();
    });
    document.getElementById('myTable').addEventListener('click', function(e){
    if(e.target.innerHTML.includes('Delete Book')){
    let bookDeleted = e.target.id;
        for(let i =0; i<myLibrary.length; ++i){
            if (myLibrary[i].id == bookDeleted){
                myLibrary.splice(i,1);
                renderDelete();
                render();
            }}}})
            

            document.getElementById('render').addEventListener('click', function(){
                render()});
                document.getElementById('render delete').addEventListener('click', function(){
                    renderDelete()});

bookGenerator.prototype.changeReadStatus= function(){
    if(this.read == 'yes'){
        this.read = 'no'}
    else if(this.read == 'no'){
        this.read = 'yes'}}
