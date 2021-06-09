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
  'your answer is not true'
);
// let count =0;

// let juice = prompt('Do you think I like juice').toLowerCase();
// if(juice ==='yes' ||juice ==='y'){
//   console.log('your answer is true');
//   alert('good job '+userName);
//   count++;

// }else if (juice ==='no'||juice === 'n'){
//   console.log('your answer is not true');
//   alert('oops '+userName);
// }else{alert(' your answer should be yes or no');

// }

// let tea = prompt('Do you think I like tea').toLowerCase();
// if(tea ==='yes' || tea==='y' ){
//   console.log('your answer is true');
//   alert('great '+userName);
//   count++;

// }
// else if (tea ==='no'|| tea ==='n'){
//   console.log('your answer is not true');
//   alert('oops '+userName);
// }else{alert(' your answer should be yes or no');
// }

// let coffee = prompt('Do you think I like coffee').toLowerCase();
// if(coffee ==='yes' || coffee ==='y'){
//   console.log('your answer is true');
//   alert('good answer '+userName);
//   count++;

// }else if (coffee ==='no' || coffee ==='n'){
//   console.log('your answer is not true');
//   alert('oops '+userName);
// }else{alert(' your answer should be yes or no');
// }

// let cats= prompt('Do you think I like cats').toLowerCase();
// if(cats ==='yes'||cats ==='y'){
//   console.log('your answer is true');
//   alert('wow nice '+userName);
//   count++;
// }else if (cats ==='no'||cats ==='n'){
//   console.log('your answer is not true');
//   alert('oops '+userName);
// }else{alert(' your answer should be yes or no');
// }

// let movies = prompt('Do you think I like movies').toLowerCase();
// if(movies ==='yes'||movies==='y'){
//   console.log('your answer is true');
//   alert('yes  '+userName);
//   count++;

// }else if (movies ==='no'||movies==='n'){
//   console.log('your answer is not true');
//   alert('oops '+userName);
// }else{alert(' your answer should be yes or no');
// }

function myStuff(guess, trials, correc, wron) {
  let age = parseInt(prompt(guess));
  while (age !== 23 && trials !== 0) {
    age = prompt(
      'try again!! you have ' +
        trials +
        ' Attempts. now choose the correct answer '
    );
    trials--;
  }
  if (age === 23) {
    console.log(correc);
    alert(correc);
    userScore++;
  } else {
    alert(wron);
  }

}
myStuff(
  'what is my age? choose the correct answer between [20-24]',
  4,
  'Right. Well done',
  'you have no more attempts'
);

let numChoose =0;
let answer =['coffe',' jem ',' see food ',' cars ',' my pc ',' video games'];
let userAnser;
do{
  userAnser = prompt('What do you think I like more of these options?'+answer).toLowerCase();
  numChoose++;

  if(numChoose >=6){
    alert('sory,but your answe not correct and Your attempts are over');
  }

}
while(userAnser !== answer[0] && numChoose !==6);
if(userAnser === answer[0]){
  userScore++;
}

alert('You have answered all the questions, welcome our web site');
alert(`yoooo ${userName}, your score is ${userScore}`);
console.log('your scor is '+userScore);

