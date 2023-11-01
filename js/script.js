let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
    personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let a = prompt("Один из последних просмотренных фильмов", ""),
    b = prompt("Насколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов", ""),
    d = prompt("Насколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

