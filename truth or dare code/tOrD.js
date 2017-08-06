$(document).ready(function(){

var randomQuotes = [
    "What is your biggest fear in a relationship?",
	"What was your funniest first date ever?",
	"What is your biggest turn off in a partner?",
	"What is your weirdest habit?",
	"How many kids would you like to have?",
	"What is the perfect first day?",
	"What is one embarrassing fact I should know about you?",
	"What was your childhood nickname?",
	"What is your favourite movie?",
	"Describe your worst date ever?",
	"If there was no such thing as money, what would you do with your life?",
	"What is your favourite food?",
	"What are your three favourite colours, and why?",
	"What is your dream job?",
	"If you were trapped on an island for 3 days, what would you take with you?",
	"Who is your favourite person and why?",
	"Do you prefer apple or android?",
	"How do you put your toilet paper on the roll?",
	"What is your best talent?",
	"Do you believe in love at first sight?",
	"Do you believe in love at all?",
	"What is your dream wedding?",
	"Would you ever consider being a nudist?",
	"How do you feel about end pieces of a loaf of bread?",
	"Can you touch your tongue to your nose?",
	"If you could take away one bad thing in the world, what would it be?",
	"What is your guilty pleasure?",
	"What is the most exotic food that you have ever eaten?",
	"What country would like to live in if you had the chance?",
	"If you could change one thing on your body, what would it be?",
	"What do you daydream about the most?",
	"Describe the weirdest dream you’ve ever had?",
	"Can you lick your elbow?",
	"Is the dress Black and Blue or Gold and White?",
	"How do you feel about social media?",
	"What is your favourite season of the year?",
	"Could you go a week without junk food?",
	"How was your first kiss?",
	"Describe your worst kiss ever?",
	"Do you like to exercise?",
];

var randomDares = [
	"Do an impression of your favorite celebrity",
	"Close your eyes and send a blind text to a random person",
	"Go grab a broom and do your best tango",
	"Give a 3 minute stand-up comedy routine",
	"Break dance",
	"Make up a story about the item to your right",
	"Sing the alphabet without moving your mouth",
	"Do your best president impression",
	"Yell out the first word that comes to your mind right now",
	"Call the pizza place and order 300 sardine pizzas",
	"Pound on your chest and act like a gorilla for the next minute",
	"Sing everything you say for the next 10 minutes",
	"Give a foot massage",
	"Say the alphabet backwards in 15 seconds",
	"Go to the neighbour’s house and ask for a banana",
	"Go up to someone random and ask for a hug",
	"Set your cell phone language to Chinese for the next 10 minutes",
	"Act like your favourite Disney character for the rest of the game",
	"Sing “Twinkle Twinkle, Little Star” while beat boxing",
	"Give a concert with your air guitar",
	"Make a poem using the words orange and moose",
	"Unbuckle your own belt using your elbows",
	"Brush someone else’s teeth",
	"Twerk for a minute",
	"Belly dance to a country song",
	"Make up a country song of the top of your head",
	"Get on all fours and act like a dog until your next turn",
	"Make up a short rap about another player",
	"Act like Romeo from “Romeo and Juliet” (pick who you want to be Juliet)",
	"Do an impression of someone until another player can guess who you are",
	"Say “ya heard meh” after everything you say for the next 5 minutes",
	"Act like you do not understand your own language until your next turn (come up with your own language)",
	"Use the letters of the name of another player to describe them (ex. SAM : S – Silly ; A – Attractive ; M – Merry)",
	"Only use sign language for the next round",
	"Do pushups until it’s your turn again",
	"Wear a finger moustache for the next 5 minutes",
	"Only use your elbows and knees to go make a sandwich",
	"Write a Facebook (or other social media) post only using your toes",
	"Take a selfie with the toilet and post it online",
	"Paint your toenails only using your teeth",
];

 
$(".b1").on('click', function() {
  var x = Math.floor(Math.random() * randomQuotes.length);
  $("#quotesBox").text(randomQuotes[x]);
});
 
 $(".b2").on('click', function() {
  var x = Math.floor(Math.random() * randomDares.length);
  $("#quotesBox").text(randomDares[x]);
});
// $("#clearButton").on('click', function() {
//   $("#quotesBox").text("");
// });




	// $( ".b1" ).click(function() {
 	  
 // 	  var x = Math.floor(Math.random() * randomQuotes.length);
 //  	  $("h1").text(randomQuotes[x]);
 //  	  window.open( "truth.html" );
	// }); 	// end of b1 click function

	
	// $( ".b2" ).click(function() {
	//   window.open( "dare.html" );
	// }); 	// end of b2 click function

});	// end of Document Ready