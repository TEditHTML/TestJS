let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", ""),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },
    lastFilm,
    rangLastFilm;

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 31){
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
    lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    rangLastFilm = +prompt("На сколько оцените его?", "");
    if (lastFilm == null || rangLastFilm == null || lastFilm == "" || rangLastFilm == "" || lastFilm.length > 50) {
        i--;
    } else {
    personalMovieDB.movies[lastFilm] = rangLastFilm;
    }
}

console.log(personalMovieDB);