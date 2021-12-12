var input = require('readline-sync');
var name = require('readline-sync');

var User_name = name.question("Hey whats your Name :)   ")
console.log("Well Come to the Queiz",User_name,"  \n Lets check your knowledge :-")

let questions = ["	A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?" ,
 "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going in 10 seconds. The speed of the train is: ",
 "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:" , 
 "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:" ,
 "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?"]

var options = [["150 metres","120 metres","None of these"],
["90 km/hr","50 km/hr","None of these"],
["245 m","150 m","None of these"],
["3 : 2","4 : 5","None of these"],
["1500 m","240 m","None of these"]]

var answers = ["150 metres","50 km/hr","245 m","3 : 2","240 m"]

let score = 0
let index = 0
let final_score = 0
while (index < questions.length){
    console.log(index + 1, questions[index])

let option_index = 0
  while (option_index < options[index].length){
      console.log(option_index + 1,options[index][option_index])
      option_index++
}

let answer = input.question("Write the answer Here :-   ")
    if (answer === answers[index]){
        console.log(" Hay, Nice you are Right :)")
        score += 1
        final_score = score
        console.log("Your Score is",score , "\n")
    }
    else{
        console.log("Opps wrong answer \n Your Score is  ", score)
 
    
}
index++
}
if (final_score === score){
    console.log("You are Awsome ", User_name)
}
else{
    console.log("Better luck next time")
}
console.log("Highest Score",final_score,"\nWell Played I hope you enjoyed it :)")