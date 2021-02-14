# Entertainment Hub developed using React JS, Material UI and MovieDB API

### API

Fetch Movies: [https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}](https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL})

Fetch TV Series: [https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}](https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL})

Search: [https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
process.env.REACT_APP_APIKEY
}&language=en-US&query=${searchText}&page=${page}&include_adult=false](https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_APIKEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false)

### App Screenshots

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-entertainment-hub-reactjs/master/src/images/screenshot.PNG)

### Live Demo

[https://praveenorugantitech.github.io/praveenorugantitech-entertainment-hub-reactjs/](https://praveenorugantitech.github.io/praveenorugantitech-entertainment-hub-reactjs/)

### Setup Local Instructions

```
git clone https://github.com/praveenorugantitech/praveenorugantitech-entertainment-hub-reactjs.git
cd praveenorugantitech-entertainment-hub-reactjs

create .env file and include your API Key related to MovieDB API

REACT_APP_APIKEY=""


npm install
npm start

```
