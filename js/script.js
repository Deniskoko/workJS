"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a,b;

function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        do {
            a = prompt("Один из последних происмотренных фильмов?", "");
            b = prompt("На сколько оцените его?","");
        }
        while (a==null || b==null || a=="" || b=="" || a.length>50);
        // b = prompt("На сколько оцените его?","");
         
        personalMovieDB.movies[a] = b;
    }
    
}
rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count<10) {
        alert ("Мало");
    } else if (personalMovieDB.count>=10&&personalMovieDB.count<=30) {
        alert ("Классно");
    } else if (personalMovieDB.count>30) {
        alert ("Киноман");
    } else {
        alert ("Ошибка");
    }    
}
detectedPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log (personalMovieDB);
    }
}
showMyDB ();

function writeYourGenres() {
    for (let i=0; i<3; i++) {
        personalMovieDB.genres [i] = prompt (`Ваш любимый жанр под номером ${i+1}`, "");
    }
}
writeYourGenres();