var userScoreEl = document.getElementById('usersScore')
var users = JSON.parse(localStorage.getItem('user'))

console.log(users)

// you need to create a for loop to loop through users and create an element for each user and append it to the userScoreEl