

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
  }
}
start();

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },
    lastFilm,
    rangLastFilm;

function decectPersonalLevel() {
  if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
  } else if (personalMovieDB.count > 31){
      alert("Вы киноман");
  } else {
      alert("Произошла ошибка");
  }
}
decectPersonalLevel();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
      lastFilm = prompt("Один из последних просмотренных фильмов?", "");
      rangLastFilm = +prompt("На сколько оцените его?", "");
      if (lastFilm == null || rangLastFilm == null || lastFilm == "" || rangLastFilm == "" || lastFilm.length > 50) {
          i--;
      } else {
      personalMovieDB.movies[lastFilm] = rangLastFilm;
      }
  }
}
rememberMyFilms();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
  }
}
writeYourGenres();

console.log(personalMovieDB);