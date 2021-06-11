'use strict';
let userName = prompt('what is your name?');
alert('welcome  ' + userName);
let userScore = 0;
function userAnswer(question, correct, wrong) {
  let userInput = prompt(question).toLowerCase();
  while (
    userInput !== 'yes' &&
    userInput !== 'y' &&
    userInput !== 'no' &&
    userInput !== 'n'
  ) {
    alert('wrong Answer');
    userInput = prompt(question).toLowerCase();
  }

  if (userInput === 'yes' || userInput === 'y') {
    userInput = alert(correct);
    userScore++;
  } else {
    userInput = alert(wrong);
  }
}
userAnswer(
  'do you think i like juice?',
  'your answer is true',
  'your answer is not true'
);
userAnswer(
  'Do you think i like tea?',
  'your answer is true',
  'your answer is not true'
);
userAnswer(
  'Do you think I like coffee?',
  'your answer is true',
  'your answer is not true'
);
userAnswer(
  'Do you think i like movies',
  'your answer is true',
  'your answer is not true'
);
userAnswer(
  'Do you think i like cats?',
  'your answer is true',
  'your answer is not true' );

  let oppertunits = 4;
let age = prompt('what is my age? choose the correct answer from {20 ,21 ,22 ,23 ,24 }');
age =parseInt(age);
while(age != 23 && oppertunits != 0){
    age = prompt('try again!! you have '+oppertunits+' oppertunits.now choose the correct answer from {20 ,21 ,22 ,23 ,24 }')
    oppertunits--;
}

if(age == 23){
    console.log('Right. Well done');
    alert('Right. Well done');
    userScore++;
  }else{alert('sory,but your answe not correct and Your attempts are over ');}
alert('The correct answer is 23 years');
  let numChoose =0;
  
let answer =['coffe','jem','see food','cars','my pc','video games'];
let userAnser;
for(let i=0;i<answer.length;i++){
do{
  userAnser = prompt('What do you think I like more of these options?'+answer).toLowerCase();
  numChoose++;
  

  if(numChoose >=6){
    alert('sory,but your answe not correct and Your attempts are over');
  }

}
while(userAnser !== answer[i] && numChoose !==6);
if(userAnser === answer[i]){
  userScore++;
}
}
alert('You have answered all the questions, welcome our web site');
alert(`yoooo ${userName}, your score is ${userScore}`);
console.log('your scor is '+userScore);


