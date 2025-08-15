let books = JSON.parse(localStorage.getItem("books"));

function booksFovoritesRender() {
  let output = document.getElementById('content');
  output.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    if (books[i].favorite == true) {
      output.innerHTML += `
      <object class="object">

        <div class="book_img">
          <img src="/assets/img/th.jpeg" alt="Buch">
        </div>
        <h2>${books[i].name}</h2>
        <div class="price_like">
          <h3>${books[i].price} €</h3>
          ${bookLikeRender(i)}
        </div>
        ${bookDetailRender(i)}
        <div class="line2"></div>
        <div class="book_comments">
            <h4>Kommentare:</h4>
            ${bookCommentsRender(i)}
        </div>
        <div class="send_comment">
          ${bookFavoritesRender(i)}
          <input id="comment_text_${i}" class="comment_text" " type="text">
          <img onclick="SendComment(${i})" class="send_comment_img" src="/assets/img/icon/Sent.png">
        </div>
      </object>
    `;
    }
  }
  localStorage.setItem("books", JSON.stringify(books));
}



function bookFavoritesRender(i) {
  let favImgSrc = "";
  if (books[i].favorite == false) {
    favImgSrc = "/assets/img/icon/Star1.png";
  } else {
    favImgSrc = "/assets/img/icon/Star2.png";
  }
  return `<div>
            <img class="favorite_icon" onclick="bookFavoritesCounter(${i})" src="${favImgSrc}" alt="Star">
          </div>`;
}

function bookFavoritesCounter(i) {
  if (books[i].favorite == false) {
    books[i].favorite = true;
  } else {
    books[i].favorite = false;
  }
  booksFovoritesRender();
}

function SendComment(i) {
  let comment = document.getElementById(`comment_text_${i}`).value;
  if (comment) {
    books[i].comments.push({
      name: "Younes",
      comment: comment,
    });
    comment.value = "";
    booksFovoritesRender();
  } else {
    alert("ERROR");
  }
}

function bookLikeRender(i) {
  let likeImgSrc = "/assets/img/icon/like2.png";
  if (books[i].liked == false) {
    likeImgSrc = "/assets/img/icon/like.png";
  }
  return `<div class="like">
            <h3>${books[i].likes}</h3>
            <img onclick="bookLikeCounter(${i})" src="${likeImgSrc}" width="25px" alt="Like">
         </div>`;
}

function bookLikeCounter(i) {
  if (books[i].liked == false) {
    books[i].liked = true;
    books[i].likes++;
  } else {
    books[i].liked = false;
    books[i].likes--;
  }
  booksFovoritesRender();
}

function bookDetailRender(i) {
  return `<div class="book_detail">
            <div class="book_detail_in">
              <h4>Author</h4>
              <h4>Erscheinungsjahr</h4>
              <h4>Genre</h4>
            </div>
            <div class="book_detail_in">
              <h4>: ${books[i].author}</h4>
              <h4>: ${books[i].publishedYear}</h4>
              <h4>: ${books[i].genre}</h4>
            </div>
        </div>`;
}

function bookCommentsRender(i) {
  let comments = "";
  for (let j = 0; j < books[i].comments.length; j++) {
    comments += `<div>
                <h5>${books[i].comments[j].name}:</h5>
                <p>${books[i].comments[j].comment}</p>
               </div>`;
  }
  return comments;
}
