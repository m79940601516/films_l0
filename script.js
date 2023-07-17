let numberOfFilms

function start(){
    numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`);
    }
}

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt(`Какой один из последних просмотренных фильмов вы назовете?`, '');
        if(a == '' || a == null || a.length > 50){
            i--
        }else{
            const b = prompt(`Какую оценку он заслужил?`);
            personalMovieDB.movies[a] = b;
        }
    }   
}
function detectPersonalLevel(){
    if(+personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов')
    }else if(+personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('Вы классический зритель')
    }else{
        alert('Вы киноман')
    }
}
function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB)
    }
}
function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = +prompt("Ваш любимый жанр под номером ${номер по порядку}")
    }
}



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



start();
rememberMyFilms();
detectPersonalLevel()
writeYourGenres()
showMyDB()

