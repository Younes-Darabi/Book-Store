function bookFramRender(i){
  return  `
    <article class="article">
      <div class="book_img">
        <img src="assets/img/${i}.jpg" alt="Buch">
      </div>
      <div class="book_name">
        <h2>${books[i].name}</h2>
      </div>
      <div class="price_like">
        <h3>${books[i].price} €</h3>
        <div class="favorite_like">
          ${bookLikeRender(i)}
          ${bookFavoritesRender(i)}
        </div>
      </div>
        ${bookDetailRender(i)}
      <div class="line2"></div>
      <div class="book_comments" tabindex="0">
        <h4>Kommentare:</h4>
        ${bookCommentsRender(i)}
      </div>
      <div class="send_comment">
        <label for="comment_text_${i}" class="sr-only">Nachricht</label>
        <input onclick="errorStyleRemover(${i})" id="comment_text_${i}" class="comment_text" type="text" placeholder="Nachricht eingeben">
        <button  tabindex="0" class="btn_img" onclick="SendComment(${i})">
          <img src="assets/img/icon/Sent.png" alt="send Icon" width="26px">
        </button>
      </div>
    </article>
    `;
}

function bookDetailRender(i) {
  return `<div class="book_detail">
            <div class="book_detail_in">
              <h4>Author</h4>
              <h4>:${books[i].author}</h4>
            </div>
            <div class="book_detail_in">
              <h4>Erscheinungsjahr</h4>
              <h4>:${books[i].publishedYear}</h4>
            </div>
            <div class="book_detail_in">
              <h4>Genre</h4>
              <h4>:${books[i].genre}</h4>
            </div>
        </div>`;
}