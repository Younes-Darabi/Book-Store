let editIndexBook = null;

function bookManagementRender() {
  let listOfBooks = document.getElementById("list_of_books");
  listOfBooks.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    listOfBooks.innerHTML += `
        <li>
            <span>${books[i].name}</span>
            <span>${books[i].author}</span>
            <span>${books[i].publishedYear}</span>
            <span>${books[i].genre}</span>
            <span>${books[i].price}</span>
            <span>${books[i].likes}</span>
            <button class="btn_img" onclick="deleteBook(${i})">
                <img src="/assets/img/icon/Delete.png" alt="löschen Icon" width="20px">
            </button>
            <button class="btn_img" onclick="showEditBook(${i})">
                <img src="/assets/img/icon/Edit.png" alt="Bearbeiten Icon" width="20px">
            </button>
        </li>`;
  }
  localStorage.setItem("books", JSON.stringify(books));
}

function showEditBook(i) {
  let name = document.getElementById("edit_book_name");
  let author = document.getElementById("edit_book_author");
  let price = document.getElementById("edit_book_price");
  let year = document.getElementById("edit_book_publishedYear");
  let genre = document.getElementById("edit_book_genre");
  name.value = books[i].name;
  author.value = books[i].author;
  price.value = books[i].price;
  year.value = books[i].publishedYear;
  genre.value = books[i].genre;
  editIndexBook = i;
}

function editBook() {
  let name = document.getElementById("edit_book_name").value;
  let author = document.getElementById("edit_book_author").value;
  let price = document.getElementById("edit_book_price").value;
  let year = document.getElementById("edit_book_publishedYear").value;
  let genre = document.getElementById("edit_book_genre").value;
    if (!editIndexBook){
        alert("Bitte wählen Sie ein Buch aus der Liste oben zum Bearbeiten!");
    }else{
        if (!name || !author || !price || !year || !genre) {
            alert("Bitte alle Felder ausfüllen!");
        }else{
            books[editIndexBook].name= name;
            books[editIndexBook].author= author;
            books[editIndexBook].price= price;
            books[editIndexBook].publishedYear= year;
            books[editIndexBook].genre= genre;
        }
    }
    editIndexBook=null;
    bookManagementRender();
}

function deleteBook(i) {
  books.splice(i, 1);
  bookManagementRender();
}

function addNewBook() {
  let name = document.getElementById("book_name").value;
  let author = document.getElementById("book_author").value;
  let price = document.getElementById("book_price").value;
  let year = document.getElementById("book_publishedYear").value;
  let genre = document.getElementById("book_genre").value;

  if (!name || !author || !price || !year || !genre) {
    alert("Bitte alle Felder ausfüllen!");
    return;
  }

  books.push({
    "name": name,
    "author": author,
    "likes": 0,
    "liked": false,
    "price": price,
    "publishedYear": year,
    "genre": genre,
    "comments": [],
    "favorite": false,
  });

  bookManagementRender();
}
