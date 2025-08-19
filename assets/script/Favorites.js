function booksFavoritesRender() {
  let output = document.getElementById('content_favorites');
  output.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    if (books[i].favorite == true) {
      output.innerHTML +=bookFramRender(i);
    }
  }
  localStorage.setItem("books", JSON.stringify(books));
}

function bookFavoritesCounter(i) {
  if (books[i].favorite == false) {
    books[i].favorite = true;
  } else {
    books[i].favorite = false;
  }
  booksFavoritesRender();
}

function SendComment(i) {
  let comment = document.getElementById(`comment_text_${i}`);
  if (comment.value) {
    books[i].comments.push({
      name: "Younes",
      comment: comment.value,
    });
    comment.value = "";
    booksFavoritesRender();
  } else {
    comment.classList.add('empty_text');
  }
}

function bookLikeCounter(i) {
  if (books[i].liked == false) {
    books[i].liked = true;
    books[i].likes++;
  } else {
    books[i].liked = false;
    books[i].likes--;
  }
  booksFavoritesRender();
}

