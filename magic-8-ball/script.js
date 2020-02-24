$(document).ready(function(){ //start of jquery wrapper

var magic8Ball = {};

magic8Ball.listOfAnswers = ["It's certain.", "Without a doubt.", "Most likely.", "Reply hazy - try again.", "Better not tell you now.", "Hmm...concentrate and ask again.", "Don't count on it.", "My sources say no.", "Outlook not so good."];

magic8Ball.answerQuestion = function(question) {
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    $("#answer").fadeIn(4000);
    var randomNum = Math.random(); //generate random number between 0 and 1
	var randomNumArray = randomNum * this.listOfAnswers.length; //multiplies random number by length of array
	var randomIndex = Math.floor(randomNumArray);//rounds randomNumArray down to produce integer that won't exceed indexes
	var randomAnswer = this.listOfAnswers[randomIndex]; //Produces answer using random index. Uses this keyword to access array.

	$("#answer").text(randomAnswer);

    console.log(question)
    console.log(randomAnswer)
};

$("#answer").hide();

var onClick = function() {
    $("#8ball").effect( "shake" );

    $("#answer").hide();

    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

    //wait half a second before showing prompt
    setTimeout(
       function() {
           //show prompt
           var question = prompt("I can tell the future! Please enter your yes or no question below:");
           magic8Ball.answerQuestion(question);
       }, 500);
};

$("#questionButton").click(onClick);

}); //end of jquery wrapper
