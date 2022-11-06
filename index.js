/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //empty array
  let arr = [];
  //to loop through the @movies array of objects
  for (let movie of movies) {
    //if there's a key named "title", push it to the "arr" array
    if (movie.hasOwnProperty('title')) {
      arr.push(movie.title);
    }
  }
  return arr;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //set a variable "num" to zero
  let num = 0;
  //to loop through the @movies array of objects
  for (let movie of movies) {
    //if the variable "num" is less than @metascore, update the "num"
    if (num < Number(movie.metascore)) {
      num = Number(movie.metascore);
    }
  }
  return num;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  //set a variable "average" to zero
  let average = 0;
  //if the lenght of @movies array is greater than 0
  if (movies.length > 0) {
    //to loop through the @movies array of objects
    for (let movie of movies) {
      //add the @imdbRating to the "average"
      average += Number(movie.imdbRating);
    }
    //set new value to the "average" with previous average value (total sum of @imdbRating)
    //divided by the length of @movies array and set to have only two decimals
    average = Number((average/movies.length).toFixed(2));
  }
  return average;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //empty object
  let obj = {};
  //to loop through the @movies array of objects
  for (let movie of movies) {
    //if there's a key named "rated", update the "obj"
    if (movie.hasOwnProperty('rated')) {
      //if there's no key named @movie.rated in "obj", add the key @movie.rated with the value 1 to the "obj". 
      if (!obj[movie.rated]) {
        obj[movie.rated] = 1;
      } else {
        //if there's key named @movie.rated in "obj", add 1 more
        obj[movie.rated] += 1;
      }
    }
  }
  return obj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  //set the variable "obj" with value null
  let obj = null;
  //to loop through the @movies array of objects
  for (let movie of movies) {
    //if @imdbID is strictly equal to @id, update "obj" with the copy of that object 
    if (movie.imdbID === id) {
      obj = {...movie};
    }
  }
  return obj;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  //empty array
  let arr = [];
  //update the @genre with first letter Upper Case and the rest Lower Case
  genre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();
  //to loop through the @movies array of objects
  for (let movie of movies) {
    //if @movie.genre has @genre, push the copy of the that @movie object to the array @arr
    if (movie.genre.includes(genre)) {
      arr.push({...movie});
    }
  }
  return arr;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  //empty array
  let arr = [];
  //to loop through the @movies array of objects
  for (let movie of movies) {
    //set the variable "releasedYear" array with @movie.released string splitted to each index,
    //because @movie.released is a string with date, month and year, but I only want the year.
    let releasedYear = movie.released.split(' ');

    //if "releasedYear" last index, which is the year of the movie released,
    //equal to or less than the given year, push the copy of the that @movie object to the array @arr.
    if (Number(releasedYear[releasedYear.length-1]) <= year) {
      arr.push({...movie});
    }
  }
  return arr;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  //set the variable "result" with value 0, so I can compare it later
  let toCompare = 0;
  //set the variable "movieName" with value null
  let movieName = null;

  //to loop through the @movies array of objects
  for (let movie of movies) {
    //set the variable "num" with @movie.boxOffice string withouth the dollar sign and commas in between the nubmers,
    //because @movie.boxOffice is a string, for example: "$76,271,832", but I only want the number so I can compare.
    let num = Number(movie.boxOffice.slice(1).split(',').join(''));

    //if the "num" is greater than "toCompare", update the "toCompare" and "movieName" with @movie.title
    if (num > toCompare) {
      toCompare = num;
      movieName = movie.title;
    }
  }
  return movieName;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
