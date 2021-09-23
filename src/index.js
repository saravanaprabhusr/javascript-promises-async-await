import { result } from 'lodash';
import { fetchWithTimeout } from './services';
import { fetchBooks } from './services';
import { fetchMovies } from './services';

export function getBooksAndMovies(){
    return Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies ]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then( results => {
    console.log('getBooksAndMoviesPromise', results);
});

export function getBooksOrMovies(){
    return Promise.race([fetchBooks(), fetchMovies()])
        .then(([books, movies ]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then( results => {
    console.log('getBooksOrMoviesPromise', result);
})