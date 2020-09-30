let newBook ='';
let myLibrary = [];
let table = document.getElementById('myTable');
let row = '';
let numberRow = 1;
let render_switch = 'off';
let BookID = 3;


function bookGenerator(title, author, pages, read, id){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.id = id;
    
}


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
    row.id = 'ok';
    title = row.insertCell(0);
    title.style.fontStyle='italic';
    author = row.insertCell(1);
    pages = row.insertCell(2);
    read = row.insertCell(3);
    deleteBook = row.insertCell(4);
    title.innerHTML = myLibrary[i].title;
    author.innerHTML = myLibrary[i].author;
    pages.innerHTML = myLibrary[i].pages;
    read.innerHTML = myLibrary[i].read;
    if(myLibrary[i].read=='yes'){
        read.innerHTML = '<button style="color:green" class="fa fa-book" aria-hidden="true" id="'+myLibrary[i].id+'"></button>'  
    }
    else{
        read.innerHTML = '<button style="color:red" class="fa fa-book" aria-hidden="true" id="'+myLibrary[i].id+'"></button>'
    }
   
    read.onclick = function(e){
        let read_id= e.target.id;
        for(let i=0; i<myLibrary.length; ++i){
            if(myLibrary[i].id == read_id){
            myLibrary[i].changeReadStatus();
            renderDelete();
            render();
            }}
      };
    deleteBook.innerHTML = "<button class='book-delete' id='"+myLibrary[i].id+"'>Delete Book</button>"
    numberRow += 1;

    
    }
    numberRow = 1
    render_switch = 'on';
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
            }}}});
            
bookGenerator.prototype.changeReadStatus= function(){
    if(this.read == 'yes'){
        this.read = 'no';
    }
    else if(this.read == 'no'){
        this.read = 'yes';
    }
    };

let standard_book_1 = new bookGenerator('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', '766', 'yes',0);
let standard_book_2 = new bookGenerator('The Karamazov Brothers', 'Fiodor Dostoievski', '920', 'no',1);
let standard_book_3 = new bookGenerator('Learning JavaScript Data Structures & Algorithms', 'Loiane Groner', '202', 'no',2);
 
addEntry(standard_book_1);
addEntry(standard_book_2);
addEntry(standard_book_3);
render()