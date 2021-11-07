var userScoreEl = document.getElementById('usersScore')
var users = JSON.parse(localStorage.getItem('user'))
var ulE1 = document.getElementById('scores')




// you need to create a for loop to loop through users and create an element for each user and append it to the userScoreEl


    function renderHighscore(){
        var listE1 = document.getElementById('contentHolder')

    for (var i = 0; i < users.length;i++) {

        var listE1 = document.createElement('li');
        var listE1 = document.innerText = [users];
        listE1.appendChild(newContent);
        listE1.textContent = users;
        ulE1.append(listE1);
       }
    }

  /*  function renderQuestion() {
       
        // if timeLeft equals = 0 then call the endquiz function
        var currentQuestion = document.createElement('h1')
        currentQuestion.textContent = myQuestions[questionIndex].question
        questionsDiv.prepend(currentQuestion)
    
        for (var i = 0; i < myQuestions[questionIndex].choices.length; i++) {
            var listEl = document.createElement('li')
            listEl.textContent = myQuestions[questionIndex].choices[i]
            listEl.setAttribute('id', myQuestions[questionIndex].choices[i])
            choiceList.append(listEl)
    
            listEl.addEventListener('click', answerCheck)
        }
    } 
    */