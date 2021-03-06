/////////////////////////////
// CODING CHALLENGE


/*
 --- Let's build a fun quiz game in the console! ---
 
 1. Build a function constructor called Question to describe a question. A question should include:
 a) question itself
 b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
 c) correct answer (I would use a number for this)
 
 2. Create a couple of questions using the constructor
 
 3. Store them all inside an array
 
 4. Select one random question and log it on the console, together with the possible answers (each question should have a number)
 	(Hint: write a method for the Question objects for this task).
 
 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
 
 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
 
 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and
 	doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
 	
 */

/*
 --- Expert level ---
 
 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
 
 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
 
 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
 
 11. Display the score in the console. Use yet another method for this.
 */

// use the iife pattern to make the variables private
(function(){

	let Question = function (question, possibles, answer) {
		this.question = question;
		this.possibles = possibles;
		this.answer = answer;
	};
	
	let questions = [
		new Question('How many legs does a spider have?', [2,4,6,8], 3),
		new Question('What city is the capital of Italy?', ['London', 'Paris', 'Rome', 'Berlin', 'Moscow'], 2),
		new Question('How many inches in a foot?', [8, 24, 14, 16, 18, 12], 5),
		new Question('What is the retirement age in the UK?', [60, 62, 67, 65, 70, 75], 2)
	];
	
	// display the question with possible answers to the console
	Question.prototype.displayQuestion = function () {
		console.log(this.question);
		for(let i = 0; i < this.possibles.length; i++) {
			console.log(`${i}: ${this.possibles[i]}`);
		}
	};
	
	// compare the user's answer with the correct answer
	Question.prototype.checkAnswer = function (ans, fn) {
		let score = 0;
		if(ans === this.answer){
			console.log(`Correct answer!`);
			score = fn(true); // updates the score ans returns it
		} else {
			console.log(`Wrong answer, try again`);
			score = fn(false); // returns the current score
		}
		this.displayScore(score)
	};
	
	// display the user's current score
	Question.prototype.displayScore = function (score) {
		console.log(`Your current score is: ${score}`);
		console.log(`---------------------------------`);
	};
	
	
	// use a closure to maintain a running score
	function score() {
		let sc = 0;
		return function (correct) {
			if(correct) sc++;
			
			return sc;
		}
	}
	
	let keepScore = score();
	
	// continue presenting the user with a question until they type exit
	function nextQuestion() {
		let num = Math.floor(Math.random() * 4);
		
		// display a random question to console log
		questions[num].displayQuestion();
		
		// get an answer from the user
		let answer = prompt(`Select the correct answer, 0, 1, 2,etc`);
		
		if(answer !== 'exit') {
			// and check the answer
			questions[num].checkAnswer(parseInt(answer), keepScore);
			nextQuestion();
		}
	}
	
	nextQuestion();
	
})();









 