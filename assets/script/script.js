// let books = [
//   {
//     "name": "Die Geheimnisse des Ozeans",
//     "author": "Clara Meer",
//     "likes": 1250,
//     "liked": true,
//     "price": 19.99,
//     "publishedYear": 2018,
//     "genre": "Fantasy",
//     "comments": [
//       {
//         "name": "Leser123",
//         "comment":
//           "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
//       },
//       {
//         "name": "Bookworm84",
//         "comment":
//           "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
//       },
//       {
//         "name": "FantasyFanatic",
//         "comment":
//           "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
//       },
//       {
//         "name": "SciFiGuru",
//         "comment":
//           "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
//       },
//       {
//         "name": "NovelLover",
//         "comment":
//           "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
//       },
//     ],
//     "favorite": false,
//   },
//   {
//     "name": "Der vergessene Pfad",
//     "author": "Maximilian Schwarz",
//     "likes": 980,
//     "liked": false,
//     "price": 14.5,
//     "publishedYear": 2021,
//     "genre": "Fantasy",
//     "comments": [],
//     "favorite": true,
//   },
//   {
//     "name": "Die Farben des Himmels",
//     "author": "Laura Blau",
//     "likes": 1520,
//     "liked": true,
//     "price": 22.95,
//     "publishedYear": 2019,
//     "genre": "Romantik",
//     "comments": [
//       {
//         "name": "LeserPeter",
//         "comment":
//           "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
//       },
//       {
//         "name": "BookLover21",
//         "comment":
//           "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
//       },
//       {
//         "name": "FantasyNerd",
//         "comment":
//           "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
//       },
//       {
//         "name": "SciFiEnthusiast",
//         "comment":
//           "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
//       },
//       {
//         "name": "ReadingAddict",
//         "comment":
//           "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
//       },
//     ],
//     "favorite": false,
//   },
//   {
//     "name": "Das Rätsel der Zeit",
//     "author": "Alexander Weiss",
//     "likes": 750,
//     "liked": false,
//     "price": 18.0,
//     "publishedYear": 2020,
//     "genre": "Science-Fiction",
//     "comments": [
//       {
//         "name": "BuchKenner",
//         "comment":
//           "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
//       },
//       {
//         "name": "LeseWurm",
//         "comment":
//           "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
//       },
//     ],
//     "favorite": false,
//   },
//   {
//     "name": "Der letzte Wächter",
//     "author": "Sabine Grün",
//     "likes": 1300,
//     "liked": true,
//     "price": 16.75,
//     "publishedYear": 2017,
//     "genre": "Fantasy",
//     "comments": [],
//     "favorite": false,
//   },
//   {
//     "name": "Im Schatten des Mondes",
//     "author": "Philipp Silber",
//     "likes": 890,
//     "liked": false,
//     "price": 12.3,
//     "publishedYear": 2022,
//     "genre": "Science-Fiction",
//     "comments": [
//       {
//         "name": "BücherLiebhaber",
//         "comment":
//           "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
//       },
//       {
//         "name": "Leseratte",
//         "comment":
//           "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
//       },
//     ],
//     "favorite": false,
//   },
//   {
//     "name": "Jenseits der Sterne",
//     "author": "Oliver Schwarz",
//     "likes": 1450,
//     "liked": true,
//     "price": 21.0,
//     "publishedYear": 2015,
//     "genre": "Science-Fiction",
//     "comments": [
//       {
//         "name": "Leser123",
//         "comment":
//           "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
//       },
//     ],
//     "favorite": false,
//   },
//   {
//     "name": "Das verborgene Königreich",
//     "author": "Elena Gold",
//     "likes": 920,
//     "liked": false,
//     "price": 17.5,
//     "publishedYear": 2020,
//     "genre": "Fantasy",
//     "comments": [
//       {
//         "name": "Bookworm92",
//         "comment":
//           "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
//       },
//     ],
//     "favorite": false,
//   },
//   {
//     "name": "Liebe in Zeiten des Krieges",
//     "author": "Emilia Rot",
//     "likes": 1800,
//     "liked": true,
//     "price": 19.99,
//     "publishedYear": 2016,
//     "genre": "Romantik",
//     "comments": [
//       {
//         "name": "Bibliophile23",
//         "comment":
//           "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
//       },
//       {
//         "name": "StorySeeker",
//         "comment":
//           "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
//       },
//       {
//         "name": "SciFiExplorer",
//         "comment":
//           "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
//       },
//     ],
//     "favorite": false,
//   },
// ];
let books = JSON.parse(localStorage.getItem("books"));

function booksRender() {
  let output = document.getElementById("content");
  output.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
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
  booksRender();
}

function SendComment(i) {
  let comment = document.getElementById(`comment_text_${i}`).value;
  if (comment) {
    books[i].comments.push({
      name: "Younes",
      comment: comment,
    });
    comment.value = "";
    booksRender();
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
  booksRender();
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
