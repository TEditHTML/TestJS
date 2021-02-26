let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", ""),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {
        },
        actors: {},
        genres: [],
        privat: false
    },
    lastFilm_1 = prompt("Один из последних просмотренных фильмов?", ""),
    rangLastFilm_1 = +prompt("Насколько оцените его?", ""),
    lastFilm_2 = prompt("Один из последних просмотренных фильмов?", ""),
    rangLastFilm_2 = +prompt("Насколько оцените его?", "");

personalMovieDB.movies[lastFilm_1] = rangLastFilm_1;
personalMovieDB.movies[lastFilm_2] = rangLastFilm_2;

console.log(personalMovieDB);