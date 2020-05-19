"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const reityng = prompt("На сколько оцените его?","");

const personalMovieDB = {
    count : numberOfFilms ,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних происмотренных фильмов?", ""),
b = prompt("На сколько оцените его?",""),
c = prompt("Один из последних происмотренных фильмов?", ""),
d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);
