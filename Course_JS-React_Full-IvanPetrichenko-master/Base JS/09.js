'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastSeeFilm = prompt('Один из последних просмотренных фильмов?');
let rating = prompt('На сколько вы его оцениваете?');

personalMovieDB.movies[lastSeeFilm] = rating;
console.log(personalMovieDB.movies);