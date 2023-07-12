const numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){

}
const a = prompt(`Какой один из последних просмотренных фильмов вы назовете?`),
      b = prompt(`Какую оценку он заслужил?`),
      c = prompt(`Какой один из последних просмотренных фильмов вы назовете?`),
      d = prompt(`Какую оценку он заслужил?`);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)