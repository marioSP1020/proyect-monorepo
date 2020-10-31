const filmsData = [
  {
    Title: "The Incredible Hulk",
    Year: "2008",
    imdbID: "tt0800080",
    Type: "movie",
    Genre: "Action, Adventure, Sci-Fi",
    Actors: "Edward Norton, Liv Tyler, Tim Roth, William Hurt",
    Plot: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    Awards: "1 win & 8 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
    imdbVotes: 427779,
  },
  {
    Title: "The Incredible Hulk",
    Year: "1977–1982",
    imdbID: "tt0077031",
    Type: "series",
    Genre: "Action, Adventure, Drama, Sci-Fi",
    Actors: "Bill Bixby, Jack Colvin, Lou Ferrigno, Charles Napier",
    Plot: "A fugitive scientist has the curse of becoming a powerful green monster under extreme emotional stress.",
    Awards: "Won 1 Primetime Emmy. Another 2 wins & 5 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BODc3YTIwY2ItMDU3MS00ZTFlLWJjOTAtNmE4M2M0NWI4MWE1XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
    imdbVotes: 11502,
  },
  {
    Title: "Titanic",
    Year: "1997",
    imdbID: "tt0120338",
    Type: "movie",
    Genre: "Drama, Romance",
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    Plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    Awards: "Won 11 Oscars. Another 112 wins & 83 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    imdbVotes: 1029426,
  },
  {
    Title: "Titanic",
    Year: "2012",
    imdbID: "tt1869152",
    Type: "series",
    Genre: "Drama",
    Actors: "Peter McDonald, Steven Waddington, Glen Blackhall, Ruth Bradley",
    Plot: "The world's largest ship, the Titanic, meets with disaster when it strikes an iceberg on its maiden voyage.",
    Awards: "4 wins & 9 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTA4MjIyZWEtZjYwMS00ZmQ1LWJiMDEtMWNiNTI5NWE3OGJjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    imdbVotes: 3006,
  },
  {
    Title: "Joker",
    Year: "2019",
    imdbID: "tt7286456",
    Type: "movie",
    Genre: "Crime, Drama, Thriller",
    Actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    Plot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    Awards: "Won 2 Oscars. Another 104 wins & 218 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbVotes: 883048,
  },
  {
    Title: "Joker Game",
    Year: "2016",
    imdbID: "tt5614180",
    Type: "series",
    Genre: "Animation, Drama, Thriller, War",
    Actors: "Justin Briner, Josh Grelle, Brandon Potter, Alejandro Saab",
    Plot: "Taking place in the year 1937 on the eve of World War II, the story involves a mysterious spy training organization known as the \"D Agency.\" The organization is established by Lieutenant ...",
    Awards: "1 nomination.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTgyNjczOGItOTczNi00MDk4LWIzMjktYTM3NWU4YmQ4MWVkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg",
    imdbVotes: 513,
  },
  {
    Title: "Star Wars: Episode IX - The Rise of Skywalker",
    Year: "2019",
    imdbID: "tt2527338",
    Type: "movie",
    Genre: "Action, Adventure, Fantasy, Sci-Fi",
    Actors: "Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley",
    Plot: "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",
    Awards: "Nominated for 3 Oscars. Another 7 wins & 38 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
    imdbVotes: 354619,
  },
  {
    Title: "Star Wars: Episode V - The Empire Strikes Back",
    Year: "1980",
    imdbID: "tt0080684",
    Type: "movie",
    Genre: "Action, Adventure, Fantasy, Sci-Fi",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    Plot: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
    Awards: "Won 1 Oscar. Another 24 wins & 20 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    imdbVotes: 1136399,
  },
  {
    Title: "The Amazing Spiderman T4 Premiere Special",
    Year: "2012",
    imdbID: "tt2233044",
    Type: "movie",
    Genre: "Documentary",
    Actors: "Donna Air, Ozwald Boateng, Lydia Bright, Joey Essex",
    Plot: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    Awards: "1 win & 8 nominations.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
    imdbVotes: 427779,
  },
  {
    Title: "Mel Gibson's 'Braveheart': A Filmmaker's Passion",
    Year: "2000",
    imdbID: "tt0365492",
    Type: "movie",
    Genre: "Documentary, Short",
    Actors: "Mel Gibson, Randall Wallace, Catherine McCormack, Bruce Davey",
    Plot: "A very well structured making-of ducumentary for the film Braveheart (1995). We learn about how Mel Gibson got attached to the project as star, director and producer. This is a fairly ...",
    Awards: "Won 5 Oscar. Another won 5 & 10 nominations",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2MzY2MzZjItZjY0OC00YjdkLWJjZjUtNmNlYzI0ODE2MTU3XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    imdbVotes: 121,
  },


];

export default filmsData;