

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        this.count = +prompt(`Сколько фильмов вы уже посмотрели?`);

        while (this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt(`Сколько фильмов вы уже посмотрели?`);
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt(`Какой один из последних просмотренных фильмов вы назовете?`, '').trim();
            if(a == '' || a == null || a.length > 50){
                i--
            }else{
                const b = prompt(`Какую оценку он заслужил?`);
                this.movies[a] = b;
            }
        }   
    },
    detectPersonalLevel: function(){
        if(+this.count < 10){
            alert('Просмотрено довольно мало фильмов')
        }else if(+this.count >= 10 && this.count < 30){
            alert('Вы классический зритель')
        }else{
            alert('Вы киноман')
        }
    },
    showMyDB: function(){
        if(this.privat == false){
            console.log(this)
        }
    },
    writeYourGenres: function(){
        for(let i = 0; i < 3; i++){
            let a = +prompt("Ваш любимый жанр под номером ${номер по порядку}")
            if(a == '' || a == null || isNaN(a)){
                i--
            }else{
                this.genres[i] = a;
            }
        }
        this.genres.forEach((element, index) => {
            console.log(`Любимый жанр № ${index + 1} - это ${element}`)
        });
    },
    toggleVisibleMyDB: function(){
        if(this.privat == false){
            this.privat = true;
        }else{
            this.privat = false;
        }
    }
};




personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel()
personalMovieDB.writeYourGenres()
personalMovieDB.showMyDB()

