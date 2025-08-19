let books = JSON.parse(localStorage.getItem("books"));
if (!books) {
  books = defaultbooks;
}

function booksRender() {
  let output = document.getElementById("content");
  output.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    output.innerHTML += bookFramRender(i);
  }
  localStorage.setItem("books", JSON.stringify(books));
}

function bookFavoritesRender(i) {
  let favImgSrc = "";
  if (books[i].favorite == false) {
    favImgSrc = "assets/img/icon/Star1.png";
  } else {
    favImgSrc = "assets/img/icon/Star2.png";
  }
  return `<div>
            <button tabindex="0" class="btn_img" onclick="bookFavoritesCounter(${i})">
              <img src="${favImgSrc}" alt="Star Icon" width="30px">
            </button>
          </div>`;
}

function bookFavoritesCounter(i) {
  if (books[i].favorite == false) {
    books[i].favorite = true;
  } else {
    books[i].favorite = false;
  }
  booksRender();
}

function SendComment(i) {
  let comment = document.getElementById(`comment_text_${i}`);
  if (comment.value) {
    books[i].comments.push({
      name: "Younes",
      comment: comment.value,
    });
    comment.value = "";
    booksRender();
  } else {
    comment.classList.add('empty_text');
    document.getElementById(`comment_text_${i}`).value= "Bitte Nachricht eingeben!";
  }
}

function errorStyleRemover(i){
  document.getElementById(`comment_text_${i}`).classList.remove('empty_text')
  document.getElementById(`comment_text_${i}`).value= "";
}

function bookLikeRender(i) {
  let likeImgSrc = "assets/img/icon/Like2.png";
  if (books[i].liked == false) {
    likeImgSrc = "assets/img/icon/Like.png";
  }
  return `<div class="like">
            <h3>${books[i].likes}</h3>
            <button  tabindex="0" class="btn_img" onclick="bookLikeCounter(${i})">
              <img src="${likeImgSrc}" alt="Like Icon" width="25px">
            </button>
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
  booksRender();
}

function bookCommentsRender(i) {
  let comments = "";
  for (let j = 0; j < books[i].comments.length; j++) {
    comments += `<div tabindex="0">
                <h5>${books[i].comments[j].name}:</h5>
                <p>${books[i].comments[j].comment}</p>
               </div>`;
  }
  return comments;
}
