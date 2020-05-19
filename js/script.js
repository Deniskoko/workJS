"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a,b;

for (let i=0; i<2; i++) {
    do {
        a = prompt("Один из последних происмотренных фильмов?", "");
    }
    while (a==null||a.length==0||a.length>50);
    b = prompt("На сколько оцените его?","");
    // console.log (a);
    
    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count<10) {
    alert ("Мало");
} else if (personalMovieDB.count>=10&&personalMovieDB.count<=30) {
    alert ("Классно");
} else if (personalMovieDB.count>30) {
    alert ("Киноман");
} else {
    alert ("Ошибка");
}

console.log (personalMovieDB);
