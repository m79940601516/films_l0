let numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`);

let lastFilm = prompt(`Какой один из последних просмотренных фильмов вы назовете?`)
let reitFilm = prompt(`Какую оценку он заслужил?`)

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        lastFilm: reitFilm
    },
    actors: {},
    genres: [],
    privat: false
};
