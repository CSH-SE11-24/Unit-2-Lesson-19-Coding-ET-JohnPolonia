const prompt = require('prompt-sync')()
// REMINDER: Run your code to make sure there are no errors before submitting!
// Create an object that represents your favorite show with the following keys: name (string), genre (string), rating (number) (2 pts)
let favShow = {
  name: "Chowder",
  genre: "Animation",
  rating: 10
}

// Console log the show's name using the object (1 pt)
console.log(favShow.name)


// Add a new key called watched and put in a boolean with whether you have seen it (1 pt)
favShow.watched = true


// Change the rating of the show to increase it by one (2 pt)
favShow.rating = favShow.rating + 1



// Loop through the object and print every key and element. (2 pt)
// It should look like: 
// name is Ted Lasso
// genre is comedy
// rating is 4.5
// watched is true
console.log("the name is " + favShow.name)
console.log("The genre is " + favShow.genre)
console.log("rating is " + favShow.rating)
console.log("watched is " + favShow.watched)



// EXTRA CREDIT
// Make two more show objects and put them all in an array
// Loop through the array and print the names of the shows
let show1 = {
  name: "Peaky Blinders",
  genre: "Classic",
  rating: 10
}
let show2 = {
  name: "Rick and Morty",
  genre: "Animation",
  rating: 10
}
let shows = [favShow, show1, show2]
console.log(shows)

