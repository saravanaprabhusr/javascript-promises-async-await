import { fetchWithTimeout } from './services';

export function fetchMovies(){
    let movies = require('./data/movies.json')

    const resolveFunction = () => movies;
    return fetchWithTimeout(1000)
        .then(resolveFunction);
}

let moviePromise = fetchMovies();
moviePromise.then( (results) => {
    console.log(results);
});